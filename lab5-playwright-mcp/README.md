# Lab 5 — Playwright MCP: Give Copilot a Browser

Use the **Playwright MCP server** to let GitHub Copilot browse the web, take screenshots, click buttons, and fill forms — all from chat.

## Prerequisites

- Node.js 18+
- GitHub Copilot in Agent mode

## Setup

No manual install needed. The MCP server is configured in `.vscode/mcp.json` and runs via `npx` automatically.

In Codespaces the server runs **headless** (no visible browser window) — Copilot sees the page through accessibility snapshots and screenshots.

## Quick Test

Open Copilot Chat in **Agent mode** and try:

```
Navigate to https://example.com and tell me what's on the page
```

You should see Copilot call Playwright tools like `browser_navigate` and `browser_snapshot`.
