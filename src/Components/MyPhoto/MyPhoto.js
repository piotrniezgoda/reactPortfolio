import React from 'react';
import styles from './MyPhoto.module.scss';

const MyPhoto = ({image, alt}) => (
  <div className={styles.wrapper}>
    <img className={styles.photo} src={image} alt={alt}/>
  </div>
)

export default MyPhoto;