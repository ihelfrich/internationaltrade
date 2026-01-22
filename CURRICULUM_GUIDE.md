# Curriculum Integration Guide

## How to Use Interactive Models in Your Course

---

## Week-by-Week Integration

### **Week 1: Introduction to Trade**
**Slides**: Use `index.html` presentation
**Interactive**: Launch **Gravity Model**
- Students predict trade between two countries
- Adjust GDP to see exponential effect
- Change distance elasticity to understand friction

**Learning objective**: "Trade isn't random—size and distance matter"

**Activity**:
1. Predict US-Mexico trade (small distance, different GDPs)
2. Predict US-Japan trade (large distance, similar GDPs)
3. Class discusses: Why is distance so powerful?

---

### **Week 2: Comparative Advantage & Ricardian Model**
**Slides**: Section "Why trade?"
**Interactive**: Launch **Ricardian Model**

**In-class flow**:
1. Lecture: Opportunity cost diagram (board/slides)
2. Interactive: "Let me show you the math"
   - Set Home: Cloth=1, Wine=2 → OC(C)=2 Wine
   - Set Foreign: Cloth=2, Wine=1 → OC(C)=0.5 Wine
   - Ask: "Who should make cloth?"
3. **Clicker question**: What's the trade price range?
4. **Group activity**: Pairs adjust parameters, find trade price

**Variation for math-heavy class**:
- Provide labor endowments (100 each)
- Have students calculate PPF endpoints manually first
- Then show visualization matches their math

---

### **Week 3-4: Supply & Demand in Closed Economy**
**Slides**: "Equilibrium" section
**Interactive**: Supply & Demand → "1 Good, Closed Economy"

**In-class flow**:
1. Lecture: Draw basic S&D diagram
2. Interactive: "Now let's solve it with elasticities"
   - Adjust elasticities gradually
   - Ask: "What happens to equilibrium when supply gets more elastic?"
3. **Prediction task**: "If demand becomes more elastic, what happens to P and Q?"
   - Have students predict
   - Adjust in model to verify

**Homework**:
- "Chocolate prices are rising. Using the model, propose what happened (demand up? supply down?) and what policy could help different groups"

---

### **Week 5-6: Trade Policy - Tariffs & Subsidies**
**Slides**: "Tariffs and protection" section + "Policy Counterfactuals" interactive
**Interactive**: Supply & Demand → "1 Good, Small Open Economy" + Tariff

**In-class flow**:
1. Baseline: "Look at the open economy equilibrium"
   - Domestic price = world price (flat supply available at world price)
   - Quantity = demand at that price
2. Add tariff: "Government adds $2 per unit tariff"
   - Watch price jump, quantity fall
   - DWL appears (shaded red area)
3. **Guided discovery**:
   - "What's the deadweight loss?"
   - "Who benefits? (Producers + Government)"
   - "Who loses? (Consumers)"
   - "Is it worth it?"

**Debate activity**:
- Assign roles: Consumer, Domestic Producer, Foreign Exporter
- Use model to calculate impacts on each
- Stage 2-minute debate using actual numbers

---

### **Week 7: Specific Factors & Distribution**
**Slides**: "Specific-Factors model" section
**Interactive**: Launch **Specific Factors Model**

**Key teaching point**: "Trade creates winners & losers even in small country"

**In-class flow**:
1. Setup: "Same open economy, but now capital can't move between sectors"
2. Baseline: Show initial prices and factor returns
3. Shock: "Foreign price of steel drops (more competition)"
   - Tariff added to protect
   - Watch what happens to:
     - Capital in steel (gains!)
     - Labor in steel (gains? loses?)
     - Capital in auto (loses)
     - Labor in auto (maybe loses)
4. **Discussion**: "Why do steel workers support tariffs but auto workers might not?"

**Real-world connection**:
- Use historical examples: US steel industry 2002 tariffs
- Map model predictions to actual labor/capital returns if data available

---

### **Week 8-9: Putting It Together - Multi-Sector Analysis**
**Interactive**: Supply & Demand → "2 Goods" scenarios

**Project assignment**:
"Choose two actual countries and two goods. Using the models:
1. Calculate OC from labor data (Ricardian)
2. Predict trade pattern
3. Use Gravity model to predict volume
4. Compare to actual trade data
5. Explain discrepancies"

**Example**: 
- US & Mexico
- Corn & Electronics
- Use: Labor data (Ricardian), GDP (Gravity), actual trade (comparison)

---

## Model-Specific Pedagogies

### **For Economics 101 (Intro)**
- **Gravity Model only**: "Trade depends on size and distance"
- **Activity**: Pick 5 countries, predict which trade most
- **Real-world**: Compare to Fortune 500 import/export data

