import "../Css/MyList.css";
import { WatchedPortrait1 } from "../Component/ImgZustand";
import { WatchedPortrait2 } from "../Component/ImgZustand";
import { WatchedPortrait3 } from "../Component/ImgZustand";
import { WatchedPortrait4 } from "../Component/ImgZustand";
import { WatchedPortrait5 } from "../Component/ImgZustand";
import { WatchedPortrait6 } from "../Component/ImgZustand";
import { WatchedPortrait7 } from "../Component/ImgZustand";
import { WatchedPortrait8 } from "../Component/ImgZustand";
import { WatchedPortrait9 } from "../Component/ImgZustand";
import { WatchedPortrait10 } from "../Component/ImgZustand";
import { WatchedPortrait11 } from "../Component/ImgZustand";
import { WatchedPortrait12 } from "../Component/ImgZustand";
import { MyListImg } from "../Component/MyListImg";

const MyListContainer = () => {
  const { imgSrc1, imgAlt1 } = WatchedPortrait1();
  const { imgSrc2, imgAlt2 } = WatchedPortrait2();
  const { imgSrc3, imgAlt3 } = WatchedPortrait3();
  const { imgSrc4, imgAlt4 } = WatchedPortrait4();
  const { imgSrc5, imgAlt5 } = WatchedPortrait5();
  const { imgSrc6, imgAlt6 } = WatchedPortrait6();
  const { imgSrc7, imgAlt7 } = WatchedPortrait7();
  const { imgSrc8, imgAlt8 } = WatchedPortrait8();
  const { imgSrc9, imgAlt9 } = WatchedPortrait9();
  const { imgSrc10, imgAlt10 } = WatchedPortrait10();
  const { imgSrc11, imgAlt11 } = WatchedPortrait11();
  const { imgSrc12, imgAlt12 } = WatchedPortrait12();

  return (
    <>
      <section id="mylist">
        <div className="mylist-container">
          <h2 className="mylist-title">Daftar Saya</h2>
          <div className="mylist-wrapper">
            <div className="mylist-content">
              <MyListImg imgPotrait={imgSrc1} altPotrait={imgAlt1} />
              <MyListImg imgPotrait={imgSrc2} altPotrait={imgAlt2} />
              <MyListImg imgPotrait={imgSrc3} altPotrait={imgAlt3} />
              <MyListImg imgPotrait={imgSrc4} altPotrait={imgAlt4} />
              <MyListImg imgPotrait={imgSrc5} altPotrait={imgAlt5} />
              <MyListImg imgPotrait={imgSrc6} altPotrait={imgAlt6} />
              <MyListImg imgPotrait={imgSrc7} altPotrait={imgAlt7} />
              <MyListImg imgPotrait={imgSrc8} altPotrait={imgAlt8} />
              <MyListImg imgPotrait={imgSrc9} altPotrait={imgAlt9} />
              <MyListImg imgPotrait={imgSrc10} altPotrait={imgAlt10} />
              <MyListImg imgPotrait={imgSrc11} altPotrait={imgAlt11} />
              <MyListImg imgPotrait={imgSrc12} altPotrait={imgAlt12} />
            </div>
            <div className="mylist-content-small">
              <MyListImg imgPotrait={imgSrc1} altPotrait={imgAlt1} />
              <MyListImg imgPotrait={imgSrc2} altPotrait={imgAlt2} />
              <MyListImg imgPotrait={imgSrc3} altPotrait={imgAlt3} />
            </div>
            <div className="mylist-content-small">
              <MyListImg imgPotrait={imgSrc4} altPotrait={imgAlt4} />
              <MyListImg imgPotrait={imgSrc5} altPotrait={imgAlt5} />
              <MyListImg imgPotrait={imgSrc6} altPotrait={imgAlt6} />
            </div>
            <div className="mylist-content-small">
              <MyListImg imgPotrait={imgSrc7} altPotrait={imgAlt7} />
              <MyListImg imgPotrait={imgSrc8} altPotrait={imgAlt8} />
              <MyListImg imgPotrait={imgSrc9} altPotrait={imgAlt9} />
            </div>
            <div className="mylist-content-small">
              <MyListImg imgPotrait={imgSrc10} altPotrait={imgAlt10} />
              <MyListImg imgPotrait={imgSrc11} altPotrait={imgAlt11} />
              <MyListImg imgPotrait={imgSrc12} altPotrait={imgAlt12} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyListContainer;
