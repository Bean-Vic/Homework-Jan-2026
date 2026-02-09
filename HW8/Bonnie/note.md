1. What is Jest?
    Jest is a JavaScript testing framework developed by Facebook.
It is commonly used to test JavaScript and React applications.
It has features like: Zero-config setup,Built-in assertion library. 
And often used together with React Testing Library for React projects.

2. What is a test case in Jest?
    A test case is a single unit of testing that verifies one specific behavior of the code.
    Each test case should:
            Test one behavior
            Be independent
            Have a clear expected result

3. What does `expect` do in Jest?
    expect is used to create assertions in Jest.
    It checks whether the actual value matches the expected value.
    If the expectation fails, the test will fail.

4. What is the difference between `.toBe()` and `.toEqual()`?
    .toBe()
        It checks reference equality
        Best for primitive values
    .toEqual()
        Performs deep equality
        Compares object structure and values
        Objects and arrays should usually be tested with .toEqual().

5. How do you test if a react component renders correctly?
    Using React Testing Library, we render the component and check if expected elements exist.

6. How do you simulate a button click in a test?
    Use fireEvent or userEvent.
    eg.
        import { fireEvent } from '@testing-library/react';
        import userEvent from '@testing-library/user-event';

7. How do you mock a function with Jest?
    Use jest.fn() or jest.mock().

    Mocking is used to:
        Isolate tests
        Avoid real API calls
        Control return values

8. What is `snapshot test` and how do you utilize it?

    A snapshot test captures the rendered output of a component and saves it as a snapshot file.If the UI changes, Jest will warn that the snapshot no longer matches.
    Use snapshot tests to:
        Detect unintended UI changes
        Quickly verify component structure