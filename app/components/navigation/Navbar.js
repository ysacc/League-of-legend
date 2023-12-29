import Link from 'next/link';
import styles from './Navbar.module.css'; // Estilos CSS (crear un archivo Navbar.module.css)
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image 
        src={`/icono.jpeg`}
        alt="Logo" 
        className={styles.logo} 
        width={50}
        height={50}
        />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/dashboard">
            Heroes
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/items">
          Items
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;