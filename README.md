# Git Cure

**Terminal-native Git diagnostics and recovery powered by Gemma.**

git-cure inspects your local repository, identifies problematic Git states, uses Google's Gemma model to explain root causes, generates a step-by-step recovery plan, and executes approved commands with safety snapshots — entirely from the terminal.

---

## Problem

Git's output is precise but not always actionable. When something goes wrong — a botched rebase, a merge conflict in a critical file, a detached HEAD after a failed cherry-pick — developers spend time decoding error messages and searching Stack Overflow for the right incantation.

git-cure gives you a plain-language diagnosis and a concrete recovery path without leaving your terminal.

---

## Architecture (planned)

```
Local repository
       │
       ▼
  CLI engine          ← git operations via child_process, state detection
       │
       ▼
 Gemma module         ← structured prompts, schema-validated diagnosis output
       │
       ▼
Recovery planner      ← step sequencing, risk classification, approval gates
       │
       ▼
  Guarded executor    ← snapshot → run → verify
       │
       ▼
   Dashboard          ← read-only presentation layer, live during hackathon demo
```

The dashboard **never** executes shell commands. It displays what the CLI engine reports.

---

## Phase 1 scope (current)

- Monorepo scaffold with npm workspaces
- React + Vite + TypeScript + Tailwind frontend shell
- Shared TypeScript data contracts (`packages/shared`)
- Placeholder CLI entry point (`packages/cli`)
- Placeholder Gemma entry point (`services/gemma`)
- Mock data and service interface stubs
- Documentation

The CLI integration and Gemma API calls are **not yet implemented**.

---

## Tech stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | React 18, Vite 5, TypeScript 5, Tailwind CSS 3 |
| CLI engine  | Node.js, TypeScript, child_process  |
| AI          | Google Gemma (Phase 3)              |
| Package mgr | npm workspaces                      |

---

## Prerequisites

- Node.js 20 or later
- npm 10 or later

---

## Installation

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd git-cure
npm install
```

> Replace `<YOUR_GITHUB_REPOSITORY_URL>` with the URL of your GitHub repository.

---

## Development commands

| Command               | What it does                              |
|-----------------------|-------------------------------------------|
| `npm run dev`         | Start the dashboard on http://localhost:5173 |
| `npm run build`       | Production build (dashboard)              |
| `npm run typecheck`   | Type-check all workspaces                 |

Per-workspace

```bash
npm run dev --workspace=@git-cure/dashboard
npm run typecheck --workspace=@git-cure/shared
npm run typecheck --workspace=@git-cure/cli
npm run typecheck --workspace=@git-cure/gemma
```

---

## Repository structure

```
git-cure/
├── apps/dashboard/        # React dashboard (Teammate 1)
│   ├── src/
│   │   ├── components/ui/ # Shared UI primitives
│   │   ├── data/          # Mock data (replaced by live API in Phase 2)
│   │   ├── pages/         # Page-level components
│   │   ├── services/      # API service layer (stubs)
│   │   └── types/         # Re-exports from @git-cure/shared
│   └── ...
│
├── packages/
│   ├── shared/            # TypeScript data contracts (read by all)
│   └── cli/               # CLI engine (Teammate 2)
│
├── services/gemma/        # Gemma AI module (Teammate 3)
│
└── docs/                  # Architecture, API contract, team workflow
```

---

## Team

| Teammate | Module            | Owns                         |
|----------|-------------------|------------------------------|
| 1        | Dashboard         | `apps/dashboard/`            |
| 2        | CLI engine        | `packages/cli/`              |
| 3,4      | Gemma engine      | `services/gemma/`            |


---


