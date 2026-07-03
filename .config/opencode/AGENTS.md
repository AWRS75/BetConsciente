# Agent Guidelines — BetRadar / BetConsciente (Prototype)

## 🧠 Behavior Guidelines (Andrej Karpathy Rules)
To maintain alignment with developer expectations:
1. **Think before you code:** Outline your assumptions and logic in a quick reasoning block before presenting any code.
2. **Simplicity first:** Write the minimum code required to solve the problem. Avoid generic, inflated "AI slop".
3. **Surgical changes:** Modify strictly what is necessary. Never change adjacent formatting, styles, or unrelated functions.
4. **Focus on goals:** Ensure your solution directly addresses the core request, and explain briefly how to test/verify it.

## 📌 Project Overview

This repository contains the prototype for **BetConsciente** (Equilíbrio e Bem-estar para Apostas Digitais), a Portuguese-language, mobile-first web application focused on responsible digital betting experiences.

The project is intentionally lightweight and optimized for:

* rapid prototyping
* low complexity
* AI-assisted iteration
* static deployment
* token-efficient maintenance

---

# ⚠️ High-Signal Stack Warning (Do Not Miss!)

## Current Stack

The application uses a **Static Modular Architecture** with:

* React 18
* React Router DOM v6
* Babel Standalone
* Tailwind CSS via CDN
* Pure static JavaScript files
* No build step

---

## 🚫 No Node.js / No Build System

This project does NOT use:

* `package.json`
* `node_modules`
* npm
* yarn
* vite
* webpack
* next.js
* transpilation pipeline
* test runner

Never execute:

```bash id="i4gj4u"
npm install
npm run dev
npm run build
npm test
```

All files must work directly in the browser.

---

# 🏗️ Static Modular Architecture

The application follows a **CDN-first modular structure** designed to:

* reduce token consumption
* improve maintainability
* enable surgical edits
* minimize AI context size
* simplify prototyping

---

# 📁 Recommended Project Structure

```txt id="g24w3z"
/
├── index.html
├── js/
│   ├── app.js
│   ├── theme.js
│   ├── siteData.js
│   ├── chart.js
│   │
│   ├── components/
│   ├── screens/
│   ├── layouts/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   └── constants/
```

---

# 📄 File Responsibilities

---

## `index.html`

Must remain lightweight.

Responsible only for:

* CDN imports
* root mounting
* script loading order
* global providers
* router bootstrap

Avoid large inline components inside `index.html`.

---

## `js/components/`

Reusable UI components.

Examples:

```txt id="d5nk7t"
Button.js
BottomNav.js
WalletCard.js
ProgressBar.js
QuizCard.js
Modal.js
```

### Rules

* Single responsibility per file
* Prefer ≤150 lines
* Avoid business logic
* Avoid route orchestration
* Keep reusable

---

## `js/screens/`

Application pages/screens.

Examples:

```txt id="9w7g3j"
HomeScreen.js
WalletScreen.js
ChallengeScreen.js
ProfileScreen.js
```

### Rules

* Screens orchestrate components
* Avoid giant inline JSX
* Move reusable parts to `/components`

---

## `js/layouts/`

Shared page structures.

Examples:

```txt id="e1bl7y"
MainLayout.js
AuthLayout.js
DashboardLayout.js
```

---

## `js/services/`

Backend/API simulation layer.

Examples:

```txt id="2yx6z8"
walletService.js
challengeService.js
authService.js
```

### Purpose

* centralize mock data
* isolate business rules
* simplify future backend migration

---

## `js/utils/`

Pure helper functions.

Examples:

```txt id="u4mvk1"
currency.js
formatDate.js
calculateProgress.js
```

---

## `js/constants/`

Static shared values.

Examples:

```txt id="wnc7xo"
routes.js
levels.js
texts.js
ui.js
```

---

# 🌎 Language Rules

## UI Language

The entire user-facing experience MUST remain in:

```txt id="bd7q6k"
Português (pt-BR)
```

This includes:

