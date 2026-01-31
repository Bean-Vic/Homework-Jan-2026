## 1. What is Jest?
Jest is a JavaScript testing framework mainly used for testing JavaScript and React applications.  
It allows us to write test cases, make assertions, mock functions, and check results easily.  
It is popular because it works out of the box and is developer-friendly.

---

## 2. What is a test case in Jest?
A test case in Jest is a small unit test that checks one specific behavior of the code.  
It is usually written using `test()` or `it()`.  
Each test case should focus on one thing to keep tests clear and easy to debug.

---

## 3. What does expect do in Jest?
`expect` is used to make assertions in Jest.  
It compares the actual value with the expected result and tells us whether the test passes or fails.

---

## 4. What is the difference between `.toBe()` and `.toEqual()`?
`.toBe()` checks strict equality and is best for primitive values like numbers or strings.  
`.toEqual()` checks deep equality and is used for objects and arrays with the same structure and values.

---

## 5. How do you test if a React component renders correctly?
I usually render the component using React Testing Library.  
Then I check if important text or elements appear on the screen to confirm it renders correctly.

---

## 6. How do you simulate a button click in a test?
First, I select the button from the rendered component.  
Then I simulate a click using `userEvent.click()` or `fireEvent.click()`.  
After that, I verify the expected UI or logic changes.

---

## 7. How do you mock a function with Jest?
We can mock a function using `jest.fn()` or mock an entire module using `jest.mock()`.  
Mocking lets us control behavior and track how functions are called.

---

## 8. What is snapshot test and how do you utilize it?
A snapshot test saves the rendered output of a component and compares it in future test runs.  
If the output changes, Jest shows the difference, which helps catch unexpected UI changes.
