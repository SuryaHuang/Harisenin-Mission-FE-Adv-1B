import "../Css/Beranda.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MovieListFilm1 } from "./MovieListFilm";
import { MovieListFilm2 } from "./MovieListFilm";
import { MovieListFilm3 } from "./MovieListFilm";

export const ListMovie1 = ({ arrowLeft2, arrowRight2, movieList2 }) => {
  return (
    <>
      <div className="movie-list-container additional-container">
        <h3 className="movie-list-title title2">
          Top Rating Film dan Series Hari Ini
        </h3>
        <div className="movie-list-wrapper">
          <IoArrowBackCircleSharp
            ref={arrowLeft2}
            className="arrow-left-film"
          />
          <div ref={movieList2} className="movie-list">
            <MovieListFilm1 />
          </div>
          <IoArrowForwardCircleSharp
            ref={arrowRight2}
            className="arrow-right-film"
          />
        </div>
      </div>
    </>
  );
};

export const ListMovie2 = ({ arrowLeft2, arrowRight2, movieList2 }) => {
  return (
    <>
      <div className="movie-list-container additional-container">
        <h3 className="movie-list-title title2">Film Trending</h3>
        <div className="movie-list-wrapper">
          <IoArrowBackCircleSharp
            ref={arrowLeft2}
            className="arrow-left-film"
          />
          <div ref={movieList2} className="movie-list">
            <MovieListFilm2 />
          </div>
          <IoArrowForwardCircleSharp
            ref={arrowRight2}
            className="arrow-right-film"
          />
        </div>
      </div>
    </>
  );
};

export const ListMovie3 = ({ arrowLeft2, arrowRight2, movieList2 }) => {
  return (
    <>
      <div className="movie-list-container additional-container">
        <h3 className="movie-list-title title2">Rilis Baru</h3>
        <div className="movie-list-wrapper">
          <IoArrowBackCircleSharp
            ref={arrowLeft2}
            className="arrow-left-film"
          />
          <div ref={movieList2} className="movie-list">
            <MovieListFilm3 />
          </div>
          <IoArrowForwardCircleSharp
            ref={arrowRight2}
            className="arrow-right-film"
          />
        </div>
      </div>
    </>
  );
};
