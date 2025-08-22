import React from 'react';

const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Sugar Comms',
      description: 'Specializes in brand consultancy and public relations, helping businesses enhance their brand image and communication strategies.',
      link: '#sugar-comms'
    },
    {
      title: 'Sugar Xperience',
      description: 'Manages corporate events, MICE events, brand launches, and exhibits both nationally and internationally.',
      link: '#sugar-xperience'
    },
    {
      title: 'Sugar Content',
      description: 'Offers creative services and content production, including audiovisual production that captivates and engages audiences.',
      link: '#sugar-content'
    },
    {
      title: 'Sugar Retail',
      description: 'Engages in showroom and experience center designing and fabrication, creating immersive retail environments.',
      link: '#sugar-retail'
    },
    {
      title: 'Sugar Digiverse',
      description: 'Focuses on digital marketing services and IT solutions such as CRM, ERP, and software development to drive digital transformation.',
      link: '#sugar-digiverse'
    }
  ];

  return (
    <section className="icon-content-block">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <h2 className="section-title">Our Capabilities</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          {capabilities.map((capability, index) => (
            <div key={index} className="col-lg-2">
              <div className="content-block">
                <h5>{capability.title}</h5>
                <p>{capability.description}</p>
                <a href={capability.link} className="knowmore">Know More &raquo;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