### **For Intermediate Trade Theory**
- **All four models**
- **Progression**: Ricardian → S&D → Specific Factors → Gravity
- **Capstone**: "Which model best explains actual trade pattern X?"

### **For Policy/Applied Class**
- **Focus**: S&D tariff analysis + Specific Factors
- **Real data**: Pull actual trade statistics
- **Activity**: "Design a trade policy using model predictions"

### **For Math/Modeling Class**
- **Extension**: Have students modify models
- **Challenge**: "Add transportation costs to Ricardian model"
- **Project**: Estimate elasticity parameters from real data

---

## Assessment Strategies

### **In-Class Quizzes** (Conceptual)
Using Supply & Demand model:
- Q: "If a tariff increases, DWL..."
  - A: Increases with square of tariff amount
  - Model shows this graphically

### **Homework** (Computational)
"Using the Gravity model:
1. Calculate predicted trade between Germany & Poland
2. Compare to actual 2023 trade data
3. What does the ratio tell us about trade barriers?"

### **Projects** (Synthesis)
"Analyze actual recent trade policy using all four models:
- US tariffs on Chinese steel
- EU carbon border adjustment
- Regional trade agreement" 

Groups assign themselves to models:
- Team A: Ricardian (comparative advantage)
- Team B: S&D (price effects)
- Team C: Specific Factors (distribution)
- Team D: Gravity (volume effects)

Then synthesize findings.

### **Exams** (Transfer)
"Country A has productivity advantages in Cloth. Country B in Wine.
Using the model, explain:
1. Why trade occurs
2. Who benefits in each country
3. How tariffs affect different groups
4. What trade volume you'd expect given their GDPs and distance"

---

## Advanced Applications

### **Data Visualization Project**
"Collect real bilateral trade data for 10 countries.
- Plot actual vs Gravity-predicted flows
- Calculate residuals
- What explains gaps? (Trade agreements? Transportation? Culture?)"

### **Policy Simulation Lab**
"Design a trade negotiation:
- Each 'country' (group) uses the models to calculate acceptable trade prices
- Negotiate using model-based calculations
- Document how actual trade differs from model predictions"

### **Cross-Disciplinary Integration**
**With Business School**:
- Supply chain optimization given tariffs
- Company location decisions (distance effects)

**With Environmental Studies**:
- Carbon costs in Gravity model (distance matters for emissions)
- Trade-environment tradeoffs in specific factors

---

## Technical Tips for Live Teaching

### **Avoid Common Issues**:
1. ✅ **Test before class**: Open hub.html, verify all sliders work
2. ✅ **Use projector**: Models are visual, use big screen
3. ✅ **Have backup**: If internet down, model still works (it's local)
4. ✅ **Engage students**: "What happens if we push this slider?"

### **Pacing**:
- 5 min: Setup the scenario
- 3 min: Run the model live
- 5 min: Discuss implications
- 2 min: Collect questions

### **Interactive Techniques**:
- **Predict-then-verify**: "What happens if...?" → Adjust slider
- **Compare scenarios**: S&D without tariff vs with tariff, side-by-side
- **Challenge them**: "Which parameter has biggest effect?" 
- **Debate**: "Is this policy worth the DWL?"

---

## Sample Semester Arc

| Week | Topic | Model(s) | Activity |
|------|-------|----------|----------|
| 1 | Intro to Trade | Gravity | Predict bilateral flows |
| 2 | Comparative Advantage | Ricardian | Find trade price range |
| 3-4 | S&D Equilibrium | S&D (Closed) | Solve for P*, Q* |
| 5-6 | Tariffs & Subsidies | S&D (Open) | Calculate DWL, debate policy |
| 7 | Distribution | Specific Factors | Identify winners/losers |
| 8-9 | Integration Project | All Four | Analyze real trade policy |
| 10 | Exam | All Four | Comprehensive case study |

---

## Resources for Students

### **Before Class**:
- Read textbook chapter
- Explore QUICK_START.md
- Bring questions

### **During Class**:
- Follow along with professor
- Make predictions
- Use calculator for own scenarios

### **After Class**:
- Review how models fit in textbook
- Try alternative parameter values
- Use for homework/project

---

## Next Steps

1. **Try one model this week** in a class
2. **Collect feedback** from students
3. **Refine scenarios** based on what resonates
4. **Expand data**: Add real trade statistics for your chosen country pairs
5. **Share**: Let other instructors know what works!

---

*Questions? Suggestions? Contact the developer or open an issue on GitHub.*
