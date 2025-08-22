import React from 'react';
import ourStoryImg from '../assets/images/Our-Story.jpg';

const OurStory: React.FC = () => {
  return (
    <section className="intro-image negmargin">
      <div className="office-slider">
        <figure>
          <img src={ourStoryImg} alt="Our Story" className="negmargin" />
        </figure>
        <div className="right-text">
          <h3>Our Story</h3>
          <p>
            Specializes in brand consultancy and public relations, helping businesses enhance their brand image and communication strategies. This division works closely with clients to develop tailored solutions that resonate with target audiences, building lasting connections through compelling storytelling and strategic positioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
