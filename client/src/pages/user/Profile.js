import React, { useState, useEffect } from "react";
import UserMenu from "../../component/Layouts/UserMenu";
import Layout from "../../component/Layouts/Layout";
import axios from"axios";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";


const Profile = () => {

    const [auth, setAuth] = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
      if (!auth || !auth.user) return; // Prevents running if auth is undefined
  
      const { email, name, mobile, address } = auth.user || {};
      setName(name || "");
      setMobile(mobile || "");
      setEmail(email || "");
      setAddress(address || "");
  }, [auth]);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("/api/v1/auth/profile", {
                name,
                email,
                password,
                mobile,
                address,
            });
            if(data?.error) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updateUser });
                let ls = localStorage.getItem("auth");
                ls=JSON.parse(ls);
                ls.user = data.updateUser;
                localStorage.setItem("auth",JSON.stringify(ls));
                toast.success("Profile Update Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    
    return (
        <Layout title={"Your Profile"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-8">
                        <div className="form-container" style={{ marginTop: "-40px" }}>
                            <form onSubmit={handleSubmit}>
                                <h4 className="title">USER PROFILE</h4>
                                <div className="mb-3">
                                    <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail"
                                    placeholder="Enter your Name"
                                    autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail"
                                    placeholder="Enter your Email"
                                    disabled
                                    
                                    />
                                </div>
                                <div className="mb-3">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    id="exampleInputPassword"
                                    placeholder="Enter your password"
                                    
                                    />
                                    </div>

                                    <div className="mb-3">
                                <input
                                    type="text"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail"
                                    placeholder="Enter your Phone"
                                    />
                                    </div>

                                    <div className="mb-3">
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"
                                    id="exampleInputEmail"
                                    placeholder="Enter your Address"
                                    />
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Update
                                    </button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;