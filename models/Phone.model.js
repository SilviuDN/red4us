const { Schema, model } = require("mongoose");


const phoneSchema = new Schema({

  name: {
    type: String,
  },

  manufacturer: {
    type: String,
  },

  description: {
    type: String,
    default: "Great phone with an excellent interface. One of the best mid price range phones in the market."
  },

  color: {
    type: String,
  },

  price: {
    type: Number,
  },

  imageFileName: {
    type: String,
    default: "https://res.cloudinary.com/dvz9tjidq/image/upload/v1628417304/red4me/g4slfghsijjsnocrw5ul.png"
  },

  screen: {
    type: String,
  },

  processor: {
    type: String,
  },
  
  ram: {
    type: Number,
  },
},
{
  timestamps: true,
}
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;


