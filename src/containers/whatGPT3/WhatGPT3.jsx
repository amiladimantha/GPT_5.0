import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-5"
        text="GPT stands for 'Generative Pre-trained Transformer,' and it refers to a type of artificial intelligence model designed for natural language processing (NLP) tasks. GPT models are part of a broader category of machine learning models known as transformers."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The potential goes far beyond what you can envision.
      </h1>
      <p><a href="#blog" style={{fontSize:"18px"}}><b>See our Library</b></a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Utilizing chatbots for interactive communication, providing enjoyable and opinion-based conversations."
      />
      <Feature
        title="Knowledgebase"
        text="Establishing a comprehensive knowledgebase for easy access to information, offering a valuable resource for users."
      />
      <Feature
        title="Education"
        text="Enhancing educational experiences through interactive learning tools and resources, making learning accessible and effective."
      />
    </div>
  </div>
);

export default WhatGPT3;
