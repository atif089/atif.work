import React from "react";
import Head from "../components/head";
import dynamic from "next/dynamic";

import "./_base.scss";

import { schema as Person, schemaAsString } from "../data/schema/001_person-main";

import PDFOnly from "../components/PDFOnly";

import ProfileIcons from "../components/ProfileIcons";

import BookingExperience from "../data/experience/booking.com";
import AmazonExperience from "../data/experience/amazon.com";

const ThinkfulExperience = dynamic(import("../data/experience/thinkful"));
const UHGExperience = dynamic(import("../data/experience/uhg"));
const Skills = dynamic(import("../components/Skills"));

const Home = () => (
  <div id="app">
    <Head title={`${Person.name} | C.V | Resume | Personal Website | atif.work`} />

    <div className="container">
      <div className="section">
        <div className="columns is-vertical-center">
          <div className="column is-one-fifth profile-pic__container">
            <img
              className="profile-pic"
              src="/static/atif-mohammed-150.jpg"
              srcSet="/static/atif-mohammed.jpg 2x"
              alt="Ameenuddin Atif Mohammed"
              loading="lazy"
            />
          </div>
          <div className=" column title__container">
            <span className="title">{Person.name.toUpperCase()}</span>
          </div>
          <div className="column is-one-fifth is-contact">
            <p>{Person.telephone}</p>
            <p>{Person.email}</p>
            <ProfileIcons person={Person} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="main-heading">Experience</div>
        <div className="experience-holder">
          <BookingExperience />
          <AmazonExperience />
          {process.browser && (
            <>
              <ThinkfulExperience />
              <UHGExperience />
            </>
          )}
        </div>
      </div>

      <div className="section achievements" style={{ pageBreakInside: "avoid" }}>
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="main-heading">Achievements</div>
            <div className="achievements--list">
              <h3>Amazon Patent Award</h3>
              <p>
                Filed for a patent in the USPTO Office related to Marketing Industry in May 2013. (Patent Application
                Number - 13/924,077)
              </p>

              <h3>Front End Development Mentor</h3>
              <p>Mentored over 25 students for Front End Development (HTML, CSS, JS).</p>

              <PDFOnly>
                <h3>Freelance Consulting</h3>
                <p>
                  Achieved a Top-Rated Status on Upwork platform - This is achieved by freelancers who secure a 95% or
                  better feedback on 12+ projects in a year.
                </p>
                <p>
                  Offered development and consulting for 12 years to small and medium business owners from family and
                  friends to other seeking help on freelance platforms like Elance, Upwork, etc. with website/mobile
                  development, online presence, and business automation.
                </p>
              </PDFOnly>
            </div>
          </div>
          <div className="column">{process.browser && <Skills />}</div>
        </div>
      </div>

      <div className="section">
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
    </div>

    {/* Microformats / JsonLD */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaAsString }} />
  </div>
);

export default Home;
