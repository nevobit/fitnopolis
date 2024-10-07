import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* TOP */}
      <div className={styles.topContainer}>
        {/* LEFT */}
        <div className={styles.leftSection}>
          <Link href="/">
            <Image src="/fitnologo.png" width={180} height={50} alt="Fitnopolis logo" />
          </Link>
          <p className={styles.city} >Medellín, Colombia</p>
          <span className={styles.boldText}>hola@fitnopolis.com</span>
          <span className={styles.boldText}>3137426636</span>
          <div className={styles.socialIcons}>
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className={styles.centerSection}>
          <div className={styles.column}>
            <h1 className={styles.heading}>EMPRESA</h1>
            <div className={styles.linkGroup}>
              <Link href="">Sobre Nosotros</Link>
              <Link href="">Afiliados</Link>
              <Link href="">Blog</Link>
              <Link href="">Contáctanos</Link>
            </div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.heading}>TIENDA</h1>
            <div className={styles.linkGroup}>
              <Link href="">Lo nuevo</Link>
              <Link href="">Accesorios</Link>
              <Link href="">Hombre</Link>
              <Link href="">Mujer</Link>
              <Link href="">Todos los productos</Link>
            </div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.heading}>Ayuda</h1>
            <div className={styles.linkGroup}>
              <Link href="">Servicio al Cliente</Link>
              <Link href="">Mi Cuenta</Link>
              <Link href="">Política de Privacidad</Link>
              <Link href="">Política de Devolución</Link>
              <Link href="">Tarjeta de Regalo</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.rightSection}>
          <h1 className={styles.heading}>SUBSCRÍBETE</h1>
          <p>Se el primero en enterarte de las nuevas tendencias, promociones, productos y mucho más.</p>
          <div className={styles.subscribe}>
            <input type="text" placeholder="Correo" className={styles.input} />
            <button className={styles.submitButton}>ENVIAR</button>
          </div>
          <span className={styles.boldText}>Pagos Seguros</span>
          <div className={styles.paymentIcons}>
            <Image src="/bancolombia.png" alt="" width={25} height={25} />
            <Image src="/nequi.png" alt="" width={25} height={30} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLinks}>
          <div>
            <span className={styles.textGray}>Idioma</span>
            <span className={styles.boldText}> Colombia | Español</span>
          </div>
          <div>
            <span className={styles.textGray}> Moneda</span>
            <span className={styles.boldText}> $ Peso Colombiano</span>
          </div>
        </div>
        <div className={styles.copy} >© 2024 Fitnopolis - Todos los derechos reservados</div>

      </div>
    </footer>
  );
};

export default Footer;
