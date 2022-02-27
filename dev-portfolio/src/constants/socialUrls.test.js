// this was the only way that I could get the test to work
const { socialUrls } = require("./socialUrls");

test("Social URLs are correct", () => {
  expect(socialUrls).toMatchInlineSnapshot(`
    Array [
      Object {
        "github": "https://github.com/nadvolod",
      },
      Object {
        "linkedIn": "https://www.linkedin.com/in/nikolayadvolodkin/",
      },
      Object {
        "twitter": "https://twitter.com/Nikolay_A00",
      },
      Object {
        "youtube": "https://www.youtube.com/ultimateqa",
      },
    ]
  `);
});
