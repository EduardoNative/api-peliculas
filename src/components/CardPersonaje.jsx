import { useEffect, useState } from "react";
import { getPersonaje } from "../actions/api.personaje";

export const CardPersonaje = (props) => {
  const [personajes, setPersonajes] = useState([]);
  //leer info   guardar informacion

  useEffect(() => {
    getPersonaje().then((res) => setPersonajes(res.results));
  }, []);

  return (
    <div style={{gap:"20px"}}>
      <h2>PERSONAJES</h2>
      {personajes.map((personaje) => (
        //<img src={personaje.image} />
        <div style={{display: "block", justifyContent:"center", textAlign:"center" }}>
          <h1 style={{color:"brown"}}> {personaje.name} </h1>
          <h1 style={{color:"green"}}> {personaje.location.name} </h1>
          <h1 style={{color:"blue"}}> {personaje.location.url} </h1>
          <h1> {personaje.type} </h1>
          <h1 style={{color:"cyan"}}> {personaje.status} </h1>

          <img style={{borderRadius:"20px", width:"80vh", height:"80vh"}} src={personaje.image} />
        </div>
      ))}
    </div>
  );
};
