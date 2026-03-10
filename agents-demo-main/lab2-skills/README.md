# Lab 2 — Agent Skills

This lab teaches how GitHub Copilot custom instructions and prompt files work.

There is a pre-built skill in `.github/copilot-instructions.md` (repo-level custom instructions).
The student will:
1. Read and understand the existing custom instructions
2. See them activate in Copilot on a relevant prompt
3. Create their own reusable prompt file from scratch

GitHub Copilot supports two mechanisms for "skills":
- **Custom Instructions**: `.github/copilot-instructions.md` — always loaded for the repo
- **Prompt Files**: `.github/prompts/*.prompt.md` — reusable prompt templates invoked on demand

Use Copilot Chat to test how instructions shape agent behavior.
