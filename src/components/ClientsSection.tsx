import React from 'react';

const ClientsSection: React.FC = () => {
  // Create array for client logos (we'll use placeholder images)
  const clientLogos = Array.from({length: 18}, (_, i) => ({
    id: i + 1,
    src: `https://via.placeholder.com/120x60/cccccc/666666?text=Client+${i + 1}`,
    alt: `Client Logo ${i + 1}`
  }));

  return (
    <section className="clients">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <h2 className="section-title">
              Agency Pride<br />
              Reflected in<br />
              Partners' Quality
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul>
              {clientLogos.map((logo) => (
                <li key={logo.id}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
