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
import EducationBlock from "@/components/EducationBlock";

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

    <div className="section section-grid experience-section" style={{ pageBreakBefore: "auto" }}>
      <div className="left">
        <h2>Experience</h2>
      </div>
      <div className="right">
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

    <EducationBlock />

    {/* Microformats / JsonLD */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaAsString }} />
  </div>
);

export default Home;
