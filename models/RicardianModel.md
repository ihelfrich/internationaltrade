# The Ricardian Model of Trade

> **Big Idea**: Trade is driven by differences in technology/productivity across countries. Even if one country is absolutely better at producing everything, both countries benefit from trade based on **comparative advantage** (relative efficiency).

---

## Core Principles

### Foundation
- **Comparative Advantage**: Countries benefit from trade by specializing in goods they produce at lower *opportunity cost*, not necessarily lower absolute cost
  - This is David Ricardo's revolutionary insight (1817)
  - Counters the intuition that only absolutely efficient countries benefit from trade
- **Single Factor of Production**: Labor is the only factor of production
  - Simplifies analysis to focus on technological differences
  - Labor productivity varies across countries and goods
- **Perfect Competition**: Markets are perfectly competitive
  - Firms are price-takers
  - Zero economic profits in equilibrium
- **Constant Returns to Scale**: Technology exhibits constant returns to labor
  - Doubling labor input doubles output
  - Implies linear PPF
- **Perfect Labor Mobility**: Labor can move freely between sectors within a country, but not between countries
  - Ensures wage equalization across sectors within a country
  - International wage differences can persist

## Model Setup

### Technology
Production is characterized by unit labor requirements:
- **aₗc**: Labor hours needed to produce 1 unit of cloth
- **aₗw**: Labor hours needed to produce 1 unit of wine

### Production Possibilities Frontier (PPF)
Given total labor endowment L:
- Cloth production: Qc
- Wine production: Qw

**Labor constraint**: aₗc · Qc + aₗw · Qw ≤ L

**PPF equation**: Qc = L/aₗc - (aₗw/aₗc) · Qw

**Slope of PPF** = -(aₗw/aₗc) = opportunity cost of wine in terms of cloth

## Autarky (No Trade)

### Equilibrium Conditions
1. **Production**: Economy operates on its PPF
2. **Consumption**: Economy consumes what it produces
3. **Relative Price**: Determined by opportunity cost

**Autarky relative price**: Pw/Pc = aₗw/aₗc

The relative price equals the slope of the PPF (in absolute value).

### Wage Determination
In competitive equilibrium:
- Wage in cloth sector: w = Pc/aₗc
- Wage in wine sector: w = Pw/aₗw

Both sectors pay the same wage, or workers would move between sectors.

## Two-Country Model

### Comparative Advantage Principle
Consider Home and Foreign (Foreign variables denoted with *):

**Home has comparative advantage in cloth if**:
aₗc/aₗw < aₗc*/aₗw*

Equivalently:
- (Pw/Pc)autarky,Home < (Pw/Pc)autarky,Foreign
- Home's opportunity cost of cloth is lower

**Foreign has comparative advantage in wine if**:
aₗw*/aₗc* < aₗw/aₗc

### Numerical Example: Classic Case

**Setup:**

| Country | Cloth (hours/yard) | Wine (hours/gallon) | Total Labor |
|---------|-------------------|---------------------|-------------|
| Home    | aₗc = 1           | aₗw = 2             | L = 100     |
| Foreign | aₗc* = 2          | aₗw* = 3            | L* = 100    |

**Step 1: Check for Absolute Advantage**
- Home is absolutely more efficient in both goods (lower labor requirements)
- Home can produce: 100 cloth OR 50 wine
- Foreign can produce: 50 cloth OR 33.33 wine
- Naive view: "Why would Home trade with Foreign?"

**Step 2: Calculate Opportunity Costs**

*Home's opportunity costs:*
- To produce 1 wine, give up: aₗw/aₗc = 2/1 = **2 cloth**
- To produce 1 cloth, give up: aₗc/aₗw = 1/2 = **0.5 wine**

*Foreign's opportunity costs:*
- To produce 1 wine, give up: aₗw*/aₗc* = 3/2 = **1.5 cloth**
- To produce 1 cloth, give up: aₗc*/aₗw* = 2/3 = **0.67 wine**

