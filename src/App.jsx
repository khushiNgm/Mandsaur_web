// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// // import {Home,Places,AllLink,Contact} from './Pages'
// import Nav from './Component/Nav';
// import Index from "./Component/index";


// function App() {


//   return (
//     <>
//     <Router>
//              <Nav/>
//              <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='Places' element={<Places/>}></Route>
//       <Route path='AllLink' element={<AllLink/>}></Route>
//       <Route path='Contact' element={<Contact/>}></Route>
//     </Routes>
//     </Router>

   
//     </>
//   )
// }
// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Index from "./Component/index.jsx"; // Importing Index properly

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/*" element={<Index />} /> {/* Using Index as a route */}
      </Routes>
    </Router>
  );
}

export default App;



