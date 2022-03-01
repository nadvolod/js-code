## Personal Portfolio

[Live Portfolio Website](https://www.nikolay.tech/)

## Get started

```
npm i && npm run dev
```

## About repo

- Using NextJs
- React
- Styled components (each component has a corresponding ComponentStyles.js file)

[Thanks to JavaScript Mastery for the inspiration](https://www.youtube.com/watch?v=OPaLnMw2i_0&list=PL1YmAbfxmHuOsV3zmAnncnql3MMsIeO2_&index=24)

## I'm Nikolay Advolodkin

- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🥗 Like my content? [Buy me a salad](https://www.buymeacoffee.com/nikolaya)
- 📫 How to reach me:
  - [Youtube where you can learn at your pace](https://www.youtube.com/ultimateqa?sub_confirmation=1)
  - [JS Testing Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Read about testing](https://ultimateqa.com/)
  - [LinkedIn](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for great Dev quotes](https://twitter.com/intent/follow?screen_name=nikolay_a00&region=follow_link)
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's pasionate about the 🌎, saving 🐮, and bridging the technical divide!

## Testing

### visual testing

For visual testing I had to enable an [ignore threhold](https://docs.happo.io/docs/compare-threshold)

How do we test all of the urls in our app?

What about timelineData.js, do we need to write a snapshot test for it?

- No, since the data appears in our visual tests, it's not necessary

### front-end perf

`cy.lighthouse(), Electron is not supported. Skipping...` error was a result of running Cypress on Electron. Changing to Chrome browser fixed the issue.

### updating npm packages

Use [npm-check](https://koalatea.io/how-to-update-all-your-npm-packages-at-once/)
