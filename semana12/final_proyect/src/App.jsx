import { BrowserRouter, Routes, Route } from 'react-router'
import Formulario from './pages/Formulario';
import InicioPage from './pages/InicioPage';
import LayoutBase from './Layouts/LayoutBase';
import LayoutInicio from './Layouts/LayoutInicio';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<LayoutInicio />}>
          <Route path='/' element={<InicioPage />} />
        </Route>

        <Route element={<LayoutBase />}>
          <Route path='/tarea/nueva' element={<Formulario />} />
          <Route path='/tarea/editar/:id' element={<Formulario />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;