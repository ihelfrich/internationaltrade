/**
 * D3 Utilities for Supply & Demand visualizations
 * Handles curve generation, scales, and rendering
 */

const D3Utils = {
  /**
   * Generate supply curve points: P = P0 + elasticity * Q
   */
  generateSupplyCurve(q_range, p0, elasticity, shift = 0) {
    return d3.range(q_range[0], q_range[1], 0.1).map(q => ({
      quantity: q,
      price: Math.max(0, p0 + elasticity * q + shift)
    }));
  },

  /**
   * Generate demand curve points: P = P0 - elasticity * Q
   */
  generateDemandCurve(q_range, p0, elasticity, shift = 0) {
    return d3.range(q_range[0], q_range[1], 0.1).map(q => ({
      quantity: q,
      price: Math.max(0, p0 - elasticity * q + shift)
    }));
  },

  /**
   * Find market equilibrium: Qs = Qd
   * Supply: P = p0s + es * Q
   * Demand: P = p0d - ed * Q
   * Equilibrium: p0s + es*Q = p0d - ed*Q => Q = (p0d - p0s)/(es + ed)
   */
  findEquilibrium(p0s, es, p0d, ed) {
    const q_eq = (p0d - p0s) / (es + ed);
    const p_eq = p0s + es * q_eq;
    return { quantity: Math.max(0, q_eq), price: Math.max(0, p_eq) };
  },

  /**
   * Calculate consumer surplus (area under demand curve above price)
   */
  consumerSurplus(eq, p0d, ed) {
    return 0.5 * eq.quantity * (p0d - eq.price);
  },

  /**
   * Calculate producer surplus (area above supply curve below price)
   */
  producerSurplus(eq, p0s, es) {
    return 0.5 * eq.quantity * (eq.price - p0s);
  },

  /**
   * Calculate DWL from tariff
   * DWL = 0.5 * change_in_Q * tariff_amount
   */
  deadWeightLoss(eq_before, eq_after, tariff) {
    const dq = Math.abs(eq_before.quantity - eq_after.quantity);
    return 0.5 * dq * tariff;
  },

  /**
   * Create SVG visualization of supply/demand
   */
  createSandDVisualization(containerId, config) {
    const {
      supply_p0 = 2,
      supply_elasticity = 0.3,
      demand_p0 = 20,
      demand_elasticity = 0.5,
      q_range = [0, 30],
      p_range = [0, 25],
      policy = null,  // {type: 'tariff'|'subsidy', amount: value}
      large_economy = false,
      scenario_title = "Supply & Demand"
    } = config;

    // Create supply and demand curves
    const supply = D3Utils.generateSupplyCurve(q_range, supply_p0, supply_elasticity);
    const demand = D3Utils.generateDemandCurve(q_range, demand_p0, demand_elasticity);

    // Find equilibrium without policy
    const eq = D3Utils.findEquilibrium(supply_p0, supply_elasticity, demand_p0, demand_elasticity);

    // Apply policy if specified
    let eq_policy = eq;
    let supply_policy = supply;
    if (policy) {
      if (policy.type === 'tariff') {
        // Tariff shifts supply curve up
        supply_policy = D3Utils.generateSupplyCurve(q_range, supply_p0 + policy.amount, supply_elasticity);
        eq_policy = D3Utils.findEquilibrium(supply_p0 + policy.amount, supply_elasticity, demand_p0, demand_elasticity);
      } else if (policy.type === 'subsidy') {
        // Subsidy shifts supply curve down
        supply_policy = D3Utils.generateSupplyCurve(q_range, supply_p0 - policy.amount, supply_elasticity);
        eq_policy = D3Utils.findEquilibrium(supply_p0 - policy.amount, supply_elasticity, demand_p0, demand_elasticity);
      }
    }

    // SVG dimensions
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create scales
    const xScale = d3.scaleLinear().domain(q_range).range([0, width]);
    const yScale = d3.scaleLinear().domain([p_range[1], p_range[0]]).range([0, height]);

    // Remove existing SVG if present
    d3.select(`#${containerId}`).select("svg").remove();

    const svg = d3.select(`#${containerId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Draw grid
    svg.append("g")
      .attr("class", "grid")
      .attr("opacity", 0.1)
      .call(d3.axisLeft(yScale)
        .tickSize(-width)
        .tickFormat("")
      );

    // Draw axes
    svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(yScale));

    // Axis labels
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + 35)
      .attr("text-anchor", "middle")
      .text("Quantity");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 15)
      .attr("x", 0 - (height / 2))
      .attr("text-anchor", "middle")
      .text("Price");

    // Line generator
    const line = d3.line()
      .x(d => xScale(d.quantity))
      .y(d => yScale(d.price));

    // Draw demand curve
    svg.append("path")
      .datum(demand)
      .attr("class", "demand-curve")
      .attr("d", line)
      .attr("stroke", "#2563eb")
      .attr("stroke-width", 2.5)
      .attr("fill", "none");

    // Draw supply curve (or policy-adjusted)
    svg.append("path")
      .datum(supply_policy)
      .attr("class", "supply-curve")
      .attr("d", line)
      .attr("stroke", policy ? "#dc2626" : "#059669")
      .attr("stroke-width", 2.5)
      .attr("fill", "none")
      .attr("stroke-dasharray", policy ? "5,5" : "none");

    // Draw original supply curve if policy is applied
    if (policy) {
      svg.append("path")
        .datum(supply)
        .attr("class", "supply-curve-original")
        .attr("d", line)
        .attr("stroke", "#059669")
        .attr("stroke-width", 1.5)
        .attr("fill", "none")
        .attr("opacity", 0.5);
    }

    // Mark equilibrium
    svg.append("circle")
      .attr("cx", xScale(eq.quantity))
      .attr("cy", yScale(eq.price))
      .attr("r", 5)
      .attr("class", "equilibrium")
      .attr("fill", "#7c3aed")
      .attr("opacity", policy ? 0.5 : 1);

    // Mark policy equilibrium if applicable
    if (policy) {
      svg.append("circle")
        .attr("cx", xScale(eq_policy.quantity))
        .attr("cy", yScale(eq_policy.price))
        .attr("r", 5)
        .attr("class", "equilibrium-policy")
        .attr("fill", "#dc2626");
    }

    // Add title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -5)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text(scenario_title);

    // Add statistics box
    const stats = svg.append("g")
      .attr("class", "stats")
      .attr("transform", `translate(${width - 180}, 10)`);

    const statBg = stats.append("rect")
      .attr("width", 170)
      .attr("height", policy ? 140 : 90)
      .attr("fill", "white")
      .attr("stroke", "#ccc")
      .attr("rx", 4);

    let y_offset = 20;
    const stat_y_step = 18;

    stats.append("text")
      .attr("x", 8)
      .attr("y", y_offset)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text("Equilibrium:");

    y_offset += stat_y_step;
    stats.append("text")
      .attr("x", 8)
      .attr("y", y_offset)
      .attr("font-size", "11px")
      .text(`Q = ${eq.quantity.toFixed(2)}`);

    y_offset += stat_y_step;
    stats.append("text")
      .attr("x", 8)
      .attr("y", y_offset)
      .attr("font-size", "11px")
      .text(`P = ${eq.price.toFixed(2)}`);

    if (policy) {
      y_offset += stat_y_step;
      stats.append("text")
        .attr("x", 8)
        .attr("y", y_offset)
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text("With Policy:");

      y_offset += stat_y_step;
      stats.append("text")
        .attr("x", 8)
        .attr("y", y_offset)
        .attr("font-size", "11px")
        .text(`Q = ${eq_policy.quantity.toFixed(2)}`);

      y_offset += stat_y_step;
      stats.append("text")
        .attr("x", 8)
        .attr("y", y_offset)
        .attr("font-size", "11px")
        .text(`P = ${eq_policy.price.toFixed(2)}`);

      y_offset += stat_y_step;
      stats.append("text")
        .attr("x", 8)
        .attr("y", y_offset)
        .attr("font-size", "11px")
        .text(`DWL = ${D3Utils.deadWeightLoss(eq, eq_policy, policy.amount).toFixed(2)}`);
    }

    return { eq, eq_policy, supply, demand, svg };
  }
};
