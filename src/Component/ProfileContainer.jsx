import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import ProfilePicture from "../images/Logo/profPic.png";
import { getTemp, deleteTemp } from "../services/api/user/useUsers";
import { userUsername } from "../Component/LoginForm";

const ProfileContainer = () => {
  const navigate = useNavigate();
  const checkBoxRef = useRef(null);
  const dropDownRef = useRef(null);
  const { data: usersTemp } = getTemp();
  const dataUser = userUsername((state) => state.loginUser);

  const idTemp = () => {
    let findTemp = usersTemp.find(
      (user) => user.username === dataUser.username
    );
    return findTemp ? { id: findTemp.id } : null;
  };

  const logout = async (tempId) => {
    // localStorage.removeItem("loggedInUser");
    await deleteTemp(tempId);
    localStorage.removeItem("ChillUserStorage");
    // console.log("usersTemp:", usersTemp);
    // console.log("dataUser:", dataUser);
    // console.log("id:", idTemp());
    alert("Logout Berhasil");
    navigate("/");
  };

  useEffect(() => {
    // console.log("id:", idTemp());
    const handleClickOutside = (event) => {
      if (
        checkBoxRef.current?.checked &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        checkBoxRef.current.checked = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="profile-container">
        <img className="profile_picture" src={ProfilePicture} alt="profile" />
        <div className="dropdown-container">
          <div className="dropdown" ref={dropDownRef}>
            <input
              type="checkbox"
              id="profile-toggle"
              hidden
              ref={checkBoxRef}
            />
            <label htmlFor="profile-toggle">
              <IoChevronDownSharp className="drop-icon" />
            </label>
            <div className="dropdown-menu">
              <Link to="/myprofile" className="dropdown-item">
                <IoPerson /> Profil Saya
              </Link>
              <Link to="#" className="dropdown-item">
                <IoStar /> Ubah Premium
              </Link>
              <Link
                to="/"
                onClick={() => logout(idTemp()?.id)}
                className="dropdown-item"
              >
                <IoLogOutOutline /> Keluar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
