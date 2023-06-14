
import { useEffect, useState } from 'react';
import axios from 'axios';

function RepoCards(props) {

    const [repos, setRepos] = useState(null);
    const [message, setMessage] = useState("");
    const Repository_API = `${props.repoUrl}`;

    // format taskDate ID to reflect human-readable date
    const formatDate = (date) => {
        // to ensure the timestamp is a date type, convert it to date
        const formattedDate = new Date(date);
        return formattedDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    useEffect(() => {
        axios.get(`${Repository_API}`)
            .then(result => {
                // order results by updated_at date
                const orderedRepos = result.data.sort((a, b) => {
                    // compare each pair of results
                    const dateA = new Date(a.updated_at);
                    const dateB = new Date(b.updated_at);
                    // return the larger date first to simulate a descending order
                    return dateB - dateA; 
                });

                setRepos(orderedRepos);
                setMessage('');
            })
            .catch(function (error) {
                // Handle error
                setMessage('No Repositories available');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <>
            {repos ? (
                <>
                    {repos.map(item => (
                        <div className="repo-card" key={item.id}>
                            <div className="flexbox">
                                <p className="repo-name">
                                    <a href={item.html_url} target="_blank" rel="noreferrer">{item.name}</a>
                                </p>
                                <p className="repo-updated-date">Last updated: {formatDate(item.updated_at)}</p>
                            </div>
                            {(item.description) && <p className="repo-description">{item.description}</p>}
                        </div>
                    ))}
                </>
            ) : (
                <p className="repo-message">{message}</p>
            )}
        </>
    )
}

export default RepoCards