**Step 3: Identify Comparative Advantage**
- **Home has comparative advantage in cloth**: Gives up only 0.5 wine vs. Foreign's 0.67 wine
- **Foreign has comparative advantage in wine**: Gives up only 1.5 cloth vs. Home's 2 cloth
- Notice: Home has absolute advantage in both, but comparative advantage in only one!

**Step 4: Autarky Relative Prices**
- Home: Pw/Pc = 2 (wine costs twice as much as cloth)
- Foreign: Pw/Pc* = 1.5 (wine costs 1.5 times as much as cloth)
- Wine is relatively cheaper in Foreign; cloth is relatively cheaper in Home

**Result**: Foreign has comparative advantage in wine; Home has comparative advantage in cloth.

## Trade Equilibrium

### Pattern of Specialization
Under free trade with relative price Pw/Pc:

**Home specializes in cloth if**: Pw/Pc > aₗw/aₗc
**Foreign specializes in wine if**: Pw/Pc < aₗw*/aₗc*

### World Relative Supply and Demand

**Complete Specialization**:
- Home produces: Qc = L/aₗc cloth (100 yards in our example)
- Foreign produces: Qw* = L*/aₗw* wine (33.33 gallons in our example)

**World relative supply (RS)**:
- Perfectly inelastic (vertical line) at RS = (L/aₗc)/(L*/aₗw*) = 100/33.33 = 3
- Interpretation: World produces 3 times as much cloth as wine

**World relative demand (RD)**:
- Downward sloping: as Pw/Pc increases, relative demand for wine decreases
- Higher wine price → consumers substitute toward cloth → Dw/Dc falls

### Equilibrium Relative Price

The trade equilibrium relative price must lie between the two autarky prices:

**1.5 < (Pw/Pc)trade < 2**

From our example: (Pw/Pc)Home = 2 and (Pw/Pc)Foreign* = 1.5

**Concrete Example**: Suppose (Pw/Pc)trade = 1.7
- Home exports cloth, imports wine
- Foreign exports wine, imports cloth
- Both countries face the same world price

### Demonstrating Mutual Gains from Trade

**Home's Perspective** (exports cloth):
- *Autarky*: Producing 1 wine requires sacrificing 2 cloth (Pw/Pc = 2)
  - Equivalently: 1 cloth can "buy" only 0.5 wine through domestic production
- *Trade*: Can trade 1 cloth for 1/1.7 = 0.588 wine on world market
- **Gain**: Gets 0.588 wine instead of 0.5 wine per cloth ✓

**Foreign's Perspective** (exports wine):
- *Autarky*: Producing 1 cloth requires sacrificing 2/3 = 0.67 wine (Pc/Pw* = 1/1.5 = 0.67)
  - Equivalently: 1 wine can "buy" 1.5 cloth through domestic production
- *Trade*: Can trade 1 wine for 1.7 cloth on world market
- **Gain**: Gets 1.7 cloth instead of 1.5 cloth per wine ✓

**Key Insight**: The world price (Pw/Pc = 1.7) makes:
- Cloth cheaper for Foreign than producing it domestically
- Wine cheaper for Home than producing it domestically
- **Both countries gain by specializing in their comparative advantage!**

## Gains from Trade

### Sources of Gains
1. **Consumption gains**: Countries can consume beyond their PPF
2. **Production efficiency**: Resources allocated to comparative advantage sectors
3. **Terms of trade**: Exchange at favorable relative prices

### Graphical Analysis
Each country's consumption possibilities expand:
- Autarky: Consumption = Production on PPF
- Trade: Consumption on a flatter budget line through the production point

**Budget constraint with trade**:
Pc · Dc + Pw · Dw = Pc · Qc + Pw · Qw

where D denotes consumption and Q denotes production.

### Numerical Example: Consumption Gains

Using our earlier example with (Pw/Pc)trade = 1.7:

**Home (exports cloth)**:
- Autarky production: C = 50, W = 25
- Trade production: C = 100, W = 0 (complete specialization)
- Trade consumption: Export some cloth for wine at rate 1.7
  - Can consume anywhere on line: C + 1.7W = 100
  - If preferences lead to consuming 50 cloth and 29.4 wine
  - **Gain**: More wine than autarky (29.4 > 25) ✓

