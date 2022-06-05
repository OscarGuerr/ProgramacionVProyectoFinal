import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
 });
 const navigate = useNavigate();
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
 
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/");
 }
 
 return (
   <div>
     <h3>Agregar Nuevo Empleado</h3>
     <br/>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Nombre Completo</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <br/>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="idAnalista"
             value="Analista"
             checked={form.position === "Analista"}
             onChange={(e) => updateForm({ position: e.target.value })}
           />
           <label htmlFor="idAnalista" className="form-check-label">Analista</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="idEditorial"
             value="Editorial"
             checked={form.position === "Editorial"}
             onChange={(e) => updateForm({ position: e.target.value })}
           />
           <label htmlFor="jefeEditorial" className="form-check-label">Editorial</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="idPeriodista"
             value="Periodista"
             checked={form.position === "Periodista"}
             onChange={(e) => updateForm({ position: e.target.value })}
           />
           <label htmlFor="idPeriodista" className="form-check-label">Periodista</label>
         </div>
       </div>
       <br/>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="pos1"
             value="1"
             checked={form.level === "1"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="pos1" className="form-check-label">1</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="pos2"
             value="2"
             checked={form.level === "2"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="pos2" className="form-check-label">2</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="pos3"
             value="3"
             checked={form.level === "3"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="pos3" className="form-check-label">3</label>
         </div>
       </div>
       <br/>
       <div className="form-group">
         <input
           type="submit"
           value="Agregar Reviewer"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}