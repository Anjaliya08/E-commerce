import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Footer.css"; // Ensure you create and link the CSS file
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are a leading e-commerce platform offering a wide range
                            of quality products at unbeatable prices. Shop with us and
                            experience exceptional customer service.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <NavLink to="/about" className="text-white">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className="text-white">
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="text-white">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq" className="text-white">
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p><i className="fa fa-envelope"></i> support@ecommerce.com</p>
                        <p><i className="fa fa-phone"></i> +1 234 567 890</p>
                        <p><i className="fa fa-map-marker"></i> 123 E-commerce St., NY</p>

                        {/* Social Media Icons */}
                        <div className="social-icons mt-3">
                            <NavLink to="/social/facebook" className="text-white me-3">
                                <i className="fa fa-facebook"></i>
                            </NavLink>
                            <NavLink to="/social/twitter" className="text-white me-3">
                                <i className="fa fa-twitter"></i>
                            </NavLink>
                            <NavLink to="/social/instagram" className="text-white me-3">
                                <i className="fa fa-instagram"></i>
                            </NavLink>
                            <NavLink to="/social/linkedin" className="text-white">
                                <i className="fa fa-linkedin"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* <hr className="bg-light" /> */}

                {/* Copyright Section */}
                <div className="text-center">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} E-commerce. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
