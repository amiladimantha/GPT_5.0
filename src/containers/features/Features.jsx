import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Versatile Natural Language Processing',
    text: 'GPT-5, like its predecessor GPT-4.5, excels in responding to natural language questions and prompts. It can follow complex instructions, solve difficult problems, perform math operations, answer questions, make inferences, and generate stories.'
  },
  {
    title: 'Strong Performance on Standardized Tests',
    text: "GPT-5's abilities were evaluated using standardized tests, including the Bar Exam and SAT Evidence-Based Reading & Writing exam. It achieved high scores, showcasing its ability to generate coherent responses based on the vast knowledge it acquired during training."
  },
  {
    title: 'Token Prediction and Training',
    text: "GPT-5's training methodology includes predicting the next token in a sequence of text. While the specific training process is proprietary, it typically involves converting data into tokens, refining the dataset, and applying reinforcement learning. Adjustments to the model's weights during training enhance its understanding of semantic relationships."
  },
  {
    title: 'Chat Completions API and Upgrades',
    text: "OpenAI offers the Chat Completions API, enabling developers to leverage GPT-5 for interactive conversational tasks, such as chatbots. The API has seen improvements, and in January 2024, it will transition to using even newer completion models. Additionally, fine-tuning capabilities for GPT-5 are expected to be available, following the pattern established with GPT-4.5."
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