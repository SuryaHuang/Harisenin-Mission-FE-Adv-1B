import HeaderTitle from "../Component/HeaderTitle";
import NavbarContainer from "../Component/NavbarContainer";
import UserData from "../Component/UserData";
import FooterContainer from "../Component/FooterContainer";
import FooterContainerSmall from "../Component/FooterContainerSmall";

const MyProfile = () => {
  return (
    <>
      <HeaderTitle title="Chill MyProfile" />
      <NavbarContainer />
      <UserData />
      <FooterContainer />
      <FooterContainerSmall />
    </>
  );
};

export default MyProfile;
