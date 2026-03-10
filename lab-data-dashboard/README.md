# Lab — AI Data Analysis: React Dashboard

This lab contains sales data in `data/sales_data.csv`.

Copilot will create a **rich React dashboard** that visualizes the data with interactive charts, KPI cards, anomaly detection, and a full data table — all without the student writing a single line of code.

The lab uses **Recharts** for charts and **Vite + React** for the web app.

## Running the Dashboard

```bash
cd lab-data-dashboard
pnpm install
pnpm dev
```

Then open http://localhost:5173 in your browser.

## What's Inside

- 📊 **KPI Cards** — Total revenue, units, profit, top category
- ⚠️ **Anomaly Alert** — Auto-detected drop in South Electronics (May)
- 📉 **Revenue Trend** — Area chart by category over H1 2025
- 🍩 **Revenue Share** — Donut chart by product category
- 🗺️ **Regional Comparison** — North vs South bar chart
- 📊 **Category Growth** — Jan → Jun growth bars
- 💹 **Margin Analysis** — Revenue vs cost vs profit per category
- 📋 **Data Table** — All 36 records with anomaly highlighting

## Extending the Dashboard

Ask Copilot to:
- Add a date range filter
- Add a channel (Online vs Retail) breakdown
- Export the data as CSV or PDF
- Add a forecast chart using linear regression
