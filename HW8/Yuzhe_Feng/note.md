# HW8 Q&A

### 1. What is Jest?

Jest is a JavaScript testing framework used to write and run automated tests. It provides everything needed for testing, including a test runner, assertions, and mocking utilities.

Jest is commonly used for unit testing and component testing, helping developers verify code behavior and prevent regressions.

### 2. What is a test case in Jest?

In Jest, a test case is a single test that checks one specific behavior or expectation in the code.

It defines the conditions, performs an action, and asserts the expected result.

Each test case is independent and can pass or fail on its own, making issues easier to identify and debug.

### 3. What does expect do in Jest?

In Jest, expect is used to make assertions about the result of a test.

It takes an actual value and compares it against an expected outcome using matchers.

If the expectation is not met, the test fails, helping ensure the code behaves as intended.

### 4. What is the difference between .toBe() and .toEqual()?

In Jest, .toBe() is used for strict equality comparison and checks whether two values reference the same object or value.

.toEqual(), on the other hand, performs a deep comparison and checks whether two objects or arrays have the same structure and values.

In practice, .toBe() is commonly used for primitive values, while .toEqual() is used for objects and arrays.

### 5. How do you test if a react component renders correctly?

To test whether a React component renders correctly, I usually use Jest with React Testing Library.

I render the component, then query for key UI elements the user should see—typically using accessible queries like getByRole or getByText—and assert that they appear with the expected content.

If the component renders differently based on props or state, I test those scenarios as well. For UI regression, I may add a snapshot test, but I prefer behavior-based assertions because they’re more stable.

### 6. How do you simulate a button click in a test?

To simulate a button click in a test, I render the component and select the button using React Testing Library, usually with an accessible query like `getByRole`.

Then I trigger the click using `userEvent.click` or `fireEvent.click`. After that, I assert the expected outcome of the click, such as a UI update or a function being called.

### 7. How do you mock a function with Jest?

In Jest, you can mock a function by replacing its implementation with a mock function using `jest.fn()` or `jest.spyOn()`.

Mock functions allow you to control return values and track how the function is called, such as the number of calls and the arguments passed in.

This is useful for isolating tests and avoiding real side effects while verifying how the code interacts with its dependencies.

### 8. What is snapshot test and how do you utilize it?

A snapshot test checks whether a component’s rendered output has changed unexpectedly. It works by saving a snapshot of the UI and comparing future renders against that snapshot. Snapshot tests are mainly used for UI regression, and they are best applied to stable components.

In practice, I use snapshot tests selectively and rely more on behavior-based tests for most cases.
