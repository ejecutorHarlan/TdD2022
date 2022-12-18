import React from 'react';
import styles from './layout.module.css';
import Link from '../Link';
import buttonStyles from './constants';

const Layout = ({ children }) => {
  return (
    <div className='main'>
      <header className={styles.header}>
        <h1 className={styles.title}>DB Mecánica</h1>
        <Link text={'Ingresar'} to={'/log'} customStyle={buttonStyles} />
        <Link text={'Turnos'} to={'/turnos'} customStyle={buttonStyles} />
        <Link text={'Contacto'} to={'/contact'} customStyle={buttonStyles} />
        <Link text={'Servicios'} to={'/services'} customStyle={buttonStyles} />
        <Link text={'Clientes'} to={'/clients'} customStyle={buttonStyles} />
        <Link text={'Registro'} to={'/register'} customStyle={buttonStyles} />
      </header>
      <article className={styles.article}>{children}</article>
      <footer className={styles.footer}>
        <div>
          <h3>Teléfono: 15 - 3380-1991</h3>
          <div>
            <h3>
              Correo Electrónico{' '}
              <a href='mailto:info@dbmecanica.com.ar'>info@dbmecanica.com.ar</a>
            </h3>
          </div>
          <div>
            <h3>
              Redes Sociales{' '}
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <i>Instagram</i>
              </a>
            </h3>
          </div>
          <div>
            <h3>Dirección</h3>
            <p>Comodoro Rivadavia 365. Rosario, Santa Fe</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
