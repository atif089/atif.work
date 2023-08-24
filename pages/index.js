import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Required for Static Generation
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

// removes JS
export const config = {
  unstable_runtimeJS: false,
}

// App Components
import Head from "@/components/Head";
import Header from "@/components/Header";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import ContactBlock from "@/components/ContactBlock";
import EducationBlock from "@/components/EducationBlock";

// Data
import { schema as Person, schemaAsString } from "@/data/schema/001_person-main";
import CenomiExperience from "@/data/experience/cenomi";
import BookingExperience from "@/data/experience/booking.com";
import AmazonExperience from "@/data/experience/amazon.com";

const Home = () => {

  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/pdf") {
      document.querySelector("html").classList.add("lite");
    }
  });

  // Lazy-Loaded App Components
  const UHGExperience = dynamic(() => import(/* webpackChunkName: "exp-uhg" */ "@/data/experience/uhg"));

  return (
    <div id="app">
      <Head title={`${Person.name} | C.V | Resume | Personal Website | atif.work`} />

      <Header />
      <ContactBlock />
      <Achievements />

      <div className="section section-grid experience-section">
        <div className="left">
          <h2>Experience</h2>
        </div>
        <div className="right">
          <CenomiExperience />
          <BookingExperience />
          <AmazonExperience />
          <UHGExperience />
        </div>
      </div>

      <EducationBlock />
      <Skills />

      {/* Microformats / JsonLD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaAsString }} />
    </div>
  )
};

export default Home;
