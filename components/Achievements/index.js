const Achievements = () => {
  return (
    <div className="section achievements section-grid">
      <div className="left label">
        <h2>Achievements</h2>
      </div>
      <div className="right">
        <h4>Patent</h4>
        <p>
          Awarded Patent for Marketplace Seller Referrals (expiry 2035, Patent Number {" "}
          <a href="https://patents.google.com/patent/US10007937B1/en">US10007937B1</a>)
        </p>
        <h4>Hackathons</h4>
        <p>
          Participated and won several hackathons like AWS Graviton (Cloud), Rapyd (FinTech), and Freshdesk (SaaS/CRM) - {" "}
          <a target="_blank" href="https://devpost.com/atif089">
            devpost.com/atif089
          </a>
        </p>
        <h4>Consulting & Freelance</h4>
        <p>
          Launched an e-commerce project, generating a remarkable GMV of €4M and €10M in 1st and 2nd years respectively.
        </p>
        <p>
          Attained the esteemed Top-Rated status on Upwork, showcasing exceptional technological consultancy and development services for small businesses, earning 95% or higher overall positive feedback on over 12 projects within a single year.
        </p>
        <h4>Mentorship</h4>
        <p>
          Mentored over 25 students as a remote mentor over the platform Thinkful for Front End Development. Some of
          them have successfully transformed careers into Front End Developers.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
