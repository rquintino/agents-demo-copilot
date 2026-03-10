# Lab 3 — Build an MCP Server (15 min)

## Objective

Build a custom **MCP (Model Context Protocol)** tool server and connect it to GitHub Copilot in VS Code.

## What You'll Learn

- What MCP is and why it matters for AI agents
- How to create tools that any MCP-compatible agent can use
- How to connect custom tools to GitHub Copilot in VS Code

## Background: What is MCP?

**MCP** is the universal adapter between AI agents and tools. Instead of building custom integrations for each agent, you build one MCP server and any compatible agent can use it.

Think of it like USB — one standard connector, many devices.

## Prerequisites

- Python 3.10+
- The `fastmcp` package (`pip install fastmcp`)

## Steps

### 1. Read the Starter Server

Open `server.py` in this folder. You'll see three pre-built tools:

- `greet` — A simple hello world to verify the connection
- `calculate_discount` — Calculates prices after discount
- `generate_invoice_number` — Creates unique invoice numbers

Ask Copilot to explain the code:

```
Explain how this MCP server works and what each tool does
```

### 2. Add a New Tool

Ask Copilot to help you add a new tool:

```
Add a new tool called "company_lookup" that takes a company name and returns mock company data including name, industry, employees, and annual revenue
```

Apply the suggestion. It should appear below the `# ADD YOUR OWN TOOLS` comment.

### 3. Add Another Tool (Your Choice)

Try adding one more tool. Ideas:

- `currency_convert` — Convert between EUR, USD, GBP
- `sentiment_analyze` — Analyze text sentiment (positive/negative/neutral)
- `meeting_summary` — Generate a structured meeting summary from notes

### 4. Install Dependencies and Test the Server

```bash
pip install -r requirements.txt
python3 server.py
```

The server runs on stdio transport (standard input/output), which is what VS Code expects.

### 5. Connect to GitHub Copilot

The MCP server is already configured in `.vscode/mcp.json` at the project root. This tells VS Code to start your server and make its tools available to Copilot.

To verify it works, open Copilot Chat in **Agent mode** (select "Agent" from the mode dropdown) and try:

```
Use the greet tool to say hello to me
```

You should see Copilot discover and call your MCP tool.

### 6. Use Your Custom Tools

Now try prompts that use your new tools:

```
Look up information about Acme Corp
Calculate a 15% discount on a product that costs 250 euros
Generate an invoice number for a new order
```

## Key Insight

MCP is the **universal adapter** for AI tools. Build once, use with any agent. Your custom tools become first-class capabilities that Copilot (or any MCP client) can discover and use autonomously.

## Debrief Questions

- What happens if the MCP server crashes or returns an error? How should agents handle tool failures?
- What real tools would you want to expose via MCP in your organization?
- How does MCP relate to the ReAct loop? (Hint: tools are what the agent "acts" with)
