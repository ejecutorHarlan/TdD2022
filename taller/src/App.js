//import logo from "./logo.svg";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login/index.js';
import Layout from './components/Layout/index.js';
import Log from './screens/Login/log.js';
import Turnos from './screens/Turnos/turnos.js';
import Servicios from './screens/Servicios/services.js';
import Contacto from './screens/Contacto/contact.js';
import Clients from './screens/Clientes/clients.js';
import Register from './screens/Registrer/register.js';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/log' element={<Log />} />
        <Route path='/turnos' element={<Turnos />} />
        <Route path='/services' element={<Servicios />} />
        <Route path='/contact' element={<Contacto />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Layout>
  );
};
export default App;
