import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AUTH_LOCAL_VAR, TOCKEN_LOCAL_VAR } from './localStore/localStore'
import { signup } from './ApiConf'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const [Error, setError] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault()
        axios.post(`${signup}`, { name, email, password }).then(({ data }) => {
            if (data.userData){
                // Signup successfull
                setError(false)
                const { userData } = data
                // const { loggedStatus } = userData
                localStorage.setItem(TOCKEN_LOCAL_VAR, userData.tokenAuth)
                localStorage.setItem(AUTH_LOCAL_VAR, userData.data.name)
                navigate('/')
            }
            if (data.err) {
                setError(true)
                setMessage(data.err)
                // const { err, error } = data
            }
        })
    }

    return (
        <div className="container">
            <div className="row p-5 ">
                {/* {loggedSuccess && <div style={{ color: 'green', padding: '10px' }}>Successfully created</div>} */}
                {Error && <div style={{ color: 'red', padding: '10px' }}>{message}</div>}
                <h3>Signup</h3>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={(event) => setName(event.target.value)} className="form-control" name="name" required />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={(event) => setEmail(event.target.value)} name="email" required className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" name="password" required autoComplete='on' />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10 ">
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10 ">
                            <p>Already have an account <Link className='btn btn-info p-2 m-2' to="/login">Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup