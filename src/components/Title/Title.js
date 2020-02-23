import React from 'react';
import styles from './Title.module.scss';

const HeaderTitle = ({priority, title, subtitle, mode}) => {
  const CustomTag = `h${priority}`;

  if(title && subtitle) {
    return(
    <>
      <CustomTag className={[styles.title, mode === "light" ? styles.titleLight : ''].join(' ')}>{title}</CustomTag>
      <p className={[styles.title, mode === "light" ? styles.titleLight : ''].join(' ')}>{subtitle}</p>
    </>
    )
  } else if(title) {
    return(
      <CustomTag className={[styles.title, mode === "light" ? styles.titleLight : ''].join(' ')}>{title}</CustomTag>
    )
    }
  }


export default HeaderTitle;