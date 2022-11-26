import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';
import datos from '../../db/query';

const Turnos = () => {
  return (
    <div className='wrapper'>
      <div className={styles.container}>
        <div>Login</div>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Turnos;
