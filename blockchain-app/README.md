# Web 3.0 Blockchain App

## Get started

- Using [Vite](https://vitejs.dev/guide/why.html)
- [tailwindcss](https://tailwindcss.com/)
- [Github copilot for easier dev]
- [ES7+ React/Redux/React-Native snippets](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- [Install ESLint using Airbnb config](https://eslint.org/docs/user-guide/getting-started)
- [Using CSShero.org for gradients on the card](https://csshero.org/mesher/)
- [Deploy with Alchemy](https://www.alchemy.com/)

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
