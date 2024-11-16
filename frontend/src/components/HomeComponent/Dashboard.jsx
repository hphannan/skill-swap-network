import React, { Component } from 'react';
import { GiCash } from "react-icons/gi";
import { FcCollaboration } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div >
            <div class="banner">
                <div class="navbar">
              <img src="/images/logo.png" alt="Logo" className="logo" />
        
            <ul>
            <li> <a class="active" href="home">Home</a></li>
            <li> <a href="">Skill swaps</a></li>
            <li> <a href="create">create skill listening</a></li>
            <li> <a href="about">about us </a></li>
            <li> <a href=""> suggested people</a></li>   
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
            <li> <a href="login">Login/signup</a></li>
        
           </ul>
           </div>
            <div class="content">
            <h1>
                Learn Any Skill Without Spending A Dime
            </h1>
           <p> Subcribe Easy Totorials YouYube Channel to Watch more Videos, press 
            the bell icon to get latest updates.  </p>
             <div>
             <button type="button" href="skill"><span></span>My Skills</button>
            <button type="button"><span></span>SKILL DETAIL</button>
             </div> </div>
           </div>


           <section id="features">
        <h1>Awesome Features</h1>
        <p>Replenish man have thing gathering lights yielding shall you </p>
        <div class="fea-base">
           <div class="fea-box">
            <br/>
           <GiCash className="icon"/>
           <br/>
           
             <h3>Cashless System</h3>
             <p>One make creepeth, man bearing theira firmament won't great heaven</p>
             <br/>
           </div>
        
           <div class="fea-box">
            <br/>
            <FcCollaboration className="icon"/>
           <br/>
           
           <h3>Foster collaboration</h3>
           <p>One make creepeth, man bearing theira firmament won't great heaven</p>
             <br/>
           </div>
            
           <div class="fea-box">
            <br/>
            <VscWorkspaceTrusted className="icon" />
           <br/>
           
           <h3>Trusted Community</h3>
           <p>One make creepeth, man bearing theira firmament won't great heaven</p>
             <br/>
           </div>
        </div>
        <br/>
        <br/>
  </section>
<br/>
<br/>
         
  <section id="course">
        <h1>Our Popular Skills</h1>
        <p> A platform allowing users to trade skills like design for
            coding.
            Facilitates collaboration and learning without monetary
            transactions.
            Encourages a community-driven approach to skill-building. </p>
        <div class="course-box">

            <div class="courses">
            <img src='' />
                <div class="details">
                      <span>Updated 21/8/21</span>
                      <h6>JavaScript Beginners Course</h6>
                     <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>(239)</span>
                     </div>
                </div>
                   
            </div>
           <div class="courses">
            <img src="" alt=""/>
            <div class="details">
                  <span>Updated 21/8/21</span>
                  <h6>Computer Networking Course</h6>
                 <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(239)</span>
                 </div>
            </div>
                 
        </div>
          <div class="courses">
              <img src="" alt=""/>
              <div class="details">
                    <span>Updated 21/8/21</span>
                    <h6>Database Administration Course</h6>
                   <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span>(239)</span>
                   </div>
              </div>
                 
          </div>
          <div class="courses">
            <img src="" alt=""/>
            <div class="details">
                  <span>Updated 21/8/21</span>
                  <h6>Mubile Application Development Course</h6>
                 <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(239)</span>
                 </div>
            </div>
                
        </div>
        <div class="courses">
            <img src="" alt=""/>
            <div class="details">
                  <span>Updated 21/8/21</span>
                  <h6>Website Development Course</h6>
                 <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(239)</span>
                 </div>
            </div>
               
        </div>
        <div class="courses">
            <img src="" alt=""/>
            <div class="details">
                  <span>Updated 21/8/21</span>
                  <h6>Amzon Cloud computing Course</h6>
                 <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(239)</span>
                 </div>
            </div>
            
                 
        </div>
     
        </div>
        <br/>
        <br/>
    </section>
<br/>
<br/>
    <section id="registration">
        <div class="reminder">
            <p>Get 100 online skills for free</p>
            <h1>Register To Get It</h1>
            <div class="time">
                <div class="date">
                    18 <br/> Days
                </div>
                <div class="date">
                    06 <br/> Hours
                </div>
                <div class="date">
                    50 <br/> Mins
                </div>
            </div>
        </div>

        <div class="form">
            <h3>Create Free Amount Now!</h3>
            <input type="text" placeholder="Name" name="" id=""/>
            <input type="text" placeholder="Email Adress" name="" id=""/>
            <input type="text" placeholder="Phone Number" name="" id=""/>
                <div class="btn">
                    <a class="yellow" href="#">Submit</a>  
                </div>
        </div>
        <br/>
        <br/>
</section>

<br/>
    <br/>
    <section class="contact-buttons">
        <h2 class="line">Don't wait any longer.Contact us!</h2>
        <button class="whatsapp-button"><i class="fab fa-whatsapp"></i> WhatsApp <span class="phone-number">123-456-7890</span></button>
        <button class="facebook-button"><i class="fab fa-facebook"></i> Facebook <span class="phone-number">123-456-7890</span></button>
        <button class="call-button"><i class="fas fa-phone"></i> Call <span class="phone-number">123-456-7890</span></button>
       </section>
       <br/>
       <br/>
       <section id="experts">
        <h1>Comunity Experts</h1>
        <p>Replenish man have thing gathering lights yielding shall you </p>
        <div class="expert-box">
            <div class="profile">
                <img src="" alt=""/>
                <h6>Ema Irnik</h6>
                <p>Python & Algorithm Expert</p>
                <div class="pro-links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div class="profile">
                <img src="" alt=""/>
                <h6>Ema Irnik</h6>
                <p>Python & Algorithm Expert</p>
                <div class="pro-links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div class="profile">
                <img src="" alt=""/>
                <h6>Ema Irnik</h6>
                <p>Python & Algorithm Expert</p>
                <div class="pro-links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div class="profile">
                <img src="" alt=""/>
                <h6>Ema Irnik</h6>
                <p>Python & Algorithm Expert</p>
                <div class="pro-links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    </section>
<br/>
<br/>

          <footer>
                <div class="footer-col">
                   <h3> Top Products</h3>
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
            < input type="text" placeholder="Your Email address"/>
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

export default Dashboard
