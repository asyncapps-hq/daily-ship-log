# Daily ship log

Append-only craft tips (Asia/Kuala_Lumpur calendar days). One entry per day.

<!-- entries below -->
## 2026-08-03

- **playwright:** Sandbox HOME / state dirs in e2e so a suite never wipes a developer machine.
## 2026-08-04

- **playwright:** Upload HTML report + traces only on failure — cheap when green, useful when red.
## 2026-08-05

- **smoke:** Smoke after every meaningful deploy: one happy path beats zero confidence.
## 2026-08-06

- **smoke:** Smoke should fail loud and finish fast — under a few minutes or it will be skipped.
## 2026-08-07

- **a11y:** Icon-only buttons need an accessible name (aria-label) or they announce as “button”.
## 2026-08-08

- **a11y:** Use focus-visible rings — outline:none without a replacement breaks keyboard users.
## 2026-08-09

- **a11y:** Heading levels should increase by one; skip h2→h4 and axe will flag it.
## 2026-08-10

- **a11y:** WCAG AA needs ~4.5:1 for normal text — white on soft pink often fails.
## 2026-08-11

- **a11y:** aria-expanded on menu toggles tells AT whether the drawer is open.
## 2026-08-12

- **a11y:** Every document needs a non-empty title — Next metadata.title is the easy fix.
## 2026-08-13

- **a11y:** Skip-to-content links are WCAG 2.4.1 — first focusable, visible on focus.
## 2026-08-14

- **delivery:** Shortest path that works first; abstractions wait for a second real caller.
## 2026-08-15

- **delivery:** Fix root cause in the shared function, not a guard in every caller.
## 2026-08-16

- **delivery:** Leave one runnable check behind non-trivial logic — future you will thank you.
## 2026-08-17

- **delivery:** Cut speculative features — YAGNI is a delivery speed multiplier.
## 2026-08-18

- **delivery:** plan → build with AI → verify → smoke → ship.
## 2026-08-19

- **ai:** AI drafts faster when the acceptance check is already written.
## 2026-08-20

- **ai:** Ask the model for the smallest diff that passes the failing test.
## 2026-08-21

- **ai:** Review AI output like a junior PR — trust boundaries and a11y still need humans.
## 2026-08-22

- **ai:** Keep prompts tied to repo patterns; re-implementing helpers wastes tokens and time.
## 2026-08-23

- **debug:** Reproduce → isolate shared path → fix once → re-run smoke + e2e.
## 2026-08-24

- **debug:** Flakes that vanish with retries still need a root cause before you ship.
## 2026-08-25

- **debug:** Log the invariant you care about, not every intermediate variable.
## 2026-08-26

- **ci:** Schedules only read the default branch — merge the workflow before you wait on cron.
## 2026-08-27

- **ci:** Idempotent jobs: second run same day should no-op, not double-commit.
## 2026-08-28

- **playwright:** Prefer getByRole / getByLabel over CSS selectors so tests track user-visible UI.

