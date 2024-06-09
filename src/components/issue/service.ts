import { Issue } from "../../models/IssueModel";
import { adjustCount } from "./utils";
import { JiraIssue, issue } from "../../interface";
import JiraService from "../../services";

class IssueService {
    static async list(chunk: number): Promise<issue[] | undefined> {
        try {
            const {issues} = await JiraService.fetchJiraIssues(chunk)
            const data:issue[] = issues.map((el:JiraIssue) => ({
                issueKey: el.key,
                status: el.fields.status.name,
                summary: el.fields.summary,
                assignee: el.fields.assignee?el.fields.assignee?.displayName: " ",
                issueType: el.fields.issuetype.name
            }))
            return data
        } catch (e) {
            console.error(e, "error");
        }
    }
    static async getList(): Promise<issue[]> {
        try {
            const {total} = await JiraService.fetchJiraIssues(0)
            const count = await Issue.countDocuments()
            if (total > count) {
                const chunks = adjustCount(count, total);
                const fetchPromises = chunks.map(chunk => this.list(chunk))
                try {
                    const results = await Promise.all(fetchPromises);
                    const allData = results.flat();
                    await Issue.insertMany(allData);
                } catch (e) {
                    console.error(e);
                }
            }
    
            const data = await Issue.find().lean().exec();
            return data as issue[];
        }
        catch (e) {
            console.log(e)
            return []
        }
    }
}

export default IssueService