import React from 'react'
import sug from './Suggested.module.css'
const Suggested = () => {
  return (
    <div>
          <div class={sug.banner}>
        <div class={sug.navbar}>
        <img src="/images/logo.png" alt="Logo" className={sug.logo} />
        <ul>
            
         
            <li> <a   href="home">Home</a></li>
            <li> <a href="myswaps">Skill swaps</a></li>
            <li> <a href="create">create skill listening</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a className={sug.active}href="suggest"> suggested people</a></li>   
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
            <li> <a href="login">Login/signup</a></li>
        </ul>
        </div>
        <div class={sug.cntent}>
            <h1>
                Suggested People 
            </h1>
    </div>
        </div>
    <div class={sug.contain}>
        <h1>Suggested People</h1>
        <div class={sug.profile_list}>
            
            <div class={sug.profile_card}>
                <img src="https://via.placeholder.com/100" alt="Profile Picture" class={sug.profile_pic}/>
                <div class={sug.profile}>
                    <h2>Jane Doe</h2>
                    <p>Skills: Graphic Design, Photoshop, UI/UX</p>
                    <button class={sug.connect_btn}>Connect</button>
                </div>
            </div>

        
            <div class={sug.profile_card}>
                <img src="https://via.placeholder.com/100" alt="Profile Picture" class={sug.profile_pic}/>
                <div class={sug.profile}>
                    <h2>John Smith</h2>
                    <p>Skills: Web Development, JavaScript, React</p>
                    <button class={sug.connect_btn}>Connect</button>
                </div>
            </div>

        
            <div class={sug.profile_card}>
                <img src="https://via.placeholder.com/100" alt="Profile Picture" class={sug.profile_pic}/>
                <div class={sug.profile}>
                    <h2>Emma Brown</h2>
                    <p>Skills: Digital Marketing, SEO, Content Writing</p>
                    <button class={sug.connect_btn}>Connect</button>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class={sug.footer_col}>
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div class={sug.footer_col}>
            <h3>Quick Links</h3>
            <li>Jobs</li>
            <li>Brand Assests</li>
            <li>Investor Relations</li>
            <li>Team of Service</li>
     
        </div> 
        <div class={sug.footer_col}>
            <h3>Features</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div> 
        <div class={sug.footer_col}>
            <h3>Resources</h3>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Marketing Service</li> 
        </div> 
        <div class={sug.footer_col}>
            <h3>Newsletter</h3>
            
        </div>
        <div class={sug.copyright}>
           <p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
            <div class={sug.pro_links}>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i> 
            </div>
        </div>
     </footer>
    </div>
  )
}

export default Suggested
