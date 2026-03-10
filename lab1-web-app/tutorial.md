# Lab 1 — Vibe-Code a Web App (10 min)

## Objective

Use GitHub Copilot to **build a web app from scratch** — just by describing what you want.

## What You'll See

- An AI agent writing code for you in real time
- A live preview that updates as you make changes
- The **Think → Act → Observe → Iterate** loop that all AI agents use

## Steps

### 1. Open Copilot Chat

Click the **chat icon** in VS Code (or press `Ctrl+Shift+I`).

Make sure **Agent** is selected in the mode dropdown at the top of the chat.

### 2. Ask Copilot to Build a Todo App

Paste this into the chat:

```
Install the dependencies for lab1-web-app, then build me a simple todo app with a modern UI in the lab1-web-app folder. Start the dev server when done so I can preview it.
```

Copilot will write the code, install what's needed, and start the app. When it's ready, open the **preview link** it provides (usually port 5173).

### 3. Improve It with Follow-Up Prompts

Now iterate — just ask for changes and watch the app update live:

```
Add a dark mode toggle
```

```
Add the ability to mark tasks as complete
```

```
Make it look more professional with better styling
```

Each time, Copilot writes the code and the app refreshes automatically.

### 4. Try Your Own Idea

Ask for anything you want! Some ideas:

- `Add a priority field (high, medium, low) with color coding`
- `Add a search bar to filter tasks`
- `Make it look like a Notion-style app`

## The Pattern to Notice

You just experienced the same loop AI agents use autonomously:

1. **Think** — You describe what you want
2. **Act** — The agent writes code
3. **Observe** — You see the result in the browser
4. **Iterate** — You refine with another prompt

## Debrief

- What surprised you about the process?
- When did Copilot get it right on the first try? When did it need guidance?
- How does this change who can build software?
