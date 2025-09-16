import HeaderTitle from "../Component/HeaderTitle";
import NavbarContainer from "../Component/NavbarContainer";
import MyListContainer from "../Component/MyListContainer";
import FooterContainer from "../Component/FooterContainer";
import FooterContainerSmall from "../Component/FooterContainerSmall";

const MyList = () => {
  return (
    <>
      <HeaderTitle title="Chill MyList" />
      <NavbarContainer />
      <MyListContainer />
      <FooterContainer />
      <FooterContainerSmall />
    </>
  );
};

export default MyList;
