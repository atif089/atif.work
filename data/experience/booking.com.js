const Booking = () => (
  <div className="columns">
    <div className="experience-header">
      <h2>
        <span className="job-title">Engineering Manager</span> at <span className="company">Booking.com</span>
      </h2>
      <p className="date-and-location">
        <span className="date">
          <span>2014 Aug</span> &mdash; <span>Current</span>
        </span>
        <span className="location">Amsterdam, Netherlands</span>
      </p>
    </div>

    <h3 className="team-title">Partner Incentives, Modifications, Cancellations &amp; Upsell</h3>
    <div className="role__container">
      <div className="job-desc">
        <p style={{ paddingBottom: "10px" }}>
          Leading engineering for multiple cross-functional teams with a head count of 20+ (14 direct reports) managing
          a portfolio of 4 products with diverse user-flows, catering to over 500,000 partners, handling over 5M+
          events/day, and registering over €30M in combined annual revenue.
        </p>
        <ul className="job-desc__bullets">
          <li>
            Took responsibility for maintaining a legacy product with 0 developers and formed a new team reconstructing
            the missing domain knowledge from Perl and migrating it to Java.
          </li>
          <li>
            Formulated and successfully executed a re-platforming strategy to decouple parts of the team's scope from
            the existing monolith and migrate to microservice and microfrontend (Java, React, GraphQL, Kafka)
            effectively reducing deployment effort by 95% (from 4 hours of manual effort to 15 minutes using fully
            automated pipelines).
          </li>
          <li>
            Preparation of organizational design, hiring of engineers, and formation of teams to deliver modernization
            and maintain the products
          </li>
          <li>
            Steered best practices on improving code quality by maintaining minimum test coverage to 85%, adding E2E
            tests to cover all critical user flows, and setting up recurring business and continuity tests like
            failover, capacity, and security according to SRE guidelines.
          </li>
          <li>
            Introduced SLOs to ensure that teams are on track to deliver. Established monitoring and alerts at various
            orchestration points to position the team better at handling incident management. Conducted post-mortem
            analysis of outages and incidents, provided recommendations, and published RFOs (Reason For Outage). Set
            guidelines for the team around outages and firefighting.
          </li>
          <li>
            Improved bus factor by documenting onboarding processes, data workflows, service catalogs, and setting up
            product architecture and other technical documentation
          </li>
          <li>
            Identified communication and psychological safety issues in the teams and facilitated agile bootcamps to
            improve it. Resolved conflicts among team members and took necessary steps to align the team toward a common
            goal
          </li>
          <li>
            Responsible for performance evaluation and growth of team members, part of which was also creating and
            monitoring the progression of performance development plans for all reports
          </li>
          <li>
            Involved in Product Strategy that includes aligning with Product and UX to create meaningful achievable
            milestones. Liaise with FE and BE developers to identify tech debt and bottlenecks and prepare a technical
            roadmap to overcome those challenges.
          </li>
        </ul>
      </div>
    </div>

    <h3 className="team-title">Partner Incentives</h3>
    <div className="role__container">
      <div className="job-desc">
        <p style={{ paddingBottom: "10px" }}>Managing a cross-functional team of 4 people and working on:</p>
        <ul className="job-desc__bullets">
          <li>Leading the team running incentive campaigns for accommodation partners</li>
          <li>
            Create and maintain an effective frontend product roadmap, including specific projects and tasks, that
            aligns with the strategic direction of the organization and the company. Plan semi-annual team objectives
            and ensure KPIs are tracked, and reviewed.
          </li>
          <li>
            Organize and carry out team meetings and scrum ceremonies. Ensure all team members are given a clear
            understanding of their individual objectives and performance and provide regular feedback.
          </li>
          <li>Mentor team members and identify opportunities for them outside the team to leverage and grow.</li>
          <li>
            Onboarding new team members on the team from various roles and ensuring they are up to their productivity in
            an expected time.
          </li>
          <li>Create a comfortable and healthy team environment, check on mental health and provide support.</li>
        </ul>
      </div>
    </div>

    <h3 className="team-title">Customer Service Innovations Team</h3>
    <div className="role__container">
      <div className="job-desc">
        <ul className="job-desc__bullets">
          <li>
            Analyzing common customer behavior and identify patterns in customer service tickets and develop innovative
            solutions to reduce human handling and foster automation.
          </li>
          <li>
            Identify and eliminate points of friction for customers trying to contact Booking.com, and at the same time
            optimizing the UI to maintain clarity, consistency, and context to both the customer and the support staff.
          </li>
          <li>Ran Technical Interviews for frontend developers (with Acceptance/Offer Ratio: 0.8)</li>
        </ul>
      </div>
    </div>

    <h3 className="team-title">Onboarding Lead</h3>
    <div className="role__container">
      <div className="job-desc">
        <ul className="job-desc__bullets">
          <li>
            Leading and managing the onboarding journey for new hires right from before they join the company until the
            end of their probation. Setting up training, tracking their overall development and providing developmental
            feedback.
          </li>
          <li>
            Identifying skills, strengths, weaknesses and mapping interests of the developers and match them to place
            them within different teams in the company.
          </li>
          <li>
            Contributing to the development of advanced tools to make the onboarding process smoother. For example, I
            spent on creating a lot of Google Drive Scripts that helped automate redundant processes like sending
            emails, grooming backlog, setting up automatic calendar invites for important training, tracking feedback
            and producing individual reports from spreadsheets.
          </li>
          <li>Successfully integrated over 38 people in the company with an average of 14 reports at any time.</li>
        </ul>
      </div>
    </div>

    <h3 className="team-title">Other Previous Teams</h3>
    <div className="role__container">
      <div className="job-desc">
        <ul className="job-desc__bullets">
          <li>
            Worked on conducting user research, applying the learnings from user research in form of A/B Tests to
            optimize Booking.com landing pages (mobile, tablet and web) serving traffic from various sources like meta
            partners, SEO, PPC, etc.
          </li>
          <li>
            Built tools to automate processes like linting checks, boilerplate to create new A/B tests, etc. using Bash
            and Node.JS.
          </li>
          <li>
            Worked on rewriting the core routing component of the system and a new search box along with routine
            Frontend / Javascript tasks. I also worked on implementing Google Analytics events and dimension for various
            user interactions.
          </li>
          <li>
            Worked for over a year on parts of Mobile and Tablet website. Other daily activities include generating
            experiment ideas for A/B Testing, prioritizing and implementing them. I also worked on optimizing the mobile
            website for better performance.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Booking;
