import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Head from '../components/HelmetHead/Head';
import styles from './portfolio.module.scss';
import Layout from '../components/Layout/Layout';
import PortfolioWork from '../components/portfolioWork/portfolioWork';
import Modal from '../components/Modal/Modal';
import Title from '../components/Title/Title';
import Description from '../components/Description/Description';



function Portfolio(data) {

  const portfolioProjects = useStaticQuery(graphql`
    query {
      allContentfulPortfolioWork{
        edges {
          node {
            title
            description {
              internal {
                content
              }
            }
            liveLink
            githubLink
            image {
              file {
                url
              }
            }
          }
        }
      }
      contentfulPortfolioHeader {
        title
        description {
          internal {
            content
          }
        }
      }
    }
  `)
 const [isModalOpen, setModalStatus] = useState(false);
 const [modalData, setModalData] = useState({
   title: '',
   description: '',
   liveLink: '',
   githubLink: '',
   imageURL: ''
 })

  const pattern = ['workBig', 'workSmall', 'workSmall', 'workBig'];
  let arrayPosition = 0;

  function clickedProjectData(e) {
    for(const project of portfolioProjects.allContentfulPortfolioWork.edges) {
      if (Object.values(project.node).includes(e)) {
        setModalData(prev => ({
          ...prev,
          title: project.node.title,
          description: project.node.description.internal.content,
          liveLink: project.node.liveLink,
          githubLink: project.node.githubLink,
          imageURL: project.node.image.file.url
        }))
      }
    }
}

  return (
    <Layout>
      <Head
        title="Portfolio"
        description="Witaj na mojej stronie osobistej z portfolio. Zapraszam do zapoznania się z moją osobą, oraz wykonanymi projektami. Zapraszam także do kontaktu."
      />
      <header className={styles.header}>
        <Title priority="2" title={portfolioProjects.contentfulPortfolioHeader.title} mode="light" />
        <Description description={portfolioProjects.contentfulPortfolioHeader.description.internal.content} mode="dark" display="inline-block" />
      </header>
      <main>
        <ul className={styles.worksGrid}>
          {portfolioProjects.allContentfulPortfolioWork.edges.map((edge) => {
            if(arrayPosition >= pattern.length) {
              arrayPosition = 0;
            }
            const clsNane = pattern[arrayPosition];
            const imageURL= edge.node.image.file.url;
            arrayPosition++
            return (
              <li style={{ backgroundImage: `url(${imageURL})` }} className={[styles[clsNane], styles.workImageStyle].join('')} key={edge.node.title}>
                <PortfolioWork title={edge.node.title} image={edge.node.image.file.url} modalStatus={setModalStatus} clickedProject={clickedProjectData} />
              </li>
            )
          })}
        </ul>
        { isModalOpen && <Modal modalStatus={setModalStatus} modalData={modalData}/> }
      </main>
    </Layout>
  )
}

export default Portfolio;

