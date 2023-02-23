import React from "react";
import "./app.css";

import { Route, Routes,Link } from "react-router-dom";

import Right from "./companentes/UmumiyRuyxat/RightSection/Right";
import SideBar from "./companentes/UmumiyRuyxat/Sidebar/SideBar";
import Center from "./companentes/UmumiyRuyxat/CenterSection/Center";
import Yoshlar from './companentes/UmumiyRuyxat/CenterSection/Yoshlar/Yoshlar';
import Ayollar from './companentes/UmumiyRuyxat/CenterSection/Ayollar/Ayollar';
import Temir from './companentes/UmumiyRuyxat/CenterSection/Temir/Temir';
import Migrant from './companentes/UmumiyRuyxat/CenterSection/Migrant/Migrant';


function App1() {

  return (
    <>
      <div>
        <div className="main-container flex">
          <SideBar />
          <Center />
          {/* <Registratsiya/> */}
          <Right />
        </div>
      </div>
      <Routes>
        <Route path="/yoshlar" element={<Yoshlar />}></Route>
        <Route path="/ayollar" element={<Ayollar />}></Route>
        <Route path="/temir" element={<Temir />}></Route>
        <Route path="/migrant" element={<Migrant />}></Route>
      </Routes>
    </>
  );
}

export default App1;
