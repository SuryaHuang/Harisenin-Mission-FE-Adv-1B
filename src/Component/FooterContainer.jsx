import "../Css/Footer.css";
import footerLogo from "../images/Logo/Logo2.png";
import FooterGenre from "./FooterGenre";

const FooterContainer = () => {
  const Container1 = "genre-container-1";
  const genre1 = "genre-1";
  const genreTitle = "Genre";
  const genreList1 = "genre-list-1";
  const genreItem1 = "Aksi";
  const genreItem2 = "Anak-anak";
  const genreItem3 = "Anime";
  const genreItem4 = "Britania";

  const Container2 = "genre-container-2";
  const genreList2 = "genre-list-2";
  const genreItem5 = "Drama";
  const genreItem6 = "Fantasi Ilmiah & Fiksi";
  const genreItem7 = "Kejahatan";
  const genreItem8 = "KDrama";

  const Container3 = "genre-container-3";
  const genreList3 = "genre-list-3";
  const genreItem9 = "Komedi";
  const genreItem10 = "Petualangan";
  const genreItem11 = "Perang";
  const genreItem12 = "Romantis";

  const Container4 = "genre-container-4";
  const genreList4 = "genre-list-4";
  const genreItem13 = "Sains & Alam";
  const genreItem14 = "Thriller";

  const Container5 = "bantuan-container";
  const bantuan = "bantuan";
  const bantuanTitle = "Bantuan";
  const bantuanList = "bantuan-list";
  const bantuanItem1 = "FAQ";
  const bantuanItem2 = "Kontak Kami";
  const bantuanItem3 = "Privasi";
  const bantuanItem4 = "Syarat & Ketentuan";

  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img className="logo-footer" src={footerLogo} alt="footer-logo" />
            <p className="copyright">@2025 Chill All Rights Reserved.</p>
          </div>

          <FooterGenre
            genreContainer1={Container1}
            genre={genre1}
            genreTitle={genreTitle}
            genreList={genreList1}
            genreListItem1={genreItem1}
            genreListItem2={genreItem2}
            genreListItem3={genreItem3}
            genreListItem4={genreItem4}
          />
          <FooterGenre
            genreContainer1={Container2}
            genreList={genreList2}
            genreListItem1={genreItem5}
            genreListItem2={genreItem6}
            genreListItem3={genreItem7}
            genreListItem4={genreItem8}
          />
          <FooterGenre
            genreContainer1={Container3}
            genreList={genreList3}
            genreListItem1={genreItem9}
            genreListItem2={genreItem10}
            genreListItem3={genreItem11}
            genreListItem4={genreItem12}
          />
          <FooterGenre
            genreContainer1={Container4}
            genreList={genreList4}
            genreListItem1={genreItem13}
            genreListItem2={genreItem14}
          />
          <FooterGenre
            genreContainer1={Container5}
            genre={bantuan}
            genreTitle={bantuanTitle}
            genreList={bantuanList}
            genreListItem1={bantuanItem1}
            genreListItem2={bantuanItem2}
            genreListItem3={bantuanItem3}
            genreListItem4={bantuanItem4}
          />
        </div>
      </div>
    </>
  );
};

export default FooterContainer;
