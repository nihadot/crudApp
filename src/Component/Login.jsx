import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./ApiConf";
import { AUTH_LOCAL_VAR, TOCKEN_LOCAL_VAR } from "./localStore/localStore";

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const naviation = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault();
    axios.post(login, { email, password }).then(({ data }) => {
      const { logData } = data
      if (logData.error) {
        const { message } = logData
        setLoginSuccess(false)
        setMessage(message)
        setError(true)
      }
      if (logData.login) {
        const { message } = logData
        setError(false)
        setMessage(message)
        setLoginSuccess(true)
        localStorage.setItem(TOCKEN_LOCAL_VAR, logData.tokenAuth)
        localStorage.setItem(AUTH_LOCAL_VAR, logData.userData.name)
        naviation('/')
      }
    })
  };



  return (
    <div className="container">
      <div className="row p-5 ">
        <h3>Login</h3>
        {error && <div style={{ color: 'red' }}>{message}</div>}
        {loginSuccess && <div style={{ color: 'green' }}>{message}</div>}
        <form onSubmit={onSubmit} autoComplete='off'>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" name="email" required onChange={(event) => setEmail(event.target.value)} className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" autoComplete="on" onChange={(event) => setPassword(event.target.value)} className="form-control" required name="password" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10 ">
              <input type="submit" className="form-control" id="" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10 ">
              <p>Not a account , please signup <Link className='btn btn-info p-2 m-2' to="/signup">Sign-up</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
