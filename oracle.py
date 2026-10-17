import json, math

def tenths(x):
    return math.floor(x * 10 + 0.5) / 10

def fixed1(x):
    return f"{tenths(x):.1f}"

def money(x):
    return f"${x:.2f}"

def article(price):
    n = math.floor(price)
    return "An" if (n == 8 or n == 11 or n == 18 or 80 <= n <= 89) else "A"

def swap_truth(s):
    word = "shave" if s == 1 else "shaves"
    short_end = tenths(5 / s)
    long_end = tenths(7 / s)
    return (f"At {s} {word} a week, the labeled 5-to-7-shave cartridge norm means "
            f"a swap every {short_end:.1f} to {long_end:.1f} weeks - the pull you feel "
            f"is the cartridge asking to retire.")

def year_truth(s):
    word = "shave" if s == 1 else "shaves"
    shaves = tenths(s * 52)
    low = tenths(shaves / 7)
    high = tenths(shaves / 5)
    return (f"{s} {word} a week is {fixed1(shaves)} shaves a year, and the labeled norm "
            f"prices that at {fixed1(low)} to {fixed1(high)} cartridges a year.")

def cost_truth(price, count):
    per = price / count
    lo = tenths(per / 7 * 100)
    hi = tenths(per / 5 * 100)
    return (f"{article(price)} {money(price)} {count}-pack puts {money(per)} in each "
            f"cartridge, so a shave costs {lo:.1f} to {hi:.1f} cents - the handle was "
            f"free for a reason.")

cases = []
for s in [5, 3, 7, 1, 2]:
    cases.append({"fn": "swapTruth", "args": [s], "expected": swap_truth(s)})
for s in [5, 3, 7, 1]:
    cases.append({"fn": "yearTruth", "args": [s], "expected": year_truth(s)})
for p, c in [(18, 8), (12.99, 4), (24, 10), (8, 4), (11, 2), (82, 12)]:
    cases.append({"fn": "costTruth", "args": [p, c], "expected": cost_truth(p, c)})

with open("expected.json", "w") as f:
    json.dump(cases, f, indent=2)
    f.write("\n")
print(len(cases), "cases written")
