const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect(process.env.DB_CONNECTION_SECRET);
};

module.exports = connectDB;


const Username = "vasanth913_db_user";
const URI = "tO5qrYn3DumI2Xnn"
const URIFull = "mongodb+srv://vasanth913_db_user:tO5qrYn3DumI2Xnn@cluster0.96cixe5.mongodb.net/"