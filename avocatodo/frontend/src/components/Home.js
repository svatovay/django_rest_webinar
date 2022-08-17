import React from 'react';
import '../bootstrap.css';


const Home = () => {
  return (
    <div className="container">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Django REST Framework project</h1>
        <p className="col-lg-10 fs-4">
          It's my first DRF project.
          Here used DRF/React.js/SQLite.
          This project is to-dos app.
        </p>
      </div>
    </div>
  );
}

export default Home
