import React from 'react'
import det from './Detail.module.css'
const Detail = () => {
  return (
    <div>
      <div class={det.d_banner}>
        <div class={det.d_navbar}>
        <img src="/images/logo.png" alt="Logo" className={det.logo} />
        <ul>
        <li> <a  className={det.active} href="/">Home</a></li>
            <li> <a href="swap">Skill swaps</a></li>
            <li> <a href="create">create skill listening</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a href="suggest"> suggested people</a></li>   
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
            <li> <a href="login">Login/signup</a></li>
        </ul>
        </div>
        <div class={det.d_content}>
            <h1>
                Skill Details 
            </h1>
    </div>
        </div>


    <section class={det.d_contain}>
        <section class={det.skill_detail}>
            <h2>Web Development</h2>
            <p class={det.d_description}>
                Learn the fundamentals of web development including HTML, CSS, JavaScript, and frameworks like React and Angular. Perfect for beginners and intermediates looking to build websites and web apps.
            </p>

            <div class={det.user_profile}>
                <img src="profile.jpg" alt="User Profile" class={det.profile_pic}/>
                <div class={det.profile_info}>
                    <h3>John Doe</h3>
                    <p>Web Developer with 5+ years of experience</p>
                    <button class={det.contact_btn}>Message</button>
                    <button class={det.contact_btn}>Swap Skill</button>
                </div>
            </div>
        </section>

        <aside class={det.sidebar}>
            <h3>Related Skills</h3>
            <ul>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Data Analysis</a></li>
                <li><a href="#">Project Management</a></li>
            </ul>
        </aside>
    </section>

    <footer>
        <div class={det.footer_col}>
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div class={det.footer_col}>
            <h3>Quick Links</h3>
            <li>Jobs</li>
            <li>Brand Assests</li>
            <li>Investor Relations</li>
            <li>Team of Service</li>
     
        </div> 
        <div class={det.footer_col}>
            <h3>Features</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div> 
        <div class={det.footer_col}>
            <h3>Resources</h3>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Marketing Service</li> 
        </div> 
        <div class={det.footer_col}>
            <h3>Newsletter</h3>
           
        </div>
        <div class={det.copyright}>
           <p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
            <div class={det.pro_links}>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i> 
            </div>
        </div>
     </footer>

    </div>
  )
}

export default Detail
