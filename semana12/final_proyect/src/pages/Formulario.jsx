import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useTareaStore } from '../services/store';


const Formulario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== undefined;


  const tareas = useTareaStore((state) => state.tareas);
  const obtenerTareas = useTareaStore((state) => state.obtenerTareas);
  const agregarTarea = useTareaStore((state) => state.agregarTarea);
  const actualizarTarea = useTareaStore((state) => state.actualizarTarea);
  const eliminarTarea = useTareaStore((state) => state.eliminarTarea);


  const estadoInicial = { 
    titulo: '', 
    descripcion: '', 
    estado: 'Pendiente' };
    
  const [tarea, setTarea] = useState(estadoInicial);


  useEffect(() => {
    obtenerTareas();
  }, []);


  useEffect(() => {
    if (isEditing && tareas.length > 0) {
      const tareaEncontrada = tareas.find((t) => t.id === id);
      if (tareaEncontrada) {
        setTarea(tareaEncontrada);
      }
    } else {
      setTarea(estadoInicial); 
    }
  }, [id, tareas]); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarea((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const { id: idIgnorado, ...datosLimpios } = tarea;      
      await actualizarTarea(id, datosLimpios); 
      navigate('/tarea/nueva'); 
    } else {
      await agregarTarea(tarea); 
      setTarea(estadoInicial); 
    }
  };

  const handleDelete = async (idAEliminar) => {
   
    await eliminarTarea(idAEliminar);

  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      

      <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-sm border border-slate-200 self-start">
        <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
          {isEditing ? 'Editar Tarea' : 'Crear Nueva Tarea'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-700">Título</label>
            <input 
              type="text" 
              name="titulo"
              value={tarea.titulo}
              onChange={handleChange}
              required
              className="border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-700">Descripción</label>
            <textarea 
              name="descripcion"
              value={tarea.descripcion}
              onChange={handleChange}
              required
              rows="3"
              className="border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-700">Estado</label>
            <select 
              name="estado"
              value={tarea.estado}
              onChange={handleChange}
              className="border border-slate-300 rounded-lg p-2 bg-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Completada">Completada</option>
            </select>
          </div>

          <button type="submit" className="mt-4 bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            {isEditing ? 'Actualizar' : 'Guardar'}
          </button>
          
        
          {isEditing && (
            <button type="button" onClick={() => navigate('/tarea/nueva')} className="mt-2 text-slate-500 hover:text-slate-800 text-sm font-medium">
              Cancelar edición
            </button>
          )}
        </form>
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Tus Tareas</h2>
        
        {
          tareas.map((t) => (
            <div key={t.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-indigo-300 transition-colors">
              
              <div>
                <h3 className="text-lg font-bold text-slate-800">{t.titulo}</h3>
                <p className="text-slate-500 text-sm mt-1">{t.descripcion}</p>
                <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-md ${t.estado === 'Completada' ?  'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {t.estado}
                </span>
              </div>
              
              <div className="flex gap-2 shrink-0">
          
                <Link to={`/tarea/editar/${t.id}`} className="px-3 py-1 bg-slate-100 text-slate-600 rounded font-medium hover:bg-slate-200 transition-colors">
                  Editar
                </Link>
                <button onClick={() => handleDelete(t.id)} className="px-3 py-1 bg-red-50 text-red-600 rounded font-medium hover:bg-red-100 transition-colors">
                  Borrar
                </button>
              </div>

            </div>
          )
        )}
      </div>

    </div>
  );
};

export default Formulario;