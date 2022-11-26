import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';
//import conn from "../../db/keys";

const Contacto = () => {
  return (
    <div className='wrapper'>
      <div className={styles.container}>
        <div>Login</div>
        <form>
          <div>
            <input
              type='text'
              placeholder='Nombre y apellido'
              required='required'
            />
          </div>
          <div>
            <input type='mail' placeholder='E-Mail' required='required' />
          </div>
          <div>
            <textarea
              id='messagetxt'
              placeholder='Ingrese su mensaje'
              rows='4'
              cols='50'
            ></textarea>
          </div>
          <div>
            <Link text={'Enviar mensaje'} to={'/'} customStyle={buttonStyles} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
