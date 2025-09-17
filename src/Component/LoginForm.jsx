import { useNavigate, Link } from "react-router-dom";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import "../Css/Login.css";
import eyeIcon from "../images/Logo/eye.png";
import googleIcon from "../images/Logo/Gicon.png";
import { getUsers, tempUsers } from "../services/api/user/useUsers";

export const userUsername = create(
  persist(
    (set) => ({
      loginUser: null,
      setLoginUser: (userAcc) => set({ loginUser: userAcc }),
    }),
    {
      name: "ChillUserStorage",
    }
  )
);

const LoginForm = () => {
  const navigate = useNavigate();
  const { data: usersAccount } = getUsers();
  const setLoginUser = userUsername((state) => state.setLoginUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const findIdUser = () => {
      let findTemp = usersAccount.find((userAcc) => userAcc.username === user);
      return findTemp ? { id: findTemp.id } : null;
    };

    const user = e.target.logUsername.value;
    const pass = e.target.logPassword.value;
    const userAcc = { username: user, password: pass, id: findIdUser()?.id };

    // const users = JSON.parse(localStorage.getItem("chillUsers")) || [];
    let users = Object.values(usersAccount || {});
    const match = users.find((u) => u.username === user && u.password === pass);

    if (!match) {
      alert("Username atau kata sandi salah");
      return;
    } else if (match) {
      alert("Login berhasil!");
      const cacheUser = { username: user, password: pass };
      await tempUsers(cacheUser);
      setLoginUser(userAcc);
      // console.log("ChillLocalStorage :", userAcc);
      // localStorage.setItem("loggedInUser", JSON.stringify(match));
      navigate("/homepage");
    }
  };

  return (
    <section className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="logUsername">Username</label>
          <input
            id="logUsername"
            name="username"
            type="text"
            autoComplete="username"
            className="inputField"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="logPassword">Kata Sandi</label>
          <input
            id="logPassword"
            name="password"
            type="password"
            autoComplete="current-password"
            className="inputField"
            placeholder="Masukkan kata sandi"
            required
          />
          <img src={eyeIcon} alt="Eye Icon" />
        </div>

        <div className="login-register">
          <p>
            Belum punya akun?
            <Link to="/register" className="register-link">
              Daftar
            </Link>
            <a href="#" className="forgot-password">
              Lupa kata sandi?
            </a>
          </p>
        </div>

        <div className="form-btn">
          <button type="submit" className="btn">
            Masuk
          </button>
          <p className="atau">Atau</p>
          <button
            type="button"
            id="google-login-btn"
            className="btn2 google-login"
            formNoValidate
          >
            <img src={googleIcon} alt="Google Icon" />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
