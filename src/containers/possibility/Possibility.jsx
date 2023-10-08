import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.jpg';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>In the realm of GPT (Generative Pre-trained Transformers), the possibilities are boundless. These AI models are capable of diverse applications, from generating creative content and aiding in natural language understanding to automating complex tasks and powering innovative solutions in various domains. As GPT continues to evolve, its potential to reshape industries and enhance human-computer interaction seems limitless.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility