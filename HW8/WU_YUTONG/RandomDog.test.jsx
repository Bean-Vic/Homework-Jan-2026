import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RandomDog } from "./RandomDog";

describe("RandomDog", () => {
  beforeEach(() => {
    // mock fetch
    global.fetch = jest.fn();

    // mock console.error
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders title + button + loading (basic render)", () => {
    // loading
    global.fetch.mockImplementation(() => new Promise(() => {}));

    render(<RandomDog />);
    expect(screen.getByText("Random Dog")).toBeTruthy();

    const btn = screen.getByRole("button", { name: /get another dog/i });
    expect(btn).toBeTruthy();

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  test("fetch called on mount, then button click triggers fetch again", async () => {
    // fetch
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "https://example.com/dog1.jpg" }),
    });

    render(<RandomDog />);

    // loading
    const img1 = await screen.findByRole("img", { name: /randomdog/i });
    expect(img1.getAttribute("src")).toBe("https://example.com/dog1.jpg");
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch.mock.calls.length).toBe(1);

    // URL
    expect(global.fetch.mock.calls[0][0]).toEqual(
      "https://dog.ceo/api/breeds/image/random",
    );

    // fetch
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "https://example.com/dog2.jpg" }),
    });

    fireEvent.click(screen.getByRole("button", { name: /get another dog/i }));

    const img2 = await screen.findByRole("img", { name: /randomdog/i });
    expect(img2.getAttribute("src")).toBe("https://example.com/dog2.jpg");
    expect(global.fetch.mock.calls.length).toBe(2);
    expect(global.fetch.mock.calls[1][0]).toContain("dog.ceo/api/breeds/image");
  });

  test("when response.ok is false, it calls console.error", async () => {
    global.fetch.mockResolvedValueOnce({ ok: false });

    render(<RandomDog />);

    // error
    const imgOrLoading = await screen.findByText(/random dog/i);
    expect(imgOrLoading).toBeTruthy();

    expect(console.error).toHaveBeenCalled();
  });

  test("snapshot after image loads", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "https://example.com/dog1.jpg" }),
    });

    const { asFragment } = render(<RandomDog />);

    await screen.findByRole("img", { name: /randomdog/i });
    expect(asFragment()).toMatchSnapshot();
  });
});
