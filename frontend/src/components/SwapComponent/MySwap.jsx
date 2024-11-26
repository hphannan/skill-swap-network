import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import swap from './MySwap.module.css';
import axios from 'axios';
const MySwap = () => {
    const location = useLocation();
    const { selectedSkill } = location.state || {};  // Get the selected skill from state
    const [userSkills, setUserSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [swapStatus, setSwapStatus] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);


    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem('user'))?.id;
        if (userId) {
            // Step 2: Fetch skills using Axios
            console.log("selectedSkill ", selectedSkill);
            console.log('Fetching skills for userId:', userId);  // Log userId for debugging
            axios.get(`http://localhost:5000/api/skills/${userId}`)
                .then(response => {
                    console.log('Fetched skills:', response.data); // Log skills data
                    setUserSkills(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching skills:", err); // Log the error
                    setError('Failed to fetch skills');
                    setLoading(false);
                });
        } else {
            console.error('User ID not found in sessionStorage'); // Log missing userId
            setLoading(false);
            setError('User ID not found');
        }

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    const handleSwap = (selectedUserSkill) => {
        const userId = JSON.parse(sessionStorage.getItem('user'))?.id;

        if (!userId || !selectedSkill || !selectedUserSkill) {
            setSwapStatus('Please make sure both skills are selected and you are logged in.');
            return;
        }

        // Step 3: Make the API request to swap skills
        axios.post('http://localhost:5000/api/request', {
            requesterId: userId,  // User's ID (requester)
            receiverId: selectedSkill.user,  // Receiver's ID (the user who is offering the skill)
            skillOfferedId: selectedSkill._id,  // Skill offered by the user
            skillRequestedId: selectedUserSkill._id  // Skill requested from the other user
        })
            .then(response => {
                setSwapStatus('Skill swap request sent successfully!');
                setSuccessMessage("Skill request sent successfully!");
                console.log(response.data);
            })
            .catch(err => {
                console.error('Error during swap:', err);
                setSuccessMessage("Failed to send the skill request.");
                setSwapStatus('Failed to send skill swap request.');
            });
    };

    return (
        <div className={swap.Swap_page}>
            <div className={swap.Swap_banner}>
                <div className={swap.Swap_navbar}>
                    <img src="/images/logo.png" alt="Logo" className={swap.logo} />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="create">Create Skill Listing</a></li>
                        <li><a href="myskill">My Skills</a></li>
                        <li><a href="swap" className={swap.active}>Skill Swaps</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="contact">Contact Us</a></li>
                        <li><a href="/user/profile">Profile</a></li>
                        <li><a href="login">Login/Signup</a></li>
                    </ul>
                </div>
            </div>

            <div className={swap.Swap_content}>
                <h1>Skill Swap</h1>
                {/* Show Success Pop-up */}
                {successMessage && (
                    <div className={swap.successModal}>
                        <p>{successMessage}</p>
                        <button onClick={() => setSuccessMessage(null)} className={swap.closeButton}>
                            Close
                        </button>
                    </div>
                )}
                <div className={swap.swap_list}>
                    {/* Selected Skill */}
                    {selectedSkill && (
                        <div className={swap.swap_card}>
                            <div className={swap.swap_details}>
                                <h2>{selectedSkill.name}</h2>
                                <p>{selectedSkill.description}</p>
                                <p><strong>Duration:</strong> {selectedSkill.duration}</p>
                            </div>
                        </div>
                    )}

                    {/* Logged-in user's skills */}
                    <h2>Your Skills</h2>
                    {userSkills?.length > 0 ? (
                        userSkills.map((userSkill, index) => (
                            <div key={index} className={swap.swap_card}>
                                <div className={swap.swap_details}>
                                    <h2>{userSkill.name}</h2>
                                    <p>{userSkill.description}</p>
                                    <p><strong>Duration:</strong> {userSkill.duration}</p>
                                    <button
                                        onClick={() => handleSwap(userSkill)}
                                        className={swap.swap_button}
                                    >
                                        Swap
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>You have no skills listed yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MySwap;
