# Ricardian Model of Trade (Full Notes)

## 0. Executive idea
Trade patterns are pinned down by *opportunity costs*, not absolute productivity. With one factor (labor), competition forces wages to equalize across sectors. Autarky prices equal technological opportunity costs. When countries trade at a world price between their autarky prices, each specializes according to comparative advantage and both gain.

---

## 1. Assumptions (state these clearly)
**Goods**: Two goods, cloth (C) and wine (W).

**Factor**: One factor, labor (L).

**Technology**: Unit labor requirements:
- $a_{LC}$ = labor hours per unit of cloth
- $a_{LW}$ = labor hours per unit of wine

**Markets**:
- Perfect competition
- Constant returns to scale
- Labor mobile across sectors within a country, immobile across countries

**Why this matters**: With one factor and perfect competition, distribution is trivial: everyone earns the same wage. This isolates the pure logic of comparative advantage.

---

## 2. Production and the PPF
Let $L_C$ and $L_W$ be labor allocated to cloth and wine.

Production functions:
- $Q_C = L_C/a_{LC}$
- $Q_W = L_W/a_{LW}$

Resource constraint:
- $L_C + L_W = L$

Eliminate $L_C, L_W$ to get the PPF:

$$a_{LC} Q_C + a_{LW} Q_W \le L$$

Solve for $Q_C$ as a function of $Q_W$:

$$Q_C = \frac{L}{a_{LC}} - \frac{a_{LW}}{a_{LC}} Q_W$$

**Key result**: the slope is $-a_{LW}/a_{LC}$. This equals the opportunity cost of wine in units of cloth.

---

## 3. Autarky equilibrium
In autarky, the economy consumes its production bundle.

Competitive wages in each sector:
- $w = P_C/a_{LC}$
- $w = P_W/a_{LW}$

With labor mobility, wages must be equalized, so:

$$\frac{P_W}{P_C} = \frac{a_{LW}}{a_{LC}}$$

**Interpretation**: Autarky relative prices equal the technological opportunity cost.

---

## 4. Comparative advantage (two-country case)
Let Foreign have $a^*_{LC}, a^*_{LW}$.

Home has comparative advantage in cloth if:

$$\frac{a_{LC}}{a_{LW}} < \frac{a^*_{LC}}{a^*_{LW}}$$

Equivalently:
- Home has lower opportunity cost of cloth
- Foreign has lower opportunity cost of wine

**Important**: Absolute advantage is irrelevant. A country can be more productive in both goods and still trade.

---

## 5. Trade equilibrium and specialization
World relative price must lie between autarky prices:

$$\frac{a_{LW}}{a_{LC}} < \left(\frac{P_W}{P_C}\right)^{trade} < \frac{a^*_{LW}}{a^*_{LC}}$$

With linear PPFs, this implies complete specialization:
- Home produces cloth, exports cloth
- Foreign produces wine, exports wine

---

## 6. Gains from trade
Trade rotates the budget line outward. The consumption set expands beyond the PPF.

Budget constraint at world prices:

$$P_C D_C + P_W D_W = P_C Q_C + P_W Q_W$$

**Real wage effects** (Home exporting cloth):

$$\frac{w}{P_C} = \frac{1}{a_{LC}}$$

$$\frac{w}{P_W} = \frac{P_C}{P_W} \cdot \frac{1}{a_{LC}}$$

Since $P_C/P_W$ rises relative to autarky in the export country, $w/P_W$ increases. With one factor, all workers gain.

---

## 7. Worked numeric example (canonical)
**Home**: $a_{LC}=1$, $a_{LW}=2$.

**Foreign**: $a^*_{LC}=2$, $a^*_{LW}=3$.

Opportunity costs:
- Home: 1W costs 2C
- Foreign: 1W costs 1.5C

Comparative advantage:
- Home has CA in cloth
- Foreign has CA in wine

Autarky prices:
- Home: $P_W/P_C = 2$
- Foreign: $P_W/P_C = 1.5$

Trade price must satisfy:

$$1.5 < (P_W/P_C)^{trade} < 2$$

If $(P_W/P_C)^{trade} = 1.7$, both countries gain because each can buy the imported good at a lower opportunity cost than in autarky.

---

## 8. Relative supply and demand (world equilibrium)
Under complete specialization, world relative supply is vertical:

$$RS = \frac{L/a_{LC}}{L^*/a^*_{LW}}$$

Relative demand is downward sloping in $P_W/P_C$. The intersection pins down the trade price.

---

## 9. Extensions (brief)
**Many goods**: Rank goods by relative unit labor requirements. A cutoff in relative wages determines the export set.

**Many countries**: Comparative advantage becomes a chain; each country exports goods where its relative productivity is highest.

---

## 10. Common pitfalls
- Confusing absolute and comparative advantage.
- Forgetting that autarky prices equal opportunity costs.
- Claiming trade price can be outside the autarky interval.
- Assuming partial specialization in this model (it is typically complete).

---

## 11. Summary paragraph
The Ricardian model shows that trade patterns are determined by relative productivity. With one factor of production, autarky prices equal opportunity costs. Comparative advantage arises from lower relative unit labor requirements, not absolute productivity. When the world price lies between autarky prices, each country specializes in its comparative advantage good, consumption expands beyond the PPF, and all workers gain.
