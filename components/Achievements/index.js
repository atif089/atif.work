const Achievements = () => {
  return (
    <div className="section achievements section-grid">
      <div className="left label">
        <h2>Achievements</h2>
      </div>
      <div className="right">
        <h4>Patent</h4>
        <p>
          Awarded Patent for Marketplace Seller Referrals (expiry 2035, Patent Number{" "}
          <a href="https://patents.google.com/patent/US10007937B1/en">US10007937B1</a>)
        </p>
        <h4>Hackathons</h4>
        <p>
          Participated in various hackathons as a hobby and recently won AWS Graviton Hackathon -{" "}
          <a target="_blank" href="https://devpost.com/atif089">
            devpost.com/atif089
          </a>
        </p>
        <h4>Consulting / Freelance Experience</h4>
        <p>
          Achieved a Top-Rated Status on Upwork by providing technology related consulting and development services to
          small businesses Top-Rated freelancers secure a 95% or better overall positive feedback on 12+ projects in a
          year.
        </p>
        <h4>Front End Development Mentor (2014-2015)</h4>
        <p>
          Mentored over 25 students as a remote mentor over the platform Thinkful for Front End Development. Some of
          them have successfully transformed careers into Front End Developers.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
