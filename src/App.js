import React, { useState } from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home';
import Crud from './pages/Crud';
import Increment from './pages/Increment';
import './App.css'

const App = () =>{
  const headerTitle = "Header oke ..";
  const footerTitle = "Footer oke ..";
  return(
    <div>
      <Router>
      <Header headerTitle={headerTitle}/>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/crud" component={Crud} />
        <Route exact path ="/increment" component={Increment} />
      </Switch>
      <Footer footerTitle={footerTitle}/>
      </Router>
    </div>
  );
};
export default App;
