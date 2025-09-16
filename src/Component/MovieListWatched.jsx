import "../Css/Beranda.css";
import { ListWatchedImg } from "./ContentText.jsx";
import { WatchedLandscape1 } from "./ImgZustand.js";
import { WatchedLandscape2 } from "./ImgZustand.js";
import { WatchedLandscape3 } from "./ImgZustand.js";
import { WatchedLandscape4 } from "./ImgZustand.js";
import { WatchedLandscape5 } from "./ImgZustand.js";
import { WatchedLandscape6 } from "./ImgZustand.js";
import { WatchedLandscape7 } from "./ImgZustand.js";
import { WatchedLandscape8 } from "./ImgZustand.js";
import { WatchedLandscape9 } from "./ImgZustand.js";
import { WatchedLandscape10 } from "./ImgZustand.js";
import { WatchedLandscape11 } from "./ImgZustand.js";
import { WatchedLandscape12 } from "./ImgZustand.js";

const MovieListWatched = () => {
  const { imgSrc1, imgAlt1, imgTitle1, imgRating1 } = WatchedLandscape1();
  const { imgSrc2, imgAlt2, imgTitle2, imgRating2 } = WatchedLandscape2();
  const { imgSrc3, imgAlt3, imgTitle3, imgRating3 } = WatchedLandscape3();
  const { imgSrc4, imgAlt4, imgTitle4, imgRating4 } = WatchedLandscape4();
  const { imgSrc5, imgAlt5, imgTitle5, imgRating5 } = WatchedLandscape5();
  const { imgSrc6, imgAlt6, imgTitle6, imgRating6 } = WatchedLandscape6();
  const { imgSrc7, imgAlt7, imgTitle7, imgRating7 } = WatchedLandscape7();
  const { imgSrc8, imgAlt8, imgTitle8, imgRating8 } = WatchedLandscape8();
  const { imgSrc9, imgAlt9, imgTitle9, imgRating9 } = WatchedLandscape9();
  const { imgSrc10, imgAlt10, imgTitle10, imgRating10 } = WatchedLandscape10();
  const { imgSrc11, imgAlt11, imgTitle11, imgRating11 } = WatchedLandscape11();
  const { imgSrc12, imgAlt12, imgTitle12, imgRating12 } = WatchedLandscape12();

  return (
    <>
      <ListWatchedImg
        imgLandscape={imgSrc1}
        imgAlt={imgAlt1}
        imgTitle={imgTitle1}
        imgRating={imgRating1}
      />
      <ListWatchedImg
        imgLandscape={imgSrc2}
        imgAlt={imgAlt2}
        imgTitle={imgTitle2}
        imgRating={imgRating2}
      />
      <ListWatchedImg
        imgLandscape={imgSrc3}
        imgAlt={imgAlt3}
        imgTitle={imgTitle3}
        imgRating={imgRating3}
      />
      <ListWatchedImg
        imgLandscape={imgSrc4}
        imgAlt={imgAlt4}
        imgTitle={imgTitle4}
        imgRating={imgRating4}
      />
      <ListWatchedImg
        imgLandscape={imgSrc5}
        imgAlt={imgAlt5}
        imgTitle={imgTitle5}
        imgRating={imgRating5}
      />
      <ListWatchedImg
        imgLandscape={imgSrc6}
        imgAlt={imgAlt6}
        imgTitle={imgTitle6}
        imgRating={imgRating6}
      />
      <ListWatchedImg
        imgLandscape={imgSrc7}
        imgAlt={imgAlt7}
        imgTitle={imgTitle7}
        imgRating={imgRating7}
      />
      <ListWatchedImg
        imgLandscape={imgSrc8}
        imgAlt={imgAlt8}
        imgTitle={imgTitle8}
        imgRating={imgRating8}
      />
      <ListWatchedImg
        imgLandscape={imgSrc9}
        imgAlt={imgAlt9}
        imgTitle={imgTitle9}
        imgRating={imgRating9}
      />
      <ListWatchedImg
        imgLandscape={imgSrc10}
        imgAlt={imgAlt10}
        imgTitle={imgTitle10}
        imgRating={imgRating10}
      />
      <ListWatchedImg
        imgLandscape={imgSrc11}
        imgAlt={imgAlt11}
        imgTitle={imgTitle11}
        imgRating={imgRating11}
      />
      <ListWatchedImg
        imgLandscape={imgSrc12}
        imgAlt={imgAlt12}
        imgTitle={imgTitle12}
        imgRating={imgRating12}
      />
    </>
  );
};

export default MovieListWatched;
