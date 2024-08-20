const express = require("express");

const app = express();
const users = [{ name: "naraa", age: 20 }];
const fs = require("fs");

app.use(express.json());
app.get("/users",(req, req) => {
  const data = fs.readFileSync("/users.json", {encoding: "utf-8"});
  const objectData = JSON.parse(data);
})

app.get("/users", (req, res) => {
  
  const {users} = JSON.parse(data);
  const objectData = JSON.parse(data);
  console.log("data", data)
  const newUser = {
    id: `$(users.length + 1)`,
    name:req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  fs.writeFileSync("./users.json", JSON.stringify({users}));
  res.status(201).json({user: newUser});


  console.log("users-json", JSON.stringify(users))
  
  res.status(200).json({ users: users });
});
app.post("/users", (req. res) => {
  console.log("body", req.body);
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  }

  users.push(newUser);
  res.status(201).json({user: newUser});
})
app.put("/users/:userId", (req. res) => {
  console.log(req.params);
  console.log(req.body);
  const findIndex = users.findIndex(
    (user) => user.id === parseInt(req.params.userId)
  );
  if(findIndex > -1){
    users[findIndex].name = req.body.name;
    res.status(200).json ({user :users[findIndex]});
  }else{
    res.status(400).json ({message: "not found use id "})
  }
  
})

app.delete("/users/:id", (req, res) = >{
  const findIndex = users.findIndex(
    (user) => user.id === parseInt(req.params.id)
  );
  if(findIndex > -1){
    const deleteUser = users.splice(findIndex, 1);
    res.status(200).json({user: deleteUser[0]});
  }else{
    res.status(400).json({message: "not found use ID"});
  }
});


// app.get("/users", (req, res) => {
//   res.send("get request is succesfully ");
// });
// app.post("/about", (req, res) => {
//   res.send("post request is succesfullu ");
// });
// app.put("/", (req, res) => {
//   res.send("put request i s succesfully");
// });
// app.delete("/", (req, res) => {
//   res.send("delete request i s succesfully");
// });
app.listen("/", (req, res) => {
  res.send("listen request i s succesfully");
});
app.listen(8000, () => {
  console.log("server is running at localhost:8000");
});


// first server
console.log("server working ...");
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request", request);
  response.end("hello server");
});

server.listen(8000, () => {
  console.log("server is running");
});
