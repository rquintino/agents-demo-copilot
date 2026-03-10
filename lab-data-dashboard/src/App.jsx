import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import {
  salesData, revenueByMonth, revenueByCategory, revenueByRegion,
  revenueByMonthRegion, marginByCategory,
  totalRevenue, totalUnits, totalProfit, overallMarginPct,
  CATEGORY_COLORS, REGION_COLORS, MONTHS, CATEGORIES
} from './data.js'

// ─── Utility ────────────────────────────────────────────────────────────────

const fmt = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', notation: 'compact', maximumFractionDigits: 1 }).format(n)
const fmtFull = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(n)

// ─── Styles ─────────────────────────────────────────────────────────────────

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#e2e8f0',
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    padding: '1.5rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  headerLeft: {},
  title: { fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc', margin: 0 },
  subtitle: { fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem' },
  badge: {
    background: 'rgba(99,102,241,0.2)',
    color: '#a5b4fc',
    border: '1px solid rgba(99,102,241,0.4)',
    borderRadius: '999px',
    padding: '0.25rem 0.9rem',
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  grid22: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  grid31: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  card: {
    background: 'rgba(30,41,59,0.8)',
    borderRadius: '1rem',
    border: '1px solid rgba(255,255,255,0.07)',
    padding: '1.25rem',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
  },
  kpiCard: {
    background: 'rgba(30,41,59,0.8)',
    borderRadius: '1rem',
    border: '1px solid rgba(255,255,255,0.07)',
    padding: '1.25rem',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s',
  },
  kpiLabel: { fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' },
  kpiValue: { fontSize: '1.8rem', fontWeight: 700, color: '#f8fafc', lineHeight: 1 },
  kpiSub: { fontSize: '0.78rem', color: '#64748b', marginTop: '0.4rem' },
  kpiIcon: { fontSize: '1.4rem', marginBottom: '0.5rem' },
  sectionTitle: { fontSize: '0.95rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  alertCard: {
    background: 'rgba(239,68,68,0.08)',
    borderRadius: '1rem',
    border: '1px solid rgba(239,68,68,0.4)',
    padding: '1.25rem',
    marginBottom: '1.25rem',
  },
  alertTitle: { fontSize: '0.95rem', fontWeight: 700, color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' },
  alertBody: { fontSize: '0.88rem', color: '#fcd34d', lineHeight: 1.6 },
  tableWrapper: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' },
  th: { textAlign: 'left', padding: '0.5rem 0.75rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em' },
  td: { padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#e2e8f0' },
  tdAnomaly: { padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#fca5a5', fontWeight: 700 },
  dot: (color) => ({ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: color, marginRight: 6 }),
  marginBar: (pct, color) => ({
    height: 6,
    borderRadius: 3,
    background: `linear-gradient(90deg, ${color} ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
    marginTop: 4,
  }),
  growthPill: (positive) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
    background: positive ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
    color: positive ? '#6ee7b7' : '#fca5a5',
    borderRadius: '999px',
    padding: '0.15rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: 600,
  }),
}

// ─── Custom Tooltip ──────────────────────────────────────────────────────────

function CustomTooltip({ active, payload, label, prefix = '€' }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '0.75rem 1rem', fontSize: '0.82rem' }}>
      <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: '#f8fafc' }}>{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ margin: '0.2rem 0', color: p.color }}>
          <span style={styles.dot(p.color)} />
          {p.name}: {typeof p.value === 'number' && p.value > 1000 ? fmtFull(p.value) : p.value.toLocaleString()}
        </p>
      ))}
    </div>
  )
}

// ─── KPI Card ────────────────────────────────────────────────────────────────

function KpiCard({ icon, label, value, sub, accent = '#6366f1' }) {
  return (
    <div style={{ ...styles.kpiCard, borderTop: `2px solid ${accent}` }}>
      <div style={styles.kpiIcon}>{icon}</div>
      <div style={styles.kpiLabel}>{label}</div>
      <div style={{ ...styles.kpiValue, color: accent }}>{value}</div>
      {sub && <div style={styles.kpiSub}>{sub}</div>}
    </div>
  )
}

// ─── Growth calculation ──────────────────────────────────────────────────────

function growthJanToJun(cat) {
  const jan = revenueByMonth[0][cat]
  const jun = revenueByMonth[5][cat]
  return Math.round(((jun - jan) / jan) * 100)
}

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function App() {
  const softwareGrowth = growthJanToJun('Software')
  const electronicsGrowth = growthJanToJun('Electronics')
  const furnitureGrowth = growthJanToJun('Furniture')

  return (
    <div style={styles.page}>
      {/* ── Header ── */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>📊 Sales Analytics Dashboard</h1>
          <p style={styles.subtitle}>H1 2025 · Jan–Jun · North &amp; South Regions</p>
        </div>
        <span style={styles.badge}>Live Data</span>
      </header>

      {/* ── KPI Row ── */}
      <div style={styles.grid4}>
        <KpiCard icon="💶" label="Total Revenue" value={fmt(totalRevenue)} sub={`H1 2025 across all categories`} accent="#6366f1" />
        <KpiCard icon="📦" label="Total Units Sold" value={totalUnits.toLocaleString()} sub="All products & regions" accent="#10b981" />
        <KpiCard icon="📈" label="Gross Profit" value={fmt(totalProfit)} sub={`${overallMarginPct}% overall margin`} accent="#f59e0b" />
        <KpiCard icon="🏆" label="Top Category" value="Software" sub={`${fmt(revenueByCategory.find(c => c.category === 'Software').revenue)} revenue`} accent="#a78bfa" />
      </div>

      {/* ── Anomaly Alert ── */}
      <div style={styles.alertCard}>
        <div style={styles.alertTitle}>
          ⚠️ Anomaly Detected — Requires Attention
        </div>
        <div style={styles.alertBody}>
          <strong>May 2025 · Electronics · South Region:</strong> Only <strong>5 units</strong> sold (vs. average of 85–110).
          Revenue dropped to <strong>€1,000</strong> — a <strong>94% decline</strong> from the previous month.
          Possible causes: supply disruption, data entry error, or regional sales force issue.
          <br /><em>Recommendation: Investigate South region Electronics supply chain and validate May data entry.</em>
        </div>
      </div>

      {/* ── Revenue Trend + Pie ── */}
      <div style={styles.grid2}>
        <div style={styles.card}>
          <div style={styles.sectionTitle}>📉 Monthly Revenue Trend by Category</div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueByMonth} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <defs>
                {CATEGORIES.map(cat => (
                  <linearGradient key={cat} id={`grad-${cat}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={CATEGORY_COLORS[cat]} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={CATEGORY_COLORS[cat]} stopOpacity={0.02} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => fmt(v)} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
              {CATEGORIES.map(cat => (
                <Area key={cat} type="monotone" dataKey={cat} stroke={CATEGORY_COLORS[cat]} strokeWidth={2}
                  fill={`url(#grad-${cat})`} dot={{ r: 3, fill: CATEGORY_COLORS[cat] }}
                  activeDot={{ r: 5 }} />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionTitle}>🍩 Revenue Share by Category</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={revenueByCategory} dataKey="revenue" nameKey="category" cx="50%" cy="50%"
                innerRadius={55} outerRadius={90} paddingAngle={3} strokeWidth={0}>
                {revenueByCategory.map((entry) => (
                  <Cell key={entry.category} fill={CATEGORY_COLORS[entry.category]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => fmtFull(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
            {revenueByCategory.map(c => (
              <div key={c.category} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.83rem' }}>
                <span><span style={styles.dot(CATEGORY_COLORS[c.category])} />{c.category}</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{fmt(c.revenue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Region Trend + Bar ── */}
      <div style={styles.grid22}>
        <div style={styles.card}>
          <div style={styles.sectionTitle}>🗺️ North vs South — Monthly Revenue</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueByMonthRegion} barGap={4} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => fmt(v)} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
              <Bar dataKey="North" fill={REGION_COLORS.North} radius={[4, 4, 0, 0]} />
              <Bar dataKey="South" fill={REGION_COLORS.South} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionTitle}>📊 Category Growth (Jan → Jun)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
            {[
              { cat: 'Software', growth: softwareGrowth, color: CATEGORY_COLORS.Software },
              { cat: 'Electronics', growth: electronicsGrowth, color: CATEGORY_COLORS.Electronics },
              { cat: 'Furniture', growth: furnitureGrowth, color: CATEGORY_COLORS.Furniture },
            ].map(({ cat, growth, color }) => (
              <div key={cat}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.85rem' }}>
                  <span style={{ color: '#e2e8f0' }}>{cat}</span>
                  <span style={styles.growthPill(growth > 0)}>{growth > 0 ? '▲' : '▼'} {Math.abs(growth)}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }}>
                  <div style={{ height: 8, borderRadius: 4, width: `${Math.min(Math.abs(growth), 100)}%`, background: color, transition: 'width 1s' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <div style={styles.sectionTitle}>💰 Revenue by Region</div>
            {revenueByRegion.map(r => (
              <div key={r.region} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.85rem' }}>
                <span><span style={styles.dot(REGION_COLORS[r.region])} />{r.region} Region</span>
                <span style={{ color: '#f8fafc', fontWeight: 700 }}>{fmt(r.revenue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Margin Analysis ── */}
      <div style={styles.grid31}>
        <div style={styles.card}>
          <div style={styles.sectionTitle}>💹 Profit Margin by Category</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={marginByCategory} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="category" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => fmt(v)} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
              <Bar dataKey="revenue" name="Revenue" radius={[4, 4, 0, 0]} fill="rgba(99,102,241,0.5)" />
              <Bar dataKey="cost" name="Cost" radius={[4, 4, 0, 0]} fill="rgba(239,68,68,0.5)" />
              <Bar dataKey="margin" name="Profit" radius={[4, 4, 0, 0]} fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionTitle}>🎯 Margin Scorecard</div>
          {marginByCategory.map(c => (
            <div key={c.category} style={{ marginBottom: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: 4 }}>
                <span><span style={styles.dot(CATEGORY_COLORS[c.category])} />{c.category}</span>
                <span style={{ color: '#f8fafc', fontWeight: 700 }}>{c.marginPct}%</span>
              </div>
              <div style={styles.marginBar(c.marginPct, CATEGORY_COLORS[c.category])} />
              <div style={{ fontSize: '0.73rem', color: '#64748b', marginTop: 3 }}>
                {fmt(c.margin)} profit on {fmt(c.revenue)} revenue
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Data Table ── */}
      <div style={styles.card}>
        <div style={styles.sectionTitle}>📋 Transaction Data — H1 2025 <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({salesData.length} records)</span></div>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {['Month', 'Category', 'Region', 'Channel', 'Units Sold', 'Revenue', 'Cost', 'Margin €', 'Margin %'].map(h => (
                  <th key={h} style={styles.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salesData.map((row, i) => {
                const margin = row.revenue_eur - row.cost_eur
                const marginPct = Math.round((margin / row.revenue_eur) * 100)
                const isAnomaly = row.anomaly === true
                const tdStyle = isAnomaly ? styles.tdAnomaly : styles.td
                return (
                  <tr key={i} style={isAnomaly ? { background: 'rgba(239,68,68,0.08)' } : {}}>
                    <td style={tdStyle}>{row.month}</td>
                    <td style={{ ...tdStyle }}>
                      <span style={styles.dot(CATEGORY_COLORS[row.product_category])} />
                      {row.product_category}
                    </td>
                    <td style={tdStyle}>{row.region}</td>
                    <td style={tdStyle}>{row.channel}</td>
                    <td style={{ ...tdStyle, textAlign: 'right' }}>
                      {isAnomaly ? <strong>⚠️ {row.units_sold}</strong> : row.units_sold.toLocaleString()}
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'right' }}>{fmtFull(row.revenue_eur)}</td>
                    <td style={{ ...tdStyle, textAlign: 'right', color: '#f87171' }}>{fmtFull(row.cost_eur)}</td>
                    <td style={{ ...tdStyle, textAlign: 'right', color: '#6ee7b7' }}>{fmtFull(margin)}</td>
                    <td style={{ ...tdStyle, textAlign: 'right' }}>
                      <span style={styles.growthPill(marginPct > 40)}>{marginPct}%</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{ textAlign: 'center', marginTop: '1.5rem', color: '#475569', fontSize: '0.78rem' }}>
        Sales Analytics Dashboard · H1 2025 · Built with React + Recharts
      </footer>
    </div>
  )
}
