import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
// our api library
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// use `nfn` for const
const GithubProvider = ({ children }) => {
    //the default value of useState is mockUser
    //later we can use setGithubUser() to change the value
    //`dar` - destructured array
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    //request loading
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    //`nfn` for const named function
    const searchGithubUser = async (user) => {
        //toggleError
        setIsLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
            console.log(err)
        );
        console.log(response);
        if (response) {
            //response.data contains the user object with all the info
            setGithubUser(response.data);
            // the `login, followers_url` objects are actually properties of the response.data json object
            const { login, followers_url } = response.data;
            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`),
            ])
                .then((results) => {
                    const [repos, followers] = results;
                    const status = 'fulfilled';
                    if (repos.status === status) {
                        setRepos(repos.value.data);
                    }
                    if (followers.status === status) {
                        setFollowers(followers.value.data);
                    }
                })
                .catch((err) => console.log(err));
        } else {
            console.log('no such user');
        }
        checkRequests();
        setIsLoading(false);
    };

    //check rate
    //nfn - named function
    const checkRequests = () => {
        //default is a GET
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                console.log(data);
                let {
                    //data.rate contains the limit + remaining properties
                    rate: { remaining },
                } = data;
                setRequests(remaining);
                if (remaining === 0) {
                    //throw an error
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //error
    /**
   * useEffect()
   * Sometimes, we want to run some additional code after React has updated the DOM.
   * Network requests, manual DOM mutations, and logging are common examples of
   * effects that don’t require a cleanup.
   *
  What does useEffect do? 
  By using this Hook, you tell React that your component needs to do something after render. 
  React will remember the function you passed (we’ll refer to it as our “effect”), 
  and call it later after performing the DOM updates. 
  In this effect, we set the document title, 
  but we could also perform data fetching or call some other imperative API. 
   *
   * Once the app loads, use checkRequests() as the callback
   */
    useEffect(checkRequests, []);

    /**
     * 1. Every hook that we want to pass to another component needs to be returned here by being added to 'value'
     * 2. Then, in a component, the function is destructured const {isLoading} = React.useContext(GithubContext)
     * 3. And then used
     */
    return (
        <GithubContext.Provider
            value={{
                githubUser,
                repos,
                followers,
                requests,
                searchGithubUser,
                isLoading,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };
