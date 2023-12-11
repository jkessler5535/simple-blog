import React from 'react';
import './Home.css';
import coffeeImage from '../images/coffee.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-img-container">
          <img src={coffeeImage} alt="coffee/kamal-preet" className="hero-img" style={{ backgroundColor: "#ced4da", maxWidth: "80%", height: "auto" }} />
        </div>
          <div className="content">
            <div className="inner-content">
              <h1>&#x1F343; Welcome to my blog</h1>
                <p>
                  Hey there, fellow health enthusiasts!
                  Welcome to my vibrant corner of the internet
                  where I share my thoughts on various topics related to food and wellness. Grab a cup of your favorite herbal tea, kick off those shoes, and get cozy because we're about to
                  embark on an exciting adventure together!

                  Don't forget to sign up for my newsletter where you'll be the first to hear about
                  my newest blogs when they drop!
                </p>
            </div>
          </div>
      </div>
      <hr></hr>
      

      <div className="blog-section">
        <div id="blogs">
          <h4>Recent Posts</h4>
          <ul className='blog-posts'>
            <li>
              <a href="/blog1" className="blog-post">Importance of Fasting</a>
            </li>
            <li>
              <a href="/blog2" className="blog-post">Vitamin D</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

 
     
  );
}

export default Home;