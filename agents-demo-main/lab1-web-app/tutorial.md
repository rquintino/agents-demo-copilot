# Lab 1 — Vibe-Code a Web App (10 min)

## Objective

Use GitHub Copilot to build and improve a React web app, then preview it live.

## What You'll Learn

- How Copilot assists with code generation in real time
- The **ReAct loop** in practice: suggest → apply → run → observe → iterate
- Using Copilot Chat and inline suggestions to build features fast

## Prerequisites

- VS Code with GitHub Copilot extension installed and authenticated
- Node.js installed (v18+)

## Steps

### 1. Open the Lab Folder

Open this folder (`lab1-web-app`) in VS Code.

You'll see a minimal React + Vite project with a starter `src/App.jsx`.

### 2. Install Dependencies and Build a Todo App

Open **Copilot Chat** (Ctrl+Shift+I or the chat icon) and try:

```
Install dependencies and build a simple todo app with a modern UI
```

Copilot will suggest edits to `src/App.jsx`. Review and apply the changes.

Then install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open your browser at **http://localhost:5173** to preview.

### 3. Add Features

Try these follow-up prompts in Copilot Chat:

- `Add a dark mode toggle`
- `Add the ability to mark tasks as complete`
- `Add local storage so todos persist on refresh`

Apply each suggestion, save, and watch the app hot-reload.

### 4. Experiment Freely

Try your own ideas! Some suggestions:

- `Add a filter to show only incomplete tasks`
- `Make it look like a professional app with better styling`
- `Add a due date field to each task`

## Watch the ReAct Loop

Notice the pattern:

1. **Think** — You describe what you want
2. **Act** — Copilot generates code suggestions
3. **Observe** — You preview the app in the browser
4. **Iterate** — You refine with follow-up prompts

This is the same loop AI agents use autonomously.

## Debrief Questions

- How did Copilot assist in the coding process? Could you trace the suggestions?
- What happened when a suggestion wasn't quite right? How did you iterate?
- How does this compare to coding without AI assistance?
