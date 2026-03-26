# Bonus — AI Data Analysis

⏱ **Self-guided** · Data analysis with AI

> This is a self-guided bonus exercise. Use the sales data and ask Copilot to analyze it — no instructions needed, just curiosity.

## The Data

Sales data is in `data/sales_data.csv` — it contains dates, product categories, regions, units sold, revenue, costs, and sales channels.

## Before You Start

Open the **GitHub Copilot side panel** in **Agent mode**.

> **Tech notes (for Copilot context):** Use Python 3 with pandas and matplotlib. Install via `pip install -r requirements.txt`. Save charts as PNG files in the current directory.

---

## Try These Prompts

Copy any of these into Copilot chat:

**Get an overview:**
```
Load the sales data from lab-bonus-data-analysis/data/sales_data.csv and give me a summary — what does the data look like, key metrics, and any initial observations.
```

**Find anomalies:**
```
Analyze the sales data from lab-bonus-data-analysis/data/sales_data.csv for anomalies. Flag anything unusual — big drops, spikes, or outliers. Present each anomaly as a business alert.
```

**Revenue breakdown:**
```
Create charts showing revenue breakdown by product category and by region using the data in lab-bonus-data-analysis/data/sales_data.csv. Which combinations are performing best and worst?
```

**Trend analysis:**
```
Show me month-over-month trends for each product category in the sales data at lab-bonus-data-analysis/data/sales_data.csv. Which products are growing? Which are declining?
```

**Ask your own question:**
```
Using the sales data at lab-bonus-data-analysis/data/sales_data.csv, [ask any business question you're curious about].
```

---

✅ **Done!** Head back to the [main README](../README.md) for an overview of all labs.
