import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    is_Block: {
        type: Boolean,
        require: true,
        default: false
    },
    is_Verified: {
        type: String,
        default: 0
    }
});

export default mongoose.model("User", userSchema);