import mongoose from 'mongoose';   // import mongoose to interact with MongoDB
import bcrypt from 'bcrypt';    // import bcrypt to hash passwords

const userSchema = new mongoose.Schema({
    // schema for identifying a user
    // type, the type of data
    // required, if it is required or not
    // unique, if it is unique or not
    // trim, if it is trimmed or not
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
tokens: [
    {
        type: String,
        required: true,
    },
],
});

userSchema.methods.verifyPassword = async function (password) {
    const user = this;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
};

const User = mongoose.model('User', userSchema);
module.exports = User;