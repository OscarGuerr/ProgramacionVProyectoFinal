import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Actualizar</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Borrar
     </button>
   </td>
 </tr>
);
 
export default function ListaEmpleados() {
 const [records, setRecords] = useState([]);
 
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 function ListaEmpleados() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 return (
   <div>
     <h3>Lista Empleados</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Nombre</th>
           <th>Posicion</th>
           <th>Nivel Editorial</th>
           <th>Acciones a tomar</th>
         </tr>
       </thead>
       <tbody>{ListaEmpleados()}</tbody>
     </table>
   </div>
 );
}