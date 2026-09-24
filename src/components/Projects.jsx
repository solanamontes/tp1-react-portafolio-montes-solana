function Projects () {
    const proyectos=  [
        {
            nombre: "Tienda de discos", Descripcion: "Pagina web para mostrar productos y realizar compras."
        },
        {
            nombre: "Tienda de Artesanias", Descripcion: "Apliacion para gestionar productos, clientes y ordenes."
        }
    ]
    return (
        <section>
            <h2>Mis proyectos</h2>
            {
                proyectos.map((proyecto)=> (
                    <div key={proyecto.nombre}>
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.Descripcion}</p>
                        </div>
                ))


            }
        
        </section>
    )
}
export default Projects