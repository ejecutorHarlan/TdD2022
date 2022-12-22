import React, { useEffect, useState, setState } from 'react';
import Link from '../../components/Link/index.js';
import styles from './login.module.css';
import { buttonStyles } from './constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { getClient, closeSess } from '../../redux/Clients/thunks.js';
import { useNavigate } from 'react-router-dom';
import { getAutoCliente } from '../../redux/Clients/thunks.js';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
//import datos from '../../db/query.js';

const Turnos = () => {
  //const { client } = useSelector((state) => state.client);
  //const { islogged } = useSelector((state) => state.islogged);
  const { auto } = useSelector((state) => state.auto);
  const { client } = useSelector((state) => state.client);
  const dispatch = useDispatch();

  // const automovil = auto;
  // const cli = client;

  // const automovil = auto.auto;
  // const cli = client.client;

  const automovil = auto.auto.data;
  const cli = client.client.data;

  console.log('dataasw', cli.idCliente);
  console.log('Autoo', auto);
  console.log('cli', cli);

  // useEffect(() => {
  //   //setState({ patente: automovil.patente });
  //   dispatch(() => getAutoCliente(dispatch, cli.idCliente));
  // }, [dispatch]);

  return (
    <>
      <div className='wrapper'>
        <div className={styles.container}>
          <div>
            <h1>Tomar un turno</h1>
          </div>
          {/* <button onClick={() => goBack()}> Back </button> */}
          <table className={styles.prodtable}>
            <thead>
              <tr>
                <th>Mail</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Año</th>
                <th>Dominio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cli.idCliente}</td>
                <td>{cli.nombre}</td>
                <td>{cli.apellido}</td>
                <td>{automovil.marca}</td>
                <td>{automovil.modelo}</td>
                <td>{automovil.year}</td>
                <td>{automovil.patente}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Turnos;

{
  /* <form>
          <div>
            <input type='text' placeholder='Default User' required='required' />
            <input
              type='password'
              placeholder='Default Password'
              required='required'
            />
            <Link text={'Ingresar'} to={'/'} customStyle={buttonStyles} />
          </div>
           <div>{datos}</div> 
        </form> */
}
