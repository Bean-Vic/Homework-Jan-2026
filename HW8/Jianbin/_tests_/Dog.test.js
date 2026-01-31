import { render, screen, fireEvent } from "@testing-library/react";
import Dog from "../Dog";

// mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        message: "https://dog.ceo/api/img/dog.jpg",
        status: "success",
      }),
  })
);

describe("Dog Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders Dog component", () => {
    render(<Dog />);
    expect(screen.getByText(/dog/i)).toBeInTheDocument();
  });

  test("fetches and displays dog image after button click", async () => {
    render(<Dog />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const image = await screen.findByRole("img");
    expect(image).toHaveAttribute("src", expect.stringContaining("dog"));
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
