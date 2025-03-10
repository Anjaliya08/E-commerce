import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
    {
        products: [
            {
            type: mongoose.ObjectId,
            ref: "Prodcuts",
            },
        ],
        payment: {},
        buyer: {
            type: mongoose.ObjectId,
            ref: "users",

        },
        status: {
            type: String,
            default: "Not Process",
            enum: ["Not Process","Processing","Shipped","deliverd","cancel"],
        },
    },
    { timestamps: true}
);

export default mongoose.model("Order",OrderSchema);