**Foreign (exports wine)**:
- Autarky production: C* = 25, W* = 16.7
- Trade production: C* = 0, W* = 33.3 (complete specialization)
- Trade consumption: Export wine for cloth at world prices
  - Can consume on line determined by trade
  - Gets access to more cloth at lower opportunity cost
  - **Gain**: Able to consume combinations beyond autarky PPF ✓

**Visual Summary**:
```
Home:           Autarky → Trade
Cloth:          50      → 50 (consumed)
Wine:           25      → 29.4 (consumed)
Welfare:        ↑ (more wine!)

Foreign:        Autarky → Trade
Cloth:          25      → 28.3 (consumed)
Wine:           16.7    → 16.7 (consumed)
Welfare:        ↑ (more cloth!)
```

### Welfare Implications
- Both countries gain from trade (Pareto improvement at country level)
- Trade allows consumption of combinations impossible in autarky
- Real wages increase when measured in terms of the imported good
- More productive country (Home) often captures larger share of gains
- Division of gains depends on where world price settles between autarky prices

## Real Wages and Distribution

### Real Wage in Terms of Cloth
w/Pc = 1/aₗc (always)

### Real Wage in Terms of Wine
- Autarky: w/Pw = 1/aₗw
- Trade (Home exports cloth): w/Pw = (Pc/Pw) · (1/aₗc) > 1/aₗw

**Result**: Real wages rise in terms of the imported good, unchanged in terms of exported good.

### Distribution Within Countries
**No conflict**: All workers gain from trade (or at least don't lose) because:
- Labor is the only factor
- Labor is perfectly mobile between sectors
- All workers earn the same wage

This contrasts with models with multiple factors (Specific Factors, HO).

## Limitations of Ricardian Model

### What It Explains Well
- Pattern of trade based on technology differences
- Gains from trade
- Why countries with different productivities trade

### What It Cannot Explain
1. **Income distribution**: No winners/losers within countries
2. **Multiple factors**: Ignores capital, land, other inputs
3. **Increasing returns**: Assumes constant returns
4. **Transport costs**: Assumes zero transport costs
5. **Source of comparative advantage**: Technology differences are assumed, not explained
6. **Incomplete specialization**: Predicts complete specialization; reality shows diversified production

## Extensions and Applications

### Many Goods
With multiple goods, arrange by comparative advantage:
- Home exports goods where aₗi/aₗi* is lowest
- Foreign exports goods where aₗi*/aₗi is lowest
- Relative wages determine the cutoff

### Many Countries
- Chain of comparative advantage
- Each country exports goods where it has comparative advantage
- Trade patterns determined by relative productivities and wages

### Empirical Evidence
**Success**:
- Countries do export goods in which they have relatively high productivity
- Relative export prices correlate with relative unit labor requirements

**Limitations**:
- Incomplete specialization common
- Need to incorporate other factors (capital, resources)

## Key Takeaways

1. **Comparative advantage**, not absolute advantage, determines trade patterns
2. **Opportunity cost** is the relevant metric for specialization
3. **Mutual gains from trade** exist even when one country is more productive in everything
4. **Technology differences** drive trade in the Ricardian framework
5. **Complete specialization** is the typical outcome with perfect mobility
6. **All workers benefit** from trade in this simple model (important contrast with later models)

## Problem-Solving Framework

### Finding Comparative Advantage
1. Calculate opportunity costs: aₗi/aₗj for each country
2. Compare opportunity costs across countries
3. Lower opportunity cost = comparative advantage

### Determining Trade Pattern
1. Identify comparative advantages
2. Countries export goods with comparative advantage
3. Trade price must lie between autarky prices

### Calculating Gains
1. Find autarky consumption (on PPF with preferences)
2. Find trade production (complete specialization)
3. Find trade consumption (on budget line through production)
4. Compare utility/consumption between autarky and trade
