import React from "react";
import "bootstrap/dist/css/bootstrap.css";
 
// navlink para css
import { NavLink } from "react-router-dom";
 
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 15 + '%'}} src="https://i.imgur.com/WwmP6ek.png"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item"><NavLink className="nav-link" to="/create"> Crear Empleado</NavLink></li>
           <li className="nav-item"><NavLink className="nav-link" to="/App2"> Agregados</NavLink></li>
           <li className="nav-item"><NavLink className="nav-link" to="/App3"> Reviews</NavLink></li>
           <li className="nav-item"><NavLink className="nav-link" to="/App4"> About Us</NavLink></li>

         </ul>
       </div>
     </nav>
   </div>
 );
}