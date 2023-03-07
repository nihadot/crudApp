import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { home } from './ApiConf';
import { AUTH_LOCAL_VAR, TOCKEN_LOCAL_VAR } from './localStore/localStore';

function Home() {
  const naviation = useNavigate()
  const [name,setName] = useState('');

  useEffect(() => {
    axios.get(home, {
      headers: {
        'Authorization': localStorage.getItem(TOCKEN_LOCAL_VAR)
      }
    }).then(({ data }) => {
      if (data.title) {
        setName(localStorage.getItem(AUTH_LOCAL_VAR))
        // success login
        console.log(data)
      } else if (data.err) {
        // error
        naviation('/login')
      }

    })
  }, [])

  const logout = (event) => {
    localStorage.removeItem(TOCKEN_LOCAL_VAR)
    naviation('/login')
  }


  return (
    <div>
      <h3>Home</h3>
      <button onClick={logout}>logout</button>
      <h1>Welcome {name}</h1>
      {/* <Link className='btn btn-info p-2 m-2' to="" onClick={logout}>logout</Link> <br /> */}
      {/* <Link className='btn btn-info p-2 m-2' to="/signup">Signup</Link> */}
    </div>
  )
}

export default Home