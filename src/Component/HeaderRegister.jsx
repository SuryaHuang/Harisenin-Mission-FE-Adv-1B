import "../Css/Register.css";
import Logo from "../images/Logo/Logo.png";

const HeaderRegister = () => {
  return (
    <section>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <h2 className="header">Daftar</h2>
      <p className="description">Selamat datang!</p>
    </section>
  );
};

export default HeaderRegister;
