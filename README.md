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
## Backend and Frontend Project Structure

```

copa-tourism-website/
├── apps/
│   ├── backend/
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── migrations/
│   │   │       └── [timestamped-migrations]/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── blog.controller.ts
│   │   │   │   ├── destination.controller.ts
│   │   │   │   └── package.controller.ts
│   │   │   ├── routes/
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── blog.routes.ts
│   │   │   │   ├── destination.routes.ts
│   │   │   │   └── package.routes.ts
│   │   │   ├── middleware/
│   │   │   │   ├── auth.middleware.ts
│   │   │   │   └── error.middleware.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── blog.service.ts
│   │   │   │   ├── destination.service.ts
│   │   │   │   └── package.service.ts
│   │   │   ├── lib/
│   │   │   │   ├── prisma.ts
│   │   │   │   └── redis.ts
│   │   │   ├── utils/
│   │   │   │   ├── jwt.ts
│   │   │   │   └── hash.ts
│   │   │   ├── app.ts
│   │   │   └── server.ts
│   │   ├── .env
│   │   ├── package.json
│   │   └── tsconfig.json
│
│   ├── frontend/
│   │   ├── public/
│   │   │   ├── assets/
│   │   │   │   ├── img/
│   │   │   │   │   └── [image files]
│   │   │   └── favicon.ico
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/page.tsx
│   │   │   │   │   ├── register/page.tsx
│   │   │   │   │   └── layout.tsx
│   │   │   │   ├── about/page.tsx
│   │   │   │   ├── blog/page.tsx
│   │   │   │   ├── blog/[slug]/page.tsx
│   │   │   │   ├── contact/page.tsx
│   │   │   │   ├── destinations/page.tsx
│   │   │   │   ├── destinations/[slug]/page.tsx
│   │   │   │   ├── packages/page.tsx
│   │   │   │   ├── packages/[slug]/page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx (homepage)
│   │   │   │   └── template.tsx
│   │   │   ├── components/
│   │   │   │   ├── auth/LoginForm.tsx
│   │   │   │   ├── auth/RegisterForm.tsx
│   │   │   │   ├── common/Header.tsx
│   │   │   │   ├── common/Footer.tsx
│   │   │   │   ├── common/Navbar.tsx
│   │   │   │   ├── destinations/DestinationCard.tsx
│   │   │   │   ├── destinations/DestinationList.tsx
│   │   │   │   ├── packages/PackageCard.tsx
│   │   │   │   ├── packages/PackageList.tsx
│   │   │   │   ├── blog/BlogCard.tsx
│   │   │   │   ├── blog/BlogList.tsx
│   │   │   │   └── ui/
│   │   │   │       ├── buttons/
│   │   │   │       ├── forms/
│   │   │   │       └── [...other UI components]
│   │   │   ├── config/
│   │   │   │   ├── auth.ts
│   │   │   │   └── api.ts
│   │   │   ├── constants/
│   │   │   │   └── [constant values]
│   │   │   ├── contexts/
│   │   │   │   └── AuthContext.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── [...other hooks]
│   │   │   ├── lib/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── jwt.ts
│   │   │   │   │   ├── tokens.ts
│   │   │   │   └── cache/redis.ts
│   │   │   ├── middleware.ts
│   │   │   ├── models/
│   │   │   │   ├── base.model.ts
│   │   │   │   ├── user.model.ts
│   │   │   │   ├── destination.model.ts
│   │   │   │   └── package.model.ts
│   │   │   ├── providers/
│   │   │   │   └── AuthProvider.tsx
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── destination.service.ts
│   │   │   │   └── blog.service.ts
│   │   │   ├── styles/
│   │   │   │   ├── globals.css
│   │   │   │   └── [...other css]
│   │   │   └── types/
│   │   │       ├── auth.d.ts
│   │   │       ├── database.d.ts
│   │   │       └── [...other types]
│   │   ├── .env.local
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── tailwind.config.ts
│
├── tests/
│   ├── unit/
│   │   ├── backend/
│   │   └── frontend/
│   └── integration/
│       ├── backend/
│       └── frontend/
│
├── .gitignore
├── README.md

```
## Backend and Frontend Tasks


### Backend Coding Tasks

```
1. Setup & Configuration

[ ] Initialize Node.js project with TypeScript support

[ ] Setup Express.js with basic app.ts and server.ts

[ ] Configure Prisma ORM:

[ ] Define schema.prisma

[ ] Setup PostgreSQL

[ ] Run prisma migrate dev


[ ] Create .env with DB URL and JWT secret

[ ] Setup logging, CORS, and body parser middleware


2. Authentication Module

[ ] Create auth.controller.ts, auth.routes.ts, and auth.service.ts

[ ] Implement register, login, and logout endpoints

[ ] Use argon2 for password hashing

[ ] Implement JWT-based authentication with access & refresh tokens

[ ] Add auth.middleware.ts to protect private routes


3. Blog Module

[ ] Design Blog model in Prisma

[ ] Create blog.controller.ts, blog.routes.ts, blog.service.ts

[ ] Endpoints:

[ ] GET /blogs

[ ] GET /blogs/:slug

[ ] POST /blogs

[ ] PUT /blogs/:slug

[ ] DELETE /blogs/:slug



4. Destinations Module

[ ] Design Destination model in Prisma

[ ] Create controller, routes, and service for CRUD operations

[ ] Implement GET, POST, PUT, DELETE endpoints for destinations


5. Packages Module

[ ] Design Travel Package model in Prisma

[ ] CRUD endpoints for packages

[ ] Link packages to destination using foreign key


6. Common Utilities

[ ] JWT utility (sign, verify tokens)

[ ] Error handler middleware

[ ] Centralize response format utility

```

### Frontend Coding Tasks

```

1. Setup & Layout

[ ] Initialize Next.js (App Router) with Tailwind CSS

[ ] Create global layout with:

[ ] Header

[ ] Navbar

[ ] Footer


[ ] Setup Tailwind theme, global styles, and config files


2. Auth Pages & Logic

[ ] Create login and register pages

[ ] Build LoginForm.tsx and RegisterForm.tsx

[ ] Use AuthContext + useAuth for user state

[ ] Persist JWT in cookie or localStorage

[ ] Protect pages using middleware or custom hook


3. Blog Feature

[ ] Create BlogList.tsx and BlogCard.tsx

[ ] Page: /blog — Fetch all blog posts

[ ] Page: /blog/[slug] — Single blog post view


4. Destinations Feature

[ ] Create destination cards and list components

[ ] Page: /destinations — Fetch and list all destinations

[ ] Page: /destinations/[slug] — Detailed view of a single destination


5. Packages Feature

[ ] Create travel package cards and listing

[ ] Page: /packages — View all packages

[ ] Page: /packages/[slug] — Detailed view for booking/itinerary


6. Contact & About Pages

[ ] /about — Add static mission, vision, team info

[ ] /contact — Simple contact form using useForm or react-hook-form


7. API Integration

[ ] Create auth.service.ts, blog.service.ts, etc. to call backend API

[ ] Handle API errors and loading states

[ ] Add retry/cache with SWR or React Query (optional)


Bonus (Optional Enhancements)

[ ] Add loading skeletons and toasts

[ ] Implement responsive design

[ ] Use next-auth or clerk if preferred

[ ] Implement search/filter on destination/package pages

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
