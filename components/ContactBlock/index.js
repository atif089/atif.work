import { schema as Person } from "@/data/schema/001_person-main";

const ContactBlock = () => {
  return (
    <div className="section contact-section">
      <div className="contact-section-row">
        <address>
          <span>Email: atif089@gmail.com</span>
          <span>Phone: +31 644 939 013</span>
        </address>
      </div>
      <div className="contact-section-row">
        <a href="https://atif.work">atif.work</a>
        <a href="https://www.linkedin.com/in/atif089/">linkedin.com/in/atif089</a>
        <a href="https://github.com/atif089">github.com/atif089</a>
        <a className="screenOnly" href="https://atif.work/atif-mohammed-cv.pdf">Resume (PDF)</a>

      </div>

      <hr />
    </div>
  );
};

export default ContactBlock;
