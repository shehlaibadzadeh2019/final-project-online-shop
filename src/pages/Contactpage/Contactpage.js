import React from 'react'
import { FaMapMarkedAlt, FaPhoneSquare, FaEnvelope, FaFax, FaClock } from 'react-icons/fa';
import './Contactpage.sass'


export const Contactpage = props => {
    return (
        <div>
            <div className = "contact-us">
                <div className = "container">
                    <div className = "row justify-content-between">
                        <div className = "contact-us-items">
                            <h3 className = "contact-us-header">Contact Us</h3>
                            <ul className = "contact-us-items-icons">
                                <li><a href = "" className = "contact-us-a contact-us-items-map col-lg-2 col-md-12 col-12">
                                    <FaMapMarkedAlt />
                                    <span className = "contact-us-map-text"> Lorem ipsum maecenas 
                                    dapibus luctus euismod 133/2 New York City</span>
                                </a></li>
                                <li><a href = "" className = "contact-us-a contact-us-items-phone col-lg-2 col-md-12 col-12">
                                    <FaPhoneSquare />
                                    <span className = "contact-us-phone-text">  (+00)1344356-675</span>
                                </a></li>
                                <li><a href = "" className = "contact-us-a contact-us-items-mail col-lg-2 col-md-12 col-12">
                                    <FaEnvelope />
                                    <span className = "contact-us-mail-text"> imajh_fashion@gmail.com</span>
                                </a></li>
                                <li><a href = "" className = "contact-us-a contact-us-items-fax col-lg-2 col-md-12 col-12">
                                    <FaFax />
                                    <span className = "contact-us-fax-text"> (00) 987 654 321</span>
                                </a></li>
                                <li><a href = "" className = "contact-us-a contact-us-items-clock col-lg-2 col-md-12 col-12">
                                    <FaClock />
                                    <span className = "contact-us-clock-text">  Mon - Fri: 9.00 - 17.00 </span>
                                </a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};