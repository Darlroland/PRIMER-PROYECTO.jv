import { Outlet, Link } from 'react-router-dom';

const LayoutInicio = () => {
  return (
    // Un diseño totalmente distinto al LayoutBase: fondo oscuro y contenido centrado
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white  p-10">
      
      <header className="mb-8 text-center ">
        <h1 className="text-4xl font-bold mb-2">🚀 Bienvenido</h1>
        <p className="text-slate-400">Gestiona tus tareas de forma sencilla y eficiente</p>
      </header>


      <main className="w-full max-w-md p-4 m-auto bg-slate-800 rounded-xl shadow-lg ">
        
        <Link to="/tarea/nueva" className="hover:text-white underline transition-colors mb-8 inline-block ">
          Entrar a la aplicación →
        </Link>
        
        <Outlet />

      </main>

    </div>
  );
};

export default LayoutInicio;