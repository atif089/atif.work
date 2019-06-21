const Booking = () => (
  <div className="columns">
    <div className="column is-one-third">
      <h3 className="company">Booking.com</h3>
      <p className="location">Amsterdam, Netherlands</p>
      <p className="date">
        <span>2014 Aug</span> - <span>Current</span>
      </p>
    </div>

    <div className="column">
      <h2 className="job-title">FrontEnd Developer &amp; Onboarding Lead</h2>

      <div className="role__container">
        <h3 className="team-title is-size-6">Customer Service Innovations Team</h3>
        <div className="job-desc">
          <p>
            Analyzing and identifying friction in a customers journey to contact Booking.com and eliminate them.
            Analyzing common customer service ticket patterns and innovating solutions to automate them or to reduce
            human handled tickets.
          </p>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Onboarding Leading (Management)</h3>
        <div className="job-desc">
          <p>
            Leading the entire onboarding journey for new hires and onboarding them to make them productive in 2 months.
            Setting up trainings, tracking their development and providing feedback (and automating these processes
            using Google Drive Scripts). Identifying skills, strengths, weaknesses and interests of the developers and
            match them to place them within different teams in the company.
          </p>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Landing Pages Team</h3>
        <div className="job-desc">
          <p>
            In Landing Pages Team, I work on making user research, applying user research data in terms of A/B Tests and
            optimizing landing pages (mobile, tablet and web) for traffic sources from meta partners, SEO etc. and
            building tools to automate processes using Bash and Node.JS. Also, supported and facilitated onboarding new
            developers on the team.
          </p>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Destination Finder Team</h3>
        <div className="job-desc">
          <p>
            As a JavaScript developer in Destination Finder, I worked on rewriting the core routing component of the
            system and a new search box along with routine Frontend / Javascript tasks. I also implemented Google
            Analytics to track user’s behavior on different pages and at different actions on a page. These metrics
            along with A/B Testing helped on decision making for better usability and conversion.
          </p>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Mobile and Tablet Teams</h3>
        <div className="job-desc">
          <p>
            I worked for over a year on parts of Mobile and Tablet website. My daily activities include generating
            experiment ideas for A/B Testing, prioritizing and implementing them. I also worked on optimizing the mobile
            website for better performance. 
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
