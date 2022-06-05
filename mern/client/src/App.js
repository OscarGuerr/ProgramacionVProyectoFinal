import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
// componentes
import ListaEmpleados from "./components/ListaEmpleados";
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import App2 from "./components/App2";
import App3 from "./components/App3"
import App4 from "./components/App4"
const App = () => {
 return (
   <div className="app">
     <Navbar />
     <Routes>
       <Route exact path="/" element={<ListaEmpleados />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/App2" element={<App2 />} />
       <Route path="/App3" element={<App3 />} />
       <Route path="/App4" element={<App4 />} />
     </Routes>
   </div>
 );
};
 
export default App;