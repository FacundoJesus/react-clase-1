

interface TarjetaProps {
    nombre:string;
    rol:string;
    emoji:string;
}

function Tarjeta({nombre,rol,emoji} : TarjetaProps) {
    
    return (
        <div className="card">
            <span style={{fontSize:32}}>{emoji}</span>
            <h3>{nombre}</h3>
            <p className="muted">{rol}</p>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Tarjeta nombre='Ada Lovelace' rol='Escribió el primer algoritmo' emoji='🧮'/>
            <Tarjeta nombre='Alan Turing' rol='Padre de la computación' emoji='💡'/>
            <Tarjeta nombre='Grace Hopper' rol='Pionera de los compiladores' emoji='🐞'/>
        </div>
    )
}