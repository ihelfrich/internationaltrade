/* global Reveal, RevealMath */

Reveal.initialize({
  hash: true,
  slideNumber: true,
  transition: "slide",
  backgroundTransition: "fade",
  plugins: [RevealMath.MathJax2],
  math: {
    mathjax: "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js",
    config: "TeX-AMS_HTML-full"
  }
});

function toNumber(value, fallback) {
  var num = parseFloat(value);
  return Number.isFinite(num) ? num : fallback;
}

function formatNumber(value, digits) {
  return value.toFixed(digits);
}

function updateRicardian() {
  var aLC = toNumber(document.getElementById("aLC").value, 1);
  var aLW = toNumber(document.getElementById("aLW").value, 2);
  var aLCs = toNumber(document.getElementById("aLCs").value, 2);
  var aLWs = toNumber(document.getElementById("aLWs").value, 3);

  var ocHome = aLW / aLC;
  var ocForeign = aLWs / aLCs;

  var caText = "No comparative advantage (identical costs)";
  if (Math.abs(ocHome - ocForeign) > 1e-6) {
    if (ocHome < ocForeign) {
      caText = "Home in W, Foreign in C";
    } else {
      caText = "Home in C, Foreign in W";
    }
  }

  var lower = Math.min(ocHome, ocForeign);
  var upper = Math.max(ocHome, ocForeign);
  var range = upper === lower
    ? "P_W/P_C = " + formatNumber(upper, 2)
    : formatNumber(upper, 2) + " > P_W/P_C > " + formatNumber(lower, 2);

  document.getElementById("ocHome").textContent = formatNumber(ocHome, 2);
  document.getElementById("ocForeign").textContent = formatNumber(ocForeign, 2);
  document.getElementById("caResult").textContent = caText;
  document.getElementById("priceRange").textContent = range;
}

