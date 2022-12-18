import React from 'react';
import { useForm } from 'react-hook-form';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';

import { addClient } from '../../controllers/clients';
import ButtonShared from '../../components/sharedButton/index';
import InputShared from '../../components/sharedInput/index';
//import conn from "../../db/keys";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    addClient(data);
  };

  return (
    <div className={styles.container}>
      <></>

      <div>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Ingrese los datos del producto</p>
          <InputShared
            placeholder={'Mail'}
            //styleshare={Styles.inputbox}
            type={'email'}
            register={register}
            name={'idCliente'}
          />
          <InputShared
            placeholder={'Apellido'}
            //styleshare={Styles.inputbox}
            type={'text'}
            register={register}
            name={'apellido'}
          />
          <InputShared
            placeholder={'Nombre'}
            //styleshare={Styles.inputbox}
            type={'text'}
            register={register}
            name={'nombre'}
          />
          <InputShared
            placeholder={'Domicilio'}
            //styleshare={Styles.inputbox}
            type={'text'}
            register={register}
            name={'domicilio'}
          />
          <InputShared
            placeholder={'Tel'}
            // styleshare={Styles.inputbox}
            type={'number'}
            register={register}
            name={'telefono'}
          />
          <InputShared
            placeholder={'Tipo Doc'}
            // styleshare={Styles.inputbox}
            type={'text'}
            register={register}
            name={'tipoDoc'}
            value={'DNI'}
          />
          <InputShared
            placeholder={'Nro Doc'}
            // styleshare={Styles.inputbox}
            type={'text'}
            register={register}
            name={'nroDoc'}
          />
          <InputShared
            placeholder={'Password'}
            // styleshare={Styles.inputbox}
            type={'password'}
            register={register}
            name={'password'}
          />
          <ButtonShared
            text='Agregar Cliente'
            //styleshare={Styles.buttonStyles}
            type={'submit'}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

// <div>Registro</div>
// <form onSubmit={handleSubmit(onSubmit)}>
//   <div>
//     <input
//       type='email'
//       placeholder='Correo Electrónico'
//       required='required'
//       className={styles.aaa}
//       name='idCliente'
//     />
//     <input
//       type='text'
//       placeholder='Apellido'
//       required='required'
//       name='apellido'
//     />
//     <input
//       type='text'
//       placeholder='Nombre'
//       required='required'
//       name='nombre'
//     />
//     <input
//       type='text'
//       placeholder='Domicilio'
//       required='required'
//       name='domicilio'
//     />
//     <input
//       type='text'
//       placeholder='Tipo Doc'
//       required='required'
//       value='DNI'
//       name='tipoDoc'
//     />
//     <input
//       type='text'
//       placeholder='Nro. Documento'
//       required='required'
//       name='nroDoc'
//     />
//     <input
//       type='password'
//       placeholder='Password'
//       required='required'
//       name='password'
//     />

//     {/* <Link text={'Ingresar'} to={'/'} customStyle={buttonStyles} /> */}

//     {/* <button
//       onClick={(formu) => {
//         addClient(formu);
//         //   console.log(
//         //     'El usuario es:',
//         //     idCliente,
//         //     'y a password es:',
//         //     password
//         //   );
//         console.log('hhshs', formu);
//       }}
//       className='w-100 btn btn-lg btn-primary'
//     >
//       Enviar usuario y pass a la consola
//     </button> */}
//   </div>
//   <div>
//     <Link
//       text={'Registrarse'}
//       to={'/register'}
//       customStyle={buttonStyles}
//     />
//   </div>
//   <button>Enviarrr</button>
// </form>
