import React from 'react';
import './Header.sass';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import { FaSearch, FaShoppingBasket, FaEnvelope, FaPhoneVolume, FaClock } from 'react-icons/fa';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;
        return (
            <div className="main-header">
                <div className="header-top">
                    <div className="container">
                        <div className="row text-left pb-4">
                            <div className="col-4 textwidget pb-2"><FaEnvelope />  imajh_fashion@gmail.com</div>
                            <div className="col-4 textwidget"><FaPhoneVolume />  (+994) 123 456 789</div>
                            <div className="col-4 textwidget"><FaClock />  Mon - Fri: 9.00 - 17.00 </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between align-items-center pb-3 ">
                        <div className="col-lg-3 col-md-4 col-3 order-md-1 order-lg-1 order-2">
                            <NavLink to='/' className="header-logo"><span className="d-md-inline pl-2 pr-2 text-center">IMAJH</span></NavLink>
                        </div>

                        <div className="header-links col-lg-6 col-md-12 order-lg-2 order-md-3 mt-md-3 col-1 position-static">
                            <nav className={`main-nav text-lg-left text-md-center ${isExpanded ? "active" : ""}`}>
                                <NavLink className="main-header--nav-link" to='/'>Home</NavLink>
                                <NavLink className="main-header--nav-link" to='/woman'>Women</NavLink>
                                <NavLink className="main-header--nav-link" to='/men'>Men</NavLink>
                                <NavLink className="main-header--nav-link" to='/girl'>Girls</NavLink>
                                <NavLink className="main-header--nav-link" to='/boy'>Boys</NavLink>
                                <NavLink className="main-header--nav-link" to='/contact-with-us'>Contact</NavLink>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3 order-lg-2 col-3 order-3 order-md-2 d-flex search-container">
                    <div className="search">
                        <form className="d-flex">
                            <input type="text" className="searchTerm" placeholder="Search here..."/>
                            <button type="submit" className="searchButton" >
                            <FaSearch className="search-icon pl-0"/></button>
                        </form>
                 </div>
                            <NavLink to='/cartpage'>  <div className="basket-icon-div pl-2 pl-lg-5 pl-md-0"> <FaShoppingBasket className="basket-icon" /> </div></NavLink>
                        </div>
                        <div className="col-2 d-md-none order-first">
                            <button className={`burger-btn ${isExpanded ? "active" : ""}`} onClick={e => this.handleToggle(e)}>
                                <span></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Header;