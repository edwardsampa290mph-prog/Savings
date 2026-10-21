import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedNumber } from "./animated-number";
import { useTracker, usePortfolioTotals } from "@/lib/store";
import { LUSE_COUNTERS, type Purchase } from "@/lib/tracker-data";
import { formatDay, formatK, todayISO } from "@/lib/utils";
import { Pencil, Plus, Trash2 } from "lucide-react";

const emptyForm = {
  date: todayISO(),
  ticker: "",
  company: "",
  amount: "",
  shares: "",
  notes: "",
};

export function PortfolioPage() {
  const purchases = useTracker((s) => s.purchases);
  const addPurchase = useTracker((s) => s.addPurchase);
  const updatePurchase = useTracker((s) => s.updatePurchase);
  const removePurchase = useTracker((s) => s.removePurchase);
  const setQuote = useTracker((s) => s.setQuote);
  const totals = usePortfolioTotals();
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState<string | null>(null);

  useEffect(() => {
    setForm((f) => ({ ...f, date: f.date || todayISO() }));
  }, []);

  function load(p: Purchase) {
    setEditing(p.id);
    setForm({
      date: p.date,
      ticker: p.ticker,
      company: p.company,
      amount: String(p.amount),
      shares: String(p.shares),
      notes: p.notes,
    });
  }

  function reset() {
    setEditing(null);
    setForm({ ...emptyForm, date: todayISO() });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const amount = Number(form.amount);
    const shares = Number(form.shares);
    if (!form.date) {
      toast.error("Pick a trade date.");
      return;
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      toast.error("Enter the amount invested.");
      return;
    }
    if (!Number.isFinite(shares) || shares < 0) {
      toast.error("Enter shares as a number.");
      return;
    }
    const named =
      form.company || LUSE_COUNTERS.find((c) => c.ticker === form.ticker)?.name || "";
    const payload = {
      date: form.date,
      ticker: form.ticker,
      company: named,
      amount,
      shares,
      notes: form.notes.trim(),
    };
    if (editing) {
      updatePurchase(editing, payload);
      toast.success("Trade updated.");
    } else {
      addPurchase(payload);
      toast.success(`Logged ${formatK(amount, 0)} in ${named || "LuSE"}.`);
    }
    reset();
  }

  const sorted = [...purchases].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return (
    <div>
      <section className="pt-4 sm:pt-6">
        <p className="text-[13px] tracking-[0.22em] text-mist uppercase">LuSE book</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Portfolio</h1>
        <p className="mt-2 max-w-xl text-sm text-mist">
          Log buys whenever they happen. This book is independent of the savings cycle.
        </p>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-4">
        <div className="bg-panel px-4 py-4 sm:px-5">
          <div className="text-[11px] tracking-[0.16em] text-mist uppercase">Invested</div>
          <div className="mt-1.5 font-display text-2xl tracking-tight">
            <AnimatedNumber value={totals.invested} decimals={0} />
          </div>
        </div>
        <div className="bg-panel px-4 py-4 sm:px-5">
          <div className="text-[11px] tracking-[0.16em] text-mist uppercase">Market</div>
          <div className="mt-1.5 font-display text-2xl tracking-tight">
            {totals.market == null ? "—" : <AnimatedNumber value={totals.market} decimals={0} />}
          </div>
        </div>
        <div className="bg-panel px-4 py-4 sm:px-5">
          <div className="text-[11px] tracking-[0.16em] text-mist uppercase">Gain / loss</div>
          <div
            className={`mt-1.5 font-display text-2xl tracking-tight ${
              totals.gain == null ? "" : totals.gain >= 0 ? "text-sage-2" : "text-danger"
            }`}
          >
            {totals.gain == null ? "—" : <AnimatedNumber value={totals.gain} decimals={0} />}
          </div>
        </div>
        <div className="bg-panel px-4 py-4 sm:px-5">
          <div className="text-[11px] tracking-[0.16em] text-mist uppercase">Trades</div>
          <div className="mt-1.5 font-display text-2xl tabular-nums tracking-tight">{totals.count}</div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
          <h2 className="font-display text-2xl tracking-tight">
            {editing ? "Edit trade" : "New trade"}
          </h2>
          <form onSubmit={submit} className="mt-4 grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="p-date">Date</Label>
              <Input
                id="p-date"
                type="date"
                max={todayISO()}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="p-counter">Counter</Label>
              <select
                id="p-counter"
                value={form.ticker}
                onChange={(e) => {
                  const ticker = e.target.value;
                  const hit = LUSE_COUNTERS.find((c) => c.ticker === ticker);
                  setForm({ ...form, ticker, company: hit?.name ?? form.company });
                }}
                className="flex h-11 w-full rounded-md bg-ink-2 px-3 text-sm text-paper shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_55%,transparent)]"
              >
                <option value="">Choose a LuSE counter</option>
                {LUSE_COUNTERS.map((c) => (
                  <option key={c.ticker} value={c.ticker}>
                    {c.ticker} — {c.name}
                  </option>
                ))}
                <option value="OTHER">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="p-company">Company</Label>
              <Input
                id="p-company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="p-amount">Amount (K)</Label>
                <Input
                  id="p-amount"
                  inputMode="decimal"
                  className="tabular-nums"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="p-shares">Shares</Label>
                <Input
                  id="p-shares"
                  inputMode="decimal"
                  className="tabular-nums"
                  value={form.shares}
                  onChange={(e) => setForm({ ...form, shares: e.target.value })}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="p-notes">Notes</Label>
              <Input
                id="p-notes"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1" id="save-trade">
                <Plus className="size-4" />
                {editing ? "Save changes" : "Add trade"}
              </Button>
              {editing ? (
                <Button type="button" variant="ghost" onClick={reset}>
                  Cancel
                </Button>
              ) : null}
            </div>
          </form>
        </section>

        <div className="grid gap-6">
          {totals.holdings.length ? (
            <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
              <h2 className="font-display text-2xl tracking-tight">Holdings</h2>
              <p className="mt-1 text-sm text-mist">Set a last price yourself. No live feed.</p>
              <ul className="mt-4 divide-y divide-line">
                {totals.holdings.map((h) => (
                  <li key={h.ticker || h.company} className="py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <span>
                        <span className="font-medium text-paper">{h.ticker || "—"}</span>
                        <span className="ml-2 text-sm text-mist">{h.company}</span>
                      </span>
                      <span className="tabular-nums text-paper">{formatK(h.amount, 0)}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px] text-mist">
                      <span>{h.shares.toLocaleString("en-ZM")} sh</span>
                      <QuoteField
                        ticker={h.ticker || h.company}
                        price={h.price}
                        onSave={(price) => setQuote(h.ticker || h.company, price)}
                      />
                      {h.market != null ? (
                        <span className={h.gain != null && h.gain < 0 ? "text-danger" : "text-sage-2"}>
                          now {formatK(h.market, 0)}
                          {h.gain != null ? ` (${h.gain >= 0 ? "+" : ""}${formatK(h.gain, 0)})` : ""}
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
            <h2 className="font-display text-2xl tracking-tight">Trades</h2>
            {sorted.length === 0 ? (
              <p className="mt-3 text-sm text-mist">No trades yet. Add a LuSE buy any time.</p>
            ) : (
              <ul className="mt-4 space-y-2">
                {sorted.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-start justify-between gap-3 rounded-lg bg-ink-2 px-3 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-medium text-paper">
                        {p.ticker ? `${p.ticker} · ` : ""}
                        {p.company || "LuSE"}
                      </p>
                      <p className="text-[12px] text-haze">
                        {formatDay(p.date, "short")} · {formatK(p.amount)} · {p.shares} sh
                      </p>
                    </div>
                    <div className="flex shrink-0">
                      <button
                        type="button"
                        className="grid size-11 place-items-center text-mist hover:text-paper"
                        onClick={() => load(p)}
                        aria-label="Edit trade"
                      >
                        <Pencil className="size-4" />
                      </button>
                      <button
                        type="button"
                        className="grid size-11 place-items-center text-mist hover:text-danger"
                        onClick={() => {
                          removePurchase(p.id);
                          if (editing === p.id) reset();
                        }}
                        aria-label="Delete trade"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function QuoteField({
  ticker,
  price,
  onSave,
}: {
  ticker: string;
  price: number | null;
  onSave: (price: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(price != null ? String(price) : "");

  useEffect(() => {
    setValue(price != null ? String(price) : "");
  }, [price]);

  if (!editing) {
    return (
      <button
        type="button"
        className="rounded-md px-2 py-1 text-paper hover:bg-panel-2"
        onClick={() => setEditing(true)}
      >
        {price != null ? `K${price.toFixed(2)} / sh` : "Set price"}
      </button>
    );
  }

  return (
    <form
      className="flex items-center gap-1"
      onSubmit={(e) => {
        e.preventDefault();
        const n = Number(value);
        if (!Number.isFinite(n) || n < 0) return;
        onSave(n);
        setEditing(false);
      }}
    >
      <Input
        aria-label={`Price for ${ticker}`}
        inputMode="decimal"
        className="h-9 w-24 tabular-nums"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  );
}

