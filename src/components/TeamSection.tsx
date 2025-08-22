import React from 'react';
import teamImg from '../assets/images/team.jpg';

const TeamSection: React.FC = () => {
  return (
    <section className="team">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <h2 className="section-title">Our <span>Team</span></h2>
            <h5>
              Our team goes beyond the surface to uncover what truly makes your brand unique. We strive to create compelling narratives that capture the essence of your story and resonate with your audience.
            </h5>
            <a href="#team" className="knowmore">
              Know More &raquo;
            </a>
          </div>
          <div className="col-lg-6">
            <img src={teamImg} className="negmargin" alt="Our Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
