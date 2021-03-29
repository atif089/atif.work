import React from "react";
import Head from "../components/head";
import dynamic from "next/dynamic";

import "./_base.scss";
import "./_print.scss";

import { schema as Person, schemaAsString } from "../data/schema/001_person-main";

import PDFOnly from "../components/PDFOnly";

import BookingExperience from "../data/experience/booking.com";
import AmazonExperience from "../data/experience/amazon.com";

// Lazy load these components
const ProfileIcons = dynamic(import(/* webpackChunkName: "lazy-load-component" */ "../components/ProfileIcons"));
const ThinkfulExperience = dynamic(import(/* webpackChunkName: "lazy-load-component" */ "../data/experience/thinkful"));
const UHGExperience = dynamic(import(/* webpackChunkName: "lazy-load-component" */ "../data/experience/uhg"));
const Skills = dynamic(import(/* webpackChunkName: "lazy-load-component" */ "../components/Skills"));

const Home = () => (
  <div id="app">
    <Head title={`${Person.name} | C.V | Resume | Personal Website | atif.work`} />

    <div className="container">
      <div className="section">
        <div className="columns is-vertical-center">
          <div className="column is-one-fifth profile-pic__container">
            <img
              className="profile-pic"
              alt="Ameenuddin Atif Mohammed"
              loading="lazy"
              src="/static/atif-mohammed-150.webp"
              srcSet="/static/atif-mohammed-225.webp 1.5x,
                      /static/atif-mohammed-300.webp 2x,
                        /static/atif-mohammed-450.webp 3x"
            />
          </div>
          <div className=" column title__container">
            <span className="title">{Person.name}</span>
          </div>
          <div className="column is-one-fifth is-contact">
            <p>{Person.telephone}</p>
            <p>{Person.email}</p>
            <ProfileIcons person={Person} />
          </div>
        </div>
      </div>

      <div className="section achievements" style={{ pageBreakInside: "avoid" }}>
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="main-heading">Achievements</div>
            <div className="achievements--list">
              <h3>Patent</h3>
              <p>
                Awarded Patent for Marketplace Seller Referrals (expiry 2035, Patent Number{" "}
                <a href="https://patents.google.com/patent/US10007937B1/en">US10007937B1</a>)
              </p>
              <h3>Front End Development Mentor</h3>
              <p>Mentored over 25 students for Front End Development (HTML, CSS, JS).</p>
              <PDFOnly>
                <h3>Freelance / Consulting</h3>
                <p>
                  Achieved a Top-Rated Status on Upwork - This is achieved by freelancers who secure a 95% or better
                  overall positive feedback on 12+ projects in a year.
                </p>
                <p>
                  Offered consulting and development services over 12 years to small/medium business owners around
                  website/mobile development, online presence, and business automation.
                </p>
              </PDFOnly>
            </div>
          </div>
          <div className="column">{process.browser && <Skills />}</div>
        </div>
      </div>

      <div className="section" style={{ pageBreakBefore: "auto" }}>
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
