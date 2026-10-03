import {Outlet , Link} from 'react-router'


const LayoutBase = () => {
  return (
      <div className="min-h-screen bg-slate-100">
        
        <nav className="bg-indigo-900 shadow-md p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-white">
            <Link to="/" className="text-xl font-bold tracking-wide">
              ✅ Gestor de Tareas
            </Link>
            <Link to="/tarea/nueva" className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors font-medium">
              + Crear Tarea
            </Link>
          </div>

            
        </nav>

        <main className="max-w-4xl mx-auto mt-8 p-4">
          <Outlet /> 
        </main>

      </div>
    );
}


export default LayoutBase