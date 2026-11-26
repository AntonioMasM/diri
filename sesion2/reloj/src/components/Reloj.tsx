import {useEffect, useState} from 'react';

import ListaInstantes from './ListaInstantes';

function Reloj() {
    const [hora, setHora] = useState(() => new Date());
    const [instantes, setInstantes] = useState<Date[]>([]);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    function guardarInstante() {
        const instante = new Date();
        setInstantes((anteriores) => [...anteriores, instante]);
    }
    
    return (
        <section>
            <h2>Reloj</h2>
            <p>
                <time>{hora.toLocaleTimeString()}</time>
            </p>
            <button onClick={guardarInstante}>
                Guardar instante
            </button>
            <ListaInstantes instantes={instantes} />
        </section>
    );
}

export default Reloj;