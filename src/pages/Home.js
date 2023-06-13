import {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const Github_API_URL = "https://api.github.com/users/";
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const options = {
        headers: { Authorization: `"Bearer ${token}"`}
    };

    const searchUser = (event) => {
        event.preventDefault();
        setName(event.target.username.value.trim());
    }

    useEffect(() => {
        if (name) {
            axios.get(`${Github_API_URL}${name}`, options)
                .then(result => {
                    // Redirect to user page or update state accordingly
                    const url = `${window.location.pathname}${name}`;
                    window.location.href = url;
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