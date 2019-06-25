const Booking = () => (
  <div className="columns">
    <div className="column is-one-third">
      <h3 className="company">Thinkful</h3>
      <p className="location">Remote</p>
      <p className="date">
        <span>2013 Oct</span> - <span>2015 Oct</span>
      </p>
    </div>
    <div className="column">
      <h2 className="job-title">FrontEnd Development Mentor</h2>

      <div className="role__container">
        <h3 className="team-title is-size-6">Amazon Local Services</h3>
        <div className="job-desc">
          <p>
            I provide weekly one on one support, feedback, help and advice to students working through the front-end web
            development curriculum and starting soon on NodeJS curriculum.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
