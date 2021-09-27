import React, { Component } from "react";
import classes from "./styles.module.css";
import CustomInput from "./CustomInput";
import Button from './Button';
import axios from "axios";
import { Link } from "react-router-dom";

export default class App extends Component {
  state = {
    userName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  handleSubmit = () => {
    axios.post('http://localhost:5000/user/signin', {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <form className={classes.form}>
          <CustomInput
            labelText="userName"
            id="userName"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />
          <Button type="button" color="primary" onClick={this.handleSubmit} className={classes.form__custom_button}>
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}
