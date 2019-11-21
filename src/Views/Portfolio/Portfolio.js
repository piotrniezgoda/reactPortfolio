import React from 'react';
import styles from './Portfolio.module.scss';
import data from '../../assets/texts/portfolio.json';
import Title from '../../Components/Title/Title';
import Description from '../../Components/Description/Description';
import Modal from '../../Components/Modal/Modal';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      choosedProject: ''
    }
  }

  handleModal(e) {
    this.setState({
      choosedProject: e.target.name,
      isModalOpen: true
    })
  }

   onModalClose(close) {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    return (
      <>
        <header className={styles.header}>
          <Title priority="2" title={data.pageTitle} mode="light" />
          <Description description={data.pageDescription} mode="dark" display="inline-block" />
        </header>
        <main className={styles.main}>
          <div className={styles.worksGrid}>
            <div className={[styles.work, styles.work1 ,styles.workBig].join(' ')}>
              <div className={styles.workOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.projectTitle}>{data.project1.title}</h3>
                  <button className={styles.moreInfoBtn} name="project1" onClick={this.handleModal.bind(this)}>More info</button>
                </div>
              </div>
            </div>
            <div className={[styles.work, styles.work2].join(' ')}>
              <div className={styles.workOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.projectTitle}>{data.project2.title}</h3>
                  <button className={styles.moreInfoBtn} name="project2" onClick={this.handleModal.bind(this)}>More info</button>
                </div>
              </div>
            </div>
            <div className={[styles.work, styles.work4].join(' ')}>
              <div className={styles.workOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.projectTitle}>{data.project4.title}</h3>
                  <button className={styles.moreInfoBtn} name="project4" onClick={this.handleModal.bind(this)}>More info</button>
                </div>
              </div>
            </div>
            <div className={[styles.work, styles.work3, styles.workBig2].join(' ')}>
              <div className={styles.workOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.projectTitle}>{data.project3.title}</h3>
                  <button className={styles.moreInfoBtn} name="project3" onClick={this.handleModal.bind(this)}>More info</button>
                </div>
              </div>
            </div>
          </div>
           { this.state.isModalOpen && <Modal modalClose={this.onModalClose.bind(this)} projectName={this.state.choosedProject} /> }
        </main>
      </>
    );
  }
}

export default Portfolio;