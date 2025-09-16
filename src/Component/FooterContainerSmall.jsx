import "../Css/Footer.css";
import footerLogo from "../images/Logo/Logo2.png";
import { IoChevronForwardSharp } from "react-icons/io5";

const FooterContainerSmall = () => {
  return (
    <>
      <div className="footer-container-small">
        <div className="footer-content-small">
          <div className="footer-logo">
            <img
              className="logo-footer logo-footer-small"
              src={footerLogo}
              alt="footer-logo-small"
            />
            <p className="copyright copyright-small">
              @2025 Chill All Rights Reserved
            </p>
          </div>
          <div className="footer-small">
            <div className="genreSmall">
              <h1 className="genreTitleSmall">Genre</h1>
              <IoChevronForwardSharp className="footerArrow" />
            </div>

            <div className="bantuanSmall">
              <h1 className="bantuanTitleSmall">Bantuan</h1>
              <IoChevronForwardSharp className="footerArrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContainerSmall;
