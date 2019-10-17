import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/header';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log('this is the user from firebase', user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
