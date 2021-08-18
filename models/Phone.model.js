const { Schema, model } = require("mongoose");


const phoneSchema = new Schema({

  name: {
    type: String,
    required: [true, 'name is mandatory.'],
  },

  manufacturer: {
    type: String,
    required: [true, 'manufacturer is mandatory.'],
  },

  description: {
    type: String,
    default: "Great phone with an excellent interface. One of the best mid price range phones in the market."
  },

  color: {
    type: String,
    required: [true, 'color is mandatory.'],
  },

  price: {
    type: Number,
    required: [true, 'price is mandatory.'],
  },

  imageFileName: {
    type: String,
    default: "https://res.cloudinary.com/dvz9tjidq/image/upload/v1628417304/red4me/g4slfghsijjsnocrw5ul.png"
  },

  screen: {
    type: String,
    required: [true, 'screen is mandatory.'],
  },

  processor: {
    type: String,
    required: [true, 'processor is mandatory.'],
  },
  
  ram: {
    type: Number,
    required: [true, 'ram is mandatory.'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
},
{
  timestamps: true,
}
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;


