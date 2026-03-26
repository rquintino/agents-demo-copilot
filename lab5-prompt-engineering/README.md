# Lab 5 — How These Labs Were Built

⏱ **10 min** · Prompt files, reusable guided experiences, meta learning

> Go behind the curtain. Every lab you've done today was powered by a **prompt file** — a plain text recipe that told Copilot how to guide you step by step. You'll see those files, understand the pattern, and create your own guided experience that anyone on your team can use.

## What You'll Learn

- What **prompt files** are and how they power guided experiences
- The reusable pattern: YAML header + rules + steps = an AI-guided workflow
- How to create your own guided experience for your team

## Before You Start

Open the **GitHub Copilot side panel** in **Agent mode**.

---

## Step 1 — The Big Reveal

Every lab today was guided by a prompt file in `.github/prompts/`. When you type a slash command like `/lab1`, Copilot reads the matching file and follows its instructions step by step.

Copy and paste this into Copilot chat:

```
Open .github/prompts/lab1.prompt.md and walk me through it. Point out the YAML header, the "How to Guide" section with tone rules, and the step-by-step instructions. Explain how this file guided the Lab 1 experience.
```

✅ **You should see:** The prompt file that powered Lab 1 — it's just a text file with instructions.

## Step 2 — Spot the Pattern

```
Now open .github/prompts/lab3.prompt.md and compare it with lab1.prompt.md. What's the same structure? What's different? Show me the pattern that all prompt files share.
```

✅ **Key pattern:** Same structure (welcome → steps → wrap-up), different content. The pattern is reusable.

## Step 3 — See All the Prompt Files

```
List all the prompt files in .github/prompts/ and give me a one-liner for each. Then point out that lab5.prompt.md is the meta one — it's the file that would guide this very experience.
```

**The prompt files:**
| File | Purpose |
|------|---------|
| `setup-check.prompt.md` | Verifies environment and installs dependencies |
| `lab1.prompt.md` | Guides building a web app |
| `lab2.prompt.md` | Guides data analysis + skills reveal |
| `lab3.prompt.md` | Guides building MCP tools |
| `lab4.prompt.md` | Guides browser automation |
| `lab5.prompt.md` | This very lab (meta! 🤯) |

## Step 4 — Create Your Own Prompt

Think about a guided experience useful for your team. Some ideas:
- An **onboarding walkthrough** for new team members
- A **guided quarterly review** using your team's data
- A **step-by-step client proposal builder**
- A **tutorial for a process** specific to your organization

```
Create a new prompt file at .github/prompts/[name].prompt.md for a guided experience about [describe your idea]. Include a YAML header with name and description, a "How to Guide" section with tone rules, 4-5 steps that walk someone through the experience, and a wrap-up section.
```

✅ **You should see:** A new prompt file created. Anyone can now type `/[name]` to get that guided experience.

## Step 5 — Test It (Optional)

Open a new Copilot chat and try your slash command:

```
/[name]
```

## How It All Fits Together

| Layer | What it is | Example |
|-------|-----------|---------|
| **Skills** | Packaged expertise — shapes *how* the AI answers | Sales Analyst skill |
| **Tools (MCP)** | Capabilities — gives the AI *new abilities* | Custom tools, browser |
| **Prompt files** | Guided experiences — shapes *entire workflows* | These labs |

**The punchline:** It's all plain text. Same AI, different behavior — depending on the context you give it. That's **context engineering**.

## Debrief

Discuss with your neighbor or think about:
1. What guided experiences would save the most time in your organization?
2. Who should create these — IT, managers, domain experts? Why?
3. We've now seen skills (Lab 2), tools (Lab 3), and prompt files (this lab). How do they all fit together?

---

✅ **That's a wrap!** You've seen the full picture — from using AI, to giving it skills and tools, to designing entire guided experiences. The building blocks are simple: plain text, clear structure, and the right tools. What you build with them is up to you.
