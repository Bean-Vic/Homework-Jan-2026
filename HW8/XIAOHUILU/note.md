1. What is Jest?

Jest is a JavaScript testing framework.
We use it to write and run tests to make sure our code works as expected.
It's very commonly used with React and comes with assertions, mocking, and a test runner built in.

2. What is a test case in Jest?

A test case is a single test that checks our code logic and the behavior.
We would define a certain input or action and the output should be match our expectation.
For example, testing whether clicking a button updates the UI correctly.

3. What does expect do in Jest?

expect is used to make assertions in Jest.
It takes a value and allows us to check whether it meets certain conditions, like equal to true or false, or matching a specific value.
Basically, it defines what "correct behavior" means in a test.

4. What is the difference between toBe() and toEqual()?

toBe() checks strict equality using ===, so it's mainly used for comparing the primitive values or reference.
toEqual() checks deep equality, which means it compares the actual contents of objects or arrays.
That's why we usually use toEqual() when comparing objects.

5. How do you test if a React component renders correctly?

I usually use React Testing Library.
I render the component and then check whether certain text, elements, or roles are present in the document.
In general, I try to test things from the user's perspective, based on what they can actually see on the screen.

6. How do you simulate a button click in a test?

I use fireEvent or userEvent from React Testing Library to simulate a button click.
userEvent is more usable because it simulates actual user interactions instead of just triggering events.

7. How do you mock a function with Jest?

Jest provides tools like jest.fn() and jest.spyOn() to mock functions.
Mocking allows us to control how a function behaves and to verify whether it was called, how many times it was called, and with which arguments.
This helps isolate the unit we are testing.

8. What is a snapshot test and how do you use it?

A snapshot test captures the rendered output of a component and saves it as a snapshot.
In future test runs, Jest compares the new output with the saved snapshot and reports any differences.
It's useful for catching unexpected UI changes, but I usually don't rely on snapshot tests alone.
