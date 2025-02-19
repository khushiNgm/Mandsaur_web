// import React from "react";
// import Home from "../Pages/Home";
// import Places from "../Pages/Places";
// import AllLink from "../Pages/AllLink";
// import Contact from "../Pages/Contact";
// function Index(){
//     return(
//        <>
//        <Home/>
//        <Places/>
//        <AllLink/>
//        <Contact/>   
//        </>
//     );
// }
// export default Index;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Places from "../Pages/Places";
import AllLink from "../Pages/AllLink";
import Contact from "../Pages/Contact";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Places" element={<Places />} />
      <Route path="/AllLink" element={<AllLink />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default Index;
