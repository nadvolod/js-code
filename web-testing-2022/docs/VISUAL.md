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
3. Run visual tests
4. Run a single visual test using `npm run test:visual`

---

### ❓What does this test validate? Is there more that we should check?

---

## 🏋️‍♀️Set up cross-platform and cross-browser visual tests

- [setting up different targets with happo](https://docs.happo.io/docs/configuration#targets)
- [viewport sizes](https://viewportsizer.com/devices/)

1. Run on safari on iPhone 12 Pro viewport size
2. Run on Samsung Galaxy S10+
3. Run on Chrome on iphone 12 pro viewport

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
