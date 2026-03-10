# Lab 4 — AI Data Analysis (10 min)

## Objective

Use Copilot to **analyze a sales dataset** — just by asking questions in plain English.

## What You'll See

- An AI agent writing and running analysis code for you
- How agents handle errors and self-correct
- The ReAct loop: ask → code → run → observe → refine

## Steps

### 1. Explore the Data

Open Copilot Chat (Agent mode) and paste:

```
Load the sales data from lab4-data-analysis/data/sales_data.csv and give me a summary. What columns are there? What are the key statistics?
```

Copilot will write Python code, run it, and show you the results.

### 2. Ask a Business Question

```
Which product category has the highest growth rate month over month? Show me a chart.
```

Watch Copilot generate the analysis and a visualization.

### 3. Find the Anomaly

There's an intentional error hidden in the data. Ask Copilot to find it:

```
Are there any anomalies or outliers in this data? Anything that looks unusual?
```

*(Hint: look at May, South region, Electronics — only 5 units sold vs. the usual 85-110.)*

### 4. Get an Executive Summary

```
Create an executive summary of this data with key findings, trends, and recommendations. Format it for a leadership audience.
```

### 5. Bonus: Create a Dashboard

If you have time:

```
Create a dashboard with 4 charts: revenue by category, monthly trend, regional comparison, and profit margins. Save it as dashboard.png.
```

## The Pattern to Notice

Watch what happens when something goes wrong — a missing library, a column name error, unexpected data. Copilot **sees the error, diagnoses it, and fixes it**. This error-recovery cycle is exactly what autonomous agents do.

## Debrief

- Did Copilot catch the anomaly? How would you use this for real business data?
- What happened when the code didn't work the first time?
- Would you trust an AI agent to do this analysis unsupervised? What guardrails would you want?
