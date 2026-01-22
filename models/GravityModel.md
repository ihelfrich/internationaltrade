# The Gravity Model of International Trade

> **Big Idea**: Bilateral trade between countries is proportional to their economic sizes (GDP) and inversely proportional to the distance between them - just like Newton's gravity law. This is one of the most robust empirical regularities in economics, explaining 60+ years of trade data.

---

## Core Principles

### Foundation
- **Empirical Workhorse**: Most successful empirical model in international economics (Leamer & Levinsohn, 1995)
- **Robust Prediction**: Explains 60-80% of variation in bilateral trade flows
- **Theoretical Grounding**: Multiple theoretical foundations (Anderson, Eaton-Kortum, Chaney, Melitz)
- **Policy Applications**: Used by WTO, World Bank, central banks for trade policy analysis
- **Universal Applicability**: Works across time periods, country pairs, and product categories

### Historical Development
- **Tinbergen (1962)**: First application of gravity to trade
- **Pöyhönen (1963)**: Independent development of gravity framework
- **Anderson (1979)**: First theoretical microfoundation
- **Bergstrand (1985-1989)**: Monopolistic competition foundation
- **Eaton & Kortum (2002)**: Ricardian foundations with technology differences
- **Anderson & van Wincoop (2003)**: Structural gravity with multilateral resistance
- **Chaney (2008)**: Extensive margin and firm heterogeneity
- **Helfrich & Gonchar (2025)**: Time-varying distance with nightlights and population

---

## The Basic Gravity Equation

### Intuitive Form
The simplest gravity equation:

**X_{ij} = G · (Y_i · Y_j) / D_{ij}^β**

Where:
- X_{ij} = exports from country i to country j
- Y_i = GDP of exporting country i
- Y_j = GDP of importing country j
- D_{ij} = distance between i and j
- β = distance elasticity (typically 0.9 to 1.5)
- G = gravitational constant (captures world trade openness)

**Analogy to Physics**:
Newton's gravity: F = G(M₁M₂)/D²
Trade gravity: X = G(Y₁Y₂)/Dᵝ

### Log-Linear Estimation Form
Taking logs yields the standard estimating equation:

**ln(X_{ij}) = α + β₁ln(Y_i) + β₂ln(Y_j) + β₃ln(D_{ij}) + ε_{ij}**

**Expected signs**:
- β₁ > 0 (larger exporter → more exports)
- β₂ > 0 (larger importer → more imports)
- β₃ < 0 (greater distance → less trade)

### Augmented Gravity
Extended version includes additional variables:

**ln(X_{ij}) = α + β₁ln(Y_i) + β₂ln(Y_j) + β₃ln(D_{ij})**
**+ β₄(Common Border) + β₅(Common Language)**
**+ β₆(Colonial Ties) + β₇(FTA) + ε_{ij}**

**Trade facilitators** (positive effects):
- Common border
- Common language
- Colonial history
- Free trade agreements (FTAs)
- Common currency
- Legal system similarity

**Trade barriers** (negative effects):
- Distance
- Tariffs
- Non-tariff barriers
- Regulatory differences
- Cultural distance

---

## Theoretical Foundations

### 1. Anderson (1979): CES Preferences
First rigorous microfoundation using:
- **Constant Elasticity of Substitution** (CES) preferences
- **Armington assumption**: Products differentiated by country of origin
- **Trade costs**: Iceberg costs (fraction of goods "melts" in transit)

**Key result**: Bilateral trade proportional to:
- Exporter's GDP (supply)
- Importer's GDP (demand)
- Inverse of bilateral trade costs

### 2. Eaton & Kortum (2002): Ricardian Model
Technology-based foundation:
- **Technology differences** across countries (Ricardian)
- **Fréchet distribution** of productivities
- **Comparative advantage** emerges endogenously

**Trade equation**:
X_{ij} / X_j = (T_i(c_i d_{ij})^{-θ}) / (Σ_k T_k(c_k d_{kj})^{-θ})

