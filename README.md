# GenAI & AI Agents — Session 3: Agents Lab Kit

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue)](https://vscode.dev/github/YOUR_USERNAME/agents-demo)

> **One-click setup.** Open in VS Code → install extensions → labs ready.

## What's Inside

| Lab | Topic | Time | S3 Concept |
|-----|-------|------|------------|
| [**Lab 1**](lab1-web-app/README.md) | Vibe-code a web app | 10 min | Agent loop, tool use, code generation |
| [**Lab 2**](lab2-skills/README.md) | AI data analysis + skills | 10 min | Data analysis, skills as packaged expertise |
| [**Lab 3**](lab3-mcp-server/README.md) | Build your own MCP server | 15 min | MCP protocol, custom tools, agent extensibility |
| [**Lab 4**](lab4-playwright-mcp/README.md) | Give Copilot a browser (Playwright MCP) | 10 min | Pre-built MCP servers, browser automation |
| [**Lab 5**](lab5-prompt-engineering/README.md) | How these labs were built | 10 min | Prompt files, reusable guided experiences |
| [**Bonus**](lab-bonus-data-analysis/README.md) | Self-guided data analysis | Flex | Data analysis with AI |

## How to Start

Each lab has its own **README** with step-by-step instructions and **copy-paste prompts** you can use directly in Copilot chat.

1. Open the **GitHub Copilot side panel** in **Agent mode**
2. Open a lab's README (e.g., [`lab1-web-app/README.md`](lab1-web-app/README.md))
3. Follow the steps — copy each prompt into Copilot chat when ready

> 💡 **Tip:** The `.github/prompts/` folder also contains prompt files that power slash commands (`/lab1`, `/lab2`, etc.) in Copilot. If your environment supports them, you can use those instead — but the READMEs give you more control over pacing.

### Quick Setup Check

Before starting, paste this into Copilot chat to verify your environment:

```
Check my environment: run python3 --version, node --version, pnpm --version (or npm --version), and pip --version. Then install dependencies: pip install -r lab2-skills/requirements.txt && pip install -r lab3-mcp-server/requirements.txt && cd lab1-web-app && pnpm install. Report pass/fail for each.
```

## Requirements

- A GitHub account
- VS Code with GitHub Copilot extension

## Privacy Notice

⚠️ GitHub Copilot may use prompts for model training. Use only synthetic data provided.

---

*GenAI & AI Agents — S3 · March 2026*
