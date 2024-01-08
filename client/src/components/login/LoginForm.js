import { useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  const navigate= useNavigate()
  const nameRef = useRef("");
  const passwordRef = useRef("");

  const loginHandler = async (event) => {
    event.preventDefault()

    const formData = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(formData);

    try {
      const req = await axios.post(
        "http://localhost:4000/user/login",
        formData
      );
      setTimeout(()=>navigate('/home'),500)
      localStorage.setItem("token", req.data.token);
      alert(req.data.message);
      console.log(req);
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
      <h2>Login</h2>
      <div>
        <form className="form" onSubmit={loginHandler}>
          <div>
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              name="name"
              size="30"
              ref={nameRef}
              required
            />
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              name="password"
              size="30"
              ref={passwordRef}
              required
            />
            <br />
            <button className="button">
              <span>Login</span>
            </button>
            <br />
            <br />
            <button
              className="button"
              onClick={() => {
                props.changeHandler();
              }}
            >
              <span>Don't Have An Account! Sign Up.</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