function solveLaborShare(pm) {
  var alpha = 0.4;
  var beta = 0.4;
  var low = 0.05;
  var high = 0.95;
  var pa = 1;

  function mplM(lm) {
    return (1 - alpha) * Math.pow(lm, -alpha);
  }

  function mplA(la) {
    return (1 - beta) * Math.pow(la, -beta);
  }

  for (var i = 0; i < 60; i += 1) {
    var mid = (low + high) / 2;
    var la = 1 - mid;
    var gap = pm * mplM(mid) - pa * mplA(la);
    if (gap > 0) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}

function updateSpecificFactors() {
  var pm = toNumber(document.getElementById("pmSlider").value, 1);
  var alpha = 0.4;
  var beta = 0.4;
  var pa = 1;

  function outputM(lm) {
    return Math.pow(lm, 1 - alpha);
  }

  function outputA(la) {
    return Math.pow(la, 1 - beta);
  }

  var lm = solveLaborShare(pm);
  var la = 1 - lm;

  var w = pm * (1 - alpha) * Math.pow(lm, -alpha);
  var rK = pm * alpha * outputM(lm);
  var rT = pa * beta * outputA(la);

  var baselineLm = solveLaborShare(1);
  var baselineLa = 1 - baselineLm;
  var w0 = 1 * (1 - alpha) * Math.pow(baselineLm, -alpha);
  var rK0 = 1 * alpha * outputM(baselineLm);
  var rT0 = pa * beta * outputA(baselineLa);

  document.getElementById("pmValue").textContent = formatNumber(pm, 2);
  document.getElementById("wIndex").textContent = formatNumber(w / w0, 2);
  document.getElementById("rIndex").textContent = formatNumber(rK / rK0, 2);
  document.getElementById("tIndex").textContent = formatNumber(rT / rT0, 2);
  document.getElementById("lSplit").textContent =
    "M: " + Math.round(lm * 100) + "% · A: " + Math.round(la * 100) + "%";
}

function updateGravity() {
  var gdpI = toNumber(document.getElementById("gdpI").value, 20);
  var gdpJ = toNumber(document.getElementById("gdpJ").value, 18);
  var dist = toNumber(document.getElementById("dist").value, 3);
  var border = document.getElementById("border").value === "1";

  var a = 1;
  var b = 1;
  var c = 1.1;
  var borderBoost = border ? Math.exp(0.5) : 1;

  var flow = borderBoost * Math.pow(gdpI, a) * Math.pow(gdpJ, b) / Math.pow(dist, c);

  document.getElementById("tradeFlow").textContent = formatNumber(flow, 1);
  document.getElementById("lnTrade").textContent = formatNumber(Math.log(flow), 2);
  document.getElementById("borderEffect").textContent = border ? "Border +65%" : "None";
}

function updateTariff() {
  var slider = document.getElementById("tariffSlider");
  if (!slider) {
    return;
  }

  var t = toNumber(slider.value, 4);
  var pWorld = 20;
  var pDomestic = pWorld + t;

  function qDemand(p) {
    return 120 - 2 * p;
  }

  function qSupply(p) {
    return 20 + p;
  }

  var qd0 = qDemand(pWorld);
  var qs0 = qSupply(pWorld);
  var qd1 = qDemand(pDomestic);
  var qs1 = qSupply(pDomestic);

  var imports = Math.max(0, qd1 - qs1);
  var tariffRevenue = t * imports;
  var dwl = 0.5 * t * ((qd0 - qd1) + (qs1 - qs0));

  document.getElementById("tariffValue").textContent = formatNumber(t, 1);
  document.getElementById("tariffPrice").textContent = formatNumber(pDomestic, 1);
  document.getElementById("tariffImports").textContent = formatNumber(imports, 1);
  document.getElementById("tariffRevenue").textContent = formatNumber(tariffRevenue, 1);
  document.getElementById("tariffDwl").textContent = formatNumber(dwl, 1);
}

function updatePolicy() {
  var type = document.getElementById("policyType");
  var slider = document.getElementById("policySlider");
  if (!type || !slider) {
    return;
  }

  var A = 120;
  var B = 2;
  var C = 20;
  var D = 1;
  var pWorld = 20;
  var qd0 = A - B * pWorld;
  var qs0 = C + D * pWorld;

  function qd(p) {
    return A - B * p;
  }

  function qs(p) {
    return C + D * p;
  }

  var value = toNumber(slider.value, 4);
  var pDomestic = pWorld;
  var imports = qd0 - qs0;
  var revenue = 0;
  var dwl = 0;
  var label = "Revenue";

  if (type.value === "tariff") {
    var t = value;
    pDomestic = pWorld + t;
    imports = Math.max(0, qd(pDomestic) - qs(pDomestic));
    revenue = t * imports;
    dwl = 0.5 * t * ((qd0 - qd(pDomestic)) + (qs(pDomestic) - qs0));
    label = "Revenue";
  } else if (type.value === "quota") {
    var qbar = value;
    pDomestic = (A - C - qbar) / (B + D);
    imports = qbar;
    revenue = Math.max(0, (pDomestic - pWorld) * imports);
    dwl = 0.5 * (pDomestic - pWorld) * ((qd0 - qd(pDomestic)) + (qs(pDomestic) - qs0));
    label = "Quota rent";
  } else if (type.value === "subsidy") {
    var s = value;
    pDomestic = pWorld;
    var qs1 = qs(pWorld + s);
    imports = Math.max(0, qd0 - qs1);
    revenue = s * qs1;
    dwl = 0.5 * s * (qs1 - qs0);
    label = "Fiscal cost";
  }

  document.getElementById("policyValue").textContent = formatNumber(value, 1);
  document.getElementById("policyPrice").textContent = formatNumber(pDomestic, 1);
  document.getElementById("policyImports").textContent = formatNumber(imports, 1);
  document.getElementById("policyRevenueLabel").textContent = label;
  document.getElementById("policyRevenue").textContent = formatNumber(revenue, 1);
  document.getElementById("policyDwl").textContent = formatNumber(dwl, 1);
}

function updatePolicySlider() {
  var type = document.getElementById("policyType");
  var slider = document.getElementById("policySlider");
  var label = document.getElementById("policyLabel");
  if (!type || !slider || !label) {
    return;
  }

  if (type.value === "tariff") {
    slider.min = "0";
    slider.max = "12";
    slider.step = "0.5";
    slider.value = "4";
    label.textContent = "Specific tariff (t)";
  } else if (type.value === "quota") {
    slider.min = "5";
    slider.max = "35";
    slider.step = "1";
    slider.value = "20";
    label.textContent = "Import quota (q_bar)";
  } else {
    slider.min = "0";
    slider.max = "12";
    slider.step = "0.5";
    slider.value = "4";
    label.textContent = "Production subsidy (s)";
  }

  updatePolicy();
}

function parseFredCsv(csv) {
  var lines = csv.trim().split("\n");
  lines.shift();
  return lines.map(function (line) {
    var parts = line.split(",");
    return { date: parts[0], value: parseFloat(parts[1]) };
  }).filter(function (row) {
    return Number.isFinite(row.value);
  });
}

function buildTradeSeries(exportsData, importsData) {
  var mapExports = new Map(exportsData.map(function (row) { return [row.date, row.value]; }));
  var mapImports = new Map(importsData.map(function (row) { return [row.date, row.value]; }));
  var dates = Array.from(mapExports.keys()).filter(function (date) {
    return mapImports.has(date);
  }).sort();

  var exports = [];
  var imports = [];
  dates.forEach(function (date) {
    exports.push(mapExports.get(date));
    imports.push(mapImports.get(date));
  });

  return { dates: dates, exports: exports, imports: imports };
}

function filterTradeRange(series, years) {
  if (years === "max") {
    return series;
  }
  var cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - parseInt(years, 10));
  var filteredDates = [];
  var exports = [];
  var imports = [];
  series.dates.forEach(function (date, index) {
    var d = new Date(date);
    if (d >= cutoff) {
      filteredDates.push(date);
      exports.push(series.exports[index]);
      imports.push(series.imports[index]);
    }
  });
  return { dates: filteredDates, exports: exports, imports: imports };
}

