import React from 'react';
//import Link from '../../components/Link.js';
import styles from './login.module.css';
//import buttonStyles from './constants.js';

const Servicios = () => {
  return (
    <div className={styles.container}>
      <div>Servicios que brinda la empresa</div>
      <form>
        <div>
          <ul>
            <li>Mantenimiento general</li>
            <li>Servicios para Taxis y flotas</li>
            <li>Gestión de repuestos</li>
            <li>Gestión turnos</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Servicios;
