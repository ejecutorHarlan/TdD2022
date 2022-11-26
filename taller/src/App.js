//import logo from "./logo.svg";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Layout from './components/Layout';
import Log from './screens/Login/log';
import Turnos from './screens/Turnos/turnos';
import Servicios from './screens/Servicios/services';
import Contacto from './screens/Contacto/contact';
import Clients from './screens/Clientes/clients';

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

        {/* <div className="App">
          <Form />
        </div> */}
      </Routes>
    </Layout>
  );
};
export default App;
