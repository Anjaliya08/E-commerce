import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../component/Layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const Details = () => {
    const { pid } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    // Fetch Product Details
    const getProductDetails = async () => {
        try {
            setLoading(true); // Start loading
            const { data } = await axios.get(`/api/v1/product/get-product/${pid}`);

            console.log("API Response:", data); // Debugging log

            if (data?.success) {
                setProduct(data.product);
            } else {
                toast.error("Failed to fetch product details");
            }
        } catch (error) {
            console.log("Error fetching product details:", error);
            toast.error("Error fetching product details");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        if (pid) getProductDetails();
    }, [pid]);

    return (
        <Layout>
            <div className="container mt-4">
                {loading ? (
                    <h3 className="text-center">Loading...</h3>
                ) : product ? (
                    <div className="row">
                        {/* Product Image */}
                        <div className="col-md-6">
                            <img
                                src={`/api/v1/product/product-photo/${product._id}`}
                                alt={product.name}
                                className="img-fluid"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="col-md-6">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <h4>Price: ${product.price}</h4>

                            <button className="btn btn-success me-3">Add to Cart</button>
                            <Link to="/" className="btn btn-secondary">Back to Home</Link>
                        </div>
                    </div>
                ) : (
                    <h3 className="text-center text-danger">Product not found</h3>
                )}
            </div>
        </Layout>
    );
};

export default Details;
