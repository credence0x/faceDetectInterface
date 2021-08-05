const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose"),
    { Schema } = mongoose,
    userSchema = new Schema({
        name: {
            first: {
                type: String,
                trim: true, // remove white spaces
                required: true
            },
            last: {
                type: String,
                trim: true,
                required: true
            }
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        }


    }, {
        timestamps: true
    });


userSchema.virtual("fullName")
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    });


userSchema.plugin(passportLocalMongoose, {
    usernameField: "email" //defaults to username field
});
module.exports = mongoose.model("User", userSchema);
