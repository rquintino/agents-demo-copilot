# Lab 5 — Playwright MCP: Give Copilot a Browser (10 min)

## Objective

Connect the **Playwright MCP server** to GitHub Copilot so it can browse the web, interact with pages, and take screenshots — turning it into a web-aware agent.

## What You'll Learn

- How to use a **pre-built MCP server** (vs. building your own in Lab 3)
- How agents interact with live web pages through tools
- The difference between "reading code" and "seeing the running app"

## Background: Why Give an Agent a Browser?

In Lab 3 you built custom MCP tools from scratch. But the MCP ecosystem also has **ready-made servers** for common capabilities. Playwright MCP is one of the most powerful — it gives any MCP-compatible agent full browser control.

This matters because agents can now:
- **Verify** their own work by looking at the running app
- **Test** web pages by clicking, typing, and asserting
- **Extract** information from live websites
- **Automate** repetitive browser workflows

## Prerequisites

- Node.js 18+ (pre-installed in Codespaces)
- GitHub Copilot in Agent mode

## Steps

### 1. Check the MCP Configuration

Open `.vscode/mcp.json` at the project root. You'll see that `playwright` is already registered:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest", "--headless"]
    }
  }
}
```

The `--headless` flag is essential for Codespaces — there's no display, so the browser runs in the background. Copilot "sees" pages through **accessibility snapshots** (a structured text representation of the page).

### 2. Take Your First Browse

Open Copilot Chat, select **Agent** mode, and try:

```
Navigate to https://example.com and describe what you see
```

Watch the tool calls — Copilot will use `browser_navigate` to open the page and `browser_snapshot` to read its contents.

### 3. Interact with a Web Page

Now try something interactive. Ask Copilot to use a search engine:

```
Go to https://en.wikipedia.org and search for "Model Context Protocol".
Tell me the first paragraph of the article if it exists.
```

Notice how Copilot chains multiple tools: navigate, snapshot, click, type, snapshot again. This is the **ReAct loop in action** — each observation drives the next action.

### 4. Test Your Lab 1 Web App (Optional)

If you completed Lab 1 and have the dev server running (`pnpm dev` in `lab1-web-app`), ask Copilot to inspect it:

```
Navigate to http://localhost:5173 and take a screenshot.
Describe the current state of the web app and suggest one UI improvement.
```

This is powerful — the agent can now **see its own work** and give visual feedback.

### 5. Automate a Browser Workflow

Ask Copilot to perform a multi-step workflow:

```
Go to https://jsonplaceholder.typicode.com.
Find the list of available endpoints, then navigate to the /users endpoint
and tell me how many users are listed.
```

### 6. Explore Available Tools

Ask Copilot what browser tools are available:

```
What Playwright MCP tools do you have available? List them with a brief description.
```

Common tools include:
- `browser_navigate` — Go to a URL
- `browser_snapshot` — Get accessibility tree of the page
- `browser_screenshot` — Capture a visual screenshot
- `browser_click` — Click an element
- `browser_type` — Type text into an input
- `browser_select_option` — Select from a dropdown
- `browser_go_back` / `browser_go_forward` — Navigation history

### 7. Your Challenge: Build a Web Check

Come up with your own browser task. Ideas:

- **Status checker:** "Navigate to [any public URL] and tell me if it's up, what the page title is, and how many links are on the page"
- **Form tester:** "Go to https://httpbin.org/forms/post and fill out the form with test data, then submit it"
- **Content extractor:** "Go to https://news.ycombinator.com and tell me the top 5 stories right now"

## Key Insight

Pre-built MCP servers like Playwright turn your agent into a **web-capable autonomous system** — no custom code required. Combined with the custom tools from Lab 3, you can build agents that both call APIs *and* interact with UIs, closing the gap between what humans and agents can do.

## Debrief Questions

- How does giving an agent a browser change what tasks you'd delegate to it?
- What are the risks of letting an agent browse autonomously? How would you add guardrails?
- Lab 3 was "build your own tools" — this lab is "use existing tools." When would you choose each approach?
- How does this relate to **EU AI Act Article 14** (human oversight)? Should an agent be able to click "Submit" on a real form?
