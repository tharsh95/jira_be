import express from "express";


const app = express();

app.get("/jira", async (req, res) => {
  try {

    res.status(200).json({ data:"HW" });
  } catch (e) {
    console.log(e, "e");
  }
});

app.listen(5555, () => console.log("Running"));


export default app