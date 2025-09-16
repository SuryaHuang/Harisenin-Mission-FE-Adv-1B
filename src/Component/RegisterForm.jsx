import { useNavigate, Link } from "react-router-dom";
import eyeIcon from "../images/Logo/eye.png";
import googleIcon from "../images/Logo/Gicon.png";
import "../Css/Register.css";
import { getUsers, postUsers } from "../services/api/user/useUsers";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { data: usersAccount } = getUsers();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = e.target.regUsername.value;
    const pass = e.target.regPassword.value;
    const conPass = e.target.regConfirmPassword.value;

    // let users = JSON.parse(localStorage.getItem("chillUsers")) || [];
    let users = Object.values(usersAccount || {});
    const userExists = users.some((u) => u.username === user);
    const passwordMatch = pass === conPass;

    if (userExists) {
      alert("Username sudah digunakan");
      return;
    } else if (!passwordMatch) {
      alert("Konfirmasi kata sandi tidak cocok");
      return;
    }

    // users.push({ username: user, password: pass });
    // localStorage.setItem("chillUsers", JSON.stringify(users));
    const newUser = { username: user, password: pass };
    await postUsers(newUser);

    navigate("/");
  };

  return (
    <section className="register-form">
      <form onSubmit={handleSubmit} id="registerForm">
        <div className="input-box">
          <label htmlFor="regUsername">Username</label>
          <input
            id="regUsername"
            type="text"
            className="inputField"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="regPassword">Kata Sandi</label>
          <input
            id="regPassword"
            type="password"
            className="inputField"
            placeholder="Masukkan kata sandi"
            required
          />
          <img src={eyeIcon} alt="Eye Icon" />
        </div>
        <div className="input-box">
          <label htmlFor="regConfirmPassword">Konfirmasi Kata Sandi</label>
          <input
            id="regConfirmPassword"
            type="password"
            className="inputField"
            placeholder="Masukkan kata sandi"
            required
          />
          <img src={eyeIcon} alt="Eye Icon" />
        </div>
        <div className="login-register">
          <p>
            Sudah punya akun?
            <Link to="/" className="login-link">
              Masuk
            </Link>
          </p>
        </div>

        <div className="form-btn">
          <button type="submit" className="btn">
            Daftar
          </button>
          <p className="atau">Atau</p>
          <button type="submit" className="btn2 google-register" formNoValidate>
            <img src={googleIcon} alt="Google Icon" />
            Daftar dengan Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
