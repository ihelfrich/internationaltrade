# Contributing to International Trade Economics

Thank you for your interest in contributing! This guide will help you get started.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [Style Guide](#style-guide)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background or experience level.

### Expected Behavior

- Be respectful and considerate
- Provide constructive feedback
- Focus on what is best for the educational community
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment or discrimination of any kind
- Trolling, insulting comments, or personal attacks
- Publishing others' private information without permission

---

## How Can I Contribute?

### 🐛 Reporting Bugs or Errors

Found a typo, mathematical error, or broken link?

1. Check if the issue already exists in [Issues](https://github.com/ihelfrich/internationaltrade/issues)
2. If not, create a new issue with:
   - **Title**: Brief description (e.g., "Typo in Ricardian Model, line 45")
   - **Description**: What's wrong and where
   - **Suggestion**: How to fix it (if applicable)

### ✨ Suggesting Enhancements

Have an idea to improve the notes?

1. Open an issue with label `enhancement`
2. Describe your suggestion:
   - **What**: The enhancement you're proposing
   - **Why**: How it improves the material
   - **Example**: Concrete example if applicable

### 📝 Contributing Content

#### Types of Contributions Needed

1. **Additional Examples**
   - Numerical worked examples
   - Real-world case studies
   - Historical trade examples

2. **Visualizations**
   - PPF diagrams
   - Supply/demand graphs
   - Trade flow charts

3. **Problem Sets**
   - Practice problems with solutions
   - Exam-style questions
   - Multiple choice questions

4. **Extensions**
   - New topics (gravity model, new trade theory)
   - Advanced sections
   - Empirical evidence

5. **Translations**
   - Translate existing content to other languages

6. **Improvements**
   - Clarify explanations
   - Add intuition
   - Simplify complex sections

---

## Getting Started

### Prerequisites

- **Git**: Basic knowledge of git and GitHub
- **Markdown**: Familiarity with markdown syntax
- **Economics**: Understanding of international trade (or willingness to learn!)
- **LaTeX** (optional): For mathematical notation

### Setting Up

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/internationaltrade.git
   cd internationaltrade
   ```

3. **Create a branch**
   ```bash
   git checkout -b my-contribution
   ```

4. **Make your changes**
   - Edit files in your preferred text editor
   - Follow the style guide below

5. **Test your changes**
   - Preview markdown rendering
   - Check all links work
   - Verify equations display correctly

---

## Contribution Guidelines

### Content Quality

✅ **Do**:
- Ensure accuracy of economic theory
- Provide clear explanations
- Include concrete examples
- Cite sources when appropriate
- Use proper mathematical notation
- Write in clear, accessible language

❌ **Don't**:
- Include copyrighted material without permission
- Make unsubstantiated claims
- Use overly complex jargon without explanation
- Submit AI-generated content without review/editing

### File Organization

#### Adding New Content

**Example Problems** → `examples/model_name_examples.md`
**Policy Topics** → `policy/topic_name.md`
**Resources** → `resources/resource_type.md`
**Visualizations** → Include in relevant model file or `visualizations/`

#### Naming Conventions

- Use lowercase with underscores: `specific_factors_examples.md`
- Be descriptive: `ricardian_numerical_example_1.md`
- Match existing patterns

---

## Style Guide

### Markdown Formatting

#### Headings

```markdown
# Main Title (H1) - Use for document title only
## Major Section (H2)
### Subsection (H3)
#### Minor Subsection (H4)
```

#### Emphasis

```markdown
**Bold** for key terms on first use
*Italics* for emphasis or variable names
`Code/Math` for inline equations
```

#### Lists

```markdown
- Unordered lists for general items
- Use sub-bullets when needed
  - Like this

1. Ordered lists for sequential steps
2. Number all steps clearly
```

#### Code Blocks

````markdown
```python
# Use code blocks for examples
def opportunity_cost(a_wine, a_cloth):
    return a_wine / a_cloth
```
````

### Mathematical Notation

#### Inline Math

Use backticks with subscripts/superscripts:
- `Qc` for quantity of cloth
- `aₗc` for unit labor requirement (use Unicode subscripts)
- `K/L` for capital-labor ratio

#### Display Math

For complex equations, use proper formatting:

```markdown
**PPF equation**: Qc = (L/aₗc) - (aₗw/aₗc) · Qw
```

#### Common Symbols

| Symbol | Markdown | Display |
|--------|----------|---------|
| Subscript | `aₗc` | aₗc |
| Superscript | `x²` | x² |
| Greek | `α, β, σ` | α, β, σ |
| Arrows | `→, ⇒` | →, ⇒ |
| Inequality | `≤, ≥, ≠` | ≤, ≥, ≠ |

### Economic Notation

Follow these conventions:

- **Variables**: Italicize on first use: *Q* (quantity)
- **Subscripts**: Lower case for goods (Qc, Qw)
- **Superscripts**: For foreign country (Q*, w*)
- **Parameters**: Greek letters (α, β, γ)

### Writing Style

#### Clarity

✅ **Good**: "The Ricardian model shows that countries gain from trade by specializing in goods where they have lower opportunity costs."

❌ **Bad**: "The model demonstrates optimal production allocation pursuant to comparative cost structures."

#### Active Voice

✅ **Good**: "Countries export goods with comparative advantage."

❌ **Bad**: "Goods with comparative advantage are exported by countries."

#### Examples

Always provide concrete examples after abstract concepts:

```markdown
**Concept**: Comparative advantage depends on opportunity cost, not absolute productivity.

**Example**: Even if the US produces both cars and wheat more efficiently than Mexico, if Mexico's relative efficiency is higher in wheat, Mexico should specialize in wheat.
```

---

## Pull Request Process

### Before Submitting

1. **Review your changes**
   - Proofread for typos
   - Check all equations
   - Verify links work
   - Preview markdown rendering

2. **Update documentation**
   - Add your content to relevant README sections
   - Update table of contents if needed

3. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "Add numerical example for Ricardian model"
   ```

### Submitting

1. **Push to your fork**
   ```bash
   git push origin my-contribution
   ```

2. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Choose your branch
   - Fill out the PR template:

```markdown
## Description
Brief description of your contribution

## Type of Change
- [ ] Bug fix (typo, error correction)
- [ ] New content (examples, sections)
- [ ] Enhancement (improved explanation)
- [ ] Documentation (README, guides)

## Checklist
- [ ] I have proofread my changes
- [ ] I have checked all equations/math
- [ ] I have tested all links
- [ ] I have followed the style guide
- [ ] I have updated relevant documentation

## Additional Notes
Any other information
```

### Review Process

1. Maintainers will review your PR
2. They may request changes or ask questions
3. Make requested changes and push updates
4. Once approved, your PR will be merged!

### After Merging

- Your contribution will appear in the repository
- You'll be added to the contributors list
- Thank you for making this resource better!

---

## Recognition

### Contributors List

All contributors are recognized in our [README.md](README.md).

### Types of Contributions

- 💻 Code/Content
- 📖 Documentation
- 🐛 Bug reports
- 💡 Ideas/suggestions
- 🌍 Translation
- 🎨 Design/visualizations

---

## Questions?

### Where to Ask

- **GitHub Issues**: For bugs, errors, or suggestions
- **GitHub Discussions**: For questions about content
- **Email**: [Contact information if applicable]

### Common Questions

**Q: I'm not an expert in international trade. Can I still contribute?**
A: Yes! Contributions like fixing typos, improving clarity, or asking questions about confusing sections are valuable.

**Q: Do I need to know LaTeX?**
A: No, basic markdown with Unicode symbols is sufficient. We can help with formatting.

**Q: Can I translate content to another language?**
A: Absolutely! Create a new folder `translations/[language_code]/` and translate away.

**Q: How long does review take?**
A: We aim to review PRs within a week. Complex contributions may take longer.

---

## Resources

### Learning Git/GitHub
- [GitHub Guides](https://guides.github.com/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

### Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

### International Trade
- Krugman, Obstfeld & Melitz textbook
- MIT OpenCourseWare lectures

---

## Thank You!

Your contributions help students worldwide understand international trade economics. Every improvement, no matter how small, makes a difference.

**Happy Contributing!** 🎉

---

**Last Updated**: January 2026
