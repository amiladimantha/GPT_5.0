import React from 'react';
import gpt3Logo from '../../assets/gpt.png';
import './footer.css';

function scrollHome() {
  window.location.href = "#home";
}


const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Would you like to venture into the future ahead of others?</h1>
    </div>

    <div className="gpt3__footer-btn" onClick={scrollHome}>
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Open AI <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Twitter</p>
        <p>Youtube</p>
        <p>Github</p>
        <p>Linkedin</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>About</p>
        <p>Careers</p>
        <p>Security</p>
        <p>Customer Stories</p>
        <p>Blog</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>San Francisco, California</p>
        <p>(555) 555-1234</p>
        <p>info@openai.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-5.0. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;