Where:
- T_i = technology level of country i
- c_i = input costs in country i
- d_{ij} = bilateral trade costs
- θ = trade elasticity parameter

### 3. Anderson & van Wincoop (2003): Multilateral Resistance
**Major innovation**: Bilateral trade depends not just on bilateral costs, but on:
- **Outward multilateral resistance (OMR)**: Average trade barrier exporter faces
- **Inward multilateral resistance (IMR)**: Average trade barrier importer faces

**Structural gravity equation**:
X_{ij} = (Y_i Y_j / Y^W) · (t_{ij} / (Π_i P_j))^{1-σ}

Where:
- Y^W = world GDP
- t_{ij} = bilateral trade cost
- Π_i = outward multilateral resistance of i
- P_j = inward multilateral resistance of j
- σ = elasticity of substitution

**Key insight**: "Border puzzle" resolved - trade within countries is much larger than between countries because of multilateral resistance, not just bilateral barriers.

**Multilateral resistance terms**:
Π_i^{1-σ} = Σ_j (θ_j / P_j^{1-σ}) t_{ij}^{1-σ}
P_j^{1-σ} = Σ_i (θ_i / Π_i^{1-σ}) t_{ij}^{1-σ}

Where θ_i, θ_j are GDP shares.

### 4. Chaney (2008): Extensive Margin
Adds firm heterogeneity (à la Melitz 2003):
- **Intensive margin**: How much each firm exports
- **Extensive margin**: How many firms export
- **Selection**: Only most productive firms export to distant markets

**Result**: Distance elasticity depends on:
- Firm productivity distribution
- Fixed costs of exporting
- Variable trade costs

---

## Measuring Distance: From Simple to Sophisticated

### Traditional Distance Measures

1. **Great Circle Distance**
   - Shortest path on Earth's surface between capitals or centroids
   - Formula: d = r · arccos(sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos(λ₂-λ₁))
   - Simple but assumes all economic activity at single point

2. **Capital-to-Capital Distance**
   - Distance between national capitals
   - Easy to compute, widely used
   - **Problem**: Capitals may not represent economic centers (e.g., Australia: Canberra vs Sydney/Melbourne)

3. **Population-Weighted Distance**
   - Weights distances by population in multiple cities
   - d_{ij} = Σ_k Σ_l (pop_k/pop_i)(pop_l/pop_j) d_{kl}
   - Better captures spatial distribution of economic activity

### Helfrich & Gonchar (2025): Nightlights Innovation

**Novel Contribution**: Time-varying distance measures using satellite data

**Key Innovation**:
Traditional measures are **time-invariant** - assume economic geography is fixed.
But economic activity shifts over time!

**Their Approach**:
1. **Nighttime lights data**: Satellite images showing light intensity
   - Proxy for economic activity (factories, cities, commercial areas)
   - Annual data from 1992-present
   - High spatial resolution (0.5-1 km grid)

2. **Population rasters**: Gridded population data
   - Annual updates of population distribution
   - Captures urbanization, migration, regional development

3. **Dynamic centroids**: Calculate weighted centers each year
   - Nightlights-weighted centroid: Center of economic production
   - Population-weighted centroid: Center of consumption/demand
   - Directional measures: Different centroids for exports vs imports

**Formula**:
Centroid_i^t = (Σ_pixels weights_pixel^t · coordinates_pixel) / (Σ_pixels weights_pixel^t)

Where weights are nightlights intensity or population

**Advantages**:
- **Captures structural transformation**: As countries develop, economic centers shift
- **China example**: Coastal development → centroid moved east over time
- **Time-varying**: Reflects actual changes in economic geography
- **Directional**: Different origins for exports (production) vs imports (consumption)
- **Improved predictions**: Better fit to actual trade data than static measures

