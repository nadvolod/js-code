# Web 3.0 Blockchain App

## Get started

- Using [Vite](https://vitejs.dev/guide/why.html)
- [tailwindcss](https://tailwindcss.com/)
- [Github copilot for easier dev]
- [ES7+ React/Redux/React-Native snippets](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- [Install ESLint using Airbnb config](https://eslint.org/docs/user-guide/getting-started)
- [Using CSShero.org for gradients on the card](https://csshero.org/mesher/)
- [Deploy with Alchemy](https://www.alchemy.com/)
- [Docs on how to setup eslint and prettier](https://vicvijayakumar.com/blog/eslint-airbnb-style-guide-prettier)

* Run eslint with `npx eslint .`
* Automatically fix problems with `npx eslint . --fix`

```bash
 npm init vite@latest
  npm install
  npm run dev
```

[Install tailwind w/ vite](https://tailwindcss.com/docs/guides/vite)

[Install Happo and cypress](https://docs.happo.io/docs/cypress)
[Happy cypress example](https://github.com/happo/happo-cypress-example-todomvc/blob/master/cypress/integration/app_spec.js)

## Testing

[Use Ropsten testnet faucet for testing solidity](https://faucet.egorfine.com/)

[Another Ropsten testnet that worked for me](https://testnet.help/en/ethfaucet/ropsten)

- How do we ensure that all of our pages look correct on web and mobile, chrome and safari?
- How do we test that 'Connect Wallet' button in Welcome.js does the right thing?
- How do we test the correct loading behavior of the spinner?

## Installing smart contract deps

```bash
npm install --save-dev @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle chai ethereum-waffle ethers hardhat
```

[hardhat ethereum dev environment](https://hardhat.org/)

- Start with `npx hardhat`
- `npx hardhat test` to ensure correct working environment
- Install Solidity extension for Visual Studio code

## Setting up metamask test account

- Get metamask chrome extension and set it up
- Turn on 'show/hide test networks' in the network section of the wallet
- Open Ropsten Test Network and deposit test tokens there
- Sign up for an account at Alchemy.io
- Setup your first app and pick Ropsten test network
- View app and then View Key to get HTTP key
- Deploy the contract with `npx hardhat run scripts/deploy.js --network ropsten` from `smart_contract` dir

**Make sure you have enough ETH to do the deploy **

Expected message will be similar to `Transactions deployed to: 0xB1eA0Bc0Bbd554d921Ac6778775208A39259831A`

## React Context

[docs](https://reactjs.org/docs/context.html)

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

```js
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext("light");

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      // ThemeContext is the const that we defined above. We're setting a new theme value
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

# useEffect()

Accepts a function that contains imperative, possibly effectful code.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
