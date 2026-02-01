import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

/** Helper function to mock a fetch Response object. */
function mockFetchResponse({
  ok = true,
  status = 200,
  statusText = "OK",
  json,
}) {
  return Promise.resolve({
    ok,
    status,
    statusText,
    json: () => Promise.resolve(json),
  });
}

describe("Dog Image Viewer (App)", () => {
  beforeEach(() => {
    // Mock global fetch before each test
    global.fetch = jest.fn();
  });

  afterEach(() => {
    // Clear mocks to avoid test pollution
    jest.clearAllMocks();
  });

  test("initial render triggers fetch once (useEffect) and shows image on success", async () => {
    const url =
      "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_3240.jpg";

    // Mock a successful API response
    global.fetch.mockImplementation(() =>
      mockFetchResponse({
        ok: true,
        json: { status: "success", message: url },
      }),
    );

    render(<App />);

    // useEffect should trigger fetch exactly once on mount
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/image/random",
    );

    // Wait for the image to be rendered
    const img = await screen.findByAltText(/random dog/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);

    // No error message should be displayed
    expect(screen.queryByText(/unexpected/i)).not.toBeInTheDocument();
  });

  test("shows loading state while fetching (button disabled and text changes)", async () => {
    // Create a pending promise to keep fetch in loading state
    let resolveFetch;
    const pendingPromise = new Promise((resolve) => {
      resolveFetch = resolve;
    });

    global.fetch.mockReturnValue(pendingPromise);

    render(<App />);

    // Loading indicator should appear
    expect(await screen.findByText(/loading\.\.\./i)).toBeInTheDocument();

    // Button should be disabled and show loading text
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/fetching/i);

    // Resolve the pending fetch request
    resolveFetch(
      await mockFetchResponse({
        ok: true,
        json: {
          status: "success",
          message:
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        },
      }),
    );

    // Button should be re-enabled after loading finishes
    await waitFor(() => expect(button).not.toBeDisabled());
    expect(button).toHaveTextContent(/get another dog/i);
  });

  test("clicking button fetches a new image and updates the image source", async () => {
    const user = userEvent.setup();

    const firstUrl = "https://images.dog.ceo/breeds/puggle/IMG_074142.jpg";
    const secondUrl = "https://images.dog.ceo/breeds/borzoi/n02090622_1002.jpg";

    // First fetch: initial load
    // Second fetch: button click
    global.fetch
      .mockImplementationOnce(() =>
        mockFetchResponse({
          ok: true,
          json: { status: "success", message: firstUrl },
        }),
      )
      .mockImplementationOnce(() =>
        mockFetchResponse({
          ok: true,
          json: { status: "success", message: secondUrl },
        }),
      );

    render(<App />);

    // Verify first image is rendered
    const img = await screen.findByAltText(/random dog/i);
    expect(img).toHaveAttribute("src", firstUrl);
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Click the button to fetch a new image
    const button = screen.getByRole("button", { name: /get another dog/i });
    await user.click(button);

    // Fetch should be called again
    expect(global.fetch).toHaveBeenCalledTimes(2);

    // Image source should update
    await waitFor(() => {
      expect(screen.getByAltText(/random dog/i)).toHaveAttribute(
        "src",
        secondUrl,
      );
    });
  });

  test("handles HTTP error response (res.ok is false)", async () => {
    // Mock a failed HTTP response
    global.fetch.mockImplementation(() =>
      mockFetchResponse({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
        json: { error: "server error" },
      }),
    );

    render(<App />);

    // Error message should be displayed
    const error = await screen.findByText(/http error:\s*500/i);
    expect(error).toBeInTheDocument();

    // Image should not be rendered on failure
    expect(screen.queryByAltText(/random dog/i)).not.toBeInTheDocument();
  });

  test("handles unexpected API payload (status is not success)", async () => {
    global.fetch.mockImplementation(() =>
      mockFetchResponse({
        ok: true,
        json: { status: "fail", message: "invalid response" },
      }),
    );

    render(<App />);

    // Payload validation error should be shown
    const error = await screen.findByText(/unexpected api response format/i);
    expect(error).toBeInTheDocument();
    expect(screen.queryByAltText(/random dog/i)).not.toBeInTheDocument();
  });

  test("handles unexpected API payload (message is not a string)", async () => {
    global.fetch.mockImplementation(() =>
      mockFetchResponse({
        ok: true,
        json: { status: "success", message: { url: "not-a-string" } },
      }),
    );

    render(<App />);

    // Payload validation error should be shown
    const error = await screen.findByText(/unexpected api response format/i);
    expect(error).toBeInTheDocument();
    expect(screen.queryByAltText(/random dog/i)).not.toBeInTheDocument();
  });

  test("handles network failure when fetch rejects", async () => {
    // Simulate a network-level failure
    global.fetch.mockRejectedValueOnce(new Error("Network down"));

    render(<App />);

    // Error message should be displayed
    const error = await screen.findByText(/network down/i);
    expect(error).toBeInTheDocument();
    expect(screen.queryByAltText(/random dog/i)).not.toBeInTheDocument();
  });

  test("clears previous error after a successful retry", async () => {
    const user = userEvent.setup();

    // First request fails
    // Second request succeeds
    global.fetch
      .mockRejectedValueOnce(new Error("Network down"))
      .mockImplementationOnce(() =>
        mockFetchResponse({
          ok: true,
          json: {
            status: "success",
            message: "https://images.dog.ceo/breeds/dingo/n02115641_1003.jpg",
          },
        }),
      );

    render(<App />);

    // Error should appear after first failure
    expect(await screen.findByText(/network down/i)).toBeInTheDocument();

    // Retry by clicking the button
    const button = screen.getByRole("button", { name: /get another dog/i });
    await user.click(button);

    // Image should appear after successful retry
    expect(await screen.findByAltText(/random dog/i)).toBeInTheDocument();

    // Previous error message should be cleared
    expect(screen.queryByText(/network down/i)).not.toBeInTheDocument();
  });
});
