# Automated Atomic Tests

## What is an automated atomic test (AAT)?

<img width="500" height="300" alt="AAT" src="https://media.giphy.com/media/xj7dVmF9OS11K/giphy.gif">

An automated atomic test (AAT) is one that tests only a single feature or component. AAT have very few UI interactions and typically touch a maximum of two screens. The "typical" UI end-to-end tests break the AAT pattern.

Furthermore, AATs meet several requirements of good tests as specified by Kent Beck

✅ Isolated

✅ Composable

✅ Fast

As an aside, this concept is already well understood in unit and integration tests, but UI tests continue to lag behind.

### ❓Is this test atomic❓

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

---

### Atomic tests can come in many forms

<img width="500" height="300" alt="forms" src="https://media.giphy.com/media/3ohzdOVasfbk9eY8es/giphy.gif">

```js
//test that validates that the link is what we expect, without clicking it
it('should validate link is correct', () => {
   cy.get('.App-link').should('have.attr', 'href')
        .and('include','www.ultimateqa.com')
});
```

Or a bit more useful but complicated, a login without filling out forms

```js
    Cypress.Commands.add('loginByForm', (username, password) => {
      Cypress.log({
        name: 'loginByForm',
        message: `${username} | ${password}`,
      })

      return cy.request({
        method: 'POST',
        url: '/login',
        form: true,
        body: {
          username,
          password,
        },
      })
    })

    beforeEach(function () {
      // login before each test
      cy.loginByForm(username, password)
    })

    it('can visit /dashboard', function () {
      // after cy.request, the session cookie has been set
      // and we can visit a protected page
      cy.visit('/dashboard')
      cy.get('h1').should('contain', 'jane.lane')
    })
```


### Let's take a look at some examples

<img width="500" height="300" alt="look" src="https://media.giphy.com/media/Fu9EXNUgJBRBe/giphy.gif">

## Examples

[Cypress examples repo](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples) has a bunch of useful information. We are focused on a few examples.

[HTML web form](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/logging-in__html-web-forms)

[JWT](https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/logging-in__jwt)

## Bonus Resources

I created [this blog post](https://snip.ly/qt49hg) with a lot more great resources to help you learn this topic.