import React, { useState } from 'react';
import { SiMongodb, SiExpress, SiJavascript, SiFontawesome } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaFont } from 'react-icons/fa';

function HomePage() {
  return (
    <>
      <h1>Welcome to My Portfolio Website</h1>
      <article>
        <p>
          Thank you for visiting my portfolio website! This website showcases my skills and projects using various technologies and methods. I have utilized the following technologies and tools to build this website:
        </p>
        <ul>
          <li><FaHtml5 /> HTML and <FaCss3Alt /> CSS for structuring and styling the web pages</li>
          <li><FaReact /> React for building the dynamic and interactive user interface</li>
          <li><SiJavascript /> JavaScript for adding functionality and interactivity to the website</li>
          <li><SiExpress /> Express as the backend framework for handling server-side logic and API endpoints</li>
          <li><SiMongodb /> MongoDB as the database for storing and retrieving data</li>
          <li><FaDatabase /> Mongoose as the ODM (Object Data Modeling) library for MongoDB</li>
          <li><FaNodeJs /> Node.js as the runtime environment for server-side JavaScript</li>
          <li><FaServer /> REST (Representational State Transfer) architecture for designing the API endpoints</li>
          <li><SiFontawesome /> Icons from popular icon libraries like Font Awesome to enhance the visual appearance</li>
          <li><FaFont /> Google Fonts for adding custom typography to the website</li>
          <li><FaCode /> Optimized images to ensure fast loading times and optimal performance</li>
        </ul>
        <p>
          Feel free to explore my projects, learn more about my skills and experience, and connect with me on social media using the links below. If you have any questions or would like to work together, please don't hesitate to reach out.
        </p>

      </article>
    </>
  );
}

export default HomePage;
