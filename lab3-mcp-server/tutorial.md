# Lab 3 — Build an MCP Server (15 min)

## Objective

Give Copilot **new abilities** by building custom tools it can use — using the MCP (Model Context Protocol) standard.

## What You'll See

- How to extend what an AI agent can do
- How the **MCP protocol** works (think of it as USB for AI tools)
- An agent discovering and using tools you created

## Background: What is MCP?

**MCP** is a universal standard that connects AI agents to tools. Instead of building a different integration for every AI product, you build one MCP server and any compatible agent can use it.

Think of it like **USB** — one standard plug, many devices.

## Steps

### 1. Explore the Starter Server

Open `server.py` in this folder. Don't worry about the code details — ask Copilot to explain it:

```
Explain what this MCP server does in simple terms. What tools does it provide?
```

You'll see it has three tools: a greeting tool, a discount calculator, and an invoice number generator.

### 2. Add a New Tool

Ask Copilot to add a tool for you:

```
Add a new tool called "company_lookup" that takes a company name and returns mock company data including name, industry, number of employees, and annual revenue
```

Review and apply the suggestion.

### 3. Install and Connect

Ask Copilot to get the server running:

```
Install the requirements for lab3-mcp-server and start the server to verify it works
```

The server is already configured to connect to Copilot (see `.vscode/mcp.json`).

### 4. Use Your Tools

Open a **new Copilot Chat** in Agent mode and try:

```
Use the greet tool to say hello to me
```

```
Look up information about Acme Corp
```

```
Calculate a 15% discount on a product that costs 250 euros
```

Watch how Copilot discovers and calls your custom tools automatically.

### 5. Add Your Own Tool (Optional)

Try creating one more tool — pick any idea:

- A currency converter (EUR, USD, GBP)
- A meeting summary generator
- A sentiment analyzer

## Key Insight

MCP is the **universal adapter** for AI tools. Your custom tools become capabilities that any MCP-compatible agent can discover and use. This is how organizations give AI agents access to internal systems — safely and in a standardized way.

## Debrief

- What tools would you want to expose to AI agents in your organization?
- What are the risks of giving an agent access to real business tools?
- How is this different from a traditional API? (Hint: the agent decides *when* to use the tool)
