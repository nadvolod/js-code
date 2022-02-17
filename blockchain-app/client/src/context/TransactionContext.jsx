import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

// create a context for transactions with no default value
export const TransactionContext = React.createContext();

// window.ethereum is enabled thanks to our Metamask extension
const { ethereum } = window;

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(
		contractAddress,
		contractABI,
		signer
	);

	console.log({ provider, signer, transactionContract });
};

export const TransactionProvider = ({ children }) => {
	return (
		// using TransactionContext defined above, .Provider allows us to set
		// a value to pass down to all of the children
		<TransactionContext.Provider value='test'>
			{children}
		</TransactionContext.Provider>
	);
};
