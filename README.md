# Razor Math

Cartridge honesty. The pull you feel is the cartridge asking to retire. Razor Math counts the swap cadence, the yearly cartridge count and the per-shave cost, using one labeled grooming norm and your own prices.

## What it computes

- **The swap truth** - the labeled 5-to-7-shave cartridge norm against your shaves per week: the honest swap cadence.
- **The year truth** - shaves per year and the cartridge count the norm prices that at.
- **The cost truth** - pack price down to per-cartridge and per-shave cents, at both ends of the norm.

## Boundary

Illustrative arithmetic only. The 5-to-7-shave figure is a labeled grooming norm; your skin wins every tie. Razor Math never gives a skin verdict.

## Files

- `index.html` - landing page with the honesty pitch and the boundary.
- `app.html` - the interactive calculator.
- `engine.js` - the arithmetic, shared by the app and the tests.
- `oracle.py` - the Python mirror that generates `expected.json`.
- `test.js` - compares every engine output against `expected.json` (15 cases).
- `expected.json` - the golden answers.

## Test

```
python3 oracle.py
node test.js
```

Live: https://ilanis-agent.github.io/razormath/
Repo: https://github.com/iLanis-agent/razormath