**Empirical Results** (Helfrich & Gonchar 2025):
- Nightlights-based distance improves gravity model R² by 3-5%
- Particularly important for:
  - Large countries with dispersed economic activity
  - Developing countries with rapid urbanization
  - Long time series (captures structural change)

---

## Estimation Methods

### 1. OLS with Logs
**Traditional approach**:
ln(X_{ij}) = α + β₁ln(Y_i) + β₂ln(Y_j) + β₃ln(D_{ij}) + controls + ε_{ij}

**Problems**:
- **Zero trade flows**: ln(0) undefined - drops many observations
- **Heteroskedasticity**: Error variance related to trade volume
- **Selection bias**: Zeros are not random
- **Jensen's inequality**: E[ln X] ≠ ln E[X]

### 2. Poisson Pseudo-Maximum Likelihood (PPML)
**Modern standard** (Santos Silva & Tenreyro 2006):

**Specification**:
X_{ij} = exp(β₁ln(Y_i) + β₂ln(Y_j) + β₃ln(D_{ij}) + controls) · ε_{ij}

**Advantages**:
- ✓ Handles zeros naturally
- ✓ Consistent under heteroskedasticity
- ✓ Preserves adding-up constraints
- ✓ Unbiased estimates even with log-normal errors

**Estimation**: Maximize Poisson likelihood
L = Σ_{ij} [X_{ij}·ln(μ_{ij}) - μ_{ij} - ln(X_{ij}!)]

