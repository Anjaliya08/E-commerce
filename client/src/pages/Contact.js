import React, { useState } from "react";
import Layout from "../component/Layouts/Layout";
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send an email or store data)
        console.log("Form Submitted:", { name, email, message });
    };

    return (
        <Layout>
            <div className="contact-page container my-5">
                <h2 className="text-center mb-4 contact-title">Contact Us</h2>

                {/* Contact Form Section (moved below phone and email) */}
                <h4 className="text-center mb-4 contact-form-title">Send Us a Message</h4>
                <form onSubmit={handleSubmit} className="contact-form">
                    {/* Name Field */}
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="form-label">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="form-group mb-4">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea
                            id="message"
                            className="form-control"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Send Message
                    </button>
                </form>

                {/* Contact Information Section (moved below form) */}
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h5 className="contact-info-title">Phone Number</h5>
                        <p className="contact-info-text">+1 345 678 7654</p>
                    </div>
                    <div className="col-md-6">
                        <h5 className="contact-info-title">Email Address</h5>
                        <p className="contact-info-text">support@ecommerce.com</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
