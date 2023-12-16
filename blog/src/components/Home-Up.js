import React from 'react';
import './Home-Up.css';

function HomeUp() {
  return (
    <div className="page">
      <a href="/" class="back-home">Go back to <span>Home</span></a>
      <a href="#top" className="back-to-top">Back to top
      </a>
    </div>
   
  );
}

export default HomeUp;