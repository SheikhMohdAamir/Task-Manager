import { useRef } from "react";
import axios from "axios";

const SignUpForm = (props) => {
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const signUpHandler = async (event) => {
    event.preventDefault()

    if(passwordRef.current.value!==confirmPasswordRef.current.value){
      alert("Password Does Not Match")
      return
    }

    const formData = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    try {
      const req = await axios.post(
        "http://localhost:4000/user/signup",
        formData
      );
      alert(req.data);
    } catch (err) {
      alert(err.response.data);
      console.log(err);
    }
  };
  return (
    <div>
      <div className="heading">
        <img
          className="heading__img"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
          alt="img.svg"
        />
        <h1 className="heading__title">Task-Manager</h1>
      </div>
      <h2>Sign Up</h2>
      <div>
        <form className="form" onSubmit={signUpHandler}>
          <div>
            <label className="form__label" htmlFor="su-name">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              id="su-name"
              name="name"
              size="30"
              ref={nameRef}
              required
            />
            <label className="form__label" htmlFor="su-password-1">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="su-password-1"
              name="password"
              size="30"
              ref={passwordRef}
              required
            />
            <label className="form__label" htmlFor="su-password-2">
              Confirm Password
            </label>
            <input
              className="form__input"
              type="password"
              id="su-password-2"
              name="password"
              size="30"
              ref={confirmPasswordRef}
              required
            />
            <br />
            <button className="button">
              <span>Sign Up</span>
            </button>
            <br />
            <br />
            <button
              className="button"
              onClick={() => {
                props.changeHandler();
              }}
            >
              <span>Already A User! Login.</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
