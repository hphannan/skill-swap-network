import React from 'react';
import style from './MySkills.module.css';

const MySkills = () => {
  return (
    <div>
      <div className={style.skill_banner}>
        <div className={style.skill_navbar}>
          <img src="/images/logo.png" alt="Logo" className={style.logo} />
          <ul>
            <li><a className={style.active} href="home">Home</a></li>
            <li><a href="">Skill swaps</a></li>
            <li><a href="create">Create Skill Listing</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="">Suggested People</a></li>
            <li><a href="contact">Contact Us</a></li>
            <li><a href="/user/profile">Profile</a></li>
            <li><a href="login">Login/Signup</a></li>
          </ul>
        </div>
        <div className={style.skill_content}>
          <h1>MY Skills</h1>
        </div>
      </div>

      <div className={style.skill_container}>
        <h1>My Skills</h1>
        <div className={style.add_skill}>
          <input type="text" id="skill-input" placeholder="Add a new skill..." />
          <button>Add Skill</button>
        </div>
        <div className={style.skills_list} id="skills-list">
          <div className={style.skill_item}>
            <h5>Python</h5>
            <button className={style.delete_btn}>Remove</button>
          </div>
          <div className={style.skill_item}>
            <span>Web Development</span>
            <button className={style.delete_btn}>Remove</button>
          </div>
          <div className={style.skill_item}>
            <span>Mobile Application</span>
            <button className={style.delete_btn}>Remove</button>
          </div>
        </div>
      </div>

      <footer>
        <div className={style.skill_footer_col}>
          <h3>Top Products</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className={style.skill_footer_col}>
          <h3>Quick Links</h3>
          <li>Jobs</li>
          <li>Brand Assets</li>
          <li>Investor Relations</li>
          <li>Terms of Service</li>
        </div>
        <div className={style.skill_footer_col}>
          <h3>Features</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div className={style.skill_footer_col}>
          <h3>Resources</h3>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
          <li>Marketing Service</li>
        </div>
        <div className={style.skill_footer_col}>
          <h3>Newsletter</h3>
          <p>You can trust us. We only send promo offers.</p>
          <div className={style.subscribe}>
            <input type="text" placeholder="Your Email address" />
            <a href="#" className={style.yellow}>SUBSCRIBE</a>
          </div>
        </div>
        <div className={style.skill_copyright}>
          <p>Copyright © 2023 | All Rights Reserved | This template is made by Eduquest.edu.pk</p>
          <div className={style.pro_links}>
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
