import React, { useState } from "react";
import '../components/Estudiantes.css'; 

const RegistroEstudiantes = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [carnet, setCarnet] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = () => {
    if (nombre && edad && carnet) {
      setEstudiantes([...estudiantes, { nombre, edad, carnet }]);
      setNombre("");
      setEdad("");
      setCarnet("");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registro de Estudiantes</h2>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
          />
        </div>
        <button type="button" className="btn" onClick={agregarEstudiante}>
          Agregar
        </button>
      </form>

      <h4 className="list-title">Listado:</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carnet</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((est, index) => (
            <tr key={index}>
              <td>{est.nombre}</td>
              <td>{est.edad}</td>
              <td>{est.carnet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroEstudiantes;
