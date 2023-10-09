import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">There's much going on, and we're actively writing blog posts about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      <Article imgUrl={blog03} date="Sep 12, 2023" text="Join us for OpenAI’s first developer conference on November 6 in San Francisco" link="https://openai.com/blog/announcing-openai-devday"/>

      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" text="OpenAI Red Teaming Network" link="https://openai.com/blog/red-teaming-network"  />
        <Article imgUrl={blog01} date="Sep 26, 2023" text="Introducing OpenAI Dublin" link='https://openai.com/blog/introducing-openai-dublin' />
        <Article imgUrl={blog04} date="Sep 06, 2023" text="Teaching with AI" link="https://openai.com/blog/teaching-with-ai"/>
        <Article imgUrl={blog05} date="Aug 26, 2023" text="Introducing OpenAI London" link="https://openai.com/blog/introducing-openai-london" />
      </div>
    </div>
  </div>
);

export default Blog;