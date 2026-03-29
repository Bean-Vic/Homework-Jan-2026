import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dog from "./Dog";

/**
 * 1️⃣ mock global fetch
 */
global.fetch = jest.fn();

describe("Dog Image Viewer", () => {
	beforeEach(() => {
		fetch.mockClear();
	});

	/**
	 * ✅ Test 1: 初始渲染
	 */
	test("renders title and button", () => {
		render(<Dog />);

		expect(screen.getByText("Random Dog 🐶")).toBeInTheDocument();
		expect(screen.getByRole("button")).toHaveTextContent("Get another dog");
	});

	/**
	 * ✅ Test 2: loading 状态
	 */
	test("shows loading while fetching", async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => ({
				message: "https://dog.test/dog.jpg",
			}),
		});

		render(<Dog />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();

		await waitFor(() =>
			expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
		);
	});

	/**
	 * ✅ Test 3: 成功显示图片
	 */
	test("renders dog image after successful fetch", async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => ({
				message: "https://dog.test/dog.jpg",
			}),
		});

		render(<Dog />);

		const img = await screen.findByRole("img");

		expect(img).toHaveAttribute("src", "https://dog.test/dog.jpg");
		expect(img).toHaveAttribute("alt", "Random dog");
	});

	/**
	 * ✅ Test 4: 点击按钮再次请求
	 */
	test("fetches another dog when button clicked", async () => {
		fetch
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({
					message: "https://dog.test/dog1.jpg",
				}),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({
					message: "https://dog.test/dog2.jpg",
				}),
			});

		render(<Dog />);

		const img1 = await screen.findByRole("img");
		expect(img1).toHaveAttribute("src", "https://dog.test/dog1.jpg");

		fireEvent.click(screen.getByRole("button"));

		const img2 = await screen.findByRole("img");
		expect(img2).toHaveAttribute("src", "https://dog.test/dog2.jpg");
	});

	/**
	 * ✅ Test 5: 请求失败（error 分支）
	 */
	test("handles fetch error", async () => {
		fetch.mockResolvedValueOnce({
			ok: false,
		});

		render(<Dog />);

		await waitFor(() =>
			expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
		);
	});
});