import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/HM-Talha" className="btn">GitHub</a>
          <a href="https://github.com/HM-Talha" className="btn btn-primary">Live Demo</a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
