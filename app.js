const express = require("express");
const auth = require("./routes/auth.js")
const rooms = require("./routes/rooms.js")
const users = require("./routes/users.js")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res,next)=>{
  console.log("in fun")
  next();
});

app.use((req, res,next)=>{
  console.log("in fun2")
  next();
});

//API Routes for user login and signup
app.use('/auth',auth);

//API Routes for rooms
app.use('/rooms',rooms);

//API Routes for users
app.use('/users',users);

app.use((err, req, res, next)=>{
  console.log("in fun3", err.message);
  res.status(500).json({
    error: err.message,
    message: "Internal error",
  });
  next(err);
})

app.listen(PORT, () => {
  console.log("Server listening at ", PORT);
});
