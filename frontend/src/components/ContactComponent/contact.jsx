import React from 'react'
import './contact.css';
const contact = () => {
  return (
    <div>
    
    <div class="con_banner">
        <div class="con_navbar">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <ul>
        
        <li> <a class="active" href="home">Home</a></li>
            <li> <a href="">Skill swaps</a></li>
            <li> <a href="">create skill listening</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a href=""> suggested people</a></li>   
            <li> <a class="active" href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
            <li> <a href="login">Login/signup</a></li>
           
        </ul>
        </div>
        <div class="content">
            <h1 >
                Contact Us
            </h1>
      </div>
        </div>



<section id="section-wrapper">
             <div class="box-wrapper">
            <div class="info-wrap">
                <h2 class="info-title">Contact Information</h2>
                <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul class="info-details">
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
                
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div class="form-wrap">
                <form action="#" method="POST" onsubmit="return validateForm()">   
                    <h2 class="form-title">Send us a message</h2>
                    <div class="form-fields">
                        <div class="form-group">
                            <input type="text" class="fname" placeholder="First Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="lname" placeholder="Last Name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="email" placeholder="Mail"/>
                        </div>
                        <div class="form-group">
                            <input type="number" class="phone" placeholder="Phone"/>
                        </div>
                        <div class="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" class="submit-button"/>
                </form>
            </div>
        </div>
    
        <br/>
    
</section>


<br/>
<footer>
    <div class="footer-col">
        <h3>Top Products</h3>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
    </div>
    <div class="footer-col">
        <h3>Quick Links</h3>
        <li>Jobs</li>
        <li>Brand Assests</li>
        <li>Investor Relations</li>
        <li>Team of Service</li>

    </div> 
    <div class="footer-col">
        <h3>Features</h3>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
    </div> 
    <div class="footer-col">
        <h3>Resources</h3>
        <li>Guides</li>
        <li>Research</li>
        <li>Experts</li>
        <li>Marketing Service</li> 
    </div> 
    <div class="footer-col">
        <h3>Newsletter</h3>
        <p>you can trust us. we only send promo offers,</p>
        <div class="subscribe">
            <input type="text" placeholder="Your Email address"/>
            <a href="#" class="yellow">SUBSCRIBE</a>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
        <div class="pro-links">
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
