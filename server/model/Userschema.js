import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    mobile:
    {
        type: Number,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    answer:
    {
        type: String,
        required: true
    },
    role:
    {
      type: Number,
      default: 0
    },
},
{timestamps:true}
)

export default mongoose.model("users",UserSchema);