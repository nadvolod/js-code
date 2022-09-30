# Visual E2E Testing

## 🧠You will learn

✅What is visual E2E testing?

✅How to implement visual e2e testing for a web app

---

## ❓Who has done visual testing?

---

## 🧪Current Test Coverage

[Look here](TEST-COVERAGE.md)

---

## ❓How do we check to make sure that the app looks as expected on web and mobile?

---

[Let's take a look](visual-testing.pdf)

### Advantages of visual tests

✅ Easier than e2e tests

✅ Validate an entire page in a single LOC

✅ Check how an app looks in different Browsers/Resolutions

✅ More stable than e2e tests

✅ Can help reduce the size of e2e suite

## Our tools

### [WebdriverIO](https://webdriver.io/)

Next-gen browser and mobile automation test framework for Node.js

### [Screener](https://screener.io/)

Automatically detect visual regressions across your UI

## 🏋️‍♀️Set up a visual test

follow along

1. Go to file `/test/specs/visual.exercise.spec.js`
2. Paste the following code

```javascript
describe('My app', () => {
  it('should look correct', async () => {
    await browser.url('');
    await browser.execute('/*@visual.init*/', 'My React App');
    await browser.execute('/*@visual.snapshot*/', 'Home Page');

    const result = await browser.execute('/*@visual.end*/');
    expect(result.message).toBeNull();
  });
});
```

3. In your terminal `npm run test:visual`
4. View the execution in Saucelabs.com

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
