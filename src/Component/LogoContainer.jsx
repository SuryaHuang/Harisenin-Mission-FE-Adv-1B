import { Link } from "react-router-dom";
import "../Css/Beranda.css";
import MenuContainer from "../Component/MenuContainer";
import ProfileContainer from "./ProfileContainer";
import Logo from "../images/Logo/Logo.png";
import LogoSmall from "../images/Logo/Logo-small.png";

const LogoContainer = () => {
  return (
    <>
      <div className="logo-container">
        <Link to="/homepage">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={LogoSmall}
              alt="small-logo"
            ></source>
            <img className="logo" src={Logo} alt="logo" />
          </picture>
        </Link>

        <MenuContainer />
        <ProfileContainer />
      </div>
    </>
  );
};

export default LogoContainer;
