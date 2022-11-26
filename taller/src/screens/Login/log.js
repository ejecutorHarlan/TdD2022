import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';
//import conn from "../../db/keys";

const Log = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      <form>
        <div>
          <input
            type='text'
            placeholder='User'
            required='required'
            className={styles.aaa}
            //value={user}
            // onChange={(e) => userChange(e)}
            // className="form-floating"
          />
          <input
            type='password'
            placeholder='Password'
            required='required'
            // value={pass}
            // onChange={(e) => passChange(e)}
            // className="form-floating"
          />
          <Link text={'Ingresar'} to={'/'} customStyle={buttonStyles} />
          {/* <button
            onClick={(e) => {
              //console.log("El usuario es:", user, "y a password es:", pass);
            }}
            className="w-100 btn btn-lg btn-primary"
          >
            Enviar usuario y pass a la consola
          </button> */}

          {/* {conn.query(
            "SELECT * FROM `bancos`",
            function (err, results, fields) {
              console.log(results); // results contains rows returned by server
              console.log(fields); // fields contains extra meta data about results, if available
            }
          )} */}
        </div>
      </form>
    </div>
  );
};

export default Log;
