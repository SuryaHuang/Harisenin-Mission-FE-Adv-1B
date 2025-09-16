import "../Css/Beranda.css";
import featureCover from "../images/Landscape/feature-cover.png";
import featureTitle from "../images/Landscape/feature-title.png";
import { featuredDesc } from "./ContentText";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoVolumeMuteSharp } from "react-icons/io5";

const FeaturedContent = () => {
  const featureImage = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(24, 26, 28, 1)), url(${featureCover})`,
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
  };

  return (
    <>
      <div
        className="featured-content"
        style={featureImage}
        alt="feature-content"
      >
        <img
          className="featured-title"
          src={featureTitle}
          alt="feature-title"
        />
        <>{featuredDesc.paragraph}</>
        <div className="button-group">
          <button className="featured-button">Mulai</button>
          <button className="featured-button-2">
            <IoInformationCircleOutline className="info-icon" />
            Selengkapnya
          </button>
          <span className="klasifikasi">18+</span>
          <button className="volume-button">
            <IoVolumeMuteSharp className="volumeDisable" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedContent;
