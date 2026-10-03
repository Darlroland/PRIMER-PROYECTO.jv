const List = ({corredores, onDelete, onEdit}) => {
  
  
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">Lista de salida</h2>
        <div className="h-px flex-1 bg-neutral-200 mx-4"></div>
      </div>
      
      <ul id="lista" className="space-y-3 mb-4">
        {corredores.map((corredor)=>{
          return(
        <li key={corredor.id} className="flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors">
          <div className="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
            <span className="font-mono text-base font-medium">{corredor.dorsal}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{corredor.nombre}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">{corredor.categoria}</span>
              <span className="text-xs text-neutral-400">{corredor.edad}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
            onClick={()=>{
              console.log("1. Clic en List:", corredor) 
              onEdit(corredor)}}>
              Editar
            </button>
            <button  className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
            onClick={()=>onDelete(corredor.id)}>
              Eliminar
            </button>
          </div>
        </li>
          )
        })}
      </ul>

      <div id="vacio" className="hidden text-center py-16 border border-dashed border-neutral-200 rounded-xl">
        <p className="text-lg font-semibold text-neutral-400 mb-1">Sin corredores aún</p>
        <p className="text-sm text-neutral-400">La línea de salida está vacía. Inscribe al primero.</p>
      </div>

      <p id="loading" className="hidden font-mono text-xs text-neutral-400 uppercase tracking-widest py-10 text-center">
        Cargando corredores...
      </p>
    </section>
    
  )
}

export default List