import React ,{ Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from '../src/components/Product/Product';
import Login from './components/Login and signin/Login';
import Signin from './components/Login and signin/signin';
import MyAccount from './components/MyAccount/MyAccount';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import GoogleMap from './components/GoogleMap/GoogleMap';

class App extends Component {

  state = {
    redirect: false,
    loggedIn: false,
    email: "",
    password: "",
    id: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleSubmit = (func) => {
    var that = this;
    axios.post('http://localhost:5000/user/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response.data);
      that.setState((state) => {return {loggedIn: true , redirect: true, id: response.data}});
      func();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Layout loggedIn={this.state.loggedIn} id={this.state.id}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Products" component={Products}/>
              <Route path="/Product" component={Product}/>
              <Route path="/Login">
                <Login  handleUpdate={this.handleUpdate} 
                        handleSubmit={this.handleSubmit} 
                        handleChange={this.handleChange} 
                        loggedIn={this.state.loggedIn}
                        email={this.state.email}
                        password={this.state.password}
                        redirect={this.state.redirect}
                        />
              </Route>
              <Route path="/Signin" component={Signin}/>
              <Route path="/MyAccount">
                <MyAccount id={this.state.id} user={this.state.email}/>
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>    
    );
  }
}

export default App;
