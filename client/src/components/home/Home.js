import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData } from "../../state/slices/counterSlice";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userData = useSelector((state) => state.counter.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textRef = useRef();
  const descRef = useRef();

  const fetchUsers = () => {
    dispatch(getData());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: textRef.current.value,
      description: descRef.current.value,
    };
    dispatch(addData(data));
    textRef.current.value = "";
    descRef.current.value = "";
  };

  const logoutHandler = () => {
    localStorage.clear("token");
    navigate("/");
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
        <button className="button" onClick={logoutHandler} style={{marginLeft:'10px'}}>
          <span>Logout</span>
        </button>
      </div>
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <label className="form__label" htmlFor="todo">
              Title
            </label>
            <input
              className="form__input"
              type="text"
              id="todo"
              name="to-do"
              size="30"
              ref={textRef}
              required
            />
            <label className="form__label" htmlFor="todo-desc">
              Description
            </label>
            <input
              className="form__input"
              type="text"
              id="todo-desc"
              name="to-do-desc"
              size="30"
              ref={descRef}
              required
            />
            <br />
            <button className="button">
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
      <ul className="toDoList">
        {userData.map((i) => {
          return (
            <li key={i._id} onClick={() => dispatch(deleteData(i._id))}>
              {i.title} - {i.description}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
