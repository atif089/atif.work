const Booking = () => (
  <div className="columns" style={{ pageBreakInside: "avoid" }}>
    <div className="experience-header">
      <h2>
        <span className="job-title">Web Development Engineer</span>
        {" "} at <span className="company">Amazon</span>
      </h2>
      <p className="date-and-location">
        <span className="date">
          <span>2012 Jun</span> &mdash; <span>2014 July</span>
        </span>
        <span className="location">
          Hyderabad, India
        </span>
      </p>
    </div>

    <h3 className="team-title">Amazon Local Services</h3>
    <div className="role__container">
      <div className="job-desc">
        <p>Worked on implementation of UIs for MVP for Amazon Local Services</p>
      </div>
    </div>

    <h3 className="team-title">Amazon Services</h3>
    <div className="role__container">
      <div className="job-desc">
        <p>
          Web Development, A/B Testing and Optimization for Amazon Marketing Websites in US
          and Europe (services.amazon.com, services.amazon.co.uk, services.amazon.fr, services.amazon.de,
          services.amazon.es and services.amazon.it).
        </p>
      </div>
    </div>

    <h3 className="team-title">TCS (Tenancy Configuration System)</h3>
    <div className="role__container">
      <div className="job-desc">
        <p>
          Worked on the UI for a web based application which can orchestrate generation of configuration sets and
          monitoring configuration for new website launches
        </p>
      </div>
    </div>
  </div>
);

export default Booking;
