import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
