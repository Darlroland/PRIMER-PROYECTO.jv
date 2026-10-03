import { create } from 'zustand';

const URL = 'https://apibox.vercel.app/jXBlSicCTYmH90nrRBfh7gR3tn8vpuyL/api/tareas';

export const useTareaStore = create((set, get) => ({

  tareas: [],

  obtenerTareas: async () => {
    const response = await fetch(URL);
    const data = await response.json();
    set({ tareas: data });
  },
  agregarTarea: async (nuevaTarea) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaTarea)
    });
    
    await get().obtenerTareas(); 
  },


  actualizarTarea: async (id, tareaModificada) => {
    await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tareaModificada)
    });
    
    await get().obtenerTareas();
  },


  eliminarTarea: async (id) => {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    });
    
    await get().obtenerTareas();
  }
}));



