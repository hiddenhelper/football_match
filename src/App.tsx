import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
