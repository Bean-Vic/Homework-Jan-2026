import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FetchDog } from "./example/fetchDog";

test("renders dog image after fetch on mount", async () => {
  render(<FetchDog />);

  // The component triggers fetch automatically on mount
  const img = await screen.findByRole("img", { name: /random dog/i });

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "mock-dog-url");
});

test("renders heading and eventually shows the normal button text", async () => {
  render(<FetchDog />);

  // The heading should be visible immediately after render
  expect(
    screen.getByRole("heading", { name: /randomly fetch a dog image/i })
  ).toBeInTheDocument();

  // On initial mount, the component enters loading state
  expect(
    screen.getByRole("button", { name: /loading\.\.\./i })
  ).toBeDisabled();

  // After fetch completes, the button text should change back
  await waitFor(() => {
    expect(
      screen.getByRole("button", { name: /get another dog/i })
    ).toBeEnabled();
  });
});

test("clicking 'Get Another Dog' fetches again and updates the image", async () => {
  // Explicitly queue fetch responses:
  // first fetch on mount -> url-1
  // second fetch on button click -> url-2
  global.fetch
    .mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ status: "success", message: "url-1" }),
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ status: "success", message: "url-2" }),
      })
    );

  render(<FetchDog />);

  // Wait for the first image to appear
  const img1 = await screen.findByRole("img", { name: /random dog/i });
  expect(img1).toHaveAttribute("src", "url-1");

  // Click the button to trigger the second fetch
  await userEvent.click(screen.getByRole("button", { name: /get another dog/i }));

  // The component should enter loading state again
  expect(screen.getByRole("button", { name: /loading\.\.\./i })).toBeDisabled();

  // Wait for the image to update with the second response
  await waitFor(() => {
    expect(screen.getByRole("img", { name: /random dog/i })).toHaveAttribute(
      "src",
      "url-2"
    );
  });

  // Button should be enabled again after fetch completes
  expect(screen.getByRole("button", { name: /get another dog/i })).toBeEnabled();

  // Optional assertion: ensure fetch was called twice
  expect(global.fetch).toHaveBeenCalledTimes(2);
});

test("shows loading UI while the request is pending, then shows image after it resolves", async () => {
  let resolveFetch;
  const pending = new Promise((res) => {
    resolveFetch = res;
  });

  // Make the initial fetch stay pending
  global.fetch.mockImplementationOnce(() => pending);

  render(<FetchDog />);

  // While pending, loading text should appear and button should be disabled
  expect(await screen.findByText(/loading a cute dog/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /loading\.\.\./i })).toBeDisabled();

  // Resolve the fetch manually
  resolveFetch({
    ok: true,
    json: async () => ({ status: "success", message: "after-loading-url" }),
  });

  // After fetch resolves, the image should be shown and button re-enabled
  const img = await screen.findByRole("img", { name: /random dog/i });
  expect(img).toHaveAttribute("src", "after-loading-url");

  expect(screen.getByRole("button", { name: /get another dog/i })).toBeEnabled();
});

test("shows error and retry button when HTTP response is not ok", async () => {
  // Mock the initial fetch to return an HTTP error
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: false,
      status: 500,
      statusText: "Server Error",
      json: async () => ({}),
    })
  );

  render(<FetchDog />);

  // Error UI should be displayed
  expect(await screen.findByText(/error:/i)).toBeInTheDocument();

  // Retry button should be visible
  expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument();

  // No image should be rendered when an error occurs
  expect(screen.queryByRole("img", { name: /random dog/i })).not.toBeInTheDocument();

  // After error handling finishes, the main button should be enabled again
  expect(screen.getByRole("button", { name: /get another dog/i })).toBeEnabled();
});

test("shows error when API returns an unexpected payload", async () => {
  // Mock a successful HTTP response with invalid API payload
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: async () => ({ status: "fail", message: "" }),
    })
  );

  render(<FetchDog />);

  // The component should show a specific API error message
  expect(
    await screen.findByText(/api returned an unexpected response/i)
  ).toBeInTheDocument();

  // Image should not be rendered in error state
  expect(screen.queryByRole("img", { name: /random dog/i })).not.toBeInTheDocument();

  // Retry button should still be available
  expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument();
});

test("shows error when fetch rejects (network failure)", async () => {
  // Mock the initial fetch to reject with a network error
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error("Network down"))
  );

  render(<FetchDog />);

  // Error UI should display the network error message
  expect(await screen.findByText(/network down/i)).toBeInTheDocument();

  // Retry button should be visible
  expect(screen.getByRole("button", { name: /retry/i })).toBeInTheDocument();

  // Image should not be rendered when fetch fails
  expect(screen.queryByRole("img", { name: /random dog/i })).not.toBeInTheDocument();
});

test("retry refetches and recovers from an error", async () => {
  // First fetch on mount fails
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error("Network down"))
  );

  // Retry fetch succeeds
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: async () => ({ status: "success", message: "recovered-url" }),
    })
  );

  render(<FetchDog />);

  // Error should be shown initially
  expect(await screen.findByText(/network down/i)).toBeInTheDocument();

  // Click the Retry button
  await userEvent.click(screen.getByRole("button", { name: /retry/i }));

  // After retry, the image should be displayed again
  const img = await screen.findByRole("img", { name: /random dog/i });
  expect(img).toHaveAttribute("src", "recovered-url");

  // Button should return to normal state
  expect(screen.getByRole("button", { name: /get another dog/i })).toBeEnabled();

  // Verify fetch was called twice: initial failure + retry
  expect(global.fetch).toHaveBeenCalledTimes(2);
});