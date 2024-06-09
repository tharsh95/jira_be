import IssueService from "./service";
import { Request, Response } from "express";

class IssueController {
  static async getList(req: Request, res: Response) {
    const data = await IssueService.getList()
    res.json({ count: data?.length, data })
  }
}

export default IssueController;