import React from 'react';
import styles from './Description.module.scss'

const Description = ({description, mode, display}) => {
  if (display === "inline-block" && mode === "dark") {
    return (
        <p className={[styles.paragraph, styles.paragraphInlineBlock].join(' ')}>{description}</p>
    )
  } else if (mode === "light") {
    return (
      <p className={[styles.paragraph, styles.paragraphLight].join(' ')}>{description}</p>
    )
  } else if (mode === "dark") {
    return (
      <p className={[styles.paragraph].join(' ')}>{description}</p>
    )
  }
}

export default Description;