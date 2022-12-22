import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from '../../components/Link/index.js';
import styles from './login.module.css';
import { buttonStyles } from './constants.js';
import ButtonShared from '../../components/sharedButton/index.js';
import InputShared from '../../components/sharedInput/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  getClient,
  closeSess,
  getAutoCliente,
} from '../../redux/Clients/thunks.js';
import { useNavigate } from 'react-router-dom';

//import { getClientById } from '../../controllers/clients';
//import conn from "../../db/keys";

// const getClientById = async (req, res) => {
//   //console.log('REEQ solito', req.idCliente);
//   //const datosClientes = [];

//   const id = { idCliente: req.idCliente };
//   try {
//     let response = await fetch('http://localhost:3000/aclientes', {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(id),
//     });
//     let dataClient = await response.json();
//     var datosClientes = dataClient;

//     if (response.status !== 200) {
//       //dismissIsLoading();
//     } else {
//       //dismissIsLoading();
//       //await getProducts(dispatch);
//       console.log('Parece que anduvo', dataClient);
//       console.log('Parece que anduvo con redux', client);
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// };

const Log = () => {
  const navigate = useNavigate();
  const { client } = useSelector((state) => state.client);
  const { islogged } = useSelector((state) => state.islogged);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(() => getClient(dispatch));
  // }, [dispatch]);

  console.log('CLiente redux', client);

  const {
    register,
    handleSubmit,
    formState: { errors },
    //setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('esta loguedo', islogged);
    console.log('dataaax', data.idCliente);
    dispatch(() => getClient(dispatch, data.idCliente));
    dispatch(() => getAutoCliente(dispatch, data.idCliente));

    navigate('/turnos');
  };

  // setTimeout(() => {
  //   console.log('esta loguedo', islogged);
  // }, 2000);

  // const closeSession = () => {
  //   dispatch(() => closeSess(dispatch));
  //   navigate('/');
  // };

  return (
    <div className={styles.container}>
      <div>Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Ingrese sus datos</p>
        <InputShared
          placeholder={'Mail'}
          //styleshare={Styles.inputbox}
          type={'email'}
          register={register}
          name={'idCliente'}
        />
        <InputShared
          placeholder={'Password'}
          //styleshare={Styles.inputbox}
          type={'passwors'}
          register={register}
          name={'password'}
        />
        <ButtonShared
          text='Login'
          //styleshare={Styles.buttonStyles}
          type={'submit'}
        />
        {/* <Link
          text={'Registrarse'}
          to={'/register'}
          customStyle={buttonStyles}
        /> */}
      </form>
      {/* <button onClick={() => closeSession()}> Cerrar Sesión </button> */}
    </div>
  );
};

export default Log;

// <form>
//         <div>
//           <input
//             type='text'
//             placeholder='User'
//             required='required'
//             className={styles.aaa}
//             //value={user}
//             // onChange={(e) => userChange(e)}
//             // className="form-floating"
//           />
//           <input
//             type='password'
//             placeholder='Password'
//             required='required'
//             // value={pass}
//             // onChange={(e) => passChange(e)}
//             // className="form-floating"
//           />
//           <Link text={'Ingresar'} to={'/'} customStyle={buttonStyles} />

//           {/* <button
//             onClick={(e) => {
//               //console.log("El usuario es:", user, "y a password es:", pass);
//             }}
//             className="w-100 btn btn-lg btn-primary"
//           >
//             Enviar usuario y pass a la consola
//           </button> */}

//           {/* {conn.query(
//             "SELECT * FROM `bancos`",
//             function (err, results, fields) {
//               console.log(results); // results contains rows returned by server
//               console.log(fields); // fields contains extra meta data about results, if available
//             }
//           )} */}
//         </div>
//         <div>
//           <Link
//             text={'Registrarse'}
//             to={'/register'}
//             customStyle={buttonStyles}
//           />
//         </div>
//       </form>
