import dynamic from "next/dynamic";

// Required for Static Generation
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

// Data
import { schema as Person, schemaAsString } from "@/data/schema/001_person-main";
import BookingExperience from "@/data/experience/booking.com";
import AmazonExperience from "@/data/experience/amazon.com";

// App Components
import Head from "@/components/head";
import Header from "@/components/Header";
import Achievements from "@/components/Achievements";
import ContactBlock from "@/components/ContactBlock";

// Lazy-Loaded App Components
const Skills = dynamic(import(/* webpackChunkName: "skills" */ "@/components/Skills"));
const ThinkfulExperience = dynamic(import(/* webpackChunkName: "exp-thinkful" */ "@/data/experience/thinkful"));
const UHGExperience = dynamic(import(/* webpackChunkName: "exp-uhg" */ "@/data/experience/uhg"));

const Home = () => (
  <div id="app">
    <Head title={`${Person.name} | C.V | Resume | Personal Website | atif.work`} />

    <Header />
    <ContactBlock />
    <Achievements />

    <div className="section" style={{ pageBreakBefore: "auto" }}>
      <div className="main-heading">Experience</div>
      <div className="experience-holder">
        <BookingExperience />
        <AmazonExperience />
        {process.browser && (
          <>
            {/* <ThinkfulExperience /> */}
            <UHGExperience />
          </>
        )}
      </div>
    </div>

    <div className="section" style={{ pageBreakInside: "avoid" }}>
      <div className="main-heading">Education</div>
      <div className="education-holder">
        <div className="columns">
          <div className="column is-one-third">
            <p className="date">
              <span>2007 Aug</span> - <span>2011 June</span>
            </p>
          </div>
          <div className="column">
            <div className="qualification-title">Bachelor of Technology (Information Technology)</div>
            <div className="college">VIF College of Engineering and Technology, 2007 – 2011</div>
            <div className="location">Hyderabad, India</div>
          </div>
        </div>
      </div>
    </div>

    {/* Microformats / JsonLD */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaAsString }} />
  </div>
);

export default Home;
