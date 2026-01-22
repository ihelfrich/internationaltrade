/**
 * Economic Models: Ricardian, Specific Factors, Gravity
 */

const EconomicModels = {
  /**
   * RICARDIAN MODEL
   * Comparative advantage based on labor productivity
   */
  ricardian: {
    /**
     * Calculate opportunity costs and comparative advantage
     * aLC: labor to make cloth in home, aLW: labor to make wine in home, etc.
     */
    analyzeComparativeAdvantage(aLC, aLW, aLCs, aLWs) {
      const oc_home = aLW / aLC;  // opportunity cost of cloth at home
      const oc_foreign = aLWs / aLCs;  // opportunity cost of cloth abroad

      return {
        oc_home,
        oc_foreign,
        home_exports: oc_home < oc_foreign ? "Cloth" : "Wine",
        foreign_exports: oc_home < oc_foreign ? "Wine" : "Cloth",
        trade_price_range: [Math.min(oc_home, oc_foreign), Math.max(oc_home, oc_foreign)]
      };
    },

    /**
     * Generate production possibility frontier (PPF)
     */
    generatePPF(labor_endowment, aCommodity) {
      // Max quantity = labor_endowment / labor_needed
      const max = labor_endowment / aCommodity;
      return { max, labor_endowment, a: aCommodity };
    },

    /**
     * Ricardian visualization data
     */
    createVisualization(config) {
      const {
        labor_home = 100,
        labor_foreign = 100,
        aLC = 1,   // labor per cloth at home
        aLW = 2,   // labor per wine at home
        aLCs = 2,  // labor per cloth abroad
        aLWs = 1   // labor per wine abroad
      } = config;

      const ca = this.analyzeComparativeAdvantage(aLC, aLW, aLCs, aLWs);
      const ppf_home = this.generatePPF(labor_home, aLC);
      const ppf_home_wine = this.generatePPF(labor_home, aLW);
      const ppf_foreign = this.generatePPF(labor_foreign, aLCs);
      const ppf_foreign_wine = this.generatePPF(labor_foreign, aLWs);

      // Trade price (somewhere between opportunity costs)
      const trade_price = (ca.trade_price_range[0] + ca.trade_price_range[1]) / 2;

      return {
        ca,
        ppf_home,
        ppf_home_wine,
        ppf_foreign,
        ppf_foreign_wine,
        trade_price
      };
    }
  },

  /**
   * SPECIFIC FACTORS MODEL
   * Distributional effects with immobile factors
   */
  specificFactors: {
    /**
     * Production function: Q = min(K, L/a)
     * K: capital, L: labor, a: labor intensity
     */
    production(capital, labor, a_labor) {
      return Math.min(capital, labor / a_labor);
    },

    /**
     * Calculate factor returns based on prices and marginal products
     * MRPL = price * MPL
     */
    factorReturns(q_cloth, q_wine, p_cloth, p_wine, labor_total, K_cloth, K_wine) {
      // Marginal products (simplified: 1/a for each sector)
      const output = {
        cloth: q_cloth,
        wine: q_wine
      };

      // Labor allocation (wage should equalize across sectors)
      // Value of marginal product of labor in each sector
      const vmpl_cloth = p_cloth * (1 / Math.sqrt(q_cloth + 1));
      const vmpl_wine = p_wine * (1 / Math.sqrt(q_wine + 1));

      // Capital returns (rent)
      const rent_cloth = p_cloth * (1 / Math.sqrt(K_cloth + 1));
      const rent_wine = p_wine * (1 / Math.sqrt(K_wine + 1));

      return {
        wage: Math.min(vmpl_cloth, vmpl_wine),
        rent_cloth,
        rent_wine
      };
    },

    /**
     * Analyze effect of tariff on specific factors
     */
    tariffEffect(initial_price, tariff_amount, labor_intensive) {
      const new_price = initial_price + tariff_amount;
      const price_change = new_price - initial_price;

      return {
        initial_price,
        new_price,
        price_change,
        factor_affected: labor_intensive ? "labor in protected sector" : "capital in protected sector",
        factor_gains: price_change > 0,  // true if gains
        other_sector_impact: -price_change * 0.5  // approximate decline in other sector
      };
    }
  },

  /**
   * GRAVITY MODEL
   * Trade flows based on size and distance
   */
  gravity: {
    /**
     * Gravity equation: Xij = A * (Yi * Yj) / Dij^b
     * Yi, Yj: GDP of countries i, j
     * Dij: distance between them
     * b: distance elasticity (typically 0.9-1.5)
     */
    tradeFlow(gdp_i, gdp_j, distance, distance_elasticity = 1.2, constant = 1) {
      return constant * (gdp_i * gdp_j) / Math.pow(distance, distance_elasticity);
    },

    /**
     * Calculate bilateral trade intensity
     */
    tradeIntensity(actual_trade, gravity_prediction) {
      return actual_trade / gravity_prediction;
    },

    /**
     * Generate gravity model visualization data
     */
    generateTradeMatrix(countries, distance_elasticity = 1.2) {
      // countries: [{name, gdp, bilateral_distances: {country: distance}}]
      const trade_matrix = [];

      for (let i = 0; i < countries.length; i++) {
        for (let j = i + 1; j < countries.length; j++) {
          const trade = this.tradeFlow(
            countries[i].gdp,
            countries[j].gdp,
            countries[i].bilateral_distances[countries[j].name],
            distance_elasticity
          );

          trade_matrix.push({
            from: countries[i].name,
            to: countries[j].name,
            gdp_i: countries[i].gdp,
            gdp_j: countries[j].gdp,
            distance: countries[i].bilateral_distances[countries[j].name],
            predicted_trade: trade
          });
        }
      }

      return trade_matrix;
    }
  }
};
