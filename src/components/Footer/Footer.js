import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div className='foot'>
              <div>
                         <div> 
                         <h2>Do You Have Questions  ?</h2> 
                         <p>we'll help you to grow your career and growth</p> 
                         </div>
                         <a href="/help">Contact Us Today</a>
              </div>

              <div className='second'>
                   <div> 
                           <h1>La bombe</h1> <br/>
                           <h3>Do You Need Help With Anything  ? </h3> <br/>
                           <p> Receive updates, hot deals, tutorials, discounts sent straignt in your <br/> inbox every month </p> <br/>
                           <input type="mail" name='your_mail' placeholder='Email Adress' /> <a href="/subscribe">Subscribe</a>
                   </div> 

                   <div> 
                         <ul>
                                <li>Layouts</li>
                                <li><a href=""> Home Page </a></li>
                                <li><a href=""> About Page </a></li>
                                <li><a href=""> Service Page </a></li>
                                <li><a href=""> Property Page </a></li>
                                <li><a href=""> Contact Page </a></li>
                         </ul>

                         <ul>
                         <li>All Sections</li>
                         <li><a href="">Headers</a></li>
                         <li><a href="">Testimonials</a></li>
                         <li><a href="">Features</a></li>
                         <li><a href="">Attractive</a></li>
                         <li><a href="">Videos</a></li>
                         </ul>

                         <ul>
                         <li>Company</li>
                         <li><a href=""> Blog </a></li>
                         <li><a href="">Pricing</a></li>
                         <li><a href="">Login</a></li>
                         <li><a href="">Changelog</a></li>
                         </ul>
                   </div>
              </div>
              <hr/>
        </div>
    );
}

export default Footer;
