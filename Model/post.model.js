const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    "name": String,
		"email" : String,
		"phone" :String,
		"label" :String,
		"booked_slots" :Array
},{
    versionKey: false
});


const postModel = mongoose.model("posts", postSchema);


module.exports = {
    postModel
}