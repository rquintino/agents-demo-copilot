# Lab 4 — AI Data Analysis (10 min)

## Objective

Use GitHub Copilot to analyze a sales dataset — generating Python code, running it, fixing errors, and iterating.

## What You'll Learn

- How Copilot helps with data analysis workflows
- The ReAct loop in action: generate code → run → observe results → iterate
- How AI agents handle errors and recover

## Prerequisites

- Python 3 with `pandas` and `matplotlib` installed
- If missing: `pip install pandas matplotlib`

## Steps

### 1. Load and Explore the Data

Open Copilot Chat and try:

```
Load and describe the sales data in data/sales_data.csv. Tell me what columns are available and show basic statistics.
```

Copilot will generate Python code. Run it and review the output.

### 2. Analyze Growth Trends

```
Which product category has the highest growth rate month over month? Show me a chart.
```

Copilot should generate pandas code to calculate growth rates and matplotlib code for visualization. Run the code and check the chart.

### 3. Find Anomalies

```
Find any anomalies or outliers in the data. Are there any data points that look unusual?
```

Hint: There's an intentional anomaly in the dataset (look at May South Electronics — only 5 units sold vs. the usual 85-110). See if Copilot catches it.

### 4. Generate a Business Summary

```
Create an executive summary of this data with key findings, trends, and recommendations. Format it nicely.
```

### 5. Bonus: Create a Dashboard

If you have time:

```
Create a comprehensive dashboard with 4 charts: revenue by category, monthly trend, regional comparison, and profit margins. Save it as dashboard.png.
```

## Watch the ReAct Loop

Pay attention to what happens when code doesn't work on the first try:

1. Copilot **generates** analysis code
2. You **run** it and get an error (or unexpected output)
3. Copilot **observes** the error and suggests a fix
4. You **iterate** until the analysis is correct

This error-recovery cycle is exactly what autonomous agents do.

## Debrief Questions

- How did Copilot handle errors in the analysis? Did it self-correct?
- Did you catch the anomaly in the data? How would an agent flag this automatically?
- How does the iterative coding loop relate to the ReAct pattern?
