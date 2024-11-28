import React from 'react'
import { GiCash } from "react-icons/gi";
import { FcCollaboration } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import style from'./About.module.css';

const About = () => {
  return (
    <div>
      
     <div class={style.a_banner}>
        <div class={style.a_navbar}>
        <img src="/images/logo.png" alt="Logo" className={style.logo}/>
        <ul>

        <li> <a  href="/">Home</a></li>
            <li> <a href="create">create skill listening</a></li>
            <li> <a  href="myskill">My Skill </a></li>
            <li> <a href="swap">Skill swaps</a></li>
            <li> <a className={style.active} href="about">about us </a></li>
            <li> <a href="contact">Contact us</a></li>
            <li> <a href="/user/profile">Profile</a></li>
           
        </ul>
        </div>
        <div class={style.content}>
            <h1>
           About us

            </h1>
      </div>
        </div>
 <section id={style.about_container}>
    <div id={style.about_img}>
    <img src="images/15.jpg" alt=""/>
    </div>
    <div id={style.about_text}>
      <h2>Welcome to Swapify, Enhance your skills without sending your dime </h2>
      <p>You can start and finish one of these popular cources in under a day - for free! check out the list below.. Take the cource for free</p>

        <div class={style.about_fe}>
            <img src="images/fe1.png" />
            <div class={style.fe_text}>
                <h5>400+ skills</h5>
                <p>You can start or finish these popular cources in under our 
                sites </p>
                <br/>
            </div>
        </div>
        <div class={style.about_fe}>
            <img src="images/fe2.png" />
            <div class={style.fe_text}>
                <h5>400+ Skills</h5>
                <p>You can start or finish these popular cources in under our sites </p><br/>
            </div>
        </div>
    </div>
 </section>
 
 <section id={style.features}>
        <h1>Awesome Features</h1>
        <p>"Discover our awesome features that make skill exchange easy, secure, and collaborative." </p>
        <div class={style.base}>
           <div class={style.box}>
            <br/>
           <GiCash className={style.icon}/>
           <br/>
           
             <h3>Cashless System</h3>
             <p>"SkillSwap enables seamless skill exchanges through a cashless, digital system.</p>
             <br/>
           </div>
        
           <div class={style.box}>
            <br/>
            <FcCollaboration className={style.icon}/>
           <br/>
           
           <h3>Foster collaboration</h3>
           <p>"Foster collaboration by enabling easy, cashless skill exchanges."</p>
             <br/>
           </div>
            
           <div class={style.box}>
            <br/>
            <VscWorkspaceTrusted className={style.icon} />
           <br/>
           
           <h3>Trusted Community</h3>
           <p>"Building a trusted community for secure and reliable skill exchanges."</p>
             <br/>
           </div>
        </div>
        <br/>
        <br/>
  </section>

<section id={style.trust}>
    <h1> Trusted By</h1>
    <p>Replenish man have thing gathering lights yielding shall you </p>
    <div class={style.trust_img}>
        <img src="/images/trust1.png" alt=""/>
        <img src="/images/trust2.png" alt=""/>
        <img src="/images/trust3.png" alt=""/>
        <img src="/images/trust4.png" alt=""/>
        <img src="/images/trust5.png" alt=""/>
        <img src="/images/trust6.png" alt=""/>
    </div>
</section>
 <footer class={style.f_about}>
    <div class={style.footer_col}>
        <h3>Top Products</h3>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
    </div>
    <div class={style.footer_col}>
        <h3>Quick Links</h3>
        <li>Jobs</li>
        <li>Brand Assests</li>
        <li>Investor Relations</li>
        <li>Team of Service</li>

    </div> 
    <div class={style.footer_col}>
        <h3>Features</h3>
        <li>Manage Reputation</li>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
    </div> 
    <div class={style.footer_col}>
        <h3>Resources</h3>
        <li>Guides</li>
        <li>Research</li>
        <li>Experts</li>
        <li>Marketing Service</li> 
    </div> 
    <div class={style.footer_col}>
        <h3>Newsletter</h3>
        
    </div>
    <div class={style.copyright}>
<p>Copyright © 2023 |All Rights Reserved |This template is made by Eduquest.edu.pk</p>
        <div class={style.pro_links}>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i> 
        </div>
    </div>
</footer>



    </div>
  )
}

export default About
