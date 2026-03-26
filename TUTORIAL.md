# GenAI & AI Agents — Session 3 Labs

## Welcome

Welcome to the hands-on labs for **Session 3: Agents, Tools & the ReAct Loop**.

You'll use **GitHub Copilot** — an AI coding assistant — to explore how agents think, act, and extend their capabilities.

**Time:** ~55 minutes across 5 micro-labs

## How It Works

Each lab has a **README with step-by-step instructions and copy-paste prompts**. Open the README, follow the steps, and paste each prompt into the Copilot chat when you're ready.

No coding experience needed. Copilot does all the technical work.

## Key Concepts

```
You (plain English) → Agent (AI that acts) → Skills (packaged expertise) → Tools (MCP) → World (browser, data, APIs)
```

| Concept | One-liner |
|---------|-----------|
| **Agent** | An AI that doesn't just answer — it takes action (writes code, runs analysis, browses the web) |
| **ReAct Loop** | Think → Act → Observe → Repeat. How agents solve problems step by step |
| **Skill** | A text file that gives an agent permanent expertise — like a job description |
| **MCP** | A universal standard that connects agents to tools — like USB for AI |
| **Prompt File** | A recipe that guides an agent through a step-by-step experience (like these labs!) |

## Before You Start (~2 min)

Open the **GitHub Copilot side panel** in **Agent mode** and paste this to check your environment:

```
Check my environment: run python3 --version, node --version, pnpm --version (or npm --version), and pip --version. Then install dependencies: pip install -r lab2-skills/requirements.txt && pip install -r lab3-mcp-server/requirements.txt && cd lab1-web-app && pnpm install. Report pass/fail for each.
```

Once everything passes, you're ready to go.

## Lab 1 — Vibe-Code a Web App (10 min)

Build a working web app without writing any code — just by describing what you want.

> 📖 Open [`lab1-web-app/README.md`](lab1-web-app/README.md) and follow the steps.

## Lab 2 — AI Data Analysis (10 min)

Analyze sales data by asking questions in plain English. Find the hidden anomaly.

> 📖 Open [`lab2-skills/README.md`](lab2-skills/README.md) and follow the steps.

## Lab 3 — Build an MCP Server (15 min)

Build custom tools that Copilot can discover and use — the "USB for AI tools."

> 📖 Open [`lab3-mcp-server/README.md`](lab3-mcp-server/README.md) and follow the steps.

## Lab 4 — Give Copilot a Browser (10 min)

Let Copilot browse the web, click buttons, and extract live information.

> 📖 Open [`lab4-playwright-mcp/README.md`](lab4-playwright-mcp/README.md) and follow the steps.

## Lab 5 — How These Labs Were Built (10 min)

Go behind the curtain — see the prompt files that power these labs and create your own.

> 📖 Open [`lab5-prompt-engineering/README.md`](lab5-prompt-engineering/README.md) and follow the steps.

## Wrap-Up

Congratulations! You've experienced the full agent stack:

| Lab | What you saw |
|-----|-------------|
| Lab 1 | Agent as **builder** — code generation + live preview |
| Lab 2 | Agent as **analyst** — data analysis, skills, error recovery |
| Lab 3 | Agent with **custom tools** — MCP protocol, extensibility |
| Lab 4 | Agent with **browser** — web automation, live information |
| Lab 5 | Agent as **guide** — prompt files, reusable experiences |

**The punchline:** Same model for everyone. Your competitive edge = **context engineering** + **tools & skills**.

---

*GenAI & AI Agents · March 2026*
