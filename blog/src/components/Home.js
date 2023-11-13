import React from 'react';
import  './Home.css';


const Home = ()=> {
  return (
    <div className="home-page">
      <div id="intro">
        <h1 className="intro-heading">Jamie Kessler</h1>
        <h2 className="sub-heading">Front End Devloper
        </h2>
      </div>

      <div id="blogs">
          <h4>Recent Posts</h4>
            <ul className="blog-posts">
              <li>
                <a href="/blog" className="blog-post">Importance of Fasting
                </a>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default Home;