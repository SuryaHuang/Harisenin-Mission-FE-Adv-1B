import "../Css/Beranda.css";
import { IoStar } from "react-icons/io5";

export const featuredDesc = {
  paragraph: (
    <>
      <p className="featured-description">
        David Martinez adalah seorang anak muda yang tinggal di daerah kumuh
        Night City. Setelah mengalami tragedi yang membuatnya kehilangan ibunya,
        ia memutuskan untuk menjadi seorang Edgerunner, seorang bajingan jalanan
        yang bekerja untuk menyelesaikan pekerjaan berbahaya demi mendapatkan
        uang.
      </p>
    </>
  ),
};

export const ListWatchedImg = ({
  imgLandscape,
  altLandscape,
  imgTitle,
  imgRating,
}) => {
  return (
    <>
      <div className="movieListContainer">
        <img className="movieListImg" src={imgLandscape} alt={altLandscape} />
        <div className="movieListDesc">
          <span className="movieListTitle">{imgTitle}</span>
          <span className="movieListRating">
            <IoStar className="movieListStar" /> {imgRating}/5
          </span>
        </div>
      </div>
    </>
  );
};

export const ListFilmImg = ({ imgPotrait, altPotrait }) => {
  return (
    <>
      <div className="movieListContainer movieListContainerSmall">
        <img className="movieListImg2" src={imgPotrait} alt={altPotrait} />
      </div>
    </>
  );
};
