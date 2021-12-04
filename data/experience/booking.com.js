import PDFOnly from "../../components/PDFOnly";

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
      <h2 className="job-title">Engineering Manager</h2>

      <div className="role__container">
        <h3 className="team-title is-size-6">Team Partner Incentives &amp; Team Upsell</h3>
        <div className="job-desc">
          <p style={{ paddingBottom: "10px" }}>
            Leading engineering for multiple teams managing Frontend and Backend developers
          </p>
          <ul className="job-desc__bullets">
            <li>
              Drafted and executed replatforming strategy to migrate legacy code to microservices and microfrontends
              reducing cost of deployments from 4 hours of manual effort to 15 minutes via pipelines.
            </li>
            <li>
              Extremely hands on and worked on writing frontend code, autmations, developing CI/CD as needed during the
              project
            </li>
            <li>
              Fostered engineering team to adopt new practices for better code quality like having 85% unit test
              coverage, code ownership, E2E test coverage for all critical flows and setting up business and continuity
              tests according to SRE guidelines like failover, capacity and security
            </li>
            <li>
              Introduced SLOs to ensure that teams are on track to deliver. Reconstructed other monitoring and alerts at
              various orchestration points to position the team better at handling incident management
            </li>
            <li>
              Set up documentation strategy for increasing the bus factor that included preparing architecture diagrams
              like C4 and sequence diagrams for existing flows
            </li>
            <li>Was Responsible performance evaluation and growth of my team members</li>
            <li>Created and executed performance development plans for all reports</li>
            <li>
              Involved in Tech Product Strategy including aligning with Product and UX to translate product goals into
              clear achievable milestones. Liase with FE and BE developers to identify tech debt and bottlenecks and
              prepare a technical roadmap to overcome those challenges.
            </li>
          </ul>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Partner Incentives</h3>
        <div className="job-desc">
          <p style={{ paddingBottom: "10px" }}>Managing a cross functional team of 4 people and working on:</p>
          <ul className="job-desc__bullets">
            <li>Leading the team running incentive campaigns for accommodation partners</li>
            <li>
              Create and maintain an effective frontend product roadmap, including specific projects and tasks, that
              aligns with the strategic direction of the organization and the company. Plan semi-annual team objectives
              and ensure KPIs are tracked, reviewed.
            </li>
            <li>
              Carry out team meetings, agile alignment, retrospectives. Ensure all team members are given a clear
              understanding of their individual objectives and performance and provide regular feedback.
            </li>
            <li>Mentor team members and identify opportunities for them outside the team to leverage and grow.</li>
            <li>
              Onboarding new team members on the team from various roles and ensuring they are up to their productivity
              in an expected time.
            </li>
            <li>
              Create a comfortable and healthy team environment. Keep a check on mental health and provide adequate
              support.
            </li>
          </ul>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Customer Service Innovations Team</h3>
        <div className="job-desc">
          <ul className="job-desc__bullets">
            <li>
              Identify and eliminating friction for customers trying to contact Booking.com, and at the same time
              optimizing the UI so maintain clarity, consistency, and context to both the customer and the support
              staff.
            </li>
            <li>
              Analyzing common customer behavior and identify patterns in customer service tickets and develop
              innovative solutions to reduce human handling and foster automation.
            </li>
            <li>
              Ran Technical Interviews for frontend developers <PDFOnly>(with Acceptance/Offer Ratio: 0.8)</PDFOnly>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="role__container"
        style={{
          pageBreakBefore: "avoid",
          pageBreakInside: "auto",
        }}
      >
        <h3 className="team-title is-size-6">Onboarding Lead</h3>
        <div className="job-desc">
          <ul className="job-desc__bullets">
            <li>
              Leading and managing the onboarding journey for new hires right from before they join the company until
              the end of their probation. Setting up training, tracking their overall development and providing
              developmental feedback.
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
            <PDFOnly>
              <li>
                Over a span of 4 months, I worked with and successfully integrated 38 people in the company with an
                average of 14 reports at any time.
              </li>
              <PDFOnly>
                <li>
                  I was also a part of a pilot program called "incubator teams" where the new Engineers along with a new
                  Product Owner worked on researching a topic that could produce high value to the company in the
                  future. One such topic that I worked for, the impact of website loading and interaction speed went on
                  successful and eventually converted into a track called "Web Velocity" which is currently supported by
                  25+ people.
                </li>
              </PDFOnly>
            </PDFOnly>
          </ul>
        </div>
      </div>

      <div className="role__container" style={{ pageBreakBefore: "always" }}>
        <h3 className="team-title is-size-6">Landing Pages Team</h3>
        <div className="job-desc">
          <ul className="job-desc__bullets">
            <li>
              Worked on conducting user research, applying the learnings from user research in form of A/B Tests to
              optimize Booking.com landing pages (mobile, tablet and web) serving traffic from various sources like meta
              partners, SEO, PPC, etc.
            </li>
            <li>
              Built tools to automate processes like linting checks, boilerplate to create new A/B tests, etc. using
              Bash and Node.JS.
            </li>
            <li>Also, supported and facilitated onboarding new developers on the team.</li>
          </ul>
        </div>
      </div>

      <div className="role__container">
        <h3 className="team-title is-size-6">Other Previous Teams</h3>
        <div className="job-desc">
          <ul className="job-desc__bullets">
            <li>
              Worked on rewriting the core routing component of the system and a new search box along with routine
              Frontend / Javascript tasks. I also worked on implementing Google Analytics events and dimension for
              various user interactions.
            </li>
            <li>
              Worked for over a year on parts of Mobile and Tablet website. Other daily activities include generating
              experiment ideas for A/B Testing, prioritizing and implementing them. I also worked on optimizing the
              mobile website for better performance. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Booking;
