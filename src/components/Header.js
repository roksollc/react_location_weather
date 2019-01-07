// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// IMPORT CSS
import '../styles/Header.css';

// `Header` COMPONENT
class Header extends Component {
    render() {
        return (
            <nav className="header navbar navbar-dark bg-dark" style={{overflowX: 'hidden'}}>
                <div className="container">
                    <div className="brand">
                        <Link to='/'><i className="brand-icon fa fa-sun-o fa-2x"></i></Link>
                        <span className="brand-text">{this.props.title}</span>
                    </div>
                    
                    <div className="header-navigation">
                        <div className="header-navigation-item">
                            <Link to='/'>Choose City</Link>
                        </div>
        
                        <div className="header-navigation-item">
                            <Link to='/weather'>View Weather</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.defaultProps = {
    title: 'React App'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;