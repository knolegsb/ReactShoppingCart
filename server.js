const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

// mongoose.connect(MONGOURI);
// mongoose.connection.on('connected', () => {
//     console.log("Connected to MONGO...");
// });

// mongoose.connect(MONGOURI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });

// database connection
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useCreateIndex:true, useFindAndModify: false, useUnifiedTopology: true})
    .then(() => console.log("DB Connected"))
    .catch(err => {
        console.log(err);
    });

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

const Product = mongoose.model("products",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String],
    })
);

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
  });
  
  app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  });
  
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log("serve at http://localhost:5000"));