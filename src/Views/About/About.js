import React from 'react';
import Title from '../../Components/Title/Title';
import Description from '../../Components/Description/Description';
import ButtonLink from '../../Components/ButtonLink/ButtonLink';
import MyPhoto from '../../Components/MyPhoto/MyPhoto';
import Footer from '../../Components/Footer/Footer';
import styles from './About.module.scss';
import data from '../../assets/texts/about.json';
import image from '../../assets/images/peter.png';

function About() {
  return (
    <>
      <header className={styles.aboutHeader}>
        <div className={[styles.padding, styles.headerFlexContainer].join(' ')}>
          <Title priority="1" title={data.title} subtitle={data.subtitle} />
          <Description mode="dark" description={data.AboutMeDescription} />
          <ButtonLink linkText="Go to portfolio" />
        </div>
        <MyPhoto image={image} alt="Piotr Niezgoda photo" />
      </header>
      <main className={styles.mainSection}>
        <section className={styles.about}>
          <article className={styles.about__article}>
            <Title priority="2" title="Current state" mode="light" />
            <Description description={data.AboutCurrentp1} mode="light" />
          </article>
          <article className={styles.about__article}>
            <Title priority="2" title="Free time" mode="light" />
            <Description description={data.AboutFreeTime} mode="light" />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;