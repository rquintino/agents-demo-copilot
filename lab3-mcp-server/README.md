# Lab 3 — Build an MCP Server

⏱ **15 min** · MCP protocol, custom tools, agent extensibility

> Give Copilot **new abilities** by building custom tools it can use. You'll explore a starter tool server, add new tools, and watch Copilot discover and use them live. Think of it as building plug-and-play accessories for an AI — using the MCP standard (the "USB for AI tools").

## What You'll Learn

- What **MCP (Model Context Protocol)** is and why it matters
- How to build custom tools that any AI agent can use
- How agents **discover and use tools** autonomously

## Before You Start

Open the **GitHub Copilot side panel** in **Agent mode**.

> **Tech notes (for Copilot context):** Starter FastMCP server in `server.py`. Install via `pip install -r requirements.txt`. Server uses stdio transport. Connected via `.vscode/mcp.json`. Run with `python3 server.py`.

---

## Step 1 — Explore the Starter Server

Copy and paste this into Copilot chat:

```
Open lab3-mcp-server/server.py and explain what it does. Walk me through the 3 starter tools (greet, discount calculator, invoice generator) in plain language — what does each one do and when would you use it?
```

✅ **You should see:** A clear explanation of 3 tools already built in the server.

## Step 2 — Add a New Tool

```
Add a new company_lookup tool to lab3-mcp-server/server.py (below the "ADD YOUR OWN TOOLS" comment). It should take a company name and return mock data: name, industry, number of employees, annual revenue, and headquarters. Then install the dependencies from lab3-mcp-server/requirements.txt.
```

✅ **You should see:** A new tool added to the server file.

## Step 3 — Test the Tools

Now test the tools by asking Copilot to use them. Try these one at a time:

```
Say hello to [your name]
```

```
What do you know about Acme Corp?
```

```
Calculate a 20% discount on 500 euros
```

```
Generate me an invoice number
```

✅ **You should see:** Copilot calling the MCP tools and returning results.

💡 **Notice:** You didn't tell Copilot *which* tool to use — it figured that out by itself. That's the agent deciding when and how to use its tools.

## Step 4 — Create Your Own Tool

Think about what tool would be useful in your work. Some ideas:

- A **currency converter** (convert between EUR, USD, GBP)
- A **meeting cost calculator** (number of people × hourly rate × duration)
- A **project status reporter** (returns mock project status)
- An **email subject line generator** (takes a topic, returns 3 options)

```
Add a new tool to lab3-mcp-server/server.py that [describe your tool here]. Then test it by asking me to use it.
```

## Step 5 — How It All Connects

```
Show me .vscode/mcp.json and explain how Copilot knows about the MCP server. How does the connection between Copilot and the tools work?
```

**Key takeaways:**
- MCP is a **standard protocol** — build once, use with any AI agent
- Tools are **discovered automatically** — the agent reads what's available
- This is how organizations connect AI to internal systems (CRMs, databases, ERPs)

## Debrief

Discuss with your neighbor or think about:
1. What tools would be most useful for AI agents in your organization?
2. What are the risks of giving an agent access to real business tools? How would you add guardrails?
3. Traditional software needs someone to click a button. Here, the AI decided *when* to use the tool. What does that change?

---

✅ **Done!** You've extended an AI agent's capabilities with custom tools. Next up: [Lab 4 — Give Copilot a Browser](../lab4-playwright-mcp/README.md)
