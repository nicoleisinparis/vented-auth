const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/vinted");

app.use(express.json());

const userRouter = require("./routes/user");

app.use("/user", userRouter); //app.use("/user", userRouter); not working

// const User = mongoose.model("User", {
//   account: {
//     username: String,
//     avatar: Object,
//   },
//   email: String,
//   password: String,
//   newsletter: Boolean,
//   salt: String,
//   token: String,
//   hash: String,
// });

// app.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password, newsletter } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ message: "missing info" });
//     }
//     const user = await User.findOne({ email: email });
//     if (user) {
//       return res.status(409).json({
//         message: "this email being used, please change another email address",
//       });
//     }

//     const salt = uid2(64);
//     const token = uid2(64);
//     const hash = SHA256(password + salt).toString(encBase64);

//     const newUser = new User({
//       email: email,
//       account: {
//         username: username,
//       },
//       newsletter: newsletter,
//       salt: salt,
//       token: token,
//       hash: hash,
//     });
//     console.log(newUser);
//     await newUser.save();
//     // res.json("your account is registered");

//     return res.status(201).json({
//       _id: newUser._id,
//       token: newUser.token,
//       account: newUser.account,
//     });
//   } catch (error) {
//     console.log("error");
//     res.status(400).json({ error: error.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     const verifyPassword = SHA256(req.body.password + user.salt).toString(
//       encBase64
//     );
//     if (verifyPassword === user.hash) {
//       return res.status(201).json({
//         _id: user._id,
//         token: user.token,
//         account: user.account,
//       });
//     } else {
//       return res.status(400).json({ message: "email or password incorrect" });
//     }
//   } catch (error) {
//     console.log("error");
//     res.status(500).json({ error: error.message });
//   }
// });

app.all("*", (req, res) => {
  res.status(404).json({
    message: "all route",
  });
});

app.listen(3000, () => {
  console.log("sever started");
});
