import dotenv from "dotenv";
import express from "express"
import connectToDB from "./db";
import IssueRoute from './routes/IssueRoute'
dotenv.config()
const PORT = process.env.NODE_PORT || 8000
const app = express();


app.get("/",(req,res)=>{
  res.send("<h1>Welcome to Jira issue</h1><a href='https://vercel-indol-rho.vercel.app/issue'>Issues</a>")
})
app.use("/issue", IssueRoute)
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
  connectToDB()
});


export default app