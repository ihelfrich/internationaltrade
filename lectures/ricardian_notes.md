# Ricardian Model — Full Lecture Notes (Math + Intuition)

## 0. Why we care
The Ricardian model is the cleanest proof that trade can benefit *both* countries even when one is more productive at *everything*. The logic is not about absolute advantage, it is about *opportunity cost*. If students only remember one thing from this model, it is this: **relative efficiency determines trade patterns**.

## 1. Assumptions (state them explicitly)
**Economy**: Two goods (C = cloth, W = wine), one factor (labor).

**Technology**:
- Unit labor requirement for cloth: $a_{LC}$ hours per unit
- Unit labor requirement for wine: $a_{LW}$ hours per unit

**Markets**:
- Perfect competition (price taking, zero profits)
- Constant returns to scale
- Labor mobile across sectors within a country, immobile across countries

**Why these assumptions matter**:
- One factor keeps the distributional story simple: everyone earns the same wage.
- Constant returns and perfect competition give a linear PPF and sharp specialization.

## 2. Production and the PPF
Let $L_C$ and $L_W$ denote labor allocated to cloth and wine.

Production functions:
- $Q_C = L_C/a_{LC}$
- $Q_W = L_W/a_{LW}$

Labor constraint:
- $L_C + L_W = L$

Substitute into production:

$$a_{LC} Q_C + a_{LW} Q_W \le L$$

Solve for the PPF (cloth as a function of wine):

$$Q_C = \frac{L}{a_{LC}} - \frac{a_{LW}}{a_{LC}} Q_W$$

**Key insight**: the slope of the PPF is $-a_{LW}/a_{LC}$. That slope *is* the opportunity cost of wine in terms of cloth.

## 3. Autarky equilibrium
With no trade, consumption equals production. The relative price must match the opportunity cost.

Competitive wage in each sector:
- $w = P_C/a_{LC}$
- $w = P_W/a_{LW}$

Equate wages:

$$\frac{P_W}{P_C} = \frac{a_{LW}}{a_{LC}}$$

**Interpretation**: Autarky relative prices are pinned down by technology.

## 4. Comparative advantage (two-country case)
Let Foreign variables have a star: $a^*_{LC}, a^*_{LW}$.

Home has comparative advantage in cloth if:

$$\frac{a_{LC}}{a_{LW}} < \frac{a^*_{LC}}{a^*_{LW}}$$

Equivalently:
- Home has lower opportunity cost of cloth
- Home has higher opportunity cost of wine

**Important**: Comparative advantage can exist even if Home is more productive in *both* goods.

## 5. Trade prices and specialization
Trade prices must lie between autarky prices:

$$\frac{a_{LW}}{a_{LC}} < \left(\frac{P_W}{P_C}\right)^{trade} < \frac{a^*_{LW}}{a^*_{LC}}$$

With linear PPFs, each country fully specializes in its comparative advantage good.

- Home exports cloth
- Foreign exports wine

## 6. Gains from trade (logic + math)
Trade changes the *budget constraint* (not preferences).

Budget constraint at world prices:

$$P_C D_C + P_W D_W = P_C Q_C + P_W Q_W$$

Because the world price line is flatter than the autarky PPF, the feasible consumption set expands. The country can consume bundles outside its PPF.

**Real wage effect**:

$$\frac{w}{P_C} = \frac{1}{a_{LC}}, \quad \frac{w}{P_W} = \frac{P_C}{P_W} \cdot \frac{1}{a_{LC}}$$

In the export country, $P_C/P_W$ rises relative to autarky, so $w/P_W$ increases.

## 7. Worked example (the canonical numbers)
**Home**: $a_{LC}=1$, $a_{LW}=2$.

**Foreign**: $a^*_{LC}=2$, $a^*_{LW}=3$.

Opportunity costs:
- Home: 1W costs 2C
- Foreign: 1W costs 1.5C

Therefore:
- Home has CA in cloth
- Foreign has CA in wine

Autarky relative prices:
- Home: $P_W/P_C = 2$
- Foreign: $P_W/P_C = 1.5$

Trade price must satisfy:

$$1.5 < (P_W/P_C)^{trade} < 2$$

If $(P_W/P_C)^{trade} = 1.7$, both countries gain.

## 8. Teaching script (how to narrate it)
1) Start with the PPF and label the slope.
2) Point at the slope and say: "That is opportunity cost. That is the entire model."
3) Equate wages to show autarky prices.
4) Compare opportunity costs across countries.
5) Draw a flatter world price line to show gains.
6) Make the final point: *trade expands consumption, not production.*

## 9. Common pitfalls
- Confusing absolute advantage with comparative advantage.
- Forgetting that in autarky, price ratio equals PPF slope.
- Claiming specialization occurs when trade prices lie *outside* the autarky interval. It must lie *between*.

## 10. Summary in one paragraph (for students)
The Ricardian model shows that trade is driven by differences in relative productivity. With one factor (labor), the PPF is linear and autarky prices equal opportunity costs. Comparative advantage is determined by the ratio of unit labor requirements. When countries trade at a price between their autarky prices, each specializes in its comparative advantage good and both gain. Real wages rise in terms of the imported good, and since labor is the only factor, everyone gains.
