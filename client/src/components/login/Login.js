import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Login = () => {
  const [change, setChange] = useState(true);

  const changeHandler = () => {
    setChange(!change);
  };
  return (
    <div>
      {change === false && <SignUpForm changeHandler={changeHandler} />}
      {change === true && <LoginForm changeHandler={changeHandler} />}
    </div>
  );
};

export default Login;
