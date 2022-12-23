import React, { useEffect, useState, setState } from 'react';
import { useForm } from 'react-hook-form';
import Link from '../../components/Link/index.js';
import styles from './login.module.css';
import ButtonShared from '../../components/sharedButton/index.js';
import InputShared from '../../components/sharedInput/index.js';
import { buttonStyles } from './constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { getClient, closeSess } from '../../redux/Clients/thunks.js';
import { useNavigate } from 'react-router-dom';
import { getAutoCliente } from '../../redux/Clients/thunks.js';
import { setFecha } from '../../redux/Clients/thunks.js';

//import datos from '../../db/query.js';

const Turnos = () => {
  //const { client } = useSelector((state) => state.client);
  //const { islogged } = useSelector((state) => state.islogged);
  const { auto } = useSelector((state) => state.auto);
  const { client } = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    //setValue,
  } = useForm();

  // const automovil = auto;
  // const cli = client;

  // const automovil = auto.auto;
  // const cli = client.client;

  const automovil = auto.auto.data;
  const cli = client.client.data;

  console.log('dataasw', cli.idCliente);
  console.log('Autoo', automovil);
  console.log('cli', cli);

  // useEffect(() => {
  //   //setState({ patente: automovil.patente });
  //   dispatch(() => getAutoCliente(dispatch, cli.idCliente));
  // }, [dispatch]);

  //const fechaseleccionada = JSON.stringify(useState(new Date()));
  // const fechaseleccionada = useState(new Date());
  const fechaseleccionada = '2023-01-26 08:50:30';

  console.log('fecha selecsss', fechaseleccionada);
  //console.log('fecha cam', fechacambiada);

  const onSubmit = async (datos) => {
    // console.log('data agenda', datos);
    //console.log('fecha', datos.fechaTurno);
    dispatch(() => setFecha(dispatch, datos));

    const f = datos.fechaTurno.toString();

    setTimeout(() => {
      alert('Fecha agendada para el ' + f);
    }, 1000);
  };

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
      <div>
        {/* <DateTimePicker value={fechaseleccionada} onChange={fechacambiada} /> */}
        {/* <DateTimePicker value={fechaseleccionada} /> */}
      </div>

      {/* formulario de envio de fecha */}
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Ingrese la fecha 2023-01-26 08:50:30</p>
          <InputShared
            //placeholder={'fecha 2023-01-26 08:50:30'}
            //styleshare={Styles.inputbox}
            type={'datetime-local'}
            register={register}
            name={'fechaTurno'}
          />
          <InputShared
            //placeholder={cli.idCliente}
            //styleshare={Styles.inputbox}
            type={'string'}
            register={register}
            name={'idClienteReparacion'}
            value={cli.idCliente}
          />
          <ButtonShared
            text='agendar'
            //styleshare={Styles.buttonStyles}
            type={'submit'}
          />
        </form>
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
