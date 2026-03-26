# Lab 1 — Vibe-Code a Web App

⏱ **10 min** · Agent loop, tool use, code generation

> Build a working web app **without writing any code** — just by describing what you want. You'll see Copilot write code, run it, and update the app live in your browser. Then you'll iterate together, adding features one by one.

## What You'll Learn

- The **ReAct loop** in action: Think → Act → Observe → Iterate
- How an AI agent can generate, run, and improve code autonomously
- What "vibe coding" feels like — you describe, the AI builds

## Before You Start

Open the **GitHub Copilot side panel** in **Agent mode** (look for the Agent toggle in the Copilot chat panel).

> **Tech notes (for Copilot context):** This is a Vite + React project. Edit files in `src/`. Run `pnpm dev` (or `npm run dev`) on port 5173 with `--host 0.0.0.0`. Keep the UI clean and modern with inline styles.

---

## Step 1 — Set Up & Build the App

Copy and paste this into Copilot chat:

```
Install the dependencies for lab1-web-app (use pnpm install), then modify src/App.jsx to create a clean, modern todo app where I can add tasks, mark them complete, and delete them. Start the dev server when done. Explain what you're building before you start.
```

✅ **You should see:** A working todo app in your browser (port 5173).

## Step 2 — Iterate Together

Pick one of these prompts (or write your own) and paste it:

```
Add a dark mode toggle to the todo app. Make it look professional.
```

```
Add a priority field with color coding (high = red, medium = yellow, low = green).
```

```
Make the app look more professional — better fonts, spacing, and a header.
```

✅ **You should see:** The app update live in your browser after each change.

💡 **Try 2-3 rounds** of changes. Each time, check the browser — it updates automatically.

## Step 3 — Your Own Feature

Now it's your turn. Think about an app you use daily — what's one feature you'd add?

```
Add [describe your feature here] to the todo app.
```

## Step 4 — The Aha Moment

Reflect on what just happened:
- You built a **working web app** without writing a single line of code
- You described what you wanted, Copilot wrote the code, you saw the result, and you iterated
- That's the **ReAct loop**: Think → Act → Observe → Iterate
- This is exactly what AI agents do autonomously — the same loop, at machine speed

## Debrief

Discuss with your neighbor or think about:
1. What surprised you about this experience?
2. When did Copilot get it right on the first try? When did it need your guidance?
3. How does this change who can build software?

---

✅ **Done!** You just vibe-coded a web app. Next up: [Lab 2 — AI Data Analysis](../lab2-skills/README.md)
