import React from "react";
import UserMenu from "../../component/Layouts/UserMenu";
import Layout from '../../component/Layouts/Layout'
import { useAuth } from "../../context/auth";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
        <div className="container-fluid mt-5">
            <div className="row">
                {/* Sidebar Column */}
                <div className="col-3">
                    <UserMenu />
                </div>
                
                {/* Main Content Column */}
                <div className="col-md-9">
                                        <h2 className="mb-4">User Dashboard</h2>
                                        <div className="row g-4">
                                            {/* Admin Info Card */}
                                            <div className="col-md-6">
                                                <div className="card shadow-sm p-4 border-0 rounded">
                                                    <div className="d-flex align-items-center">
                                                        <FaUser className="me-3 text-primary" size={30} />
                                                        <div>
                                                            <h5 className="mb-1">Name</h5>
                                                            <p className="text-muted mb-0">{auth?.user?.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                
                                            {/* Admin Email Card */}
                                            <div className="col-md-6">
                                                <div className="card shadow-sm p-4 border-0 rounded">
                                                    <div className="d-flex align-items-center">
                                                        <FaEnvelope className="me-3 text-success" size={30} />
                                                        <div>
                                                            <h5 className="mb-1">Email</h5>
                                                            <p className="text-muted mb-0">{auth?.user?.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                
                                            {/* Admin Contact Card */}
                                            <div className="col-md-6">
                                                <div className="card shadow-sm p-4 border-0 rounded">
                                                    <div className="d-flex align-items-center">
                                                        <FaPhoneAlt className="me-3 text-danger" size={30} />
                                                        <div>
                                                            <h5 className="mb-1">Contact</h5>
                                                            <p className="text-muted mb-0">{auth?.user?.mobile}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Layout>
    );
};

export default Dashboard;
