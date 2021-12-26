import { schema as Person } from "@/data/schema/001_person-main";

const EducationBlock = () => {
  return (
    <>
      <div className="section section-grid education-section">
        <div className="left">
          <h2>Education</h2>
        </div>
        <div className="right">
          <p>
            <strong>
              <h4>Bachelor of Technology (2007 – 2011)</h4>
              <p>Computer Science and Information Technology</p>
              <p>VIF College of Engineering and Technology &mdash; Hyderabad, India</p>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default EducationBlock;
