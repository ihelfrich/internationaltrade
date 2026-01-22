# Quick Start Guide - Interactive Models

## 🚀 Getting Started

### Option 1: Open Locally
```bash
# Clone or navigate to the directory
cd internationaltrade

# Open in your default browser
open hub.html      # macOS
xdg-open hub.html  # Linux
start hub.html     # Windows
```

### Option 2: GitHub Pages
Visit: **[https://ihelfrich.github.io/internationaltrade](https://ihelfrich.github.io/internationaltrade)**

### Option 3: Python Server (for testing)
```bash
cd internationaltrade
python -m http.server 8000
# Then open http://localhost:8000/hub.html
```

---

## 📊 Interactive Models Overview

### 1. **Supply & Demand Models**
*Explore market equilibrium, policy impacts, and welfare effects*

**What to adjust:**
- 🛠️ Scenario: Pick from 1-2 goods, small/large economy, open/closed trade
- 📍 Policy: Choose tariff or subsidy
- 📈 Elasticities: Adjust supply and demand sensitivity

**What you'll see:**
- Real-time equilibrium point (where curves cross)
- Price and quantity changes
- Dead weight loss from tariffs (shaded area)
- Consumer/producer surplus breakdown

**Try this first:** 
1. Select "2 Goods, Open Economy"
2. Choose "Tariff"
3. Slide the tariff rate to 2.5
4. Observe what happens to equilibrium and DWL

---

### 2. **Ricardian Model**
*See comparative advantage emerge from labor productivity differences*

**What to adjust:**
- 🇭 Home labor requirements (Cloth & Wine)
- 🌍 Foreign labor requirements (Cloth & Wine)

**What you'll see:**
- Opportunity costs for each country
- Which country has comparative advantage
- Trade price range (where mutually beneficial trade happens)
- Specialization pattern

**Key insight:** 
Countries specialize in what they're *relatively* better at, not *absolutely* better at.

**Try this:**
1. Set Home to: Cloth=1, Wine=3 (good at cloth)
2. Set Foreign to: Cloth=3, Wine=1 (good at wine)
3. Notice trade can happen between 1 and 3 wine per cloth

---

### 3. **Specific Factors Model**
*Understand who wins and loses from trade*

**What to adjust:**
- 💰 Initial world price
- 🚫 Tariff rate
- 🏭 Which factor is protected (labor or capital)

**What you'll see:**
- How prices change with tariffs
- Which workers/capital owners benefit
- Which workers/capital owners lose
- Why factor mobility matters

**Key insight:** 
In the short run, factors stuck in a sector suffer from import competition; in a long run, labor moves.

**Try this:**
1. Set tariff to 0 (baseline)
2. Raise it to 3
3. See how protected sector labor gains while other sector loses

---

### 4. **Gravity Model**
*Predict bilateral trade flows from country size and distance*

**What to adjust:**
- 🏢 GDP of each country
- 📏 Distance between them
- 📊 Distance elasticity (how much distance matters)

**What you'll see:**
- Predicted trade flow between two countries
- How GDP multiplies trade (bigger economies = more trade)
- Distance penalty (farther = less trade)
- Elasticity effect

**Key insight:**
Trade ≈ (GDP₁ × GDP₂) / Distance^β

**Try this:**
1. Keep both GDPs at 1000, distance 5
2. Double one country's GDP → trade flow more than doubles
3. Double the distance → trade drops significantly

---

## 💡 Teaching Tips

### For Supply & Demand:
- **Show the problem**: Start with "No Policy" to see baseline
- **Policy shock**: Add a tariff, ask "what happened?"
- **Welfare analysis**: Point out the deadweight loss triangle
- **Debate**: "Is protection worth the DWL?"

### For Ricardian:
- **The key question**: "Which country should make what?"
- **Opportunity cost intuition**: "What do you give up to make this?"
- **Trade price range**: "Where would each country agree to trade?"

### For Specific Factors:
- **Real-world connection**: "Why do workers in steel fear imports?"
- **Distribution question**: "Even if trade is 'good' overall, who loses?"
- **Policy resistance**: "Understanding why tariffs stay on the books"

### For Gravity:
- **Predictive power**: "Can we guess trade from just size and distance?"
- **Real data**: "Let's check if actual trade matches the model"
- **Interpretation**: "Why is distance so important?"

---

## 🔧 Customizing for Your Lesson

### Pre-loaded Scenarios:
The hub comes with 6 scenarios for S&D. You can easily add more by editing `hub.html`:

```javascript
// In loadSupplyDemand()
<option value="premium-goods">Premium Goods Market</option>
```

Then add the config:
```javascript
if (scenario === 'premium-goods') {
  config = {
    supply_p0: 5,      // Different intercept
    supply_elasticity: 0.2,
    demand_p0: 40,
    demand_elasticity: 0.3,
    q_range: [0, 50],
    p_range: [0, 50]
  };
}
```

### Embedding in Slides:
You can link from your presentation to specific models:
```html
<a href="hub.html?model=sandp">View S&D Model</a>
<a href="hub.html?model=ricardian">View Ricardian</a>
```

---

## 📝 Common Student Questions

**Q: Why doesn't the curve move when I adjust parameters?**
A: The model updates in real-time—make sure you're dragging the slider, not clicking.

**Q: What does "elasticity" mean?**
A: How sensitive quantity is to price. High = quantity changes a lot when price changes slightly.

**Q: Why do countries trade if it hurts some workers?**
A: Net benefit to the country, but workers in import-competing sectors lose. That's the policy question!

**Q: Is this gravity equation real?**
A: Yes! Economists use it to predict actual trade. It works surprisingly well.

---

## 🔗 Resources

- **Textbook tie-in**: Krugman & Obstfeld, Chapter 1-3
- **Real data**: https://oec.world (plug in actual trade data)
- **Further models**: Check INTERACTIVE_MODELS_GUIDE.md for technical details

---

## 📬 Feedback & Suggestions

Found a bug? Want to add a model? 
→ Open an issue on GitHub or contact the developer.

**Happy teaching! 🌍📊**
