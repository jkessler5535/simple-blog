import React from 'react';
import './Home.css';
import coffeeImage from '../images/coffee.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
       <div className="hero-img-container" style={{ backgroundColor: "#ced4da"}}>
        <img src={coffeeImage} alt="coffee/kamal-preet" className="hero-img" />
       </div>
        <div className="content">
            <div className="inner-content">
            <h1>Welcome to my blog</h1>
              <p>
                Hi! Welcome to the most trusted online source for naturally minded moms… we’re so glad you’re here. We believe
                that moms are the most powerful force on the planet and we’re unwavering in supporting, uplifting, and encouraging each other. Join the tribe
                here!
              </p>
          </div>
        </div>
      </div>
      

      <div className="blog-section">
        <div id="blogs">
          <h4 className="text-danger">Recent Posts</h4>
          <ul className='blog-posts'>
            <li>
              <a href="/blog1" className="blog-post">Importance of Fasting</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

 
     
  );
}

export default Home;