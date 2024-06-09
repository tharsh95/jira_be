import axios from "axios";

export async function fetchJiraIssues(chunk: number){
    const url = `${process.env.JIRA_URL}?jql=ORDER%20BY%20key%20ASC&startAt=${chunk}`;
            const auth = btoa(`${process.env.JIRA_USERNAME}:${process.env.JIRA_PASS}`);
            const { data: { issues,total } } = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${auth}`,
                },
            });
            return {issues,total}
}