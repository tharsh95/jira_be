import express from "express"
import IssueController from "./controller";

const router = express.Router()

router.get("/list",IssueController.getList)

export default router