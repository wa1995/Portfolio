import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="project-card">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>
            Description of Project 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="project-card">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>
            Description of Project 2. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
