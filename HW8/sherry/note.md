# Unit Test

## 1. What is Jest ?

**Jest** is a **JavaScript testing framework** that provides a **test runner, assertions, mocking, and snapshot testing out of the box**, so you can start testing with **minimal setup**.

It is widely used in **React and Node.js projects** because it helps ensure **code correctness**, prevents **regressions**, and improves **deployment confidence**

## 2. What is a test case in Jest?

A **test case** is a **single executable unit** that verifies whether a specific behavior works as expected.

It is usually written with **`test()`** or **`it()`**, uses **assertions**, and should be **independent and repeatable** so failures clearly identify the problem.



## 3. What does `expect` do in Jest?

**`expect`** is Jest’s **assertion API** used to compare the **actual result** with the **expected outcome** through matchers like **`toBe`** or **`toEqual`**.

If the assertion fails, the test fails — giving developers **fast feedback** to catch bugs early.



## 4. What is the difference between  `.toBe()` and  `.toEqual()` ?

**`.toBe()`** checks **strict equality (`===`)**, meaning it compares **references**, so it’s ideal for **primitive values**.

**`.toEqual()`** performs a **deep comparison**, verifying the **structure and contents** of objects or arrays.



## 5. How do you test if a react component renders correctly?

I typically use **Jest with React Testing Library** to **render the component**, **query the DOM**, and assert what the **user actually sees**.

The key principle is testing **behavior over implementation**, which makes tests **more resilient to refactoring**.



## 6. How do you simulate a button click in a test?

After rendering the component, I select the button and trigger a click using **`userEvent`**, which simulates **real user behavior**.

It is preferred over **`fireEvent`** because it produces **more realistic interaction flows**, leading to **more reliable tests**.



## 7. How do you mock a function with Jest?

In Jest, we mock functions using **`jest .fn()`** or **`jest.mock()`** to replace real dependencies with **controlled behavior**.

Mocking helps **isolate the unit under test**, avoid **external side effects**, and keep tests **deterministic**.

After mocking, we can verify interactions using matchers like **`toHaveBeenCalled`**.



## 8. What is `snapshot test` and how do you utilize it?

A **snapshot test** captures a component’s **rendered output** and stores it as a baseline.

On future runs, Jest compares the new output against the snapshot to detect **unexpected UI changes**, helping prevent **visual regressions**.

However, snapshots should remain **small and intentional**, otherwise they become hard to review and lose value.
