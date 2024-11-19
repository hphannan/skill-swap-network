import React from 'react'
import skill from './MySkill.module.css'
const MySkill = () => {
  return (
    <div>
      <div class={skill.skill_banner}>
        <div class={skill.skill_navbar}>
        <img src="/images/logo.png" alt="Logo" className={skill.logo} />
        <ul>
        <li> <a   href="home">Home</a></li>
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
    <br/>
    <br/>
    <section class={skill.hero}>
      <h1 class={skill.hero_title}>Skill Listings</h1>
      <p class={skill.hero_description}>Discover skills you want to learn from our community of experts.</p>
      <div class={skill.search_bar}>
        <input type="text" placeholder="Search skills..." class={skill.search_input}/>
        <select class={skill.search_dropdown}>
          <option value=""  class={skill.search_input}>Filter</option>
         
        </select>
      </div>
    </section>
   

    <br/>
    <br/>
  </div>









        <main class={skill.main_content}>

    <section class={skill.skills_section}>
      <div class={skill.section_header}>
        <h1 class={skill.section_title}>My Skills</h1>
        <p class={skill.section_description}>Manage your skill listings and view incoming requests</p>
        <button class={skill.add_skill_btn}>+ Add New Skill</button>
      </div>

      <table class={skill.skills_table}>
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
          <tr>
            <td>C++</td>
            <td>TECHNOLOGY</td>
            <td>12</td>
            <td><span class={skill.status_active}>ACTIVE</span></td>
            <td>1 <span class={skill.notification_icon}>🔔</span></td>
            <td>
              <button class={skill.edit_btn}>Edit</button>
              <button class={skill.delete_btn}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </section>
    <br/>
    <br/>
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
                <input type="text" placeholder="Your Email address"/>
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
