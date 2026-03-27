1. What is Jest?
    - Jest is a JavaScript testing framework—commonly used with Node and React—that lets you write and run unit and integration tests, includes an assertion API, and has built-in mocking, spies, and snapshot testing.

2. What is a test case in Jest?
    - A test case is a single, isolated check—written with `test()` or `it()`—that verifies one behavior or expectation, like ‘this function returns the right value’ or ‘this component shows the right text.’

3. What does expect do in Jest?
    - `expect` creates an **assertion**. You pass it the actual value, then chain a matcher like `toBe` or `toEqual` to state what should be true. If it’s not true, the test fails.

4. What is the difference between .toBe() and .toEqual() ?
    - `toBe()` is **strict equality**—basically `Object.is`, so it’s best for primitives or checking the same reference.
    - `toEqual()` does a **deep comparison**, so it’s used for objects and arrays when you want to compare structure and values.

5. How do you test if a react component renders correctly?
    - I usually use React **Testing Library**: render the component, then assert on what the user would see—like text, roles, labels—using queries such as `getByText` or `getByRole`

6. How do you simulate a button click in a test?
    - With React Testing Library, I find the button—like `getByRole`('button', { name: /add/i })—then trigger a click using `userEvent.click(button)` and assert the UI changes.

7. How do you mock a function with Jest?
    - I use `jest.fn()` to create a mock function, or `jest.spyOn(object, 'method')` to spy on an existing method. Then I can set return values with `mockReturnValue` or track calls with `toHaveBeenCalledWith`.

8. What is snapshot test and how do you utilize it?
    - A snapshot test captures the rendered output—like a component’s tree—then compares future runs against that saved snapshot. In Jest you render, then do `expect(result).toMatchSnapshot()`. It’s good for catching unexpected UI changes, but you still want behavior-based tests for real confidence.