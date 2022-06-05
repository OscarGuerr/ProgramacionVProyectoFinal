import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     position: form.position,
     level: form.level,
   };
 
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
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
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}