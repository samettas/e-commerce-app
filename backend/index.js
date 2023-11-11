const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const connection = require("./database/db");
const app = express();

app.use(express.json());
app.use(cors());

const authRouter = require("./routers/auth.router");
const categoryRouter = require("./routers/category.router");
app.use("/api/auth",authRouter);
app.use("/api/category",categoryRouter);

connection();

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("Uygulama http://localhost:5000/ portunda ayağa kalkti!"));