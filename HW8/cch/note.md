
1. What is Jest?

Jest checks whether your code behaves correctly.

2. What is a test case in Jest?

A test case in Jest is a single test that checks whether one specific behavior of your code works as expected.

3. What does expect do in Jest?

expect compares the actual result with the expected result.

4. What is the difference between .toBe() and .toEqual() ? 

.toBe() checks if two values are the same reference.
.toEqual() checks if two values have the same structure and data.

5. How do you test if a react component renders correctly? 

Jest is the test runner and assertion library, while React Testing Library is used to render and query React components. 
They work together but solve different problems.


6. How do you simulate a button click in a test?

Use fireEvent or userEvent to trigger a click event.

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("button click", async () => {
  render(<MyComponent />);

  const button = screen.getByRole("button", { name: /submit/i });

  await userEvent.click(button);
});

7. How do you mock a function with Jest?

You mock functions in Jest using jest.fn() for simple mocks, jest.mock() for modules, and jest.spyOn() when you want to mock or track an existing function.”

8. What is snapshot test and how do you utilize it?

A snapshot test captures a rendered component’s output and compares it against a stored snapshot to detect unexpected UI changes. It’s mainly used for stable, presentational components, and snapshots should be updated only when changes are intentional.

import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("matches snapshot", () => {
  const { container } = render(<MyComponent />);
  expect(container).toMatchSnapshot();
});