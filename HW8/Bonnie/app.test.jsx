import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

beforeEach(() => {
  jest.restoreAllMocks();
});

test("renders dog image viewer", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      message: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      status: "success",
    }),
  });

  render(<App />);

  const img = await screen.findByRole("img");
  expect(img).toBeInTheDocument();
});

test("clicking button fetches a new dog image", async () => {
  const firstImg =
    "https://images.dog.ceo/breeds/spaniel-irish/n02102973_3172.jpg";
  const secondImg =
    "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg";

  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: firstImg, status: "success" }),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: secondImg, status: "success" }),
    });

  render(<App />);

  const img = await screen.findByRole("img");
  expect(img).toHaveAttribute("src", firstImg);

  const button = screen.getByRole("button");
  await userEvent.click(button);

  await waitFor(() =>
    expect(img).toHaveAttribute("src", secondImg)
  );
});
