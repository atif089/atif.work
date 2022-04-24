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

    <h3 className="team-title">Amazon Home Services</h3>
    <div className="role__container">
      <div className="job-desc">
        <p>Front-end development for MVP for Amazon Local Services (now Amazon Home Services).</p>
      </div>
    </div>

    <h3 className="team-title">Amazon Services</h3>
    <div className="role__container">
      <div className="job-desc">
        <p>
          Web Development, A/B Testing and Optimization for Amazon Marketing Websites across US
          and Europe (services.amazon.com, services.amazon.co.uk, services.amazon.fr, services.amazon.de,
          services.amazon.es and services.amazon.it).
        </p>
      </div>
    </div>

    <h3 className="team-title">TCS (Tenancy Configuration System)</h3>
    <div className="role__container">
      <div className="job-desc">
        <p>
          Developed UI for an orchestrate service that generates configuration sets and
          monitoring launching new Amazon websites.
        </p>
      </div>
    </div>
  </div>
);

export default Booking;
