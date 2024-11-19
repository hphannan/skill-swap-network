import React from 'react';
import skill from './create.module.css';

const MySkills = () => {
  return (
    <div>
      <div className={skill.skill_banner}>
        <div className={skill.skill_navbar}>
          <img src="/images/logo.png" alt="Logo" className={skill.logo} />
          <ul>
            <li><a  href="home">Home</a></li>
            <li><a href="swap">Skill swaps</a></li>
            <li><a className={skill.active} href="create">Create Skill Listing</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="suggest">Suggested People</a></li>
            <li><a href="contact">Contact Us</a></li>
            <li><a href="/user/profile">Profile</a></li>
            <li><a href="login">Login/Signup</a></li>
          </ul>
        </div>
        <div className={skill.skill_content}>
          <h1>MY Skills</h1>
        </div>
      </div>
<br/>
<br/>
<div class={skill.form_container}>
    <h2 class={skill.form_title}>📚 Create New Skill Listing</h2>
    <p class={skill.form_subtitle}>Share your expertise with others by creating a new skill listing</p>

    <form class={skill.skill_form}>
      
      <div class={skill.form_group}>
        <label for="title">* Title</label>
        <input type="text" id="title" placeholder="E.g., Piano Lessons"/>
      </div>

      <div class={skill.form_group}>
        <label for="description">* Description</label>
        <textarea id="description" placeholder="Describe what you'll teach..."></textarea>
      </div>

    
      <div class={skill.form_group }>
      <div class={skill.form_row}>
        <div>
          <label for="duration">* Duration (hours)</label>
          <input type="number" id="duration" placeholder="0"/>
        </div>
        <div>
          <label for="category">* Category</label>
          <select id="category">
            <option value="" disabled selected>Select a category</option>
            <option value="technology">Technology</option>
            <option value="music">Music</option>
            <option value="arts">Arts</option>
          </select>
        </div>
        </div>
      </div>

      <div class={skill.form_group }>
        <label for="requirements">Requirements</label>
        <textarea id="requirements" placeholder="Any prerequisites or materials needed..."></textarea>
      </div>

     
      <div class={skill.form_group }>
        <label for="availability">📅 Availability</label>
        <div class={skill.availability}>
          <select>
            <option value="" disabled selected>Day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
          </select>
          <input type="time"/>
          <input type="time"/>
          <button type="button" class={skill.add_time_slot}>+ Add Time Slot</button>
        </div>
      </div>

     
      <button type="submit" class={skill.submit_button}>📝 Create Skill Listing</button>
    </form>
  </div>
<br/>
<br/>


      <footer>
        <div className={skill.skill_footer_col}>
          <h3>Top Products</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Quick Links</h3>
          <li>Jobs</li>
          <li>Brand Assets</li>
          <li>Investor Relations</li>
          <li>Terms of Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Features</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Resources</h3>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
          <li>Marketing Service</li>
        </div>
        <div className={skill.skill_footer_col}>
          <h3>Newsletter</h3>
          <p>You can trust us. We only send promo offers.</p>
          <div className={skill.subscribe}>
            <input type="text" placeholder="Your Email address" />
            <a href="#" className={skill.yellow} >SUBSCRIBE</a>
          </div>
        </div>
        <div className={skill.skill_copyright}>
          <p>Copyright © 2023 | All Rights Reserved | This template is made by Eduquest.edu.pk</p>
          <div className={skill.pro_links}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MySkills;
