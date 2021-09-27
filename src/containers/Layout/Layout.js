import React , { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar';

class Layout extends Component {
 
    
    render(){
        return (
            <div>
                <NavBar loggedIn={this.props.loggedIn}/>
                <div className='Layout'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;