* buttons
* labels
* notifications
* empty states
* onboarding
* copywriting
* accessibility labels

Avoid mixing Portuguese and English in the UI.

---

# 📱 Mobile-First Guidelines

The application is designed primarily for mobile devices.

## Priorities

* mobile-first layouts
* touch-friendly interactions
* responsive components
* compact spacing
* bottom navigation patterns

Desktop support is secondary.

---

# 🧠 AI Development Rules (Karpathy Style)

---

## 1. Think Before Coding

Before modifying code:

* outline assumptions
* identify the minimal solution
* avoid premature abstraction

---

## 2. Simplicity First

Always prefer:

* minimal code
* explicit logic
* readable components
* direct solutions

Avoid:

* overengineering
* unnecessary abstractions
* generic “AI slop”

---

## 3. Surgical Changes Only

Modify strictly what is necessary.

Do NOT:

* reformat unrelated code
* rename unrelated variables
* restructure adjacent components
* introduce architecture changes without need

---

## 4. Goal-Oriented Development

Every implementation must:

* solve the requested problem directly
* explain the reasoning briefly
* include simple validation steps

---

# ✂️ Token Optimization Rules

The project architecture is intentionally optimized for AI-assisted workflows.

---

## Never Send Entire Application Context

❌ Avoid:

```txt id="t0h5o2"
“Analyze my entire index.html”
```

✅ Prefer:

```txt id="d4g4tb"
“Update WalletCard.js”
```

---

## Keep Components Small

Recommended limits:

| Size       | Recommendation  |
| ---------- | --------------- |
| ≤150 lines | ideal           |
| 150–250    | acceptable      |
| >250       | split component |

---

## One Responsibility Per File

Each file should solve one focused problem.

Avoid:

* giant multi-purpose components
* mixed routing + UI + services
* deeply nested JSX

---

## Centralize Shared Texts

Prefer:

```js id="2s6h7y"
TEXTS.wallet.balance
```

instead of repeated inline strings.

Benefits:

* lower token usage
* easier localization
* easier copy updates

---

## Prefer Composition Over Giant JSX

❌ Avoid:

```jsx id="ebp8my"
return (
  <div>
    ...700 lines...
  </div>
)
```

✅ Prefer:

```jsx id="76br9s"
return (
  <MainLayout>
    <WalletHeader />
    <WalletBalance />
    <WalletActions />
  </MainLayout>
)
```

---

# 🔄 Script Loading Rules

Because the project has no bundler, script order matters.

Recommended order:

```html id="c4o4uh"
<!-- Config -->
theme.js

<!-- Utils -->
utils/*.js

<!-- Services -->
services/*.js

<!-- Components -->
components/*.js

<!-- Screens -->
screens/*.js

<!-- App Bootstrap -->
app.js
```

---

# ⚠️ ESModule Restriction

Prefer global-safe browser-compatible patterns.

Avoid complex module systems.

Preferred approach:

```js id="i7l0qy"
window.Button = function Button() {}
```

or simple globally accessible declarations.

---

# 📊 Chart.js Warning

`js/chart.js` contains a special syntax requirement.

The file begins with:

```html id="p6vmlj"
<script>
```

on the very first line.

Preserve this structure exactly when editing.

---

# 🧪 Testing & Verification

There are no automated tests.

Validation must be manual.

---

## Recommended Validation Flow

1. Open:

```txt id="zbq2t8"
index.html
```

2. Navigate through the application

3. Verify:

* rendering
* responsiveness
* routing
* console errors
* component interactions

---

# 🚫 What NOT To Introduce

Do NOT introduce:

* npm dependencies
* build systems
* TypeScript
* SSR frameworks
* backend coupling
* heavy state managers
* unnecessary abstractions

unless explicitly requested.

---

# ✅ Development Philosophy

The project prioritizes:

```txt id="7y3ev7"
clarity > complexity
speed > perfection
surgical edits > refactors
modularity > giant files
simplicity > abstraction
```

The architecture should remain lightweight, browser-native, and optimized for rapid iteration during the prototyping phase.



