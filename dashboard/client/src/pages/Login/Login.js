import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import * as style from "./Login.module.css";

function Login({ history }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };

  return (
    <div className={style.authBody}>
      <div className={style.Login}>
        <div className={style.loginBox}>
          <h1>Login</h1>

          <form onSubmit={handleLogin}>
            <div className={style.userBox}>
              <input
                type="text"
                name="email"
                required={true}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>

            <div className={style.userBox}>
              <input
                type="password"
                name="password"
                required={true}
                onChange={handleChange}
              />
              <label>Password</label>

              <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