var tradeSeriesCache;

function renderTradeChart(series) {
  var container = document.getElementById("beaTradeChart");
  if (!container || !window.d3) {
    return;
  }

  container.innerHTML = "";

  var width = container.clientWidth || 0;
  var height = container.clientHeight || 0;
  if (width < 10 || height < 10) {
    return;
  }
  var margin = { top: 20, right: 20, bottom: 40, left: 60 };
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;

  var parseDate = d3.timeParse("%Y-%m-%d");
  var dates = series.dates.map(function (d) { return parseDate(d); });
  var values = series.exports.concat(series.imports);

  var x = d3.scaleTime()
    .domain(d3.extent(dates))
    .range([0, innerWidth]);

  var y = d3.scaleLinear()
    .domain([d3.min(values) * 0.9, d3.max(values) * 1.05])
    .nice()
    .range([innerHeight, 0]);

  var svg = d3.select(container)
    .append("svg")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMidYMid meet");

  var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxis = d3.axisBottom(x).ticks(6);
  var yAxis = d3.axisLeft(y).ticks(5).tickFormat(function (d) { return "$" + d.toFixed(0) + "B"; });

  g.append("g")
    .attr("transform", "translate(0," + innerHeight + ")")
    .call(xAxis)
    .selectAll("text")
    .attr("fill", "#b5c1d8");

  g.append("g")
    .call(yAxis)
    .selectAll("text")
    .attr("fill", "#b5c1d8");

  g.selectAll(".domain")
    .attr("stroke", "rgba(255,255,255,0.12)");

  g.selectAll(".tick line")
    .attr("stroke", "rgba(255,255,255,0.08)");

  var line = d3.line()
    .x(function (d, i) { return x(dates[i]); })
    .y(function (d) { return y(d); })
    .curve(d3.curveMonotoneX);

  g.append("path")
    .datum(series.exports)
    .attr("fill", "none")
    .attr("stroke", "#64d2ff")
    .attr("stroke-width", 2.5)
    .attr("d", line);

  g.append("path")
    .datum(series.imports)
    .attr("fill", "none")
    .attr("stroke", "#f6c177")
    .attr("stroke-width", 2.5)
    .attr("d", line);

  var legend = svg.append("g")
    .attr("transform", "translate(" + (margin.left + 10) + "," + (margin.top + 5) + ")");

  legend.append("rect")
    .attr("x", 0)
    .attr("y", -8)
    .attr("width", 14)
    .attr("height", 4)
    .attr("fill", "#64d2ff");
  legend.append("text")
    .attr("x", 20)
    .attr("y", -5)
    .attr("fill", "#e6eefc")
    .attr("font-size", "12px")
    .text("Exports");

  legend.append("rect")
    .attr("x", 90)
    .attr("y", -8)
    .attr("width", 14)
    .attr("height", 4)
    .attr("fill", "#f6c177");
  legend.append("text")
    .attr("x", 110)
    .attr("y", -5)
    .attr("fill", "#e6eefc")
    .attr("font-size", "12px")
    .text("Imports");
}

