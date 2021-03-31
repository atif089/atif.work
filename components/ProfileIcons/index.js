import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ProfileIcons = (props) => {
  const Person = props.person;

  const iconStyles = {
    width: "24px",
    height: "24px",
  };

  return (
    <>
      <p className="icons">
        {Person.sameAs.map((realURL, i) => {
          const url = realURL.replace("https:", "");
          if (url.indexOf("linkedin") > -1) {
            return (
              <Link key={i} href={url}>
                <a target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
                </a>
              </Link>
            );
          } else if (url.indexOf("github") > -1) {
            return (
              <Link key={i} href={url}>
                <a target="_blank">
                  <FontAwesomeIcon icon={faGithub} style={iconStyles} />
                </a>
              </Link>
            );
          } else if (url.indexOf("atif.work") > -1) {
            return (
              <Link key={i} href={url}>
                <a target="_blank">
                  <FontAwesomeIcon icon={faFilePdf} style={iconStyles} />
                </a>
              </Link>
            );
          }
          return null;
        })}
      </p>
    </>
  );
};

export default ProfileIcons;
