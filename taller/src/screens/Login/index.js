import React from 'react';
import Link from '../../components/Link/index.js';
import styles from './login.module.css';
import { buttonStyles } from './constants.js';
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
