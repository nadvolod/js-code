//plugin to build smart contract tests
require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: process.env.ALCHEMY_ETH_ROPSTEN_URL,
			// get private key from metamask
			accounts: [process.env.TRANSACTIONS_PRIVATE_KEY],
		},
	},
};
