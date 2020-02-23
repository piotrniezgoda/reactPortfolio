import React from 'react';
import styles from './layout.module.scss';
import Navigation from '../Header/HeaderNavigation';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout;