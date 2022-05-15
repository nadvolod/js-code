// this was the only way that I could get the test to work
const { projects } = require('./projects')

test('Project details are correct', () => {
    expect(projects).toMatchInlineSnapshot(`
    Array [
      Object {
        "description": "Created a community of 100K+ developers and SDETS to help each other create better code.",
        "id": 0,
        "image": "/images/ultimateqa.webp",
        "source": "#",
        "tags": Array [
          "Wordpress",
          "Testing",
          "Development",
        ],
        "title": "Ultimate QA",
        "visit": "https://ultimateqa.com/",
      },
      Object {
        "description": "Created a web application that allows users to search for Github users and see their profile information. Tested and deployed.",
        "id": 1,
        "image": "/images/github-users-search.webp",
        "source": "https://github.com/nadvolod/js-code/tree/master/github-user-search",
        "tags": Array [
          "React",
          "REST API",
          "Netlify",
          "CypressIO",
        ],
        "title": "Github User Search",
        "visit": "https://gh-users-search.netlify.app/",
      },
      Object {
        "description": "Co-created an open source project that allows users to interact with Sauce Labs through a beautiful API.",
        "id": 2,
        "image": "/images/sauce-bindings.webp",
        "source": "https://github.com/saucelabs/sauce_bindings",
        "tags": Array [
          "Java",
          "C#",
          "Github Actions",
        ],
        "title": "Sauce Bindings",
        "visit": "https://opensource.saucelabs.com/sauce_bindings/docs/overview.html",
      },
      Object {
        "description": "A simple app that allows users to track their friends' birthdays.",
        "id": 3,
        "image": "/images/birthday-reminder.webp",
        "source": "https://github.com/nadvolod/js-code/tree/master/birthday-reminder",
        "tags": Array [
          "React",
          "Node",
          "Netlify",
          "WebdriverIO",
        ],
        "title": "Birthday Reminder App",
        "visit": "https://laughing-feynman-11feb4.netlify.app/",
      },
      Object {
        "description": "A mobile-first, responsive, sleek website to show off my skills.",
        "id": 4,
        "image": "/images/portfolio.webp",
        "source": "https://github.com/nadvolod/js-code/tree/master/dev-portfolio",
        "tags": Array [
          "NextJS",
          "Node",
          "Cypress",
          "Happo.io",
        ],
        "title": "Dev Portfolio Website",
        "visit": "https://nikolay.tech",
      },
    ]
  `)
})
