import React, { useEffect, useState } from "react";
import AdminMenu from "../../component/Layouts/AdminMenu";
import Layout from "../../component/Layouts/Layout";
import CategoryForm from "../../component/Form/CategoryForm";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal } from "antd";




const CreateCategory = () => {
    const [categories, setcategories] = useState([]);
    const [name, setName] = useState("");
    const [visible,setVisible] = useState(false);
    const [selected,setSelected] = useState(null);
    const [updatedName,setUpdatedName] = useState("");

// handle form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/category/createcategory",{
                name,
            });
            if (data?.success){
                toast.success(`${name} is created`);
                getAllCategory();
            }else {
                toast.error(data.message);
            }       
            }catch (error){
                console.log(error);

            }
          
        };
//get all cat
const getAllCategory = async () => {
    try {
        const { data } = await axios.get("/api/v1/category/get-category");
            if ( data?.success ) {
                setcategories(data?.category);
            }
    } catch (error) {
        console.log(error);
        toast.error("something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  });

//update category

const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.put(
            `/api/v1/category/update-category/${selected._id}`,
            {name : updatedName}
        );
        if (data?.success) {
            toast.success(`${updatedName} is updated`);
            setSelected(null);
            setUpdatedName("");
            setVisible(false);
            getAllCategory();
        }else {
            toast.error(data.message);
        }
    }catch (error) {
        console.log(error);
    }
};

//delete category

const handleDelete = async (pId) => {
    try {
        const { data } = await axios.delete(
            `/api/v1/category/delete-category/${pId}`
        );
        if (data.success) {
            toast.success(`category is deleted`);

            getAllCategory();
        }else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error("something went wrong");
    }
};
    
    return (

        <Layout>
        <div className="container-fluid mt-4">
            <div className="row">
                {/* Sidebar Column */}
                <div className="col-3">
                    <AdminMenu />
                </div>
                
                {/* Main Content Column */}
                <div className="col-9">
                   <div className="card w-75 p-3">
                   <CategoryForm 
                   handleSubmit={handleSubmit}
                   value={name}
                   setValue={setName}
                   
                   />
                   </div>
                    {/* Add your main dashboard content here */}

                    <div className="w-75">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((c) => (
                                <>
                                <tr>
                                    <td key={c._id}>{c.name}</td>
                                    <td>
                                        <button
                                        className="btn btn-primary ms-2"
                                        onClick={() => {
                                            setVisible(true);
                                            setUpdatedName(c.name);
                                            setSelected(c);
                                        }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                        className="btn btn-danger ms-2"
                                        onClick={() => {
                                            handleDelete(c._id);
                                        }}
                                        >
                                            delete
                                        </button>
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                   </div>

                   <Modal
                   onCancel={() => setVisible(false)}
                   footer={null}
                   visible={visible}
                   >
                    <CategoryForm
                    value={updatedName}
                    setValue={setUpdatedName}
                    handleSubmit={handleUpdate}
                    />
                   </Modal>
                    {/* Add your main dashboard content here */}
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default CreateCategory;

