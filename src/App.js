import React, { useState, useEffect } from "react";
import { baseUrl, message } from "./Component/ApiConf";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Component/Login";
import Admin_Login from "./admin/Login_Signup/Login";
import Header from "./Component/Header";
import Signup from "./Component/Signup";
import Home from "./Component/Home";
import Admin from "./admin/Admin"

function App() {

  // form State Manage
  
  // const [showValue,setShowValue] = useState();

  // useEffect(() => {
  //   fetch(`${baseUrl}/todo`).then(res=> res.json()).then((data)=>{
  //   // setShowValue(data)
  //   // console.log(data)
  // })
  // },[]);




  
  return (
    <div className="App">
      {/* { showValue &&<h1>{showValue.message}</h1>} */}
      {/* <Header/> */}
      {/* <Form/> */}
      {/* <h1>Halooo</h1> */}
      {/* <Signup/> */}

      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* admin */}
          <Route path="/admin" element={<Admin/>}/>

          <Route path="/admin/login" element={<Admin_Login />} />
          {/* <Route path="/admin/login" element={<Admin_Login />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
