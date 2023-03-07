import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { admin, admin_login, login } from "../../Component/ApiConf";
import { ADMIN_TOCKEN, AUTH_LOCAL_VAR } from "../../Component/localStore/localStore";

function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState(false)
    const [message,setMessage] = useState('')
    const navigator = useNavigate()
    const onSubmit = async (event) => {
        event.preventDefault();
        axios.post(admin+login, { email, password }).then(({ data }) => {
            const { response } = data
            console.log(response);
          if (response.error) {
            const { message,error } = response
            // setLoginSuccess(false)
            // console.log(message,error);
            setMessage(message)
            setError(true)
          }
          if (response.login) {
            const { message,login,error,userData,tokenAuth } = response
            setError(false)
            setMessage('')
            console.log(userData,tokenAuth);
            // setLoginSuccess(true)
            localStorage.setItem(ADMIN_TOCKEN,tokenAuth)
            localStorage.setItem(AUTH_LOCAL_VAR, userData.name || 'ASUS' )
            navigator(admin)
          }
        })
      };

  return (
    <div>
      <div className="row p-5 ">
        <h3>Admin Login</h3>
        {error && <div style={{ color: "red" }}>{message}</div>}
        {/* {loginSuccess && <div style={{ color: "green" }}>{message}</div>} */}
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                required
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                autoComplete="on"
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                required
                name="password"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10 ">
              <input type="submit" className="form-control" id="" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10 ">
              <p>
                Not a account , please signup{" "}
                {/* <Link className="btn btn-info p-2 m-2" to="/signup">
                  Sign-up
                </Link> */}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
