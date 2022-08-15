# Component Testing

## 🧠You will learn

✅How to write a component test 

✅How to replace e2e tests with component tests

## ⚙️ Setup

Make sure that application is up and running

## 🧪Our Testing Strategy

[Look here](TEST-COVERAGE.md)

---

### ❓What are the disadvantages of functional UI tests?

---

1. Need a browser
2. Need a server
3. Need to deal with network issues
4. Test will be slower (100X to 1000X slower)
5. Need an extra dependency (Cypress)
6. Need to learn extra dependency API

---

### ❓Can we test the same thing more efficiently❓

---

## Component tests

There are a few ways to test React components. Broadly, they divide into two categories:

* Rendering component trees in a simplified test environment and asserting on their output.
* Running a complete app in a realistic browser environment (also known as “end-to-end” tests)

[ReactJS.org](https://reactjs.org/docs/testing.html)

### What is a component test?

![Component tests](../../../graphics/component-diagram.jpeg)

[Yoni Goldberg](https://github.com/nadvolod/component-tests-workshop/blob/main/graphics/component-diagram.jpg)

#### Advantages of component tests

❌ browser

❌ server

❌ network issues

✅Tests run in ms instead of sec

❌ extra dependency (Cypress)

❌ extra dependency API


### 🏋️‍♀️ Code the component test

Our app was created using [create-react-app](https://create-react-app.dev/). 
"Set up a modern web app by running one command"

With this method, we automatically get a few tools for testing:
* @testing-library/react
* jest
* And we get an automatic component test in `my-react-app/src/App.test.js`

```js
//Exercise.test.js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

[Jest](https://jestjs.io/) is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

### 🏋️‍♀️Run the component test

1. Stop all servers
2. `cd testing-for-charity/my-react-app/ && npm run test` 
3. The tests should pass, even though our app isn't running.

💡 'p' to filter tests down to a specific file

💡 'o' to run tests only in the changed files

### Testing links with component tests

💡Remember this Cypress e2e link test? We can test the same thing without a browser or a server

```js
    it('link goes to ultimateqa', ()=> {
        cy.visit('/')
        cy.get('.App-link').should('have.attr', 'href').and('include', 'ultimateqa.com')
    })
```

1. Run `npm test` in `testing-for-charity/my-react-app` if it's not running already
2. Go to `src/__tests__/Exercise.test.js` and follow the instructions for `test('link has correct url'`
3. Save and the test runs automatically

### How to add a test id to our app

- A `className` can change
- Link text can also change
- A `data-` attribute is uniquely created for testing purposes and has no impact on the functionality of the application
 

#### 🏋️‍♀️Add a `data-testid` attribute to our element
1. Open `my-react-app/src/App.js`
2. In the `<a>` of the App component add `data-testid="learn-link"` property

```html
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
```

3. Open `src/__tests__/Exercise.test.js`
4. Update the test to use `getByTestId()` instead `const linkElement = screen.getByTestId('learn-link');`
5. Save and the test will automatically rerun

### 🏋️‍♀️Add a test to validate that link opens in new tab

1. Open `src/__tests__/Exercise.test.js`
2. Follow instructions in `getByTestId()` instead `const linkElement = screen.getByTestId('learn-link');`

---

#### ❓What does the Cypress test validate that the component test does not❓

---

## 🧪Our Test Coverage

[Look here](./TEST-COVERAGE.md)

## 📝Summary

✅An e2e test (Cypress) tests the connection from the front-end to the back-end

✅A majority of the functionality of a modern JavaScript web app (React, Vue, Angular) can be tested with component tests in a virtual DOM. We did this with component tests

## CICD with component tests

### 🏋️‍♀️Add component testing to our CI pipeline

#### ❓Where in the `yml` would you add this snippet of code and why?

```yml
    - name: Run component tests 🔸
      run: |
        cd my-react-app
        npm run test
```

## ⏭️[Conclusions](./CONCLUSIONS.md)
