## Personal Portfolio

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

## Get started

```
npm i && npm run dev
```

## About

- Using NextJs
- React
- Styled components (each component has a corresponding ComponentStyles.js file)

[Thanks to JavaScript Mastery for the inspiration](https://www.youtube.com/watch?v=OPaLnMw2i_0&list=PL1YmAbfxmHuOsV3zmAnncnql3MMsIeO2_&index=24)

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
