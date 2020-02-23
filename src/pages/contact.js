import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Head from '../components/HelmetHead/Head';
import styles from './contact.module.scss';
import Title from '../components/Title/Title';
import Description from '../components/Description/Description';
import Layout from '../components/Layout/Layout';

const Contact = () => {
  const contactData = useStaticQuery(graphql`
    query {
      contentfulContactPageData {
        title
        description {
          internal {
            content
          }
        }
        contactParagraph
        email
        linkedIn
      }
    }
  `)
  return (
    <Layout>
      <Head
        title="Kontakt"
        description="Witaj na mojej stronie osobistej z portfolio. Zapraszam do zapoznania się z moją osobą, oraz wykonanymi projektami. Zapraszam także do kontaktu."
      />
      <header className={styles.header}>
        <Title priority="2" title={contactData.contentfulContactPageData.title} mode="light" />
        <Description description={contactData.contentfulContactPageData.description.internal.content} mode="dark" display="inline-block" />
      </header>
      <main className={styles.main}>
        <p className={styles.contactParagraph}>{contactData.contentfulContactPageData.contactParagraph}</p>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <a className={styles.link} href={contactData.contentfulContactPageData.email}>{contactData.contentfulContactPageData.email}</a>
          </li>
          <li className={styles.listElement}>
            <a className={styles.link} href={contactData.contentfulContactPageData.linkedIn}>{contactData.contentfulContactPageData.linkedIn}</a>
          </li>
        </ul>
      </main>
    </Layout>
  );
}

export default Contact;