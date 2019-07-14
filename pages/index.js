import React from "react";
import Link from "next/link";
import Head from "../components/head";

import "./_base.scss";

import { schema as Person, schemaAsString } from "../data/schema/001_person-main";

import BookingExperience from "../data/experience/booking.com";
import AmazonExperience from "../data/experience/amazon.com";
import ThinkfulExperience from "../data/experience/thinkful";
import UHGExperience from "../data/experience/uhg";

const Home = () => (
  <div id="app">
    <Head title={`${Person.name} | Personal Website | C.V | Resume`} />

    <div className="container">
      <div className="section">
        <div className="columns is-vertical-center">
          <div className="column is-one-fifth profile-pic__container">
            <img className="profile-pic" src="/static/atif-mohammed.jpg" alt="" />
          </div>
          <div className=" column title__container">
            <span className="title">{Person.name.toUpperCase()}</span>
          </div>
          <div className="column is-one-fifth is-contact">
            <p>{Person.telephone}</p>
            <p>{Person.email}</p>
            <p className="icons">
              {Person.sameAs.map((url, i) => {
                if (url.indexOf("linkedin") > -1) {
                  return (
                    <Link key={i} href={url}>
                      <a target="_blank">
                        <i className="fab fa-linkedin" />
                      </a>
                    </Link>
                  );
                } else if (url.indexOf("github") > -1) {
                  return (
                    <Link key={i} href={url}>
                      <a target="_blank">
                        <i className="fab fa-github" />
                      </a>
                    </Link>
                  );
                } else if (url.indexOf("atif.work") > -1) {
                  return (
                    <Link key={i} href={url}>
                      <a target="_blank">
                        <i className="fab fa-adobe" />
                      </a>
                    </Link>
                  );
                }
                return null;
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="section achievements">
        <div className="columns">
          <div className="column">
            <div className="main-heading">Achievements</div>
            <div className="achievements--list">
              <h3>Amazon Patent Award</h3>
              <p>
                Filed for a patent in the USPTO Office related to Marketing Industry in May 2013. (Patent Application
                Number - 13/924,077)
              </p>
              <h3>Front End Development Mentor</h3>
              <p>mentored over 25 students for Front End Development (HTML, CSS, JS).</p>
              <div className="cv-only">
                <h3>Freelance Consulting</h3>
                <p>
                  Offered freelance consulting and development for about 8 years using various freelance platforms like
                  Elance, oDesk etc. and also worked with offline Small–Medium Businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="main-heading">Skills</div>
            <div className="skill-cloud">
              <p>
                <span>HTML</span> <span>CSS</span> <span>Javascript</span> <span>NodeJS</span>
                <span>MySQL / MariaDB</span> <span>MongoDB</span> <span>Rethink DB</span>
                <span>React</span> <span>Redux</span> <span>WebPack</span> <span>jQuery</span> <span>Puppeteer</span>
                <span>Google Drive Scripts</span> <span>Postman</span> <span>Git CLI</span>
                <span>AWS</span> <span>Google Cloud Platform</span>
                <span>Nginx</span> <span>Apache</span> <span>PHP/WordPress</span>
                <span>Terraform</span> <span>Docker</span> <span>Vagrant</span> <span>Linux / Bash</span>
                <span>A/B Testing</span> <span>Google Analytics</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ pageBreakBefore: "always" }}>
        <div className="main-heading">Experience</div>
        <div className="experience-holder">
          <BookingExperience />
          <AmazonExperience />
          <ThinkfulExperience />
          <UHGExperience />
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
