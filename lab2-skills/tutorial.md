# Lab 2 — Create Agent Skills (10 min)

## Objective

See how you can give an AI agent **permanent expertise** — and create your own custom skill.

## What You'll See

- How "skills" make an agent behave like a domain expert
- The difference between a one-off prompt and packaged expertise
- How teams can share and reuse AI skills

## Background

A "skill" is a set of instructions stored in the project that Copilot **always follows**. Think of it as hiring a specialist — instead of explaining what you need every time, the agent already knows the domain.

This project comes with two pre-built skills: a **Sales Analyst** and a **Course Assistant**.

## Steps

### 1. See the Skills in Action

Open Copilot Chat (Agent mode) and paste:

```
Analyze our Q3 performance and suggest improvements
```

Notice the structured response — Key Finding, Supporting Data, Recommendation. That's the Sales Analyst skill at work.

Now try:

```
Explain the ReAct loop and why it matters for business
```

Notice the teaching style changes — questions, analogies, business framing. That's the Course Assistant skill.

### 2. Peek Behind the Curtain

Open the file `.github/copilot-instructions.md` — this is where the skills are defined. It's just plain text telling Copilot how to behave.

Also browse `.github/skills/` to see the full skill definitions.

### 3. Create Your Own Skill

Ask Copilot to create a new skill for you:

```
Create a new skill file at .github/skills/email-drafter/SKILL.md for writing professional business emails.
It should ask for the audience, key message, and tone, then produce a well-structured email.
Also add a reference to it in .github/copilot-instructions.md.
```

### 4. Test Your New Skill

```
Draft an email to the board summarizing our AI adoption progress
```

Does the response follow your skill's format?

## Key Insight

Skills are **packaged expertise**. Instead of writing the perfect prompt every time, you encode knowledge once and reuse it across your team. This is how organizations scale AI — by building a library of skills.

## Debrief

- What skills would be most valuable for your team?
- How could you share and version-control skills across departments?
- What's the difference between a skill and just telling the AI what to do each time?
