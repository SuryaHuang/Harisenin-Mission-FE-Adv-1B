import "../Css/Beranda.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import MovieListWatched from "./MovieListWatched";

const ListWatched = ({ arrowRight, arrowLeft, movieList }) => {
  return (
    <>
      <div className="movie-list-container">
        <h3 className="movie-list-title">Melanjutkan Tonton Film</h3>
        <div className="movie-list-wrapper">
          <IoArrowBackCircleSharp
            ref={arrowLeft}
            className="arrow-left-watched"
          />
          <div ref={movieList} className="movie-list">
            <MovieListWatched />
          </div>
          <IoArrowForwardCircleSharp
            ref={arrowRight}
            className="arrow-right-watched"
          />
        </div>
      </div>
    </>
  );
};

export default ListWatched;
