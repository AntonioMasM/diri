type ListaInstantesProps = {
    instantes: Date[];
};

function ListaInstantes({ instantes}: ListaInstantesProps) {
    return (
        <section>
            <h3>Instantes guardados</h3>
            {instantes.length === 0 ? (
                <p>Todavía no has guardado ningún instante.</p>
            ) : (
                <ol>
                    {instantes.map((instante, indice) => (
                        <li key={indice}>
                            <time>{instante.toLocaleTimeString()}</time>
                        </li>
                    ))}
                </ol>
            )}
        </section>
    );
}

export default ListaInstantes;