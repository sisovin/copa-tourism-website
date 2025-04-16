# Copa Tourism Website

This project is a monorepo for the Copa Tourism Website, which includes both the backend and frontend applications. The backend is built with Express, and the frontend is a simple HTML/CSS/JS application.

## Project Structure

```
copa-tourism-website/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                   # CI pipeline
│   │   └── deploy.yml               # Deployment workflow
├── .vscode/
│   ├── extensions.json              # Recommended extensions
│   └── settings.json                # VS Code settings
├── apps/
│  ├── backend/src
│  ├── frontend/src
├── docs/
├── packages/
├──.gitignore
├── docker-compose.yml                # DB + services setup
├── package.json                      # Workspace root
├── turbo.json
└── README.md
```

## Setting Up the Project Locally

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend and frontend services:
   ```
   npm run start:backend
   npm run start:frontend
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the frontend application.

## Deploying the Project

1. Ensure you have Docker installed and running.

2. Build and start the services using Docker Compose:
   ```
   docker-compose up --build
   ```

3. The backend will be available at `http://localhost:3001` and the frontend at `http://localhost:3000`.
