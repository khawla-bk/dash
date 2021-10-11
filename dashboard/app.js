const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/auth");
const userModal = require("./Models/userModel");
const ServiceRoutes = require("./routes/Service");

connectDB();
app.get("/test", (req, res) => {
  res.send("hello");
});
app.get("/api/secret-super-user", (req, res) => {
  const user = new userModal({
    email: "admin@admin.fr",
    password: "admin123",
    post: "admin",
    name: "John Cena",
    verifiedEmail: true,
  });

  user
    .save()
    .then(() => res.send("ok"))
    .catch((err) => res.send(err));
});
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/service", ServiceRoutes);

const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
