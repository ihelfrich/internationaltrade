# Key Equations: International Trade Models

Quick reference guide for all important equations across the three trade models.

---

## Ricardian Model

### Production
- **Labor constraint**: `aₗc · Qc + aₗw · Qw ≤ L`
- **PPF equation**: `Qc = (L/aₗc) - (aₗw/aₗc) · Qw`

### Opportunity Cost
- **Opportunity cost of wine**: `OCw = aₗw/aₗc` (in terms of cloth)
- **Opportunity cost of cloth**: `OCc = aₗc/aₗw` (in terms of wine)

### Comparative Advantage
- **Home has CA in cloth if**: `aₗc/aₗw < aₗc*/aₗw*`
- **Equivalently**: `(Pw/Pc)autarky,Home < (Pw/Pc)autarky,Foreign`

### Prices and Wages
- **Autarky relative price**: `Pw/Pc = aₗw/aₗc`
- **Wage**: `w = Pc/aₗc = Pw/aₗw`
- **Real wage in cloth**: `w/Pc = 1/aₗc`
- **Real wage in wine**: `w/Pw = 1/aₗw`

### Trade Equilibrium
- **Price range**: `(Pw/Pc)Home < (Pw/Pc)trade < (Pw/Pc)Foreign`
- **Budget constraint**: `Pc·Dc + Pw·Dw = Pc·Qc + Pw·Qw`

---

## Specific Factors Model

### Production Functions
- **Manufacturing**: `Qₘ = F(K, Lₘ)`
- **Agriculture**: `Qₐ = G(T, Lₐ)`
- **Common functional form**: `Q = A · K^α · L^(1-α)` (Cobb-Douglas)

### Marginal Products
- **MPL in manufacturing**: `MPLₘ = ∂Qₘ/∂Lₘ > 0`
- **MPL in agriculture**: `MPLₐ = ∂Qₐ/∂Lₐ > 0`
- **Diminishing returns**: `∂²Q/∂L² < 0`

### Labor Market Equilibrium
- **Wage equalization**: `Pₘ · MPLₘ = Pₐ · MPLₐ = w`
- **Labor constraint**: `Lₘ + Lₐ = L`

### Factor Returns
- **Nominal wage**: `w = Pₘ · MPLₘ = Pₐ · MPLₐ`
- **Real wage in M**: `w/Pₘ = MPLₘ`
- **Real wage in A**: `w/Pₐ = MPLₐ`
- **Capital return**: `r = (Pₘ·Qₘ - w·Lₘ)/K`
- **Land return**: `rₜ = (Pₐ·Qₐ - w·Lₐ)/T`

### PPF
- **Slope of PPF**: `-MPLₐ/MPLₘ`
- **Opportunity cost**: `MCₐ/MCₘ = MPLₘ/MPLₐ`

### Cobb-Douglas Specific
- **Production**: `Qₘ = K^α · Lₘ^(1-α)`
- **MPL**: `MPLₘ = (1-α) · Qₘ/Lₘ = (1-α) · K^α · Lₘ^(-α)`

---

## Heckscher-Ohlin Model

### Production Functions
- **Cloth**: `Qc = Fc(Kc, Lc)`
- **Food**: `Qf = Ff(Kf, Lf)`
- **Constant returns to scale**: `F(λK, λL) = λF(K, L)`

### Factor Intensities
- **Cloth is capital-intensive if**: `Kc/Lc > Kf/Lf`
- **At all factor prices**: No factor intensity reversals

### Factor Endowments
- **Physical definition**: Home is K-abundant if `K/L > K*/L*`
- **Price definition**: Home is K-abundant if `(r/w)autarky > (r/w*)autarky`

### Zero-Profit Conditions
- **Cloth**: `Pc = ac,k · r + ac,l · w`
- **Food**: `Pf = af,k · r + af,l · w`

where `ac,k, ac,l` are unit factor requirements (cost-minimizing inputs per unit output).

### Factor Market Clearing
- **Capital**: `Kc + Kf = K`
- **Labor**: `Lc + Lf = L`

### Heckscher-Ohlin Theorem
- If `K/L > K*/L*` and cloth is K-intensive
- Then Home exports cloth, Foreign exports food

### Stolper-Samuelson Theorem
If Pc increases (Pf constant):
- **Capital return rises in real terms**: `d(r/Pc)/dPc > 0` and `d(r/Pf)/dPc > 0`
- **Wage falls in real terms**: `d(w/Pc)/dPc < 0` and `d(w/Pf)/dPc < 0`

**Magnification effect**:
```
%Δr > %ΔPc > %ΔPf = 0 > %Δw
```

### Factor Price Equalization
Under free trade with incomplete specialization:
- **Wage equalization**: `w = w*`
- **Rental rate equalization**: `r = r*`

### Rybczynski Theorem
At constant prices, if K increases:
- **Cloth output**: `dQc/dK > Qc/K` (more than proportional increase)
- **Food output**: `dQf/dK < 0` (absolute decrease)

