import React from 'react';
import styles from './portfolioWork.module.scss';

const portfolioWork = ({title, modalStatus, clickedProject}) => {
  function openProject(e) {
    clickedProject(e.target.name);
    modalStatus(true);
  }
  return (
    <div className={[styles.work].join(' ')}>
      <div className={styles.workOverlay}>
        <div className={styles.overlayContent}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <button className={styles.moreInfoBtn} onClick={openProject} name={title}>Więcej informacji</button>
        </div>
      </div>
    </div>
  )
}

export default portfolioWork;