/*
import {useState} from "react"; // Es un hook que almacena la memoria de un componente
import type {SubmitEvent, ChangeEvent} from "react"; // Importe los tipos de Eventos

export default function App() {
    const [nombre, setNombre] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");

    function manejarEnvio(e:SubmitEvent){
        console.log("EVENTO:",e);
        e.preventDefault();
        setMensaje(`Bienvenido, ${nombre}`);
        setNombre("");
    }
    
    function manejarCambio(e:ChangeEvent<HTMLInputElement>){
        console.log("EVENTO:",e);
        setNombre(e.target.value)
    }

    return (
        <form onSubmit={manejarEnvio}>
            <input value={nombre} onChange={manejarCambio} placeholder="Ingrese su nombre"/>
            <button type="submit" disabled={nombre.trim()===""}>Enviar</button>
            <p className="muted">Estás escribiendo: {nombre.trim() || "(nada todavía)"}</p>
            {mensaje && <h3>{mensaje}</h3>}
        </form>
    )
}
*/


/*
import {useState} from "react";

interface Lenguaje {
    id: number,
    nombre: string,
    tipado: boolean,
}

const lenguajes:Lenguaje[] = [
    {id:1, nombre:"JavaScript", tipado: false},
    {id:2, nombre:"TypeScript", tipado: true},
    {id:3, nombre:"Python", tipado: false},
    {id:4, nombre:"Java", tipado: true},
    {id:5, nombre:"C#", tipado: true}
]

export default function App(){

    const [soloTipados, setSoloTipados] = useState<boolean>(false)

    const visibles = (soloTipados) ? (lenguajes.filter((l) => l.tipado)) : lenguajes;

    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e) => setSoloTipados(e.target.checked)}/>
                {" "} Solo tipado estático
            </label>
            <ul style={{justifyItems:"left"}}>
                {visibles.map((leng) => 
                    <li key={leng.id}>{leng.id} {leng.nombre} {leng.tipado ?<strong>{"(Tipado)"}</strong> : <strong>{"(No Tipado)"}</strong>}
                    </li>)}
            </ul>

            {visibles.length === 0 ? <p>No hay resultados</p> : <p className="muted">Mostrando: {visibles.length} lenguajes</p>}
        </div>
    )
}
*/

/*
import {useState} from 'react';

interface Persona {
    id: number,
    nombre: string,
    apellido: string,
    edad: number
}

const personas:Persona[] = [
    {id:1, nombre:'Facundo', apellido: 'Citera', edad:29},
    {id:2, nombre:'Julian', apellido: 'Caudis', edad:28},
    {id:3, nombre:'Nicolás', apellido: 'Valdez', edad:32},
    {id:4, nombre:'Celina', apellido: 'Vila', edad:30},
    {id:5, nombre:'Adolfo', apellido: 'Vera', edad:21},
    {id:6, nombre:'Mateo', apellido: 'Mujica', edad:20},
    {id:7, nombre:'Fausto', apellido: 'Rodriguez', edad:19},
    {id:8, nombre:'Alvaro', apellido: 'Scarafia', edad:22},
    {id:9, nombre:'Paula', apellido: 'Pérez', edad:18},
    {id:10, nombre:'Sofía', apellido: 'Lechman', edad:23}
]

function App() {

    const [soloMenores, setSoloMenores] = useState<boolean>(false); 

    const listaVisible = soloMenores ? (personas.filter((p) => p.edad < 25)) : personas;

    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e) => setSoloMenores(e.target.checked)}/>
                {" "} Ver Menores de 25
            </label>
            <ul style={{justifyItems:"left"}}>
                {listaVisible.map((p) => 
                    <li key={p.id}>{p.nombre} - {p.apellido} {p.edad}</li>
                )}
            </ul>

            {listaVisible.length === 0 ?
             <p>No hay personas Mayores a 25</p> : <p>{listaVisible.length}</p>
            }
        </div>
    )
}

export default App;
*/

/*
import { useState, useEffect } from "react";

export default function App() {

    const [segundos, setSegundos] = useState<number>(0);
    const [corriendo, setCorriendo] = useState<boolean>(false);

    useEffect(() => {
        if (!corriendo) {
            return;
        }

        const id = setInterval(() => {
            setSegundos((s) => s + 1);
        }, 1000);

        return () => clearInterval(id);
    },[corriendo]);

    return (
        <div>
            <p className="big">Segundos: {segundos} segs.</p>
            <button onClick={() => setCorriendo(!corriendo)}>
                {corriendo ? "Detener" : "Iniciar"}
            </button>

            <button onClick={() => setSegundos(0)}>Reiniciar</button>
        </div>
    )
}
*/