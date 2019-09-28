import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Capture from '../src/images/Capture.PNG';
import Login from '../src/components/login/login'
import FavouriteAccount from '../src/components/favoriteAcc/favoriteAcc'
import AddFavAccount from '../src/components/addFavAcc/addFavAcc'
import EditFavAccount from '../src/components/editFavAcc/editFavAcc'



class App extends Component {


  render() {
    return (
    <HashRouter>
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid nav-header">
            <img className="Capture" src={Capture} alt="Capture" />
            <Link className="navbar-brand" to='/'>ING Bank</Link>
            <Link className="navbar-brand" to='/'><span className="think">ThinkFuture</span></Link>
            {/* <Link className="navbar-brand" to='/'></Link> */}

          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/favAccount" component={FavouriteAccount} />
          <Route exact path="/addAccount" component={AddFavAccount} />
          <Route exact path="/editAccount" component={EditFavAccount} />


        </Switch>
      </div>
    </HashRouter>
  );
}
}

export default App;
