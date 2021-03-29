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
        <div className="job-desc">
          <p>
            Remotely provide weekly one on one support, feedback, help and advice to students working through the
            front-end web development curriculum. Worked with over 25 students, with a good number of them working as
            full time Front-end developers across the globe.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
