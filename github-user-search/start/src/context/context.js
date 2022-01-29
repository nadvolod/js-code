import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser);
	const [repos, setRepos] = useState(mockRepos);
	const [followers, setFollowers] = useState(mockFollowers);
	//request loading
	const [requests, setRequests] = useState(0);
	const [loading, setIsLoading] = useState(false);

	//nfn named function
	const checkRequests = () => {
		axios
			.get('/rate_limit')
			.then(({ data }) => {
				let { remaining } = data.rate;
				setRequests(remaining);
				console.log(remaining);
				if (remaining == 0) {
					//throw error
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(checkRequests, []);
	return (
		<GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
