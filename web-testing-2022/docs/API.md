# API testing

## 🧠 You will learn

✅ How to do API testing

✅ Common API methods

✅ API automation

[SUT](https://jsonplaceholder.typicode.com/)

[Guide to API](https://jsonplaceholder.typicode.com/guide/)

## What is API Testing?

<img src="https://tse1.mm.bing.net/th?id=OIP.ASpOoqkLWHODifb7T4f2twHaD4&pid=Api" alt="api-testing" width="500"/>

<img src="https://ryancraven.tech/wp-content/uploads/2020/05/commonAPIs-1.png" alt="common-requests" width="500"/>

### Advantages of API tests

✅ Fast

✅ Reliable

✅ Check business logic of app

### 👀 Quick software under test overview

[SUT](https://jsonplaceholder.typicode.com/)

### 🏋️‍♀️ Let's try a `GET`

1. Open your browser
2. Open your Network tab of dev tools
3. Go to `https://jsonplaceholder.typicode.com/comments` in browser

### 🏋️‍♀️ Let's automate a `GET`

- Go to `cypress/integration/network/exercise.spec.js`
- Add the following code inside of `context(){}`

```js
it('comments returns 200 and 500 body length', () => {
  // https://on.cypress.io/request
  cy.request(`${baseUrl}/comments`).should((response) => {
    expect(response.status).to.eq(200);
    // the server sometimes gets an extra comment posted from another machine
    // which gets returned as 1 extra object
    expect(response.body).to.have.property('length').and.be.oneOf([500, 501]);
  });
});
```

Run the tests

`npx cypress run --spec **/network/exercise.spec.js`

### 🏋️‍♀️ Let's try a `POST`

> Use POST when you want to add a child resource under resources collection

1. In your browser go to (API Fortress)[https://app.saucelabs.com/api-testing]
2. Use this URL for your POST `https://jsonplaceholder.typicode.com/posts`
3. Use this body

```json
{
  "userId": 11,
  "title": "any title you want",
  "body": "any body"
}
```

4. Send the request

### 🏋️‍♀️ Let's automate a `POST`

- Go to `cypress/integration/network/exercise.spec.js`
- Follow instructions for test `it("Can create new user on /posts", () => {`
- Run the tests

`npx cypress run --spec **/network/exercise.spec.js`

### 🏋️‍♀️ Let's try a `PUT`

> Use PUT when we want to modify a singular resource that is already a part of resources collection

1. In your browser go to (API Fortress)[https://app.saucelabs.com/api-testing]
2. Use this URL for your PUT `https://jsonplaceholder.typicode.com/posts/1`
3. Use this body

```json
{
  "id": 11,
  "title": "using a PUT",
  "body": "any body",
  "userId": 1
}
```

4. Send the request

ℹ️ resource will not be really updated on the server but it will be faked as if

### 🏋️‍♀️ Let's automate a `PUT`

- Go to `cypress/integration/network/exercise.spec.js`
- Implement test `it("Can update posts")` by following instructions
- Run the tests

`npx cypress run --spec **/network/exercise.spec.js`

## 📝Summary

✅ Use GET requests to retrieve resource representation/information only

✅ Use POST when you want to add a child resource under resources collection

✅ Use PUT when we want to modify a singular resource that is already a part of resources collection

✅ Use an HTTP client like API Fortress or Postman to perform non-GET operations

## ⏭️[Let's test through the UI](./E2E-TESTS.md)

🎁 Bonus exercises in `bonus.spec.js`

## Expand your knowledge

[What is REST blog post](https://restfulapi.net/)

[API testing in JavaScript tutorial](https://testautomationu.applitools.com/javascript-api-testing/)
