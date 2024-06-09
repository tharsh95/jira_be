import dotenv from "dotenv";
import express from "express"
import connectToDB from "./db";
import appRouter from "./router";
import cors from "cors"

dotenv.config()

const PORT = process.env.NODE_PORT || 8000
const app = express();

app.use(cors())


app.use("/api/v1", appRouter)
const startServer = async () => {
  try {
     connectToDB();
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();



export default app

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Jira issue</h1><a href='https://vercel-indol-rho.vercel.app/issue'>Issues</a>")
// })