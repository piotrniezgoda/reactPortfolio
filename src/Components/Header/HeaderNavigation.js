import React from 'react';
import { Link } from 'gatsby'
import styles from './Headernavigation.module.scss';
import hamburgerIcon from '../../assets/icons/ic_menu.svg';
import { CSSTransition } from "react-transition-group";
import debounce from 'lodash.debounce';


class HeaderNavigation extends React.Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false,
      desktopMode: false,
      windowWidth: 0,
    }

  }

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", debounce(this.resize.bind(this), 300));
}

resize(width) {
  if(window.innerWidth >= 1100) {
    this.setState({
      isMenuOpen: true,
      desktopMode: true,
    });
  } else if(window.innerWidth < 1100) {
    this.setState({
      isMenuOpen: false,
      desktopMode: false,
    });

  }
}


  menuState = () => {
    this.state.isMenuOpen ? this.menuClose() : this.menuOpen();
  }

  menuOpen = () => {
    if(this.state.isMenuOpen === false && this.state.desktopMode === false) {
      this.setState({
        isMenuOpen: true,
      })
    }
  }

  menuClose = () => {
    if(this.state.isMenuOpen === true && this.state.desktopMode === false) {
      this.setState({
        isMenuOpen: false,
      })
    }
  }
  render() {
    return (
        <nav className={[styles.navBar, this.state.isMenuOpen ? styles.navBarActive : ''].join(' ')}>
          <div className={styles.navbar__buttonWrapper}>
            <button onClick={this.menuState} className={styles.hamburgerBtn}><img src={hamburgerIcon} alt="menu button"/></button>
          </div>
          <div className={[styles.linksWrapper, this.state.isMenuOpen ? styles.linksWrapperActive : ''].join(' ')}>
            {this.state.isMenuOpen && (
              <CSSTransition
                in={this.state.isMenuOpen}
                timeout={400}
                appear>
              <ul id="menuList" className={[styles.navbar__menu, this.state.isMenuOpen ? "navbarMenuActive" : ''].join(' ')}>
              <li className={styles.menu__item}><Link activeClassName={styles.menuActiveLink} className={styles.menu__link} onClick={this.menuClose} to="/">O Mnie</Link></li>
              <li className={styles.menu__item}><Link activeClassName={styles.menuActiveLink} className={styles.menu__link} onClick={this.menuClose} to="/portfolio">Portfolio</Link></li>
              <li className={styles.menu__item}><Link activeClassName={styles.menuActiveLink} className={styles.menu__link} onClick={this.menuClose} to="/contact">Kontakt</Link></li>
            </ul>
            </CSSTransition>
            )}
          </div>
        </nav>
    );
  };
};

export default HeaderNavigation;