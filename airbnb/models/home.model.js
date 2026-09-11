const { ObjectId } = require("mongodb");

//  this.housename = housename;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     if (_id) this._id = _id;
//    save()
//    find()
//    deletebyid(id)

const mongoose = require("mongoose");
const homeschema = new mongoose.Schema(
  {
    housename: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Home", homeschema);
