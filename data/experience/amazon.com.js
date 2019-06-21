const Booking = () => (
  <div className="columns">
    <div className="column is-one-third">
      <h3 className="company">Amazon.com</h3>
      <p className="location">Hyderabad, India</p>
      <p className="date">
        <span>2012 Jun</span> - <span>2014 July</span>
      </p>
    </div>
    <div className="column">
      <h2 className="job-title">Web Development Engineer</h2>

      <div className="role__container">
        <h3 className="team-title is-size-6">Amazon Local Services</h3>
        <div className="job-desc">
          <p>Worked on implementation of early UI model, PoC for Amazon Local Services</p>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Amazon Services</h3>
        <div className="job-desc">
          <p>
            Working on Web Development, Traffic Analysis, A/B Testing and Optimization for Amazon Marketing Websites in
            US and Europe (services.amazon.com, services.amazon.co.uk, services.amazon.fr, services.amazon.de,
            services.amazon.es and services.amazon.it).
          </p>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">TCS (Tenancy Configuration System)</h3>
        <div className="job-desc">
          <p>
            Worked on the UI for a web based application which can orchestrate generation of configuration sets and
            monitoring configuration for new website launches
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
