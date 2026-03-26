# Lab 4 — Give Copilot a Browser

⏱ **10 min** · Pre-built MCP servers, browser automation, live information

> Give Copilot a **web browser** so it can open websites, click buttons, fill forms, and extract live information — all while chatting with you. No code needed — you'll use a ready-made MCP tool (Playwright) and watch the AI browse the web in real time.

## What You'll Learn

- How **pre-built MCP servers** extend AI capabilities instantly
- Browser automation — an agent that can see and interact with the web
- The difference between custom tools (Lab 3) and ready-made tools

## Before You Start

Open the **GitHub Copilot side panel** in **Agent mode**.

> **Tech notes (for Copilot context):** Playwright MCP is configured in `.vscode/mcp.json` and runs via `npx @playwright/mcp@latest --headless`. No manual install needed. In Codespaces, the server runs headless (no visible browser window).

---

## Step 1 — First Browse

Copy and paste this into Copilot chat:

```
Navigate to https://example.com and tell me what's on the page. Use the browser (Playwright) tools.
```

✅ **You should see:** Copilot describing the contents of example.com — it just browsed the web!

💡 **What happened:** Copilot opened a real (headless) browser, loaded the page, and read its contents — all through MCP, the same standard from Lab 3.

## Step 2 — Interactive Browsing

```
Navigate to https://en.wikipedia.org, find the search box, search for "Model Context Protocol", and tell me what you find.
```

✅ **You should see:** Copilot navigating Wikipedia, searching, and reporting results.

💡 **Notice the ReAct loop:** Navigate → observe the page → find the search box → type → click search → read results → report back.

## Step 3 — Real-Time Information

```
Navigate to https://news.ycombinator.com and tell me the top 5 stories right now.
```

✅ **You should see:** Live headlines from Hacker News — not memorized data, but the actual current page.

## Step 4 — Test Your Lab 1 App (Optional)

If you completed Lab 1 and the dev server is still running:

```
Navigate to http://localhost:5173 and describe what you see. Suggest one improvement to the app.
```

💡 **Why this matters:** The agent can now **see its own work** — this is how agents verify and test what they build.

## Step 5 — Your Own Task

Pick a website and give Copilot a task. Some ideas:

```
Go to https://httpbin.org/forms/post and fill out the form with test data.
```

```
Visit [any news site] and summarize the top headlines.
```

```
Navigate to [any public website] and tell me what services they offer.
```

## How It Works

The browser capability comes from one line in `.vscode/mcp.json`:

```json
"playwright": {
  "type": "stdio",
  "command": "npx",
  "args": ["@playwright/mcp@latest", "--headless"]
}
```

That's it. Someone built the browser tool, published it, and now any AI agent can use it — like installing an app on your phone. Combined with custom tools (Lab 3) and skills (Lab 2), you can build agents that reason, use internal tools, *and* work with the web.

## Debrief

Discuss with your neighbor or think about:
1. How does giving an agent a browser change what tasks you'd delegate to it?
2. What are the risks of an agent browsing autonomously? What guardrails would you add?
3. Should an AI agent be able to click "Submit" on a real form? How does this relate to human oversight (EU AI Act Article 14)?

---

✅ **Done!** You've seen the full agent stack — skills, custom tools, and web browsing. Next up: [Lab 5 — How These Labs Were Built](../lab5-prompt-engineering/README.md)
