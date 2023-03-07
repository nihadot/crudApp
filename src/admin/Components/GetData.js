import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { admin } from '../../Component/ApiConf'
import { ADMIN_TOCKEN } from '../../Component/localStore/localStore'

function GetData({getData}) {


    const [name,setName]  = useState()
    const navogator =  useNavigate()
    axios.get(`${admin}/home`,{headers:{'Authorization':localStorage.getItem(ADMIN_TOCKEN)}}).then(({data})=>{
        const {response} = data
        console.log(data);

        if (data.title) {
            // const {message,error} = response
        // console.log(data.title);
        getData(name)
        setName(data.title)
            // setName(localStorage.getItem(AUTH_LOCAL_VAR))
            // success login
            // console.log(data)
          } else if (response.error) {
            // error
            console.log(response.message);
            navogator('/admin/login')
          }

    })
    return (
    <div>
        <h1>get data</h1>
    </div>
  )
}

export default GetData