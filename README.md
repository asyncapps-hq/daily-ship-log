# daily-ship-log

Automated **daily craft tip** for consistency — Playwright, a11y, smoke tests, and delivery habits.

This is a lightweight public learning log on a schedule. It is **not** empty commits, and it is **not** a substitute for product or open-source work.

**Real cadence (earn the graph):** follow **[WEEKLY_SHIP.md](./WEEKLY_SHIP.md)** — one product change + target one external mergeable PR per week.

## Stats

<!-- stats:start -->
- **Last entry:** 2026-08-26 (ci)
- **Days logged:** 24
<!-- stats:end -->

## How it works

1. GitHub Actions runs twice daily (UTC `01:00` and `13:00` ≈ 09:00 / 21:00 Malaysia time).
2. `scripts/append-entry.mjs` appends **one** tip for today’s Asia/Kuala_Lumpur date if missing.
3. Commit author is `KhyFee` so the contribution counts on the [profile graph](https://github.com/KhyFee).

Manual run: **Actions → Daily craft tip → Run workflow**. Optional `note` input overrides the tip bank for that day.

## Interview line

> I keep a lightweight public learning log on a schedule so the habit sticks.

## Profile

Maintainer: [@KhyFee](https://github.com/KhyFee) · chat: [welcome discussion](https://github.com/KhyFee/daily-ship-log/discussions/1)

## License

MIT
