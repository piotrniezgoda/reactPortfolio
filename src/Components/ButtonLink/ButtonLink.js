import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ButtonLink.module.scss';
import '../../animate.css';
import goIcon from '../../assets/icons/gotoico.svg';

const ButtonLink = ({linkText}) => (
  <NavLink className={styles.button} to="/portfolio">{linkText} <img className={[styles.linkIcon, 'animated', 'infinite', 'heartBeat', 'delay-2s', 'slower'].join(' ')} src={goIcon} alt="go to portfolio"/></NavLink>
)

export default ButtonLink;