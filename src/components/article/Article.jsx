import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <a className="article_heading" href={link} target='_blank' rel="noopener noreferrer"><h3>{text}</h3></a>        
      </div>
      <a href={link} target='_blank' rel="noopener noreferrer"> <p>Read Full Article</p></a>       
    </div>
  </div>
);

export default Article;