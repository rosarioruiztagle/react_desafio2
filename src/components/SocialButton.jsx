import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ github, facebook, linkedin }) => {
  return (
    <>
      <div className="social">
        {github && <FontAwesomeIcon icon={faGithub} size="2x" />}
      </div>
      <div className="social">
        {facebook && <FontAwesomeIcon icon={faFacebook} size="2x" />}
      </div>
      <div className="social">
        {linkedin && <FontAwesomeIcon icon={faLinkedinIn} size="2x" />}
      </div>
    </>
  );
};

export default SocialButton;
