# Automated Atomic Tests

## 🧠You will learn:

✅What is an automated atomic test 

✅How to code automated atomic tests

## SUT

Let's quickly explore the software that we will test.

1. Download Edge browser (our demo app is not working correctly in chrome)
2. Open the demo app at `https://www.saucedemo.com/v1`
* **The app has some old issues and you will need to open in Incognito Chrome or on Edge. The same thing will apply when we test it with Cypress.**
4. Try a login (the login works by setting session storage)
5. Try to add a product

## Automated atomic tests

An automated atomic test (AAT) is one that tests only a single feature or component. AAT have very few UI interactions and typically touch a maximum of two screens. The "typical" UI end-to-end tests break the AAT pattern. 

Furthermore, AATs meet several requirements of [good tests as specified by Kent Beck](https://github.com/nadvolod/testing-best-practices/blob/main/README.md#what-is-a-good-test-1)

✅ Isolated

✅ Composable

✅ Fast



As an aside, this concept is already well understood in unit and integration tests, but UI tests continue to lag behind.

## ❓Is this test atomic❓

```js

/// <reference types="cypress" />
import ProductsPage from '../page-objects/ProductsPage';
import AppHeader from '../page-objects/AppHeaderPage';
import LoginPage from '../page-objects/LoginPage'
import {LOGIN_USERS} from "../support/e2eConstants";

describe('Shopping cart', () => {
  beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1');
      cy.window().then((win) => {
          win.sessionStorage.clear()
        });
    });

  it('should add item to cart', () => {
      LoginPage.signIn(LOGIN_USERS.STANDARD);
      ProductsPage.screen.should('be.visible');
      ProductsPage.addItemToCart(0);
      AppHeader.cart.should('have.text', '1');
  });
});

```

❓So how many tests is this really❓

> Keep in mind that this non-atomic test is really small and larger tests will be even
> more of a hinderance to your testing

### 🏋️‍♀️ Get started with Cypress

1. `cd automated-atomic-tests`
2. `npm install`
3. `npx cypress open`
4. Open `exercise.spec.js` in Cypress UI and make sure that Edge browser is selected. Please don't peek at the `solution.spec.js`🙏. The workshop is more fun when we struggle together 😁
   1. The test files are also in the directory `automated-atomic-tests/cypress/integration`

#### 👀Cypress and code overview

### 🏋️‍♀️ Automated atomic tests exercise

We're going to break down this test into atomic ones.

🏋️‍♀️ Code a suite of atomic tests

1. Go to the `cypress/integration/exercise.spec.js`
2. Create AATs for all of the features

💡 Use this command to bypass the UI login

```js
      //setTestContext() defined in support/commands.js
      cy.setTestContext({
        user: LOGIN_USERS.STANDARD,
        path: PAGES.INVENTORY
      });

```

## 📔Summary

✅ Automated atomic tests validate a single feature

✅ Testing a login through the UI is only necessary once

✅ We can bypass a login by directly modifying sessionStorage in the browser (although most apps don't actually function like this)

🏃‍♀️Let's learn more about [automating logins](../login-testing/LOGINS.md)
