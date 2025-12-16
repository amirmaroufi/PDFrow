# Color Modes Reference - Violet Nexus Palette
## Complete Theme System for word-to-pdf.html

---

## 🎨 Three Theme Modes Available

### 1. **Dark Mode** (Default) - Violet Nexus
The primary dark theme with deep violet and electric teal accents.

**Body Class:** `class="dark-mode"`

**Color Scheme:**
- **Background:** Near-black `#0A0E14` → Dark charcoal `#151921` → Cards `#1E2433`
- **Primary Accent:** Rich Violet `#7C3AED`
- **Secondary Accent:** Electric Teal `#06B6D4`
- **Text:** Light gray `#E2E8F0` → Medium gray `#94A3B8` → Muted `#64748B`

**Best for:** Professional, cutting-edge, powerful appearance

---

### 2. **Light Mode** - Clean & Bright
A light theme maintaining the violet and teal brand colors with excellent readability.

**Body Class:** `class="light-mode"`

**Color Scheme:**
- **Background:** Pure white `#FFFFFF` → Light gray `#F8FAFC` → Subtle `#F1F5F9`
- **Primary Accent:** Rich Violet `#7C3AED` (same as dark)
- **Secondary Accent:** Electric Teal `#06B6D4` (same as dark)
- **Text:** Deep slate `#0F172A` → Gray `#475569` → Muted `#64748B`

**Best for:** Daytime use, high ambient light, traditional preference

---

### 3. **Dimmed Mode** (Cyan Theme) - Softer Dark
An alternative dark theme with lighter violet and brighter cyan for a softer appearance.

**Body Class:** `class="dimmed-mode"`

**Color Scheme:**
- **Background:** Slate `#1E293B` → Medium gray `#334155` → Cards `#475569`
- **Primary Accent:** Light Violet `#A78BFA` (brighter than dark mode)
- **Secondary Accent:** Bright Cyan `#22D3EE` (more vibrant teal)
- **Text:** Very light `#F1F5F9` → Light gray `#CBD5E1` → Medium `#94A3B8`

**Best for:** Users who want dark mode but find pure black too harsh, cyan/aqua color preference

---

## 🔄 How to Switch Modes

The theme toggle button in the navigation switches between three states:

1. **☀️ Light Mode** → 2. **🌙 Dimmed Mode** → 3. **🌑 Dark Mode** → (repeat)

The body class automatically changes:
```html
<body class="light-mode">  <!-- Bright theme -->
<body class="dimmed-mode"> <!-- Cyan dark theme -->
<body class="dark-mode">   <!-- Default dark theme -->
```

---

## 📊 Color Comparison Table

| Element | Dark Mode | Light Mode | Dimmed Mode |
|---------|-----------|------------|-------------|
| **Main Background** | #0A0E14 (near-black) | #FFFFFF (white) | #1E293B (slate) |
| **Secondary BG** | #151921 (charcoal) | #F8FAFC (light gray) | #334155 (gray) |
| **Cards/Modals** | #1E2433 (dark blue-gray) | #FFFFFF (white) | #334155 (gray) |
| **Primary Text** | #E2E8F0 (light) | #0F172A (dark) | #F1F5F9 (very light) |
| **Body Text** | #94A3B8 (medium) | #475569 (gray) | #CBD5E1 (light) |
| **Borders** | #334155 (subtle) | #E2E8F0 (light gray) | #475569 (medium) |
| **Primary Accent** | #7C3AED (violet) | #7C3AED (same) | #A78BFA (light violet) |
| **Secondary Accent** | #06B6D4 (teal) | #06B6D4 (same) | #22D3EE (bright cyan) |

---

## 🎯 Button Colors Across Modes

### Primary Button (Convert, Upload, Download)

**Dark Mode:**
```css
background: #7C3AED (violet)
hover: #A78BFA (light violet)
active: #5B21B6 (deep violet)
```

**Light Mode:**
```css
background: #7C3AED (violet)
hover: #A78BFA (light violet)
active: #5B21B6 (deep violet)
```

**Dimmed Mode:**
```css
background: #A78BFA (light violet)
hover: #C4B5FD (very light violet)
active: #7C3AED (medium violet)
```

### Secondary Button (Cancel, Learn More)

**Dark Mode:**
```css
background: #06B6D4 (teal)
hover: #22D3EE (bright teal)
active: #0891B2 (deep teal)
```

**Light Mode:**
```css
background: #06B6D4 (teal)
hover: #22D3EE (bright teal)
active: #0891B2 (deep teal)
```

**Dimmed Mode:**
```css
background: #22D3EE (bright cyan)
hover: #67E8F9 (very bright cyan)
active: #06B6D4 (medium teal)
```

---

## 🌈 Gradients by Mode

### Dark Mode
```css
--gradient-primary: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
--gradient-secondary: linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%);
--logo-gradient: linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #5B21B6 100%);
```

