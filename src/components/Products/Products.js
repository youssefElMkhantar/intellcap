import React, { Component } from 'react';
import classes from './Products.module.css';
import {Link} from 'react-router-dom';


export default class Products extends Component {

    state = {
        // this list must be loaded from the database as json
        products : [
            {
              id: 1,
              url: "http://fakeimg.pl/200/?text=img1",
              name: "img1",
              title: 'hhh',
              description: 'this is a random description',
              phone: "0622009977"
            },
            {
              id: 2,
              url: "http://fakeimg.pl/200/?text=img1",
              name: "img1",
              title: 'hhh',
              description: 'this is a random description',
              phone: "0622009977"
            },
            {
              id: 3,
              url: "http://fakeimg.pl/200/?text=img1",
              name: "img1",
              title: 'hhh',
              description: 'this is a random description',
              phone: "0622009977"
            },
            {
              id: 4,
              url: "http://fakeimg.pl/200/?text=img1",
              name: "img1",
              title: 'hhh',
              description: 'this is a random description',
              phone: "0622009977"
            },
            {
              id: 5,
              url: "http://fakeimg.pl/200/?text=img1",
              name: "img1",
              title: 'hhh',
              description: 'this is a random description',
              phone: "0622009977"
            },
            {
              id: 6,
              url: "http://fakeimg.pl/200/?text=img1",
              name: "img1",
              title: 'hhh',
              description: 'this is a random description',
              phone: "0622009977"
            }
          ]
    }

    render(){
        return (
          <Link to={`/product/${this.state.products.id}`}>
            <div className={classes.productContainer}>
                <div className={classes.product}>
                    {this.state.products.map(product => 
                        <div className={classes.image}>
                            <img key={product.name} src={product.url} alt={product.name}/>
                            <div className={classes.titleContainer}>
                                <h2 className={classes.title}>{product.name}</h2>
                                <p className={classes.text}>{product.title}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </Link>
            
        );
    };
}