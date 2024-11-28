import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiCash } from "react-icons/gi";
import { FcCollaboration } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { handleAuth } from '../../utils/authUtils'
import dash from './Dashboard.module.css';
import axios from 'axios';
const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user object exists in sessionStorage
        const userString = sessionStorage.getItem('user');
        setIsLoggedIn(!!userString); // Update state based on presence of user object

        const fetchSkills = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/skills", {
                    // You can send any data required by your API in this object
                });
                setSkills(response.data); // Assuming the API returns an array of skill objects
            } catch (error) {
                console.error("Error fetching skills data:", error);
            }
        };
        fetchSkills();
    }, []);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);

        // Extract day, month, and year
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        // Extract hours, minutes, and AM/PM
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        // Return JSX with line breaks
        return (
            <>
                Updated <br />
                Date: {day}/{month}/{year} <br />
                Time: {hours}:{minutes} {ampm}
            </>
        );
    };


    const handleSwapButton = (skill) => {
        navigate("/swap", { state: { selectedSkill: skill } });
    };

    return (
        <div >
            <div class={dash.banner}>
                <div className={dash.navbar}>
                    <img src="/images/logo.png" alt="Logo" className={dash.logo} />

                    <ul>
                        <li> <a className={dash.active} href="/">Home</a></li>
                        <li> <a href="create">create skill listening</a></li>
                        <li> <a href="myskill">My Skill </a></li>
                        <li> <a href="swap">Skill swaps</a></li>
                        <li> <a href="about">about us </a></li>
                        <li> <a href="contact">Contact us</a></li>
                        <li> <a href="/user/profile">Profile</a></li>
                        <li> <a href="#" onClick={() => handleAuth({ isLoggedIn, setIsLoggedIn, navigate })}>{isLoggedIn ? 'Logout' : 'Login/Signup'}</a></li>

                    </ul>
                </div>
                <div class={dash.content}>
                    <h1>
                        Learn Any Skill Without Spending A Dime
                    </h1>
                    <p> Subcribe Easy Totorials YouYube Channel to Watch more Videos, press
                        the bell icon to get latest updates.  </p>
                    <div>
                        <br />
                        <a class={dash.blue} href="myskill">My Skills</a>

                        <a class={dash.blue} href="detail">Skill Details</a>
                    </div> </div>
            </div>


            <section id={dash.features}>
                <h1>Awesome Features</h1>
                <p>"Discover our awesome features that make skill exchange easy, secure, and collaborative."</p>
                <div class={dash.base}>
                    <div class={dash.box}>
                        <br />
                        <GiCash className={dash.icon} />
                        <br />

                        <h3>Cashless System</h3>
                        <p>"SkillSwap enables seamless skill exchanges through a cashless, digital system.</p>
                        <br />
                    </div>

                    <div class={dash.box}>
                        <br />
                        <FcCollaboration className={dash.icon} />
                        <br />

                        <h3>Foster collaboration</h3>
                        <p>"Foster collaboration by enabling easy, cashless skill exchanges."</p>
                        <br />
                    </div>

                    <div class={dash.box}>
                        <br />
                        <VscWorkspaceTrusted className={dash.icon} />
                        <br />

                        <h3>Trusted Community</h3>
                        <p>"Building a trusted community for secure and reliable skill exchanges."</p>
                        <br />
                    </div>
                </div>
                <br />
                <br />
            </section>


            <section id={dash.course}>
                <h1>Our Popular Skills</h1>
                <p> A platform allowing users to trade skills like design for
                    coding.
                    Facilitates collaboration and learning without monetary
                    transactions.
                    Encourages a community-driven approach to skill-building. </p>
                <div className={dash.course_box}>
                    {skills.map((skill, index) => (
                        <div className={dash.courses} key={index}>
                            <img
                                className={dash.skill_img}
                                src={`http://localhost:5000/${skill.image}`} // Dynamically fetch the image
                                alt={skill.name}
                                onError={(e) => (e.target.src = "/images/default.jpg")} // Fallback to default image if error
                            />
                            <div className={dash.details}>
                                <span>{skill.updatedAt ? formatDate(skill.updatedAt) : " "}</span>
                                <h6>{skill.name}</h6>
                                <p>{skill.description}</p>
                                <p>
                                    <strong>Offered by: </strong>
                                    {skill.user?.name || "Unknown"}
                                </p>
                                <div className={dash.star}>
                                    <span>({skill.duration || 0})</span>
                                </div>
                                <button
                                    className={dash.swap_button}
                                    onClick={() => handleSwapButton(skill)}
                                >
                                    Press to swap with
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



                <br />
                <br />
                <br />
                <br />
            </section>

            <section id={dash.registration}>
                <div class={dash.reminder}>
                    <p>Get 100 online skills for free</p>
                    <h1>Register To Get It</h1>
                    <div class={dash.time}>
                        <div class={dash.date}>
                            18 <br /> Days
                        </div>
                        <div class={dash.date}>
                            06 <br /> Hours
                        </div>
                        <div class={dash.date}>
                            50 <br /> Mins
                        </div>
                    </div>
                </div>

                <div class={dash.form}>
                    <h3>Create Free Amount Now!</h3>
                    <input type="text" placeholder="Name" name="" id="" />
                    <input type="text" placeholder="Email Adress" name="" id="" />
                    <input type="text" placeholder="Phone Number" name="" id="" />
                    <div class={dash.btn}>
                        <a class={dash.yellow} href="#">Submit</a>
                    </div>
                </div>
                <br />
                <br />
            </section>

            <section class={dash.contact_buttons}>
                <br />
                <br />
                <h2 class={dash.line}>Don't wait any longer.Contact us!</h2>
                <button class={dash.whatsapp_button}><i class="fab fa-whatsapp"></i> WhatsApp <span class={dash.phone_number}>123-456-7890</span></button>
                <button class={dash.facebook_button}><i class="fab fa-facebook"></i> Facebook <span class={dash.phone_number}>123-456-7890</span></button>
                <button class={dash.call_button}><i class="fas fa-phone"></i> Call <span class={dash.phone_number}>123-456-7890</span></button>
                <br />
                <br />
            </section>

            <section id={dash.experts}>
                <h1>Comunity Experts</h1>
                <p>Replenish man have thing gathering lights yielding shall you </p>
                <div class={dash.expert_box}>
                    <div class={dash.profile}>
                        <img src="/images/pro1.WEBP" alt="" />
                        <h4>Ema Irnik</h4>
                        <p>Python & Algorithm Expert</p>

                    </div>
                    <div class={dash.profile}>
                        <img src="/images/pro2.WEBP" alt="" />
                        <h4>Jon samith</h4>
                        <p>Java & Web Development</p>

                    </div>
                    <div class={dash.profile}>
                        <img src="/images/pro3.WEBP" alt="" />
                        <h4>Ariyana </h4>
                        <p>Html/css & Cloud Computing skill</p>

                    </div>
                    <div class={dash.profile}>
                        <img src="/images/pro4.WEBP" alt="" />
                        <h4>Marliya Samar</h4>
                        <p>Communication  & Database management Skill</p>

                    </div>
                </div>
            </section>
            <footer>
                <div class={dash.footer_col}>
                    <h3> Top Products</h3>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Managed Website</li>
                    <li>Marketing Service</li>
                </div>
                <div class={dash.footer_col}>
                    <h3>Quick Links</h3>
                    <li>Jobs</li>
                    <li>Brand Assests</li>
                    <li>Investor Relations</li>
                    <li>Team of Service</li>

                </div>
                <div class={dash.footer_col}>
                    <h3>Features</h3>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Managed Website</li>
                    <li>Marketing Service</li>
                </div>
                <div class={dash.footer_col}>
                    <h3>Resources</h3>
                    <li>Guides</li>
                    <li>Research</li>
                    <li>Experts</li>
                    <li>Marketing Service</li>
                </div>
                <div class={dash.footer_col}>
                    <h3>Newsletter</h3>

                </div>
                <div class={dash.copyright}>
                    <p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
                    <div class={dash.pro_links}>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Dashboard
