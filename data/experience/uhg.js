const Booking = () => (
  <div className="columns">
    <div className="column is-one-third">
      <h3 className="company">UnitedHealth Group</h3>
      <p className="location">Hyderabad, India</p>
      <p className="date">
        <span>2011 Jul</span> - <span>2012 Jun</span>
      </p>
    </div>
    <div className="column">
      <h2 className="job-title">Software Engineer</h2>

      <div className="role__container">
        <div className="job-desc">
          <p>
            Working on development and maintenance of client portals for UHC M&amp;R Insurance Solutions. Work involved
            integrating UI Comps supplied by onshore resource into the existing website built upon Springs Framework
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
