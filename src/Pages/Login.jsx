import "../Css/Login.css";
import HeaderTitle from "../Component/HeaderTitle";
import Wrapper from "../Component/Wrapper";
import HeaderLogin from "../Component/HeaderLogin";
import LoginForm from "../Component/LoginForm";

const Login = () => {
  const content = "login-content";
  const wrapper = "login-wrapper";
  const formBox = "login-form-box";

  return (
    <>
      <HeaderTitle title="Chill Login" />
      <Wrapper
        content={content}
        wrapper={wrapper}
        formBox={formBox}
        FormComponent={LoginForm}
        HeaderComponent={HeaderLogin}
      />
    </>
  );
};

export default Login;
