import React from 'react';
import styles from './Modal.module.scss';
import data from '../../assets/texts/portfolio.json';
import Description from '../Description/Description';

import project1photo from '../../assets/images/weatherapp.jpg';
import project2photo from '../../assets/images/newsapp.jpg';
import project3photo from '../../assets/images/lotto.jpg';
import project4photo from '../../assets/images/treehouse.jpg';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedProject: props.projectName,
      projectTitle: '',
      projectDesc: '',
      ghLink: '',
      liveLink: '',
      projectImage: '',
    }
  }

  setProjectData() {
    const project = this.state.choosedProject;
    this.setState({
      projectTitle: data[project].title,
      projectDesc: data[project].description,
      projectImage: data[project].image,
    })
  }

  closeModal() {
    this.props.modalClose();
  }

  componentDidMount() {
    this.setProjectData();
  }

  getPhoto() {
    switch (this.state.choosedProject) {
      case 'project1':
        return project1photo;
      case 'project2':
        return project2photo;
      case 'project3':
        return project4photo;
      case 'project4':
        return project3photo;
      default:
      return null;
    }
  }

  render() {
    return(
      <div className={styles.modal}>
        <button onClick={this.closeModal.bind(this)} className={styles.closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
            <g id="Group_5" data-name="Group 5" transform="translate(-1353 -366)">
            <circle className={styles.iconCircle} id="Ellipse_49" data-name="Ellipse 49" cx="23" cy="23" r="23" transform="translate(1353 366)"/>
            <path id="path" d="M26.631,7.163,24.468,5l-8.653,8.653L7.163,5,5,7.163l8.653,8.653L5,24.468l2.163,2.163,8.653-8.653,8.653,8.653,2.163-2.163-8.653-8.653Z" transform="translate(1360.184 373.184)"/>
            </g>
          </svg>
        </button>
        <article className={styles.modalContent}>
          <div className={styles.modalColumn}>
            <header className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{this.state.projectTitle}</h2>
            </header>
            <Description description={this.state.projectDesc} mode="dark" />
          </div>
          <div className={styles.modalColumn}>
            <img className={styles.modalImage} src={this.getPhoto()} alt={this.state.projectTitle} />
          </div>
        </article>
      </div>
    )
  }
}

export default Modal;