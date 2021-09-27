import React, { Component } from "react";
import classes from "./styles.module.css";
import CustomInput from "./CustomInput";
import Button from './Button';
import axios from "axios";
import { Link , Redirect , withRouter} from "react-router-dom";

class Login extends Component {

  state = {
    loggedIn: this.props.loggedIn,
    redirect: this.props.redirect,
    email: this.props.email,
    password: this.props.password
  };

  handleSubmit1 =  () => {
    this.props.handleSubmit(() =>  this.props.history.push("/MyAccount"));
  };

  render() {
    return (
      <div className={classes.App}>
        <form className={classes.form}>
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.props.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.props.handleChange}
            type="password"
          />
          <Button type="button" color="primary" onClick={this.handleSubmit1} className={classes.form__custom_button}>
            Log in
          </Button>
          <Button type="button" color="primary" className={classes.form__custom_button}>
            <Link to='/signin'>Sign in </Link>
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);