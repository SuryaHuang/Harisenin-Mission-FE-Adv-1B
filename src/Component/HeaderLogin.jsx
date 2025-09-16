import "../Css/Login.css";
import Logo from "../images/Logo/Logo.png";

const HeaderLogin = () => {
  return (
    <section>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <h2 className="header">Masuk</h2>
      <p className="description">Selamat datang kembali!</p>
    </section>
  );
};

export default HeaderLogin;
