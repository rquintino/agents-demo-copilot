# Lab 2 — AI Data Analysis + Skills

⏱ **10 min** · Data analysis, skills as packaged expertise

> Analyze real sales data **just by asking questions in plain English**. Copilot will write the code, run the analysis, and create charts — you focus on the business insights. There's a hidden anomaly in the data. Can AI find it? Along the way, you'll discover how a "skill" file shapes the AI's behavior behind the scenes.

## What You'll Learn

- How an AI agent can analyze data and create charts autonomously
- What a **skill file** is and how it shapes AI behavior
- Anomaly detection — finding needles in haystacks

## Before You Start

Open the **GitHub Copilot side panel** in **Agent mode**.

> **Tech notes (for Copilot context):** This lab uses `data/sales_data.csv`. Use Python 3 with pandas, matplotlib, jupyter. Install via `pip install -r lab2-skills/requirements.txt`. Follow the Sales Analyst skill in `.github/skills/sales-analyst/SKILL.md` for methodology (Jupyter notebooks, output format, anomaly rules).

---

## Step 1 — Set Up and Explore the Data

Copy and paste this into Copilot chat:

```
Install the dependencies from lab2-skills/requirements.txt, then create a Jupyter notebook at lab2-skills/analysis.ipynb. Load the sales data from lab2-skills/data/sales_data.csv and give me an overview — what does the data contain, how many rows, what are the key columns? Show me some headline numbers.
```

✅ **You should see:** A notebook created with a data overview and summary stats.

## Step 2 — Answer a Business Question

```
In the analysis notebook, find out which product category is growing fastest. Show me a chart and present the finding as: Key Finding (one sentence), Supporting Data (2-3 data points), and Recommendation (what to do about it).
```

✅ **You should see:** A clear analysis with a chart and structured business insight.

💡 **Notice the structured format?** There's a reason for that — we'll reveal it in Step 5.

## Step 3 — Find the Anomaly

```
Check the sales data for anomalies — flag anything where units sold deviates more than 50% from the category/region average, or where there's a month-over-month change greater than 40%. Present any anomaly as a business alert with severity and possible explanations.
```

✅ **You should see:** The anomaly flagged — **May, South region, Electronics: only 5 units sold** (vs. normal 85-110).

## Step 4 — Executive Summary

```
Add an executive summary section to the notebook — present the key findings, anomaly flags, and recommendations ready for a leadership audience. Make it look professional.
```

## Step 5 — Peek Behind the Curtain 🎭

Here's the reveal: everything Copilot just did — the Jupyter notebook, the structured answers, the anomaly check — was guided by a **skill file**.

Open this file to see it yourself: [`.github/skills/sales-analyst/SKILL.md`](../.github/skills/sales-analyst/SKILL.md)

```
Open .github/skills/sales-analyst/SKILL.md and walk me through it. How did this file influence the way you did the analysis? Also show me .github/copilot-instructions.md and explain how skills get loaded.
```

**Key takeaways:**
- The skill file told Copilot to use Jupyter notebooks
- It defined the output format: Key Finding → Data → Recommendation
- It set the anomaly rules (flag >50% deviation)
- **It's just plain text** — change the file, change the behavior

## Debrief

Discuss with your neighbor or think about:
1. Would you trust an AI to do this analysis unsupervised? What checks would you want?
2. What data from your own work would you want to analyze like this?
3. Who in your organization should write the skill files that shape how AI behaves?

---

✅ **Done!** You saw AI as a data analyst — and discovered the skill file pulling the strings. Next up: [Lab 3 — Build an MCP Server](../lab3-mcp-server/README.md)
