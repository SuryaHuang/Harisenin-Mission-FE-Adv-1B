import "../Css/Beranda.css";
import FeaturedContent from "./FeaturedContent";
import ListWatched from "./ListWatched";
import ArrowSlider from "./ArrowSlider";
import { ArrowSlider2, ArrowSlider3, ArrowSlider4 } from "./ArrowSlider2";

const FilmContainer = () => {
  return (
    <div className="film-container">
      <div className="content-container">
        <FeaturedContent />
        <ArrowSlider />
        <ArrowSlider2 />
        <ArrowSlider3 />
        <ArrowSlider4 />
      </div>
    </div>
  );
};

export default FilmContainer;
