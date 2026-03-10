# Lab — AI Data Analysis: React Dashboard

## Overview

Analyze real sales data and watch Copilot build you a **rich, interactive React dashboard** — instead of a Jupyter notebook. Same data, same analysis, completely different output. At the end you'll have a shareable web app.

## How to Start

In the GitHub Copilot side panel (Agent mode), type:

```
/lab-data-dashboard
```

Copilot will guide you through everything step by step.

## What You'll Build

A production-quality dashboard with:
- **KPI cards** — Revenue, units, profit, margin %
- **Interactive charts** — Line, bar, area, pie (using Recharts)
- **Anomaly detection** — The hidden data drop is highlighted automatically
- **Data table** — All 36 records with colour-coded anomaly rows
- **Margin scorecard** — Per-category profitability breakdown

## Skills Used

- Vite + React (same stack as Lab 1)
- Recharts for data visualization
- Inline JavaScript data module (no backend needed)
- CSS-in-JS styling with a dark theme

## Running the App

```bash
cd lab-data-dashboard
pnpm install   # first time only
pnpm dev       # open http://localhost:5173
```
