export interface JiraIssue {
    key: string
    fields: {
      statuscategorychangedate: string;
      issuetype: {
        // self: string;
        // id: string;
        // description: string;
        // iconUrl: string;
        name: string;
        // subtask: boolean;
        // avatarId: number;
        // entityId: string;
        // hierarchyLevel: number;
      };

      assignee: {

        displayName: string;
      }
      status: {
        // self: string;
        // description: string;
        // iconUrl: string;
        name: string;
        // id: string;
      }
      summary: string;
  }
}
export interface issue {
    issueKey: string;
    status: string;
    summary: string;
    assignee: string;
    issueType: string;
}