# Visual E2E Testing

## 🧠You will learn

✅What is visual E2E testing?

✅How to implement visual e2e testing for a web app

---

## ❓Who has done visual testing?

---

[Let's take a look](visual-testing.pdf)

### Advantages of visual tests

✅ Easier than e2e tests

✅ Validate an entire page in a single LOC

✅ Check how an app looks in different Browsers/Resolutions

✅ More stable than e2e tests

✅ Can help reduce the size of e2e suite

## Our visual tools

### [Happo.io](https://happo.io/)

## 🏋️‍♀️Set up a visual test

follow setup instructions

1. Sign up for a [free 30 day trial](https://happo.io/signup)
2. [Setup with Cypress](https://docs.happo.io/docs/cypress)

[Let's fill out the Test coverage](./TEST-COVERAGE.md)

---

### 🏋️‍♀️❓ Let's change our image, what tests should that break❓

---

We're going to update the React image to something better. What tests should break?

1. Drag'n drop a new image to the `/src` folder
2. In `App.js`, Fix the path of the image to match your new image name `import logo from './mia.jpg';`
3. Save all files
4. Stop the React app `ctrl + C` in the server terminal
5. Restart the app with `npm start`
6. Rerun the visual tests with `npm run test:visual`
7. Notice the results in your terminal

## 🏋️‍♀️ How can you make the tests also run on Safari desktop and Safari mobile resolutions?

1. Do it
2. Rerun visual tests `npm run test:visual`

## 📝Summary

✅Visual e2e testing is a simple and efficient way to ensure visual consistency cross-platform and cross-OS

✅We used WebdriverIO + Screener.io to write our visual e2e tests

## ⏭️[Let's make our tests run in CI](./CICD.md)
