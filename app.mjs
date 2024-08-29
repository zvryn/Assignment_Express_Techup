import express from "express";
const app = express();
const port = 4000;

app.get("/profiles", (req, res) => {
  return res.json(profile);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

const profile = {
  data: {
    name: "john",
    age: 20,
  },
};
