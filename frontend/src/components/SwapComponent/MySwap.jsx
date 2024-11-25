import React from 'react'
import swap from './MySwap.module.css' 
const MySwap = () => {
  return (
    <div>
      <div class={swap.SWap_banner}>
        <div class={swap.SWap_navbar}>
        <img src="/images/logo.png" alt="Logo" className={swap.logo} />
        <ul>
        <li> <a   href="">Home</a></li>
            <li> <a  href="create">create skill listening</a></li>
            <li> <a href="myskill">My Skill </a></li>
            <li> <a  className={swap.active} href="swap">Skill swaps</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
            <li> <a href="login">Login/signup</a></li>
        </ul>
        </div>
        <div class={swap.SWap_content}>
            <h1>
                My Swaps 
            </h1>
    </div>
        </div>


    <div class={swap.SWap_contain}>
        <h1>My Swaps</h1>

        <div class={swap.swap_list}>
            
            <div class={swap.swap_card}>
                <div class={swap.swap_details}>
                    <h2>Web Development for Graphic Design</h2>
                    <p><strong>Partner:</strong> Jane Doe</p>
                    <p><strong>Status:</strong> Ongoing</p>
                </div>
                <div class={swap.swap_actions}>
                    <button class={swap.view_btn}>View Details</button>
                    <button class={swap.cancel_btn}>Cancel Swap</button>
                </div>
            </div>

        
            <div class={swap.swap_card}>
                <div class={swap.swap_details}>
                    <h2>Content Writing for Digital Marketing</h2>
                    <p><strong>Partner:</strong> John Smith</p>
                    <p><strong>Status:</strong> Completed</p>
                </div>
                <div class={swap.swap_actions}>
                    <button class={swap.view_btn}>View Details</button>
                    <button class={swap.completed_btn} disabled>Completed</button>
                </div>
            </div>

        
            <div class={swap.swap_card}>
                <div class={swap.swap_details}>
                    <h2>Mobile Application For Android App</h2>
                    <p><strong>Partner:</strong> Emma Brown</p>
                    <p><strong>Status:</strong> Pending Approval</p>
                </div>
                <div class={swap.swap_actions}>
                    <button class={swap.view_btn}>View Details</button>
                    <button class={swap.cancel_btn}>Cancel Swap</button>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class={swap.footer_col}>
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div class={swap.footer_col}>
            <h3>Quick Links</h3>
            <li>Jobs</li>
            <li>Brand Assests</li>
            <li>Investor Relations</li>
            <li>Team of Service</li>
     
        </div> 
        <div class={swap.footer_col}>
            <h3>Features</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div> 
        <div class={swap.footer_col}>
            <h3>Resources</h3>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Marketing Service</li> 
        </div> 
        <div class={swap.footer_col}>
            <h3>Newsletter</h3>
            <p>you can trust us. we only send promo offers,</p>
            <div class={swap.subscribe}>
                <input type="text" placeholder="Your Email address"/>
                <a href="#" class={swap.yellow}>SUBSCRIBE</a>
            </div>
        </div>
        <div class={swap.copyright}>
           <p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
            <div class={swap.pro_links}>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i> 
            </div>
        </div>
     </footer>

    </div>
  )
}

export default MySwap

