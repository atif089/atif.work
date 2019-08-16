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
      <h2 className="job-title">
        FrontEnd Developer <PDFOnly>&amp; Team Lead</PDFOnly>
      </h2>

      <div className="role__container">
        <h3 className="team-title is-size-6">Customer Service Innovations Team</h3>
        <div className="job-desc">
          <PDFOnly>
            <p style={{ paddingBottom: "10px" }}>Managing a team of 5 people and worked together on:</p>
          </PDFOnly>
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
          </ul>
        </div>
      </div>

      <div
        className="role__container"
        style={{
          pageBreakBefore: "avoid",
          pageBreakInside: "auto"
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
              <li>Over a span of 4 months, I worked with and successfully integrated 38 people in the company.</li>
              <li>
                I was also a part of a pilot program called "incubator teams" where the new Engineers along with a new
                Product Owner worked on researching a topic that could produce high value to the company in the future.
                One such topic that I worked for, the impact of website loading and interaction speed went on successful
                and eventually converted into a track called "Web Velocity" which is currently supported by 15+ people.
              </li>
            </PDFOnly>
          </ul>
        </div>
      </div>

      <div className="role__container">
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
        <h3 className="team-title is-size-6">Other Teams</h3>
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
