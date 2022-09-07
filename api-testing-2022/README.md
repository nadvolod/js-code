# api testing with javascript workshop

[#testing4good](https://twitter.com/hashtag/Testing4Good)

In this workshop you will learn how to do automated API testing with Cypress 10.

## 🧠 You will learn

✅ Common HTTP methods

✅ How to execute web requests

✅ Basic and advanced API automation

😉 And maybe more...

## 🔧 Prerequisites

1. Knowledge of JavaScript
2. Basic understanding of JavaScript

## 👩‍💻 Technologies you will use

1. Cypress 10
2. JavaScript

## Table Of Contents

- Setup
- [API Testing](./docs/API.md)
- [Conclusions](./docs/CONCLUSIONS.md)

## Testing for Good

[#testing4good](https://twitter.com/hashtag/Testing4Good)

Net proceeds from this workshop are donated to Ecosia's Trees that Empower Women! Let's learn together and make the world better together!

<img width="500" height="400" alt="Ecosia" src="https://user-images.githubusercontent.com/2136245/165755056-82ef47b0-df56-497e-a546-8792a5227ffd.png">

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
  - [JS Testing Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Testing training on Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for 🔥 Dev quotes](https://twitter.com/Nikolay_A00)

## TA 1: Chris Eccleston

## TA 2: Aleks Shineleva

## ⚙️ Setup

The safest way to ensure that we all have the same environment is for us to [use Gitpod](#gitpod-setup) for our workshop. However, if you are comfortable doing so, you are free to setup the environment on your machine as well.

### Sign up for accounts

1. Free [Sauce account](https://saucelabs.com/sign-up)

### Get your username and api key

1. Save your Sauce Labs Username and Access Key by going to the [Sauce Labs user settings page](https://app.saucelabs.com/user-settings)

ℹ️ If you have a Screener.io account then do the step below. Otherwise, just copy one of the demo API Keys.
  - Save your Screener API Key by going to the [API key](https://screener.io/v2/account/api-key) page in your Screener settings
     - Need to sign up for [demo account before](https://saucelabs.com/demo-request-vt)

🚨 **If you don't get an API key before the workshop, please use one of the keys below** 🚨

SCREENER_API_KEY:

`34c95634-56fc-446e-b68e-20530262e3f4`

`fe5a0636-fde5-4209-a597-403a76f1b505`

`6b3cc9f4-4578-413c-b5cc-ed7d1b417981`

`6b3cc9f4-4578-413c-b5cc-ed7d1b417981`

`8368adee-4463-4aa4-a441-6e6c58d67665`

---

## Gitpod setup

ℹ️ Gitpod lets you run an entire Dev environment from a browser! You can use this approach if you don't know how to setup a local environment.

### Fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.
- Give the repo a ⭐ or you can't participate in the workshop😝

3. In the browser address bar, prepend the current GitHub url with `https://gitpod.io/#`

   - The resulting url should look as follows:

     > https://gitpod.io/#https://github.com/YOUR-USERNAME/comprehensive-testing-js

4. Once the Gitpod.io URL is loaded, you will need to sign in with the GitHub account you created earlier

### ✅ A new tab open with a simple ReactJS application should open

ℹ️ Keep the app running, we will need it to run some sanity tests

### Set your env variables

In a new terminal, run the following commands in that Terminal to set your `SAUCE_USERNAME`, `SAUCE_ACCESS_KEY`, and `SCREENER_API_KEY`:

```bash
eval $(gp env -e SAUCE_USERNAME=<sauce_username>)
```
```bash
eval $(gp env -e SAUCE_ACCESS_KEY=<sauce_access_key>)
```
```bash
eval $(gp env -e SCREENER_API_KEY=<screener_api_key>)
```

> Replace <sauce_username>, <sauce_access_key>, and <screener_api_key> with your credentials

Once you have run those 3 commands, you can run the following commands to test your environment variables:

```bash
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
echo $SCREENER_API_KEY
```

### ✅ Your values should come back as expected

### Run tests

Run sanity tests

If your tests run in US Datacenter

```bash
npm run test:sanity:us
```

If your tests run in EU Datacenter

```bash
npm run test:sanity:eu
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

4. **Navigate to the directory of where you cloned your repo**

```bash
cd YOUR_FORK_DIR/comprehensive-testing-js
```

### 3. Install dependencies and start the application

- While inside your 'comprehensive-testing-js' directory, run the following command to install all dependencies

```bash
npm install
```

- After the dependency installation has completed, start the application by running the following:

```bash
npm run start
```

### 4.Follow the rest of the setup instructions

Follow the [same steps](#Run-tests) for running tests.

ℹ️ The main difference is that you will set environmenta variables by [following these instructions](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables) depending on your OS.

ℹ️ Some individuals aren't allowed to set their environment variables on their machines (Employer policy). In that case, you can hardcode them by modifying

- [3 visual keys](https://github.com/saucelabs-training/comprehensive-testing-js/blob/9309d16a9cf56dd14607b9e4c478f3b2f698e9d8/wdio.visual.conf.js#L2-L9)
- [2 keys for functional tests](https://github.com/saucelabs-training/comprehensive-testing-js/blob/9309d16a9cf56dd14607b9e4c478f3b2f698e9d8/wdio.sanity.conf.js#L9-L10)

You will need to hardcode these values as we do exercises.

### 5.Have an IDE installed that can handle NodeJS/JS (We will use [VSCode](https://code.visualstudio.com/Download))

#### ✅👏Congratulations, your local environment is ready!

## Prizes

Prizes will be given away for participation (tshirts, stickers...)

At the end, one lucky winner will get a backpack!

## Rules of engagement

<img src="https://media.giphy.com/media/CB26wRVi3B9T2/giphy.gif" alt="api-testing" width="500"/>

- I'm here to serve you, your education, and your experience
- Be kind, respectful, no judgment
- Have fun

