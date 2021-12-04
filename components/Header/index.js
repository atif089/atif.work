import dynamic from "next/dynamic";

import { schema as Person } from "@/data/schema/001_person-main";

const Header = () => {
  return (
    <>
      <div className="section section-grid">
        <div className="left label">
          <h2>Summary</h2>
        </div>
        <div className="right">
          <h1 className="title">{Person.name}</h1>
          <h2 className="subtitle">{Person.jobTitle}</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
