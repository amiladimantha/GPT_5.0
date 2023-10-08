import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Enhanced Natural Language Processing',
    text: 'GPT-5 excels in NLP, solving complex problems, answering questions, and generating narratives.'
    },
    {
    title: 'High Test Performance',
    text: 'GPT-5 scored impressively on standardized tests, showcasing its coherent responses.'
    },
    {
    title: 'Token Prediction in Training',
    text: "GPT-5's training involves predicting text tokens, refining datasets, and adjusting weights for better understanding."
    },
    {
    title: 'Chat Completions API and Advancements',
    text: 'The Chat Completions API for GPT-5 has improved and will transition to newer models in January 2024. Fine-tuning capabilities are expected.'
    },
    ];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The future has arrived, and all you need to do is acknowledge it. Take a step into the future today and make it a reality.</h1>
      <p><a href="#home" style={{fontSize:"18px"}}>Request Early Access to Get Started</a></p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;