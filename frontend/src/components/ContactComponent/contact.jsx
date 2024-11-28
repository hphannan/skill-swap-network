import React from 'react'
import styleContact from './contact.module.css';
const contact = () => {
  return (
    <div>
    
    <div class={styleContact.con_banner}>
        <div class={styleContact.con_navbar}>
        <img src="/images/logo.png" alt="Logo" className={styleContact.logo} />
        <ul>
        
        <li> <a  href="/">Home</a></li>
            <li> <a href="create">create skill listening</a></li>
            <li> <a  href="myskill">My Skill </a></li>
            <li> <a href="swap">Skill swaps</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a className={styleContact.active} href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
           
        </ul>
        </div>
        <div class={styleContact.content}>
            <h1 >
                Contact Us
            </h1>
      </div>
        </div>



<section id={styleContact.section_wrapper}>
             <div class={styleContact.box_wrapper}>
            <div class={styleContact.info_wrap}>
                <h2 class={styleContact.info_title}>Contact Information</h2>
                <h3 class={styleContact.info_sub_title}>Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul class={styleContact.info_details}>
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                    </li>
                    <li>
                        <i class="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="mailto:eduquest@gmail.com">eduquest@gmail.com</a>
                    </li>
                    <li>
                        <i class="fas fa-globe"></i>
                        <span>Website:</span> <a href="#">eduquest@gmail.com</a>
                    </li>
                </ul>
                
                <ul class={styleContact.social_icons}>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div class={styleContact.form_wrap}>
                <form >   
                    <h2 class={styleContact.form_title}>Send us a message</h2>
                    <div class={styleContact.form_fields}>
                        <div class={styleContact.form_group}>
                            <input type="text" class="fname" placeholder="First Name"/>
                        </div>
                        <div class={styleContact.form_group}>
                            <input type="text" class="lname" placeholder="Last Name"/>
                        </div>
                        <div class={styleContact.form_group}>
                            <input type="email" class="email" placeholder="Mail"/>
                        </div>
                        <div class={styleContact.form_group}>
                            <input type="number" class="phone" placeholder="Phone"/>
                        </div>
                        <div class={styleContact.form_group}>
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" class={styleContact.submit_button}/>
                </form>
            </div>
        </div>
    
        <br/>
    
</section>


<br/>
<footer>
    <div class={styleContact.footer_col}>
        <h3>Top Products</h3>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
    </div>
    <div class={styleContact.footer_col}>
        <h3>Quick Links</h3>
        <li>Jobs</li>
        <li>Brand Assests</li>
        <li>Investor Relations</li>
        <li>Team of Service</li>

    </div> 
    <div class={styleContact.footer_col}>
        <h3>Features</h3>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
    </div> 
    <div class={styleContact.footer_col}>
        <h3>Resources</h3>
        <li>Guides</li>
        <li>Research</li>
        <li>Experts</li>
        <li>Marketing Service</li> 
    </div> 
    <div class={styleContact.footer_col}>
        <h3>Newsletter</h3>
        
    </div>
    <div class={styleContact.copyright}>
<p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
        <div class={styleContact.pro_links}>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i> 
        </div>
    </div>
</footer>



    </div>
  )
}

export default contact