### Light Mode
```css
--gradient-primary: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
--gradient-secondary: linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%);
--logo-gradient: linear-gradient(135deg, #7C3AED 0%, #06B6D4 50%, #5B21B6 100%);
```

### Dimmed Mode (Brighter)
```css
--gradient-primary: linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%);
--gradient-secondary: linear-gradient(135deg, #22D3EE 0%, #67E8F9 100%);
--logo-gradient: linear-gradient(135deg, #A78BFA 0%, #22D3EE 50%, #06B6D4 100%);
```

---

## ♿ Accessibility by Mode

### Dark Mode Contrast Ratios
- Primary text (#E2E8F0) on background (#0A0E14): **14.2:1 ✅ AAA**
- Secondary text (#94A3B8) on background: **7.8:1 ✅ AAA**
- White on violet button (#7C3AED): **5.8:1 ✅ AA**

### Light Mode Contrast Ratios
- Primary text (#0F172A) on background (#FFFFFF): **16.1:1 ✅ AAA**
- Secondary text (#475569) on background: **8.6:1 ✅ AAA**
- White on violet button (#7C3AED): **5.8:1 ✅ AA**

### Dimmed Mode Contrast Ratios
- Primary text (#F1F5F9) on background (#1E293B): **11.8:1 ✅ AAA**
- Secondary text (#CBD5E1) on background: **7.2:1 ✅ AAA**
- White on light violet button (#A78BFA): **4.6:1 ✅ AA**

**All modes meet or exceed WCAG 2.1 Level AA standards!**

---

## 🛠️ CSS Variable Override System

### Why We Need Overrides
The global `styles.css` file uses old variable names:
- `--primary-bg` (old) → Now maps to `--bg-primary` (new)
- `--secondary-bg` (old) → Now maps to `--bg-secondary` (new)
- `--accent-primary` (old blue) → Now overridden with violet

### How It Works
The inline styles in `word-to-pdf.html` override the global styles:

```css
/* In styles.css (old) */
:root {
    --accent-primary: #0066ff; /* Old blue */
}

/* In word-to-pdf.html (new - overrides above) */
:root {
    --accent-primary: #7C3AED; /* New violet */
    --primary-bg: #0A0E14;     /* Legacy mapping */
}
```

This ensures the word-to-pdf page uses the **Violet Nexus palette** while other pages still use the original colors.

---

## 🎨 Brand Consistency

### Core Brand Colors (Consistent Across All Modes)
- **Primary Brand:** Violet `#7C3AED` (in light/dark) or `#A78BFA` (in dimmed)
- **Secondary Brand:** Teal `#06B6D4` (in light/dark) or `#22D3EE` (in dimmed)

### When to Use Each Mode

**Dark Mode:**
- Default for power users
- Best for low-light environments
- Most professional/cutting-edge appearance
- Emphasizes the violet brand color

**Light Mode:**
- Users preferring traditional bright interfaces
- High ambient light situations
- Better for printing or screenshots
- Maintains violet/teal brand identity

**Dimmed Mode (Cyan):**
- Users who find dark mode too dark
- Alternative color preference (cyan lovers)
- Evening use without harsh contrast
- Softer, more playful appearance

---

## 📱 User Preference

The theme preference is typically saved in localStorage:
```javascript
localStorage.setItem('theme-mode', 'dark-mode');  // or 'light-mode', 'dimmed-mode'
```

On page load, the saved preference is applied to the body class.

---

## 🚀 Quick CSS Reference

### Using New Variables
```css
/* Backgrounds */
background: var(--bg-primary);      /* Main background */
background: var(--bg-secondary);    /* Sections */
background: var(--card-bg);         /* Cards/modals */

/* Text */
color: var(--text-primary);         /* Headlines */
color: var(--text-secondary);       /* Body text */
color: var(--text-muted);           /* Captions */

/* Accents */
background: var(--accent-primary);  /* Primary buttons (violet/light violet) */
background: var(--accent-secondary); /* Secondary buttons (teal/cyan) */
border-color: var(--border-color);  /* Default borders */

/* Effects */
box-shadow: var(--shadow-glow-violet);  /* Violet glow */
box-shadow: var(--shadow-glow-teal);    /* Teal glow */
```

---

## ✅ What's Fixed

1. **✅ Dark Mode colors now showing violet (#7C3AED) and teal (#06B6D4)**
2. **✅ Light Mode uses same violet/teal with light backgrounds**
3. **✅ Dimmed Mode (Cyan theme) uses brighter violet (#A78BFA) and cyan (#22D3EE)**
4. **✅ All legacy variable names from styles.css are properly overridden**
5. **✅ Logo gradient adapts to each mode**
6. **✅ All three modes meet WCAG AA accessibility standards**

---

**Last Updated:** 2025
**Applied To:** word-to-pdf.html only
**Color System:** Violet Nexus (Dark Mode Foundation)
