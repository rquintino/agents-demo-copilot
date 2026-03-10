# Lab 2 — Create Agent Skills (10 min)

## Objective

Learn how GitHub Copilot uses **custom instructions** to gain domain expertise — and create your own.

## What You'll Learn

- How custom instructions shape Copilot's behavior (like giving it a "skill")
- The difference between a generic prompt and packaged expertise
- How to create reusable prompt files for your team

## Background: How Copilot Custom Instructions Work

GitHub Copilot supports two mechanisms for "skills":

1. **Custom Instructions** (`.github/copilot-instructions.md`) — Always loaded for the repo. Think of it as the agent's permanent knowledge.
2. **Prompt Files** (`.github/prompts/*.prompt.md`) — Reusable prompt templates you can invoke on demand. Think of these as skills you activate when needed.

## Steps

### 1. Read the Pre-Built Skills

Explore the skills already defined in this repo:

- Open `.github/copilot-instructions.md` — these are **custom instructions** that Copilot always loads for this repo. You'll see a Sales Analyst and a Course Assistant skill defined there.
- Open `.github/skills/sales-analyst/SKILL.md` and `.github/skills/course-assistant/SKILL.md` — these are the detailed skill definitions.

### 2. See the Skill in Action

Open Copilot Chat and try this prompt:

```
Analyze our Q3 performance and suggest improvements
```

Notice how Copilot responds with structured analysis (Key Finding → Supporting Data → Recommendation). That's the Sales Analyst skill activating from the custom instructions.

Now try:

```
Explain the ReAct loop and why it matters for business
```

Notice the Socratic style and business framing — that's the Course Assistant skill.

### 3. Create Your Own Skill

Ask Copilot to help you create a new skill. For example:

```
Create a new skill file at .github/skills/email-drafter/SKILL.md that writes professional business emails.
It should ask for the audience, key message, and tone, then produce a well-structured email.
```

Then add a reference to it in `.github/copilot-instructions.md` so Copilot picks it up.

### 4. Test Your New Skill

In Copilot Chat, try:

```
Draft an email to the board summarizing our AI adoption progress
```

## Key Insight

Skills are **packaged expertise**. Instead of writing long prompts every time, you encode knowledge once and reuse it. This is how teams scale AI — by building a library of skills.

## Debrief Questions

- How is a custom instruction different from a one-off system prompt? When would you use each?
- What skills would be most valuable for your team to package?
- How might you version-control and share skills across your organization?
