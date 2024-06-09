import { IssueRoute } from './components/issue'
import express from "express"

const appRouter = express.Router()

appRouter.use('/issue',IssueRoute)

export default appRouter