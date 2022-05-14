const projects = [
    {
        title: 'Ultimate QA',
        description:
            'Created a community of 100K+ developers and SDETS to help each other create better code.',
        image: '/images/ultimateqa.webp',
        tags: ['Wordpress', 'Testing', 'Development'],
        source: '#',
        visit: 'https://ultimateqa.com/',
        id: 0,
    },
    {
        title: 'Github User Search',
        description:
            'Created a web application that allows users to search for Github users and see their profile information. Tested and deployed.',
        image: '/images/github-users-search.webp',
        tags: ['React', 'REST API', 'Netlify', 'CypressIO'],
        source: 'https://github.com/nadvolod/js-code/tree/master/github-user-search',
        visit: 'https://gh-users-search.netlify.app/',
        id: 1,
    },
    {
        title: 'Sauce Bindings',
        description:
            'Co-created an open source project that allows users to interact with Sauce Labs through a beautiful API.',
        image: '/images/sauce-bindings.webp',
        tags: ['Java', 'C#', 'Github Actions'],
        source: 'https://github.com/saucelabs/sauce_bindings',
        visit: 'https://opensource.saucelabs.com/sauce_bindings/docs/overview.html',
        id: 2,
    },
    {
        title: 'Birthday Reminder App',
        description:
            "A simple app that allows users to track their friends' birthdays.",
        image: '/images/birthday-reminder.webp',
        tags: ['React', 'Node', 'Netlify', 'WebdriverIO'],
        source: 'https://github.com/nadvolod/js-code/tree/master/birthday-reminder',
        visit: 'https://laughing-feynman-11feb4.netlify.app/',
        id: 3,
    },
    {
        title: 'Dev Portfolio Website',
        description:
            'A mobile-first, responsive, sleek website to show off my skills.',
        image: '/images/portfolio.webp',
        tags: ['NextJS', 'Node', 'Cypress', 'Happo.io'],
        source: 'https://github.com/nadvolod/js-code/tree/master/dev-portfolio',
        visit: 'https://nikolay.tech',
        id: 4,
    },
]
// this is the way to work with Jest
module.exports = { projects }
