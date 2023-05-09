import { HtmlHead } from "../components/HtmlHead";
import RegisterComponent from "../components/Register";

const Register = () => {
  return (
    <>
      <HtmlHead
        title="Register"
        decription="[insert page description]"
        link="/"
      />
      <RegisterComponent />
    </>
  );
};

export default Register;
