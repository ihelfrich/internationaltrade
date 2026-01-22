# Specific-Factors Model — Full Lecture Notes (Math + Intuition)

## 0. Why this model exists
The Ricardian model gives us clean gains from trade but no losers. That is not realistic in the short run. The Specific-Factors model is the first framework where **trade creates winners and losers**. The key mechanism is **factor immobility** across sectors.

## 1. Structure and assumptions
Two sectors:
- Manufacturing (M): uses labor $L_M$ and capital $K$
- Agriculture (A): uses labor $L_A$ and land $T$

Factors:
- Labor is mobile across sectors
- Capital is specific to M, land is specific to A

Technology:
- $Q_M = F(K, L_M)$
- $Q_A = G(T, L_A)$

Resource constraints:
- $L_M + L_A = L$
- $K$ and $T$ are fixed in the short run

## 2. Equilibrium conditions
Firms hire labor until the value of marginal product equals the wage.

$$P_M \cdot MPL_M = w, \quad P_A \cdot MPL_A = w$$

Therefore:

$$P_M MPL_M = P_A MPL_A$$

This equation pins down the labor allocation $L_M$ and $L_A$.

## 3. PPF intuition
Because marginal products are diminishing in each sector, the PPF is concave. Moving one worker from A to M increases $Q_M$ by less and less, while reducing $Q_A$ by more and more. That is rising opportunity cost.

## 4. Price shock analysis (core mechanism)
Suppose $P_M$ rises with $P_A$ fixed.

Step-by-step:
1. Manufacturing becomes more profitable.
2. Labor flows from A to M.
3. $MPL_M$ falls; $MPL_A$ rises.
4. Wage $w$ rises, but by less than the proportional increase in $P_M$.

**Key result**: the mobile factor (labor) has an ambiguous welfare change.

## 5. Returns to specific factors
Let capital return in M be $r_K$ and land return in A be $r_T$.

$$r_K = P_M MPK_M, \quad r_T = P_A MPT_A$$

Because $P_M$ rises and labor flows into M, **capital gains unambiguously**. Land loses because $P_A$ is fixed and $L_A$ falls.

**Magnification effect**: specific-factor returns move more than the good price.

## 6. Opening to trade (distributional logic)
If the country has comparative advantage in M, trade raises $P_M/P_A$.

Results:
- Capital owners (export sector) gain.
- Landowners (import-competing sector) lose.
- Workers experience ambiguous real wage changes.

This explains why short-run trade politics are organized by industry.

## 7. Cobb-Douglas example (with explicit MPLs)
Assume:

$$Q_M = K^{\alpha} L_M^{1-\alpha}$$
$$Q_A = T^{\beta} L_A^{1-\beta}$$

Then:

$$MPL_M = (1-\alpha)K^{\alpha}L_M^{-\alpha}$$
$$MPL_A = (1-\beta)T^{\beta}L_A^{-\beta}$$

Labor allocation condition:

$$P_M(1-\alpha)K^{\alpha}L_M^{-\alpha} = P_A(1-\beta)T^{\beta}L_A^{-\beta}$$

This is the equation you solve for $L_M$ and $L_A$.

## 8. Worked example (directional)
Suppose $P_M$ rises by 10%.

- Labor moves into M.
- $w$ rises but by less than 10%.
- $r_K$ rises more than 10%.
- $r_T$ falls.

This is the textbook distributional result.

## 9. Teaching script (how to narrate it)
1) Draw the concave PPF and say: "This is the short-run constraint."
2) Write $P_M MPL_M = P_A MPL_A$ and describe labor allocation.
3) Shock the price and trace labor movement.
4) Then say: "Now the politics: who gains, who loses?"

## 10. Common pitfalls
- Confusing short run (specific factors) with long run (factor mobility).
- Saying labor gains for sure. It does not.
- Forgetting that price changes move labor allocation and MPLs.

## 11. One-paragraph summary
The Specific-Factors model describes a short-run economy where labor can move across sectors but capital and land cannot. Wages equalize across sectors, so labor allocation is pinned down by $P_M MPL_M = P_A MPL_A$. A rise in the price of the manufacturing good draws labor into M, raises wages by less than the price increase, and produces clear distributional effects: the specific factor in the expanding sector gains, the specific factor in the contracting sector loses, and labor’s real wage effect is ambiguous. This is the workhorse model for understanding trade politics in the short run.
