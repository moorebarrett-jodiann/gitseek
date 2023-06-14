/**
 * SETTING UP ENVIRONMENT VARIABLES
 * 
 * > Create a .env file in the root of your project (alongside package.json) and add the following line:
 * REACT_APP_GITHUB_TOKEN=your_token_here
 * 
 * > Install the dotenv package by running the following command in your project directory:
 * npm install dotenv
 * 
 * > Update your code to use the environment variable:
 * const token = process.env.REACT_APP_GITHUB_TOKEN;
 * 
 * > restart your development server after making changes to the environment variables.
 * 
 * Note: Environment variables prefixed with REACT_APP_ are automatically made available in your React app by Create React App.
 */

import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const Github_API_URL = "https://api.github.com/users/";
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const options = {
        headers: { Authorization: `"Bearer ${token}"`}
    };
    const navigate = useNavigate();

    const searchUser = (event) => {
        event.preventDefault();
        setName(event.target.username.value.trim());
    }

    useEffect(() => {
        if (name) {
            axios.get(`${Github_API_URL}${name}`, options)
                .then(result => {
                    // Use navigate function for redirection
                    navigate(`/${name}`); 
                    setMessage('');
                })
                .catch(function (error) {
                    // Handle error
                    setName('');
                    setMessage('User not found');
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return (
        <>
            <div className="container">
                <div className="home-container">
                    <div className="form-container">
                        <h2><i className="fa-solid fa-magnifying-glass"></i> GitSeek</h2>
                        <form className="search-form flexbox" onSubmit={searchUser}>
                            <input type="text" name="username" placeholder="Enter Username"/>
                            <input type="submit" value="Search"/>
                        </form>
                        <p className="error">{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home