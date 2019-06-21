import React from "react";
import Link from "next/link";
import Head from "../components/head";

import "./_base.scss";

import { schema as Person } from "../data/schema/001_person-main";

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

      <div className="section">
        <h2>Experience</h2>
        <div className="experience-holder">
          <BookingExperience />
          <AmazonExperience />
          <ThinkfulExperience />
          <UHGExperience />
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
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
  </div>
);

export default Home;
