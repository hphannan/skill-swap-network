import React, { useState, useEffect } from 'react';
import skill from './MySkill.module.css'
const MySkill = () => {
  // State to store skills data, loading state, and error state
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the user ID from session storage
  const userString = sessionStorage.getItem('user');
 
    const user = JSON.parse(userString);
    const userId = user.id;
    console.log("userId",userId);
  
  useEffect(() => {
    if (!userId) {
      setError('User not logged in');
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/api/skills/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.length) {
          setSkills(data);
        } else {
          setError('No skills found for this user');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching skills:', err);
        setError('Failed to fetch skills: ' + err.message);  // Show error message
        setLoading(false);
      });
  }, [userId]);
  // Only run this effect when the userId changes


  return (
    <div>
      <div class={skill.skill_banner}>
        <div class={skill.skill_navbar}>
          <img src="/images/logo.png" alt="Logo" className={skill.logo} />
          <ul>
            <li> <a href="home">Home</a></li>
            <li> <a href="swap">Skill swaps</a></li>
            <li> <a href="create">create skill listening</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a href="suggest"> suggested people</a></li>
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
            <li> <a href="login">Login/signup</a></li>
          </ul>
        </div>
        <div class={skill.skill_content}>
          <h1>
            My Skills
          </h1>
        </div>
      </div>





      <div class={skill.main}>
        <br />
        <br />
        <section class={skill.hero}>
          <h1 class={skill.hero_title}>Skill Listings</h1>
          <p class={skill.hero_description}>Discover skills you want to learn from our community of experts.</p>
          <div class={skill.search_bar}>
            <input type="text" placeholder="Search skills..." class={skill.search_input} />
            <select class={skill.search_dropdown}>
              <option value="" class={skill.search_input}>Filter</option>

            </select>
          </div>
        </section>


        <br />
        <br />
      </div>









      <main class={skill.main_content}>

        <section class={skill.skills_section}>
          <div class={skill.section_header}>
            <h1 class={skill.section_title}>My Skills</h1>
            <p class={skill.section_description}>Manage your skill listings and view incoming requests</p>
            <button class={skill.add_skill_btn}>+ Add New Skill</button>
          </div>


          {/* Loading state */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p> // Display an error if any
          ) : (
            // Render the skills table when data is fetched
            <table className={skill.skills_table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Duration (hours)</th>
                  <th>Status</th>
                  <th>Pending Requests</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skillItem, index) => (
                  <tr key={index}>
                    <td>{skillItem.name}</td>
                    <td>{skillItem.category}</td>
                    <td>{skillItem.duration}</td>
                    <td><span className={skill.status_active}>ACTIVE</span></td>
                    <td>{skillItem.pendingRequests} <span className={skill.notification_icon}>🔔</span></td>
                    <td>
                      <button className={skill.edit_btn}>Edit</button>
                      <button className={skill.delete_btn}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
        <br />
        <br />
      </main>




      <footer>
        <div class={skill.footer_col}>
          <h3>Top Products</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div class={skill.footer_col}>
          <h3>Quick Links</h3>
          <li>Jobs</li>
          <li>Brand Assests</li>
          <li>Investor Relations</li>
          <li>Team of Service</li>

        </div>
        <div class={skill.footer_col}>
          <h3>Features</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div class={skill.footer_col}>
          <h3>Resources</h3>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
          <li>Marketing Service</li>
        </div>
        <div class={skill.footer_col}>
          <h3>Newsletter</h3>
          <p>you can trust us. we only send promo offers,</p>
          <div class={skill.subscribe}>
            <input type="text" placeholder="Your Email address" />
            <a href="#" class={skill.yellow}>SUBSCRIBE</a>
          </div>
        </div>
        <div class={skill.copyright}>
          <p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
          <div class={skill.pro_links}>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default MySkill
