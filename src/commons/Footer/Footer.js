import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookSquare, FaInstagram, FaTwitter, FaGooglePlusG, FaClock, FaYoutube } from "react-icons/fa";
import './Footer.sass'
export const Footer = props => {
    return (
        <div className = "footer">
            <div className = "footer-boots">
                <div className = "container">
                <div className="row justify-content-between">
                <div className="col-lg- col-md-4 col-12">
                    <div className = "contact-info">
                        <h3 className = "contact-header bottom-padding">Contact Info</h3>
                        <div className = "adress bottom-padding"><FaMapMarkerAlt/>  Lorem  ipsum maecenas 
                            dapibus luctus euismod 133/2 New York City</div>
                        <div className = "phone bottom-padding"><FaPhone/>  (+00)1344356-675</div>
                        <div className = "email bottom-padding"><FaEnvelope/>  imajh_fashion@gmail.com</div>
                        <div className = "clock"><FaClock/>  Mon - Fri: 9.00 - 17.00 </div>
                    </div>
                </div>   
                <div className="col-lg-4 col-md-4 col-12">
                    <div className = "inform">
                        <h3 className = "inform-header bottom-padding">information</h3>
                        <ul className = "inform-listing ">
                            <li className = "inform-listing-item bottom-padding-list"><a href = "" className = "inform-listing-item-a">Shipping</a></li>
                            <li className = "inform-listing-item bottom-padding-list"><a href = "" className = "inform-listing-item-a">Payment & Return</a></li>
                            <li className = "inform-listing-item bottom-padding-list"><a href = "" className = "inform-listing-item-a">Customer Service</a></li>
                            <li className = "inform-listing-item bottom-padding-list"><a href = "" className = "inform-listing-item-a">Shop Support</a></li>
                            <li className = "inform-listing-item"><a href = "" className = "inform-listing-item-a">Terms & Conditions</a></li>                       
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-12">
                    <div className = "subscribe">
                        <h2 className = "subscribe-header">Subscribe to be the first to know about 
                        Sales, Events, and Exclusive Offers!</h2>
                        <div className = "subscribe-field">
                        <input type = "email" placeholder = "  Enter Your Email" className = "input-email"></input>
                        <button className = "subscribe-button btn btn-dark" type="submit">Subscribe</button>
                        </div>
                    </div>
                    
                    <div className = "social-network">
                        <a href = "" className = "social-network-items facebook"><FaFacebookSquare/></a>
                        <a href = "" className = "social-network-items instagram"><FaInstagram/></a>
                        <a href = "" className = "social-network-items twitter"><FaTwitter/></a>
                        <a href = "" className = "social-network-items google-plus"><FaGooglePlusG/></a>
                        <a href = "" className = "social-network-items youtube"><FaYoutube/></a>
                    </div>
                </div>
                
                </div>
                

                </div>
            </div>
            <div className = "footer-copyright">
                <h6 className = "footer-text">© 2019 Imajh, Inc. All Rights Reserved</h6>
            </div>
        </div>

    )
};
