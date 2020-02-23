import React from 'react';
import { Link } from 'gatsby';
import styles from './ButtonLink.module.scss';
import '../../animate.css';
import goIcon from '../../assets/icons/gotoico.svg';

const ButtonLink = ({linkText}) => (
  <Link className={styles.button} to="/portfolio">{linkText} <img className={[styles.linkIcon, 'animated', 'infinite', 'heartBeat', 'delay-2s', 'slower'].join(' ')} src={goIcon} alt="Idź do portfolio"/></Link>
)

export default ButtonLink;