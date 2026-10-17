// Razor Math engine - cartridge swap, yearly count and per-shave cost honesty.
// Labeled grooming norm: a cartridge is commonly rated about 5 to 7 shaves.
// Your skin wins every tie; the app never gives a skin verdict.

function assertPositive(value, label) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(label + " must be above zero");
  }
}

function tenths(x) {
  return Math.floor(x * 10 + 0.5) / 10;
}

function fixed1(x) {
  return tenths(x).toFixed(1);
}

function money(x) {
  return "$" + x.toFixed(2);
}

function article(price) {
  const n = Math.floor(price);
  return (n === 8 || n === 11 || n === 18 || (n >= 80 && n <= 89)) ? "An" : "A";
}

// The swap truth: the 5-to-7-shave norm against how often you shave.
function swapTruth(shavesPerWeek) {
  assertPositive(shavesPerWeek, "the weekly shaves");
  const shaveWord = shavesPerWeek === 1 ? "shave" : "shaves";
  const shortEnd = tenths(5 / shavesPerWeek);
  const longEnd = tenths(7 / shavesPerWeek);
  return "At " + shavesPerWeek + " " + shaveWord + " a week, the labeled 5-to-7-shave " +
    "cartridge norm means a swap every " + shortEnd.toFixed(1) + " to " +
    longEnd.toFixed(1) + " weeks - the pull you feel is the cartridge asking to retire.";
}

// The year truth: what a habit costs in cartridges.
function yearTruth(shavesPerWeek) {
  assertPositive(shavesPerWeek, "the weekly shaves");
  const shaveWord = shavesPerWeek === 1 ? "shave" : "shaves";
  const shaves = tenths(shavesPerWeek * 52);
  const low = tenths(shaves / 7);
  const high = tenths(shaves / 5);
  return shavesPerWeek + " " + shaveWord + " a week is " + fixed1(shaves) +
    " shaves a year, and the labeled norm prices that at " + fixed1(low) + " to " +
    fixed1(high) + " cartridges a year.";
}

// The cost truth: pack price down to the single shave, at both ends of the norm.
function costTruth(packPrice, packCount) {
  assertPositive(packPrice, "the pack price");
  assertPositive(packCount, "the pack count");
  const per = packPrice / packCount;
  const lowCents = tenths((per / 7) * 100);
  const highCents = tenths((per / 5) * 100);
  return article(packPrice) + " " + money(packPrice) + " " + packCount +
    "-pack puts " + money(per) + " in each cartridge, so a shave costs " +
    lowCents.toFixed(1) + " to " + highCents.toFixed(1) + " cents - the handle was free for a reason.";
}

if (typeof module !== "undefined") {
  module.exports = { swapTruth, yearTruth, costTruth, tenths, fixed1 };
}
