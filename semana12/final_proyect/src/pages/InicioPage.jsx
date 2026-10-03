import { useEffect } from "react";
import { useTareaStore } from "../services/store";

const InicioPage = () => {

  const tareas = useTareaStore(state => state.tareas);
  const obtenerTareas = useTareaStore(state => state.obtenerTareas);


  useEffect(() => {
    obtenerTareas();
  }, []);

  return (
      <div>

        
        <div className="flex flex-col gap-4">
          {
            tareas.map((tarea) => (
              <div key={tarea.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between ">
                
                <div>

                  <h3 className="text-xl font-bold text-slate-950  ">{tarea.titulo}</h3>
                  <p className="text-slate-700 text-sm mt-1">{tarea.descripcion}</p>

                  <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-md ${tarea.estado === 'Completada' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {tarea.estado}
                  </span>

                </div>
              
              </div>
            ))
          }
        </div>
      </div>
    );

}

export default InicioPage