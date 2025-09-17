import { useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../images/Logo/profPic.png";
import { IoPencilSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import "../Css/MyProfile.css";
import subscribeImage from "../images/Logo/subscribe-image.png";
import {
  getUsers,
  getTemp,
  deleteTemp,
  deleteUser,
  updateUser,
  updateTemp,
} from "../services/api/user/useUsers";
import { userUsername } from "../Component/LoginForm";

const UserData = () => {
  const inputUsernameRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const saveButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);
  const dataUser = userUsername((state) => state.loginUser);
  const updateDataUser = userUsername((state) => state.setLoginUser);
  // const user = JSON.parse(localStorage.getItem("loggedInUser"));
  // const account = JSON.parse(localStorage.getItem("chillUsers"));
  const { data: usersAccount } = getUsers();
  const { data: usersTemp } = getTemp();
  const navigate = useNavigate();

  const idAccount = () => {
    let findAccount = usersAccount.find((user) => user.id === dataUser?.id);
    return findAccount
      ? {
          id: findAccount.id,
          username: findAccount.username,
          password: findAccount.password,
        }
      : null;
  };

  const idTemp = () => {
    let findTemp = usersTemp.find(
      (user) => user.username === dataUser.username
    );

    return findTemp
      ? {
          id: findTemp.id,
          username: findTemp.username,
          password: findTemp.password,
        }
      : null;
  };

  const useMemoAccount = useMemo(() => {
    if (!usersAccount || !dataUser) return null;
    const account = idAccount();
    if (!account) return null;
    return (
      usersAccount.find((user) => user.username === account.username) || null
    );
  }, [usersAccount]);

  useEffect(() => {
    if (!dataUser) return;
    const account = dataUser;

    if (account) {
      inputUsernameRef.current.value = account.username;
      inputPasswordRef.current.value = account.password;
    }
  }, [dataUser]);

  const enableInputUser = () => {
    if (inputUsernameRef.current.disabled) {
      inputUsernameRef.current.disabled = false;
      inputUsernameRef.current.focus();
    } else {
      inputUsernameRef.current.disabled = true;
    }
  };

  const enableInputPass = () => {
    if (inputPasswordRef.current.disabled) {
      inputPasswordRef.current.disabled = false;
      inputPasswordRef.current.focus();
    } else {
      inputPasswordRef.current.disabled = true;
    }
  };

  const saveButton = () => {
    const account = idAccount();
    const tempAccount = idTemp();

    const disableInputs = () => {
      inputUsernameRef.current.disabled = true;
      inputPasswordRef.current.disabled = true;
    };

    if (
      account.username === inputUsernameRef.current.value.trim() &&
      account.password === inputPasswordRef.current.value.trim()
    ) {
      alert("Tidak ada perubahan");
      disableInputs();
      return;
    } else if (
      inputUsernameRef.current.value.trim() === "" ||
      inputPasswordRef.current.value.trim() === ""
    ) {
      disableInputs();
      inputUsernameRef.current.value = `${account.username}`;
      inputPasswordRef.current.value = `${account.password}`;
      alert("Data tidak boleh kosong");
      return;
    }

    const matchUsername = usersAccount.some(
      (user) => user.username === inputUsernameRef.current.value.trim()
    );

    if (
      account.username === inputUsernameRef.current.value.trim() &&
      account.password !== inputPasswordRef.current.value.trim()
    ) {
      updateUser(
        account.id,
        account.username,
        inputPasswordRef.current.value.trim()
      );
      updateTemp(
        tempAccount.id,
        tempAccount.username,
        inputPasswordRef.current.value.trim()
      );
      updateDataUser({
        username: account.username,
        password: inputPasswordRef.current.value.trim(),
        id: account.id,
      });
      alert("Password berhasil diubah");
      disableInputs();
      return;
    } else if (matchUsername) {
      alert("Username sudah digunakan");
      inputUsernameRef.current.value = `${account.username}`;
      inputPasswordRef.current.value = `${account.password}`;
      updateDataUser({
        username: account.username,
        password: account.password,
        id: account.id,
      });
      disableInputs();
      return;
    }

    if (
      account.username !== inputUsernameRef.current.value.trim() ||
      account.password !== inputPasswordRef.current.value.trim()
    ) {
      updateUser(
        account.id,
        inputUsernameRef.current.value.trim(),
        inputPasswordRef.current.value.trim()
      );
      updateTemp(
        tempAccount.id,
        inputUsernameRef.current.value.trim(),
        inputPasswordRef.current.value.trim()
      );
      updateDataUser({
        username: inputUsernameRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
        id: account.id,
      });
      // localStorage.setItem("chillUsers", JSON.stringify(account));
      // localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Username/Password berhasil diubah");
      disableInputs();
    }
  };

  const deleteButton = () => {
    const popUp = window.confirm("Apakah anda yakin ingin menghapus akun ini?");
    const findAccount = idAccount()?.username === idTemp()?.username;

    if (popUp === true) {
      if (findAccount) {
        deleteTemp(idTemp()?.id);
        deleteUser(idAccount()?.id);
        localStorage.removeItem("ChillUserStorage");
        alert("Akun telah di hapus");
        navigate("/");
      }
    } else {
      return;
    }
  };

  return (
    <>
      <section className="myprofile-section">
        <div className="myprofile-container">
          <h2 className="myprofile-title">Profil Saya</h2>
          <div className="userpicture-container">
            <img className="user-picture" src={ProfilePicture} alt="profile" />
            <div className="change-container">
              <button className="change-picture">Ubah Foto</button>
              <div className="desc-container">
                <span className="desc-icon">
                  <IoDocumentTextOutline />
                </span>
                <p className="change-desc">Maksimal 2MB</p>
              </div>
            </div>
          </div>

          <div className="userdata-container">
            <label className="userdata-label">Nama Pengguna</label>
            <input
              className="userdata-input"
              ref={inputUsernameRef}
              type="text"
              disabled
            />
            <span className="ubah-icon" onClick={enableInputUser}>
              <IoPencilSharp />
            </span>
          </div>

          <div className="userdata-container">
            <label className="userdata-label">Email</label>
            <input className="userdata-input" type="email" disabled />
          </div>

          <div className="userdata-container">
            <label className="userdata-label">Kata Sandi</label>
            <input
              className="userdata-input"
              ref={inputPasswordRef}
              type="password"
              disabled
            />
            <span className="ubah-icon" onClick={enableInputPass}>
              <IoPencilSharp />
            </span>
          </div>
          <button
            className="save-button"
            ref={saveButtonRef}
            onClick={saveButton}
            type="button"
          >
            Simpan
          </button>

          <button
            className="delete-button"
            ref={deleteButtonRef}
            onClick={deleteButton}
            type="button"
          >
            Hapus Akun
          </button>
        </div>

        <div className="subscribe-container">
          <div className="subscribe-line">
            <div className="subscribe-wrapper">
              <img
                className="subscribe-picture"
                src={subscribeImage}
                alt="subscribeImage"
              />
              <div className="subscribe-desc">
                <h3 className="subscribe-title">
                  Saat ini anda belum berlangganan
                </h3>
                <p className="subscribe-paragraph">
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                  Kamu!
                </p>
              </div>
            </div>
            <div className="button-container">
              <button className="subscribe-button">Mulai Berlangganan</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserData;
