import { schema as Person } from "@/data/schema/001_person-main";
import PDFOnly from "@/components/PDFOnly";


const ContactBlock = () => {
  return (
    <div className="section contact-section">
      <div className="contact-section-row">
        <address>
          <span>Email: atif089@gmail.com</span>
          <span>Mobile: +31 644 939 013</span>
          <span>Alternate: +966 564 294 905</span>
        </address>
      </div>
      <div className="contact-section-row">
        <a href="https://atif.work">atif.work</a>
        <a href="https://www.linkedin.com/in/atif089/">linkedin.com/in/atif089</a>
        <a href="https://github.com/atif089">github.com/atif089</a>
        <a className="screenOnly" href="https://atif.work/atif-mohammed-cv.pdf">Resume (PDF)</a>
      </div>
      <PDFOnly>
        <div className="contact-section-row">
          <span className="workstatus">
            <strong>Nationality:</strong> Netherlands
          </span>
          <span className="workstatus">
            <strong>Current Location:</strong> Saudi Arabia
          </span>
        </div>
      </PDFOnly>
      <hr />
    </div>
  );
};

export default ContactBlock;
