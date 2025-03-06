import React from "react";
import Layout from "../component/Layouts/Layout";
import "./About.css"; 

function About() {
    return (
        <Layout title="About Us">
            <div className="about-page">
                {/* Banner Section */}
                <div className="about-banner text-center py-5 text-white">
                    <h1>About Us</h1>
                    <p>Your one-stop shop for everything you love.</p>
                </div>

                {/* Introduction Section */}
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="https://via.placeholder.com/500x300"
                                alt="About Us"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h2>Who We Are</h2>
                                <p>
                                    Welcome to our e-commerce platform! We are dedicated to
                                    bringing you the best products at unbeatable prices. Our
                                    mission is to provide an exceptional shopping experience
                                    through quality, innovation, and excellent customer
                                    service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="mb-4">Our Mission</h2>
                        <p>
                            To empower customers with the best shopping solutions,
                            offering high-quality products and top-notch customer
                            support. We believe in making online shopping fast,
                            easy, and enjoyable.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="container my-5">
                    <h2 className="text-center mb-4">Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h5>John Doe</h5>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h5>Jane Smith</h5>
                            <p>Head of Marketing</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="img-fluid rounded-circle mb-3"
                            />
                            <h5>Robert Brown</h5>
                            <p>Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;
