import React, {useEffect} from 'react';
import styles from './Modal.module.scss';
import Description from '../Description/Description';


  function Modal({modalStatus, modalData}) {

    useEffect(() => {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add(styles.bodyFixed);
      return () => {
        const scrollY = document.body.style.top;
        document.body.classList.remove(styles.bodyFixed)
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    })

    return(
      <>
      <div className={styles.modal}>
        <button onClick={() => modalStatus(false)} className={styles.closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
            <g id="Group_5" data-name="Group 5" transform="translate(-1353 -366)">
            <circle className={styles.iconCircle} id="Ellipse_49" data-name="Ellipse 49" cx="23" cy="23" r="23" transform="translate(1353 366)"/>
            <path id="path" d="M26.631,7.163,24.468,5l-8.653,8.653L7.163,5,5,7.163l8.653,8.653L5,24.468l2.163,2.163,8.653-8.653,8.653,8.653,2.163-2.163-8.653-8.653Z" transform="translate(1360.184 373.184)"/>
            </g>
          </svg>
        </button>
        <article className={styles.modalContent}>
          <div className={[styles.modalColumn, styles.modalColumnText].join(' ')}>
            <header className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{modalData.title}</h2>
            </header>
            <div className={styles.descScrollContainer}>
              <Description description={modalData.description} mode="dark" />
            </div>
            <div className={styles.buttonsContainer}>
              <a className={styles.modalLink} href={modalData.liveLink}>Live</a>
              <a className={styles.modalLink} href={modalData.githubLink}>GitHub</a>
            </div>
          </div>
          <div className={styles.modalColumn}>
            <img className={styles.modalImage} src={modalData.imageURL} alt={modalData.title} />
          </div>
        </article>
      </div>
      <div className={styles.whiteBg}></div>
      </>
    )
}

export default Modal;