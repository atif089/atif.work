import { schema as Person } from "@/data/schema/001_person-main";

const ContactBlock = () => {
  return (
    <>
      <div className="section section-grid contact-section">
        <div className="left">
          <h2>Contact</h2>
        </div>
        <div className="right">
          <div className="contact-list-items">
            <ul>
              <li className="full-width">atif089@gmail.com</li>
              <li className="full-width">+31 644 939 013</li>
              <li>
                <a href="https://atif.work">https://atif.work</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/atif089/">https://www.linkedin.com/in/atif089/</a>
              </li>
              <li>
                <a href="https://github.com/atif089">https://github.com/atif089</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBlock;