Where μ_{ij} = E[X_{ij}] = exp(β'Z_{ij})

### 3. Structural Gravity with Fixed Effects
**Anderson & van Wincoop implementation**:

**Specification**:
X_{ij} = exp(α_i + γ_j + β'Z_{ij}) · ε_{ij}

Where:
- α_i = exporter fixed effect (captures Y_i/Π_i)
- γ_j = importer fixed effect (captures Y_j/P_j)
- Z_{ij} = bilateral variables (distance, FTA, etc.)

**Key advantage**: Fixed effects automatically control for multilateral resistance!

**No need to compute** Π_i and P_j explicitly - absorbed by FEs.

---

## Empirical Regularities

### Typical Parameter Estimates

From meta-analysis of 1000+ studies:

| Variable | Typical Estimate | Range |
|----------|------------------|-------|
| ln(GDP_exporter) | +1.0 | [0.8, 1.2] |
| ln(GDP_importer) | +1.0 | [0.8, 1.2] |
| ln(Distance) | -1.0 | [-0.7, -1.5] |
| Common border | +0.5 | [0.2, 0.8] |
| Common language | +0.4 | [0.2, 0.7] |
| Colonial ties | +0.9 | [0.5, 1.5] |
| FTA | +0.4 | [0.2, 1.0] |
| Common currency | +0.6 | [0.3, 1.2] |

**Interpretation of log coefficients**:
- Distance -1.0: Doubling distance reduces trade by 50%
- FTA +0.4: FTA increases trade by 49% (e^0.4 - 1 ≈ 0.49)

### The Distance Puzzle
**Puzzle**: Distance coefficient has not decreased over time despite:
- Falling transport costs
- Communication revolution
- Trade liberalization

**Explanations** (Disdier & Head 2008):
1. **Composition shift**: More differentiated goods traded (higher distance sensitivity)
2. **Increased trade in intermediates**: Multiple border crossings multiply distance effects
3. **Quality upgrading**: Distant partners trade higher-quality goods (less price-sensitive)
4. **Time costs**: Time in transit increasingly important (perishable, JIT production)

---

## Applications

### 1. Trade Policy Analysis
**Question**: What is the effect of a Free Trade Agreement (FTA)?

**Method**: Compare actual trade with counterfactual (no FTA)

**Steps**:
1. Estimate gravity equation with FTA dummy
2. Predicted trade with FTA: X_{ij}^FTA = exp(β'Z_{ij} + γ·FTA)
3. Predicted trade without FTA: X_{ij}^{No FTA} = exp(β'Z_{ij})
4. **Trade creation**: X_{ij}^FTA - X_{ij}^{No FTA}

**Example**: NAFTA increased US-Mexico trade by ~50% (controlling for other factors)

### 2. Brexit Impact Assessment
**Scenario**: UK leaves EU single market

**Gravity prediction**:
- EU-UK trade faces new barriers (tariffs, customs, regulations)
- Barrier equivalent to distance increase or losing FTA benefit
- Gravity coefficient on FTA ≈ 0.5 → trade falls by ~40%

**Actual outcome** (post-2021): UK-EU trade fell 20-25%, consistent with gravity predictions

### 3. Gains from Trade Liberalization
**General Equilibrium** (Arkolakis, Costinot, Rodríguez-Clare 2012):

**Welfare gains from trade**:
ΔW/W = (λ_domestic)^{1/ε}

Where:
- λ_domestic = share of domestic spending on domestic goods
- ε = trade elasticity (typically 4-8)

**Gravity role**: Estimate ε from distance coefficient!

**Result**: Countries with high trade share (low λ_domestic) gain most from openness

---

## Numerical Example: US-Mexico Trade

**Data (2023)**:
- Y_US = $27 trillion
- Y_Mexico = $1.8 trillion
- Distance (DC to Mexico City) = 1,887 km
- Common border: Yes
- FTA (USMCA): Yes
- Common language: No

**Gravity prediction**:

ln(X_{US→MX}) = 10 + 1.0·ln(27000) + 1.0·ln(1800) - 1.0·ln(1887) + 0.5·(Border) + 0.4·(FTA)

= 10 + 10.20 + 7.50 - 7.54 + 0.5 + 0.4
= 21.06

**Predicted exports**: X_{US→MX} = exp(21.06) = $1.44 billion (scaled)

**Actual US exports to Mexico (2023)**: ~$320 billion

**With proper scaling constant**: Gravity explains observed magnitude

**Counterfactual - No USMCA**:
ln(X) = 21.06 - 0.4 = 20.66
X = exp(20.66) = $1.06 billion (scaled)

**Trade creation from USMCA**: (1.44 - 1.06)/1.06 = 36% increase

---

## Extensions and Modern Developments

### 1. Sectoral Gravity
Different sectors have different distance sensitivities:
- **Agricultural products**: High distance elasticity (perishable)
- **Manufactured goods**: Medium distance elasticity
- **Services**: Mixed (tourism: high; digital: low)

### 2. Firm-Level Gravity
Incorporating Melitz (2003) heterogeneous firms:
- **Extensive margin**: Number of exporting firms
- **Intensive margin**: Exports per firm
- **Selection**: Only productive firms export to distant markets

### 3. Global Value Chains
Trade in tasks, not just goods:
- **Value-added trade**: Tracking domestic content in exports
- **Forward/backward linkages**: Position in supply chains
- **Distance effects amplified**: Multiple border crossings

### 4. Digital Trade and Services
New challenges:
- **Zero distance for some services**: Software, consulting
- **Regulatory distance**: Data localization, privacy laws
- **Platform effects**: Amazon, Alibaba reduce trade costs

---

## Limitations and Criticisms

### Theoretical Critiques
1. **Black box**: Multiple theories generate same gravity equation
2. **Structural parameters**: Hard to identify deep parameters (preferences, technology)
3. **General equilibrium**: Partial equilibrium nature misses feedback effects

### Empirical Challenges
1. **Omitted variables**: Unobserved bilateral factors
2. **Reverse causality**: Trade affects GDP (simultaneity bias)
3. **Measurement error**: GDP, distance, trade data quality
4. **Missing data**: Informal trade, transfer pricing

### Policy Limitations
1. **Extrapolation**: Predictions for large policy changes uncertain
2. **Dynamic effects**: Gravity is static; ignores investment, growth effects
3. **Heterogeneity**: Average effects may not apply to specific country pairs

---

## Gravity vs Other Trade Models

| Feature | Gravity | Ricardian | HO | New Trade |
|---------|---------|-----------|-----|-----------|
| **Focus** | Bilateral volumes | Comparative advantage | Factor endowments | Firm heterogeneity |
| **Empirical success** | Excellent | Moderate | Mixed | Good |
| **Policy applications** | Extensive | Limited | Moderate | Growing |
| **Data requirements** | Moderate | Low | High | Very high |
| **Microfoundations** | Multiple | Clear | Clear | Clear |
| **Predictive power** | High | Medium | Medium | High |

**Complementarity**: Gravity predicts *volumes*; other models predict *composition*

---

## Key Takeaways

1. **Empirical Workhorse**: Gravity explains 60-80% of bilateral trade variation
2. **Simple but Powerful**: GDP and distance are primary determinants
3. **Theoretical Grounding**: Multiple theories converge to gravity equation
4. **Policy Tool**: Essential for trade agreement analysis, Brexit assessments
5. **Evolving Measures**: Helfrich-Gonchar nightlights innovation improves accuracy
6. **Estimation Matters**: PPML with fixed effects is modern best practice
7. **Multilateral Resistance**: Bilateral trade depends on all trading partners
8. **Robust Over Time**: Distance effects persist despite falling transport costs

---

## References

### Foundational Papers
- **Tinbergen, J. (1962)**: "Shaping the World Economy", New York: Twentieth Century Fund
- **Pöyhönen, P. (1963)**: "A Tentative Model for the Volume of Trade between Countries", Weltwirtschaftliches Archiv
- **Anderson, J.E. (1979)**: "A Theoretical Foundation for the Gravity Equation", American Economic Review

### Modern Theory
- **Eaton, J. & Kortum, S. (2002)**: "Technology, Geography, and Trade", Econometrica
- **Anderson, J.E. & van Wincoop, E. (2003)**: "Gravity with Gravitas", American Economic Review
- **Chaney, T. (2008)**: "Distorted Gravity", American Economic Review

### Estimation
- **Santos Silva, J.M.C. & Tenreyro, S. (2006)**: "The Log of Gravity", Review of Economics and Statistics
- **Head, K. & Mayer, T. (2014)**: "Gravity Equations: Workhorse, Toolkit, and Cookbook", in Handbook of International Economics

### Recent Innovation
- **Helfrich, I. & Gonchar, E. (2025)**: "Trade in the Spotlight: Enhancing Gravity Model Predictions with Nightlights and Population-Weighted Distance Measures", SSRN Working Paper

### Surveys
- **Head, K. & Mayer, T. (2015)**: "Gravity Equations: Toolkit, Cookbook, Workhorse", Handbook of International Economics Vol. 4
- **Yotov, Y.V. et al. (2016)**: "An Advanced Guide to Trade Policy Analysis: The Structural Gravity Model", WTO/UNCTAD

---

## Problem-Solving Framework

### Predicting Bilateral Trade
1. Collect data: Y_i, Y_j, D_{ij}, other bilateral variables
2. Choose specification: Basic or augmented gravity
3. Estimate using PPML with fixed effects
4. Interpret coefficients (elasticities)
5. Predict trade: X_{ij} = exp(β'Z_{ij})

### Evaluating Trade Policies
1. Estimate baseline gravity with policy dummy
2. Compute counterfactual (set policy = 0)
3. Calculate trade creation/diversion
4. Welfare analysis (if general equilibrium model)

### Improving Predictions
1. Use time-varying distance (Helfrich-Gonchar approach)
2. Include sector-specific effects
3. Control for multilateral resistance (fixed effects)
4. Handle zeros properly (PPML)
5. Check for heterogeneity across country pairs

---

**Last Updated**: January 2026
**Status**: Comprehensive reference including latest research (Helfrich & Gonchar 2025)
