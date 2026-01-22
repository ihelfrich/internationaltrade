# Gravity Model of Trade

## Why Gravity Works
The gravity model is the empirical workhorse of international trade. It explains bilateral trade flows as increasing in economic size and decreasing in trade costs.

**Baseline form**:

- \(X_{ij} = G \cdot Y_i^a Y_j^b / D_{ij}^c\)

Where:
- \(X_{ij}\): exports from i to j
- \(Y_i, Y_j\): economic size (GDP or income)
- \(D_{ij}\): distance or trade cost proxy

## Structural Gravity
The modern formulation embeds gravity in general equilibrium with multilateral resistance:

\[X_{ij} = \frac{Y_i E_j}{Y_W} \left(\frac{\tau_{ij}}{P_i P_j}\right)^{1-\sigma}\]

- \(\tau_{ij}\): bilateral trade costs
- \(P_i, P_j\): multilateral resistance terms
- \(\sigma\): elasticity of substitution

**Key implication**: bilateral trade depends on *relative* trade costs, not absolute distance alone.

## Estimation Best Practice
- Exporter–time and importer–time fixed effects (multilateral resistance).
- PPML estimator to handle zeros and heteroskedasticity.
- Rich bilateral controls (contiguity, language, colonial ties, FTAs).

## Helfrich (2024): Nightlights + Population-Weighted Distance
Traditional distance measures are static and city-based. The dissertation introduces a **time-varying** distance measure using:
- **VIIRS nightlights** (origin economic activity)
- **LandScan population** (destination demand)

Weighted centroid for unit i:

\[\tilde{c}_i = \frac{\sum_k w_{ik} \cdot c_{ik}}{\sum_k w_{ik}}\]

Distance between i and j is the great-circle distance between weighted centroids.

### Empirical Evidence (Summary)
- Applied to **U.S. interstate trade (2017)** and **global panel trade (2015–2020)**.
- Distance coefficient remains **negative and significant**.
- Magnitudes align with Head & Mayer (2010) distances.
- **RMSEs and standard errors are small**, indicating stable fit.
- One distance measure works for intra- and inter-regional trade.

## Teaching Notes
- Start with the baseline gravity intuition.
- Introduce multilateral resistance and why fixed effects matter.
- Use the nightlights/population distance to show how measurement improves fit.

## References
- Tinbergen (1962); Pöyhönen (1963)
- Anderson & van Wincoop (2003)
- Santos Silva & Tenreyro (2006)
- Head & Mayer (2010)
- Helfrich dissertation (2024), Chapter 2
