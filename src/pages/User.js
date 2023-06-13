import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RepoCards from '../components/RepoCards';

function User() {
    const [userProfile, setUserProfile] = useState(null);
    const [repoUrl, setRepoUrl] = useState("");
    // 'useParams' hook to retrieve the character name from the URL:
    const { user } = useParams();
    const Github_Account_URL = `https://api.github.com/users/${user}`;

    useEffect(() => {
        fetchProfile(user);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const fetchProfile = async (name) => {
        try {
            const response = await fetch(`${Github_Account_URL}`);
            
            if (!response.ok) {
                throw new Error(`${response.statusText} (${response.status})`);
            }
            
            const data = await response.json();
            
            setUserProfile(data);
            setRepoUrl(data.repos_url);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container">
            <section className="profile-details-container">
                {userProfile ? (
                    <div className="details-container">
                        <div className="profile-info">
                            <figure className="profile-img">
                                <img src={userProfile.avatar_url} alt={userProfile.name} />
                            </figure>
                            <p className="profile-name">{userProfile.name}</p>
                            <div className="repo-stats flexbox">
                                <p><span>{userProfile.public_repos}</span>Repositories</p>
                                <p><span>{userProfile.followers}</span>Followers</p>
                                <p><span>{userProfile.following}</span>Following</p>
                            </div>
                            <div className="profile-link">
                                <a 
                                    href={userProfile.html_url} 
                                    target="_blank" rel="noreferrer" 
                                    to={userProfile.html_url}>
                                        View Guthub Profile
                                </a>
                            </div>
                        </div>
                        <div className="profile-repositories">
                            <h2>Public Repositories</h2>
                            <div className="repo-cards">
                                <RepoCards repoUrl={repoUrl}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading profile details...</p>
                )}
            </section>
        </div>
    );
}

export default User