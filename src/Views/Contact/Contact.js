import React from 'react';
import styles from './Contact.module.scss';
import Title from '../../Components/Title/Title';
import Description from '../../Components/Description/Description';

function Contact() {
  return (
    <>
    <header className={styles.header}>
      <Title priority="2" title="Contact" mode="light" />
      <Description description="Feel free to contact me" mode="dark" display="inline-block" />
    </header>
    <main className={styles.main}>
      <p className={styles.contactParagraph}>contact ways:</p>
      <ul className={styles.list}>
        <li className={styles.listElement}><a className={styles.link} href="mailto:piotr.niezgoda19@hotmail.com">piotr.niezgoda19@hotmail.com</a></li>
        <li className={styles.listElement}><a className={styles.link} href="www.linkedin.com/in/piotrniezgoda">www.linkedin.com/in/piotrniezgoda</a></li>
      </ul>
    </main>
    </>
  );
}

export default Contact;