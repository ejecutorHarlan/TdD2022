import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';
//import pool from "../../db/db";

const Login = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      <Link text={'Ingresar'} to={'/'} customStyle={buttonStyles} />
    </div>
  );
};

export default Login;