function initTradeChart() {
  var rangeSelect = document.getElementById("tradeRange");
  var container = document.getElementById("beaTradeChart");
  if (!rangeSelect || !container) {
    return;
  }

  function loadCsvPair(primaryA, primaryB, fallbackA, fallbackB) {
    return Promise.all([
      fetch(primaryA).then(function (res) { return res.text(); }),
      fetch(primaryB).then(function (res) { return res.text(); })
    ]).catch(function () {
      return Promise.all([
        fetch(fallbackA).then(function (res) { return res.text(); }),
        fetch(fallbackB).then(function (res) { return res.text(); })
      ]);
    });
  }

  loadCsvPair(
    "https://fred.stlouisfed.org/graph/fredgraph.csv?id=EXPGS",
    "https://fred.stlouisfed.org/graph/fredgraph.csv?id=IMPGS",
    "data/fred_expgs.csv",
    "data/fred_impgs.csv"
  ).then(function (responses) {
    var exportsData = parseFredCsv(responses[0]);
    var importsData = parseFredCsv(responses[1]);
    tradeSeriesCache = buildTradeSeries(exportsData, importsData);
    renderTradeChart(filterTradeRange(tradeSeriesCache, rangeSelect.value));
  }).catch(function () {
    // Fail quietly if offline and no local fallback.
  });

  rangeSelect.addEventListener("change", function () {
    if (!tradeSeriesCache) {
      return;
    }
    renderTradeChart(filterTradeRange(tradeSeriesCache, rangeSelect.value));
  });
}

function bindInputs() {
  var ricardianInputs = ["aLC", "aLW", "aLCs", "aLWs"];
  ricardianInputs.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateRicardian);
    }
  });

  var pmSlider = document.getElementById("pmSlider");
  if (pmSlider) {
    pmSlider.addEventListener("input", updateSpecificFactors);
  }

  var gravityInputs = ["gdpI", "gdpJ", "dist", "border"];
  gravityInputs.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateGravity);
    }
  });

  var tariffSlider = document.getElementById("tariffSlider");
  if (tariffSlider) {
    tariffSlider.addEventListener("input", updateTariff);
  }

  var policyType = document.getElementById("policyType");
  var policySlider = document.getElementById("policySlider");
  if (policyType) {
    policyType.addEventListener("change", updatePolicySlider);
  }
  if (policySlider) {
    policySlider.addEventListener("input", updatePolicy);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("aLC")) {
    updateRicardian();
  }
  if (document.getElementById("pmSlider")) {
    updateSpecificFactors();
  }
  if (document.getElementById("gdpI")) {
    updateGravity();
  }
  if (document.getElementById("tariffSlider")) {
    updateTariff();
  }
  if (document.getElementById("policyType")) {
    updatePolicySlider();
  }
  initTradeChart();
  bindInputs();

  if (typeof Reveal !== "undefined") {
    Reveal.on("slidechanged", function (event) {
      if (event.currentSlide && event.currentSlide.querySelector("#beaTradeChart")) {
        if (tradeSeriesCache) {
          renderTradeChart(filterTradeRange(tradeSeriesCache, document.getElementById("tradeRange").value));
        }
      }
    });
  }

  window.addEventListener("resize", function () {
    if (tradeSeriesCache && document.getElementById("beaTradeChart")) {
      renderTradeChart(filterTradeRange(tradeSeriesCache, document.getElementById("tradeRange").value));
    }
  });
});
