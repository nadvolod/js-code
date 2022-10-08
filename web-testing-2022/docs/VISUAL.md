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

1. Sign up for a [free 30 day trial](https://happo.io/signup?_aid=802)
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

Test by running `npm run test:visual`

## 📝 Visual gotchas

- Animations such as spinners and carousels
- Lazy loading
- Long pages


## 📝Summary

✅Visual e2e testing is a simple and efficient way to ensure visual consistency cross-platform and cross-OS

## ⏭️[Let's make our tests run in CI](./CICD.md)
