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

    const visibles = soloTipados ? lenguajes.filter((l) => l.tipado) : lenguajes;

    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e) => setSoloTipados(e.target.checked)}/>
                {" "} Solo tipado estático
            </label>
            <ul style={{justifyItems:"left"}}>
                {visibles.map((leng) => 
                    <li key={leng.id}>{leng.id} {leng.nombre} {leng.tipado ? <strong>{"(Tipado)"}</strong> : <strong>{"(No Tipado)"}</strong>}</li>)}

            </ul>

            {visibles.length === 0 ? (<p>No hay resultados</p>) : (<p className="muted">Mostrando: {visibles.length} lenguajes</p>)}
        </div>
    )
}
*/

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