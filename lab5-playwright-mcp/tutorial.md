# Lab 5 — Give Copilot a Browser (10 min)

## Objective

Let Copilot **browse the web** — navigate pages, click buttons, fill forms, and extract information — using the Playwright MCP server.

## What You'll See

- An AI agent controlling a real web browser
- How pre-built MCP servers add powerful capabilities with zero code
- The ReAct loop in action: navigate → observe → interact → observe again

## Background

In Lab 3 you built custom tools from scratch. But the MCP ecosystem also has **ready-made tools** you can plug in. Playwright MCP gives any agent full browser control — no coding required.

The browser runs in the background (headless). Copilot "sees" the page as a structured description of what's on screen.

## Steps

### 1. Browse a Web Page

The Playwright MCP server is already configured. Open Copilot Chat in **Agent** mode and try:

```
Navigate to https://example.com and describe what you see on the page
```

Watch the tool calls — Copilot opens a browser, loads the page, and reads its contents.

### 2. Interact with a Website

Now try something that requires multiple steps:

```
Go to https://en.wikipedia.org and search for "Model Context Protocol". Tell me the first paragraph of the article if it exists.
```

Notice how Copilot chains actions: navigate → read page → click search → type → read results. Each observation drives the next action.

### 3. Extract Real-Time Information

```
Go to https://news.ycombinator.com and tell me the top 5 stories right now
```

This is live data — the agent is reading the actual website, not using training data.

### 4. Test Your Lab 1 App (Optional)

If your Lab 1 web app is still running, ask Copilot to look at it:

```
Navigate to http://localhost:5173 and take a screenshot. Describe what you see and suggest one improvement.
```

The agent can now **see its own work** and give visual feedback.

### 5. Try Your Own Task

Pick any public website and ask Copilot to interact with it:

- `Go to https://httpbin.org/forms/post and fill out the form with test data, then submit it`
- `Navigate to [any website] and tell me how many links are on the page`
- `Go to https://jsonplaceholder.typicode.com and find out what API endpoints are available`

## Key Insight

Pre-built MCP servers like Playwright give agents **new superpowers without writing code**. Combined with custom tools (Lab 3) and skills (Lab 2), you can build agents that reason, use internal tools, *and* interact with the web — closing the gap between what humans and AI can do.

## Debrief

- How does giving an agent a browser change what tasks you'd delegate to it?
- What are the risks of an agent browsing autonomously? What guardrails would you add?
- Should an AI agent be able to click "Submit" on a real form? How does this relate to human oversight?
