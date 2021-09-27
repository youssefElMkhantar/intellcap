import { Button } from '@material-ui/core';
import axios from 'axios';
import { classes } from 'istanbul-lib-coverage';
import React, { Component } from 'react';



export default class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "send a message"
        }
    }

    sendMessage = () => {
        axios.post()
    }

    render(){
        return (
            <div>
                <div className={classes.flex}>
                    <div className={classes.image}><img src={this.props.image} alt={this.props.title}/></div>
                    <div>
                        <p><Button color="primary">Appeler</Button> {this.props.phone ? this.props.phone : null}</p><br/><br/><br/>
                        <label for="story">send a message :</label>
                        <textarea id="message" value={this.state.value} rows="5" cols="33" onChange={ (event) => this.setState(event.target.value)}/>
                        <Button color="primary" onClick={this.sendMessage}>send</Button>
                    </div>
                </div>
                <div>
                    <h1>description</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}