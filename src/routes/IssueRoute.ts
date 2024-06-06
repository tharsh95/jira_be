import axios from "axios";
import express from "express"


const router = express.Router()



router.get("/", async (req, res) => {
    try {
        const num = 0
        const url = `${process.env.JIRA_URL}?startAt=${num}`;
        const auth = btoa(`${process.env.JIRA_USERNAME}:${process.env.JIRA_PASS}`);
        const { data: { issues } } = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${auth}`,
            },
        });
        const aob = issues.map((el: {
            fields: any; key: string
        }) => ({
            key: el.key,
            status: el.fields.status.name,
            summary: el.fields.summary,
            assignee: el.fields.assignee && el.fields.assignee.displayName,
            issueType: el.fields.issuetype.name
        }))
        aob.sort((a: { key: string; }, b: { key: string; }) => {
            const aKeyNum = parseInt(a.key.split('-')[1]);
            const bKeyNum = parseInt(b.key.split('-')[1]);
            return aKeyNum - bKeyNum;
        });

        res.status(200).json({ aob });
    } catch (e) {
        console.log(e, "mkl");
    }
});

export default router