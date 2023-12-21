const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRouter");

const app = express();

const PORT = process.env.PORT || 3000;

var corsOptions = {
  origin: "https://localhost:3000",
};

// Middlewares \\
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers \\
app.use("/api/products", productRouter);

// Testing \\
app.get("/", (req, res) => {
  res.json({ message: "Hello from API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port - ${PORT}`);
});
