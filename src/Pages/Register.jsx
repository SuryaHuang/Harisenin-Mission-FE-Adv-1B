import HeaderTitle from "../Component/HeaderTitle";
import Wrapper from "../Component/Wrapper";
import HeaderRegister from "../Component/HeaderRegister";
import RegisterForm from "../Component/RegisterForm";

const Register = () => {
  const content = "register-content";
  const wrapper = "register-wrapper";
  const formBox = "register-form-box";

  return (
    <>
      <HeaderTitle title="Chill Register" />
      <Wrapper
        content={content}
        wrapper={wrapper}
        formBox={formBox}
        FormComponent={RegisterForm}
        HeaderComponent={HeaderRegister}
      />
    </>
  );
};

export default Register;
