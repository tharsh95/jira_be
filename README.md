# Backend

[Deployed Link of backend](https://vercel-indol-rho.vercel.app/api/v1/issue/list)

## Decison 
```bash
1. The backend was developed to integrate the JIRA API, as integrating it directly in the frontend would have exposed the JIRA API token and other sensitive information, also I tried integrating in frontend but encountering a CORS error.
```
```bash
2. MongoDB was integrated to store the issues in the database. A logic was implemented to fetch issues from the database if they match those from the JIRA API. If new issues are added in JIRA, they are saved in MongoDB and then fetched from the database, without any deduplication of issues.
```
## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/tharsh95/vercel.git
```

### Step 2: Install Dependency
```bash
# Using yarn
yarn

# Using npm
npm install
```
### Step 3:
```bash
Add .env file to the root of the backend directory, Copy the keys from .env.example and fill the desired values
```

### Step 4:Run the application
```bash
# Using yarn
yarn dev

# Using npm
npm run dev
```

### Step 5:Continue with the frontend
