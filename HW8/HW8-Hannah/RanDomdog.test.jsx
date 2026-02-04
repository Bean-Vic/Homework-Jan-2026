import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RandomDog from "../components/RandomDog"; 

beforeAll(() => {
  jest.spyOn(global, "fetch");
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  global.fetch.mockRestore();
});

function mockFetchOnce({ ok = true, status = 200, jsonData }) {
  global.fetch.mockResolvedValueOnce({
    ok,
    status,
    json: async () => jsonData,
  });
}

function mockFetchRejectOnce(err = new Error("Network error")) {
  global.fetch.mockRejectedValueOnce(err);
}

describe("RandomDog", () => {
  test("calls API on mount and renders image on success", async () => {
    mockFetchOnce({
      ok: true,
      jsonData: {
        status: "success",
        message: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
      },
    });

    render(<RandomDog />);


    expect(global.fetch).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/image/random"
    );


    const img = await screen.findByRole("img", { name: /random dog/i });
    expect(img).toHaveAttribute(
      "src",
      "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"
    );

    // no error box
    expect(screen.queryByText(/unexpected|http error|failed/i)).not.toBeInTheDocument();
  });

  test("shows Loading... while request is pending and disables button + changes label", async () => {
    let resolveFetch;
    const pendingPromise = new Promise((res) => (resolveFetch = res));
    global.fetch.mockReturnValueOnce(pendingPromise);

    render(<RandomDog />);


    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: /fetching\.\.\.|get another dog/i });
    expect(btn).toBeDisabled();
    expect(btn).toHaveTextContent(/fetching\.\.\./i);


    resolveFetch({
      ok: true,
      status: 200,
      json: async () => ({
        status: "success",
        message: "https://images.dog.ceo/breeds/pug/a.jpg",
      }),
    });



    const img = await screen.findByRole("img", { name: /random dog/i });
    expect(img).toHaveAttribute("src", "https://images.dog.ceo/breeds/pug/a.jpg");

    expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get another dog/i })
    ).not.toBeDisabled();
  });

  test("renders HTTP error message when res.ok is false", async () => {
    mockFetchOnce({
      ok: false,
      status: 500,
      jsonData: {}, 
    });

    render(<RandomDog />);


    expect(await screen.findByText(/http error:\s*500/i)).toBeInTheDocument();


    expect(screen.queryByRole("img", { name: /random dog/i })).not.toBeInTheDocument();
  });

  test("renders 'Unexpected API response' when API shape is invalid", async () => {
   
    mockFetchOnce({
      ok: true,
      jsonData: { status: "error", message: null },
    });

    render(<RandomDog />);

    expect(await screen.findByText(/unexpected api response/i)).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: /random dog/i })).not.toBeInTheDocument();
  });

  test("renders fallback error message when fetch rejects without message", async () => {
  
    mockFetchRejectOnce({});

    render(<RandomDog />);

    expect(
      await screen.findByText(/failed to load dog image/i)
    ).toBeInTheDocument();
  });

  test("clicking 'Get Another Dog' triggers another fetch and updates image", async () => {
    mockFetchOnce({
      ok: true,
      jsonData: { status: "success", message: "https://images.dog.ceo/breeds/husky/1.jpg" },
    });
    mockFetchOnce({
      ok: true,
      jsonData: { status: "success", message: "https://images.dog.ceo/breeds/husky/2.jpg" },
    });

    const user = userEvent.setup();
    render(<RandomDog />);

    const img1 = await screen.findByRole("img", { name: /random dog/i });
    expect(img1).toHaveAttribute("src", "https://images.dog.ceo/breeds/husky/1.jpg");

    const btn = screen.getByRole("button", { name: /get another dog/i });
    await user.click(btn);

    const img2 = await screen.findByRole("img", { name: /random dog/i });
    expect(img2).toHaveAttribute("src", "https://images.dog.ceo/breeds/husky/2.jpg");

    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  test("click does nothing while loading because button is disabled", async () => {
    let resolveFetch;
    const pendingPromise = new Promise((res) => (resolveFetch = res));
    global.fetch.mockReturnValueOnce(pendingPromise);

    const user = userEvent.setup();
    render(<RandomDog />);

    const btn = screen.getByRole("button", { name: /fetching\.\.\./i });
    expect(btn).toBeDisabled();

    await user.click(btn);

    expect(global.fetch).toHaveBeenCalledTimes(1);

    resolveFetch({
      ok: true,
      status: 200,
      json: async () => ({
        status: "success",
        message: "https://images.dog.ceo/breeds/shiba/x.jpg",
      }),
    });

    await screen.findByRole("img", { name: /random dog/i });
  });
});
