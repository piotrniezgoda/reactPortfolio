import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Head from '../Components/HelmetHead/Head';
import ButtonLink from '../components/ButtonLink/ButtonLink';
import styles from './Home.module.scss';
import MyPhoto from '../components/MyPhoto/MyPhoto';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
import Description from '../components/Description/Description'

const About = () => {
  const headerData = useStaticQuery(graphql`
    query {
      contentfulHomeHeader {
          titleLine1
          titleLine2
          aboutParagraph {
            internal {
              content
            }
          }
          myPhoto {
						file {
              url
            }
          }
        }
      contentfulHomeCurrentState {
        title
        description {
          internal {
            content
          }
        }
      }
      contentfulHomeFreeTime {
        title
        description {
          internal {
            content
          }
        }
      }
    }
  `)

  return (
    <div className={styles.overflowContainer}>
      <Layout>
        <Head
          title="O Mnie"
          description="Witaj na mojej stronie osobistej z portfolio. Zapraszam do zapoznania się z moją osobą, oraz wykonanymi projektami. Zapraszam także do kontaktu."
        />
        <header className={styles.aboutHeader}>
          <div className={[styles.padding, styles.headerFlexContainer].join(' ')}>
            <Title priority="1" title={headerData.contentfulHomeHeader.titleLine1} subtitle={headerData.contentfulHomeHeader.titleLine2} />
            <Description mode="dark" description={headerData.contentfulHomeHeader.aboutParagraph.internal.content} />
             <ButtonLink linkText="Do portfolio" />
          </div>
          <MyPhoto image={headerData.contentfulHomeHeader.myPhoto.file.url} alt="Piotr Niezgoda photo" />
        </header>
        <main className={styles.mainSection}>
          <section className={styles.about}>
            <article className={styles.about__article}>
              <Title priority="2" title={headerData.contentfulHomeCurrentState.title} mode="light" />
              <Description description={headerData.contentfulHomeCurrentState.description.internal.content} mode="light" />
            </article>
            <article className={styles.about__article}>
              <Title priority="2" title={headerData.contentfulHomeFreeTime.title} mode="light" />
              <Description description={headerData.contentfulHomeFreeTime.description.internal.content} mode="light" />
            </article>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default About;
