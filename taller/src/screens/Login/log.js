import React from 'react';
import { useForm } from 'react-hook-form';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';
import ButtonShared from '../../components/sharedButton/index';
import InputShared from '../../components/sharedInput/index';
import { getClientById } from '../../controllers/clients';
//import conn from "../../db/keys";

const Log = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('dataaa', data);
    await getClientById(data);
    await console.log('getclien', getClientById.datosClientes);
  };

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
        <Link
          text={'Registrarse'}
          to={'/register'}
          customStyle={buttonStyles}
        />
      </form>
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
