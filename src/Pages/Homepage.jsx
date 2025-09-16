import HeaderTitle from "../Component/HeaderTitle";
import NavbarContainer from "../Component/NavbarContainer";
import FilmContainer from "../Component/FilmContainer";
import FooterContainer from "../Component/FooterContainer";
import FooterContainerSmall from "../Component/FooterContainerSmall";

const Homepage = () => {
  return (
    <>
      <HeaderTitle title="Chill Homepage" />
      <NavbarContainer />
      <FilmContainer />
      <FooterContainer />
      <FooterContainerSmall />
    </>
  );
};

export default Homepage;