**Mathematical form**:
```
%ΔQc > %ΔK > 0 > %ΔQf
```

### Magnification Effects Summary
**Stolper-Samuelson** (price → factor price):
```
%Δr > %ΔPc > %ΔPf > %Δw
```

**Rybczynski** (endowment → output):
```
%ΔQc > %ΔK > %ΔQf
```

---

## Common Functional Forms

### Cobb-Douglas Production
**General form**: `Q = A · K^α · L^(1-α)`

**Properties**:
- Output elasticity of capital: α
- Output elasticity of labor: (1-α)
- Constant returns to scale: α + (1-α) = 1

**Marginal products**:
- `MPK = α · Q/K`
- `MPL = (1-α) · Q/L`

**Cost minimization**:
- `K/L = (α/(1-α)) · (w/r)`

### CES Production
**General form**: `Q = A[αK^ρ + (1-α)L^ρ]^(1/ρ)`

**Properties**:
- Elasticity of substitution: σ = 1/(1-ρ)
- Special cases:
  - ρ → 0: Cobb-Douglas
  - ρ = -∞: Leontief (fixed proportions)
  - ρ = 1: Linear (perfect substitutes)

---

## Utility Functions

### Cobb-Douglas Utility
**Form**: `U = C^α · F^(1-α)`

**Demand functions** (with income I):
- `Pc·C = α·I` (constant expenditure share)
- `Pf·F = (1-α)·I`

**Relative demand**:
- `C/F = (α/(1-α)) · (Pf/Pc)`

### CES Utility
**Form**: `U = [αC^ρ + (1-α)F^ρ]^(1/ρ)`

**Properties**:
- Elasticity of substitution: σ = 1/(1-ρ)

---

## Welfare Measures

### Consumer Surplus
- `CS = ∫₀^Q P(q)dq - P·Q`

### Producer Surplus
- `PS = P·Q - ∫₀^Q MC(q)dq`

### Deadweight Loss (from tariff)
- `DWL = ½·t·(ΔM)`

where t = tariff, ΔM = reduction in imports

### Terms of Trade
- `TOT = Px/Pm` (export price/import price)

### Real Income
- Autarky: `I/P = Q`
- Trade: `I = Px·Qx + Pm·Qm` where production ≠ consumption

---

## Elasticities

### Price Elasticity of Demand
- `ε = -(∂Q/∂P) · (P/Q)`

### Cross-Price Elasticity
- `εxy = (∂Qx/∂Py) · (Py/Qx)`

### Income Elasticity
- `εI = (∂Q/∂I) · (I/Q)`

### Elasticity of Substitution
- `σ = d ln(K/L) / d ln(w/r)`

---

## Growth and Trade

### Balanced Growth
- If K and L both grow at rate g:
- Output grows at rate g
- Factor prices unchanged
- Production composition unchanged

### Biased Growth
- If only K grows:
- **Rybczynski effect**: K-intensive sector expands, L-intensive contracts
- At world prices: terms of trade may worsen (large country)

### Immiserizing Growth
- Growth worsens terms of trade sufficiently that welfare falls
- Requires: large country, very biased growth, inelastic demand

---

## Trade Policy Equations

### Tariff
- **Domestic price**: `Pd = Pw(1 + t)` where t = tariff rate
- **Tariff revenue**: `TR = t·Pw·M`
- **Effective protection**: `g = (VAd - VAw)/VAw`

### Quota
- **Quota rent**: `R = (Pd - Pw)·Q` where Q = quota amount

### Export Subsidy
- **Domestic price**: `Pd = Pw - s` where s = subsidy
- **Subsidy cost**: `SC = s·X`

---

## General Equilibrium Conditions

### Goods Market Clearing
- `Qc = Dc + Dc*` (world supply = world demand)
- `Qf = Df + Df*`

### Trade Balance
- `Px·X = Pm·M` (exports = imports in value)

### Walras' Law
- If n-1 markets clear, nth market clears automatically

---

## Useful Calculus

### Elasticity Formula
- `ε = d ln Q / d ln P`

### Percentage Change Approximation
- `%ΔX ≈ Δ ln X = d ln X`

### Envelope Theorem
- `∂V*/∂α = ∂L/∂α` where V* is optimized value function

### Total Differential
- `dw = (∂w/∂Pₘ)dPₘ + (∂w/∂Pₐ)dPₐ`

---

## Quick Reference: Who Gains from Trade?

### Ricardian
- Everyone gains (or at least doesn't lose)

### Specific Factors
- **Gain**: Specific factor in export sector
- **Lose**: Specific factor in import sector
- **Ambiguous**: Mobile factor

### Heckscher-Ohlin
- **Gain**: Abundant factor
- **Lose**: Scarce factor

---

**Last Updated**: January 2026

**Tip**: Save this page for quick reference during problem sets and exams!
