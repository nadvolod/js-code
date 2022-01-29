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

	const searchGithubUser = async (user) => {
		const response = await axios
			.get(`users/${user}`)
			.catch((err) => console.log(err));

		console.log(response);
		if (response) {
			setGithubUser(response.data);
			const { followers_url, login } = response.data;

			axios
				.get(`/users/${login}/repos`)
				.then((response) => setRepos(response.data));

			axios
				.get(`${followers_url}?per_page=100`)
				.then((response) => setFollowers(response.data));
		} else {
			console.log('no such user');
		}
	};
	//nfn named function
	const getRemainingRequests = () => {
		axios
			.get('/rate_limit')
			.then(({ data }) => {
				let { remaining } = data.rate;
				setRequests(remaining);
				console.log('setRequests', remaining);
				if (remaining == 0) {
					//throw error
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	//add empty dependency array hence,
	// useEffect will run only once after the rendering of the page.
	// It will not re-run
	useEffect(() => getRemainingRequests());
	return (
		<GithubContext.Provider
			value={{ githubUser, repos, followers, requests, searchGithubUser }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
