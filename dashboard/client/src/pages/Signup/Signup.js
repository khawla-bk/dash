import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";
import * as style from "./Signup.module.css";

function Signup({ history }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(user, history));
  };

  return (
    <div className={style.Signup}>
      <div className={style.signupBox}>
        <h1>Signup</h1>
        <label className={style.descText}>
          Please type your email. Once the Admin confirms your registration he
          will provide you with your login details later on.
          <p>Thank you!</p>
        </label>
        <br />

        <form onSubmit={handleRegister}>
          <div className={style.userBox}>
            <input
              type="email"
              name=""
              required=""
              placeholder="enter your email"
              onChange={handleChange}
            />
            <label>email</label>
          </div>

          <div className={style.userBox}>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
