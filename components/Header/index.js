import dynamic from "next/dynamic";

import { schema as Person } from "@/data/schema/001_person-main";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="title">{Person.name}</h1>
        <h2 className="subtitle">{Person.jobTitle}</h2>
      </header>
    </>
  );
};

export default Header;
