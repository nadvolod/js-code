# web testing with javascript workshop

[#testing4good](https://twitter.com/hashtag/Testing4Good)

In this workshop you will learn some of the latest tools and techniques to improve your ability to test modern web applications.

You will analyze risks and how to prevent those risks with e2e testing, component testing, and Github Actions.

## 🧠 You will learn

✅ how to test a React web app using different types of tests

✅ E2E ui tests w/ Cypress 10

✅ Visual testing w/ Cypress 10 and Happo.io

✅ Performance and accessibility testing

😉 And maybe more...

## 🔧 Prerequisites

1. Experience JavaScript + Node.js


## 🔧Technologies you will use

1. ReactJS
2. Cypress 10
3. Happo.io visual testing

## Table Of Contents

- Setup
- [E2E UI testing w/ Cypress](./docs/E2E-TESTS.md)
- [Visual e2e testing](./docs/VISUAL.md)
- Break ☕
- [Performance and accessibility testing](./docs/PERF.md)
- [Conclusions](./docs/CONCLUSIONS.md)

## Testing for Good

[#testing4good](https://twitter.com/hashtag/Testing4Good)

### 🌎Testing for Good enables great test automation engineering while shaping a more equitable society.👩‍💻

Today, we're asking for donations for [Environmental Working Group](https://buy.stripe.com/9AQdU42lj9i7bHGcMN)

### [About Environmental Working Group](https://www.ewg.org/)

We're advocates who won't quit. We're scientists that find solutions. We're people trying to make the safest choices for our health. At the Environmental Working Group, we believe that you should have easy access to the information you need to make smart, healthy choices. It’s this belief that inspired our president and co-founder, Ken Cook, to create EWG.  

Since 1993, we've worked tirelessly to protect public health. Whether it's spotlighting harmful industry standards, speaking out against outdated government legislation or empowering consumers with breakthrough education and research, we're in this fight. 

And we're not going anywhere.

👉 While the event is free, Sauce Labs encourages all attendees to 

👉 **[donate](https://buy.stripe.com/9AQdU42lj9i7bHGcMN)** 

Anything helps! 

100% of donations go to support the cause.

## Key

💡 this is a tip

🏋️‍♀️ this is an exercise for you to do

❓ this is a question for us to think and talk about. Try not to scroll beyond this question before we discuss

## Your Instructor: Nikolay Advolodkin

<img src="public/images/family.jpg" alt="api-testing" width="500"/>

- 🏢 I’m a Sr Solutions Architect at Sauce Labs
- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🌱 I’m currently working on [Sauce Bindings](https://github.com/saucelabs/sauce_bindings)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [JS Testing Tips Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Testing training on Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for 🔥 Dev quotes](https://twitter.com/intent/follow?screen_name=nikolay_a00&region=follow_link)

## TA 1

## ⚙️ Setup

The safest way to ensure that we all have the same environment is for us to [use Gitpod](#gitpod-setup) for our workshop. However, if you are comfortable doing so, you are free to setup the environment on your machine as well.

### Sign up for accounts

1. Free [Happo.io account](https://happo.io/signup?_aid=802)
1. Free [Github account](https://github.com/signup)

---

## Gitpod setup

ℹ️ Gitpod lets you run an entire Dev environment from a browser! You can use this approach if you don't know how to setup a local environment.

### Fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.
- Give the repo a ⭐ or you can't participate in the workshop😝

3. Click here
     
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nadvolod/js-code/tree/master/web-testing-2022)

4. Once the Gitpod.io URL is loaded, you will need to sign in with the GitHub account you created earlier

### ✅ A new tab open with a simple ReactJS application should open

ℹ️ Keep the app running, we will need it to run some sanity tests

### Set your env variables

In a new terminal, run the following commands in that Terminal to set your `HAPPO_API_KEY`, `HAPPO_API_SECRET`:

[Happo api keys](https://docs.happo.io/docs/configuration#apikey-and-apisecret)

```bash
eval $(gp env -e HAPPO_API_KEY=<key>)
```
```bash
eval $(gp env -e HAPPO_API_SECRET=<secret>)
```

Once you have run those 3 commands, you can run the following commands to test your environment variables:

```bash
echo $HAPPO_API_KEY
echo $HAPPO_API_SECRET
```

### ✅ Your values should come back as expected

### Run tests

Run sanity tests

If your tests run in US Datacenter

```bash
npm run test:cy:sanity
```

### ✅👏Environment setup is complete if tests passed

---

## Local setup

### 1. Install Node LTS

1.  Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
    - It should be just a single command to run in our terminal
      - **!Don't forget to restart your terminal!**
    - After installation, confirm install with `nvm --version`
2.  Intall Node 16 with `nvm install --lts`

- Confirm node installation with `node --version` and seeing `v16.x` or similar
- Confirm NVM is set to 16 for default by running the following commands:

```bash
nvm list #will show all versions
nvm use 16 #to use 16
nvm alias default 16.14.x #to set it to the default
```

### 2.Clone and fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.

3. Clone your fork of the repository to your machine. Must have [Git installed](https://git-scm.com/downloads)

```bash
git clone URL_OF_YOUR_FORK
```

#### ✅👏Congratulations, your local environment is ready!

## Prizes

Prizes will be given away for participation (tshirts, stickers...)

At the end, one lucky winner will get a backpack!

## Rules of engagement

<img src="https://media.giphy.com/media/CB26wRVi3B9T2/giphy.gif" alt="api-testing" width="500"/>

- I'm here to serve you, your education, and your experience
- Be kind, respectful, no judgment
- Have fun

