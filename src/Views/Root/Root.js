import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from '../About/About';
import PortfolioView from '../Portfolio/Portfolio';
import ContactView from '../Contact/Contact';
import HeaderNavigation from '../../Components/Header/HeaderNavigation';
import'./Root.css';


class Root extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <HeaderNavigation />
        <Switch>
          <Route exact path="/" component={AboutView} />
          <Route path="/portfolio" component={PortfolioView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Root;