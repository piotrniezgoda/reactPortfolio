import React from 'react';
import {Link} from 'gatsby';
import styles from './404.module.scss';
import Footer from '../components/Footer/Footer';

const notFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorTitle}><span className={styles.importantText}>404</span> nie znaleziono strony</h1>
      <p className={styles.errorParagraph}>adres strony nie istnieje. Sprawdź, czy podany adres jest prawidłowy.</p>
      <Link to="/" className={styles.linkButton}>Strona Główna</Link>
      <Footer />
    </div>
  )
}

export default notFound;