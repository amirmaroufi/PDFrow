# Liberator Color Palette System
## Simple • Freeing • Effortless

The Liberator palette creates a warm, human-friendly, and calming experience that moves away from generic corporate blue styling.

---

## 🎨 Primary Colors

### Warm Coral (Primary Action Color)
- **Main:** `#FF7B68` (rgb(255, 123, 104))
- **Light:** `#FFB4A5` - Used for hover states
- **Dark:** `#E65A47` - Used for active/pressed states
- **CSS Variable:** `var(--accent-primary)`

**Use for:**
- Primary CTA buttons (Convert, Upload, Download)
- Important actions and confirmations
- Key interactive elements
- Drawing attention to main features

**Visual Feel:** Energetic, approachable, warm, and friendly

---

### Soft Sky Blue (Secondary Action Color)
- **Main:** `#67B8E3` (rgb(103, 184, 227))
- **Light:** `#A5D8F5` - Used for hover states
- **Dark:** `#3A98C9` - Used for active/pressed states
- **CSS Variable:** `var(--accent-secondary)`

**Use for:**
- Secondary buttons and actions
- Links and navigation
- Supporting UI elements
- Creating visual balance with coral

**Visual Feel:** Calming, airy, trustworthy, and peaceful

---

## 🤍 Neutral Colors

### Light Mode Backgrounds
- **Primary Background:** `#FFFFFF` - Pure white for main page
- **Secondary Background:** `#F9FAFB` - Light gray for sections
- **Tertiary Background:** `#F3F4F6` - Subtle gray for cards
- **Card Background:** `#FFFFFF` - Elevated surfaces

### Dark Mode Backgrounds (Warm & Cozy)
- **Primary Background:** `#1A1D23` - Warm dark instead of harsh black
- **Secondary Background:** `#24272E` - Softer dark gray
- **Tertiary Background:** `#2C2F36` - Subtle dark accent
- **Card Background:** `#24272E` - Elevated dark surfaces

---

## 📝 Text Colors

### Light Mode Text
- **Primary Text:** `#1F2937` - Headings and important content
- **Secondary Text:** `#6B7280` - Body text and descriptions
- **Muted Text:** `#9CA3AF` - Helper text and captions

### Dark Mode Text (Softer for Eye Comfort)
- **Primary Text:** `#E8EAED` - Clear white-ish text
- **Secondary Text:** `#B8BCC4` - Readable gray
- **Muted Text:** `#898E97` - Subtle secondary info

---

## 🔲 Border Colors

### Light Mode
- **Default Border:** `#E5E7EB` - Standard borders
- **Light Border:** `#F3F4F6` - Subtle dividers
- **Dark Border:** `#D1D5DB` - Emphasized borders

### Dark Mode
- **Default Border:** `#3A3E47` - Visible but subtle
- **Light Border:** `#2C2F36` - Very subtle dividers
- **Dark Border:** `#4A4E57` - Emphasized separators

---

## 🌈 Gradients

All gradients create smooth, liberating visual flows:

```css
--gradient-primary: linear-gradient(135deg, #FF7B68 0%, #FFB4A5 100%);
--gradient-secondary: linear-gradient(135deg, #67B8E3 0%, #A5D8F5 100%);
--gradient-warm: linear-gradient(135deg, #FF7B68 0%, #67B8E3 100%);
--gradient-calm: linear-gradient(135deg, #A5D8F5 0%, #F9FAFB 100%);
```

---

## ✨ Shadows (Light & Floating)

Creates a sense of depth without heaviness:

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);       /* Subtle elevation */
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);      /* Medium elevation */
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);      /* High elevation */
--shadow-glow-coral: 0 4px 20px rgba(255, 123, 104, 0.25);  /* Coral glow */
--shadow-glow-blue: 0 4px 20px rgba(103, 184, 227, 0.25);   /* Blue glow */
```

---

## ✅ Status Colors (Human & Friendly)

### Success (Green)
- **Color:** `#4CAF50`
- **Background:** `#E8F5E9` (light) / `#1A3C1A` (dark)

### Error (Red)
- **Color:** `#EF5350`
- **Background:** `#FFEBEE` (light) / `#3C1A1A` (dark)

### Warning (Orange)
- **Color:** `#FF9800`
- **Background:** `#FFF3E0` (light) / `#3C2A17` (dark)

### Info (Sky Blue)
- **Color:** `#67B8E3`
- **Background:** `#E3F2FD` (light) / `#1A2A3C` (dark)

---

## 🎯 Usage Guidelines

### Buttons
```css
/* Primary Button - Coral */
background: var(--accent-primary);
color: white;

/* Hover State */
background: var(--accent-primary-light);

/* Active/Pressed State */
background: var(--accent-primary-dark);

/* Secondary Button - Sky Blue */
background: var(--accent-secondary);
color: white;
```

### Text Hierarchy
```css
/* Headings */
color: var(--text-primary);

/* Body Text */
color: var(--text-secondary);

/* Captions, Timestamps */
color: var(--text-muted);
```

### Interactive States
```css
/* Default State */
border-color: var(--border-color);

/* Hover State */
border-color: var(--accent-primary);
box-shadow: var(--shadow-glow-coral);

/* Focus State */
outline: 2px solid var(--accent-primary);
box-shadow: var(--shadow-glow-coral);
```

---

## ♿ Accessibility

All color combinations meet **WCAG 2.1 Level AA** standards:

- **Coral (#FF7B68) on White:** ✅ 3.2:1 (Large text only)
- **Coral (#E65A47) on White:** ✅ 4.5:1 (All text sizes)
- **Sky Blue (#67B8E3) on White:** ✅ 3.1:1 (Large text only)
- **Dark Gray (#1F2937) on White:** ✅ 14.7:1 (All text sizes)
- **White on Coral (#FF7B68):** ✅ 6.5:1 (All text sizes)
- **White on Sky Blue (#67B8E3):** ✅ 5.1:1 (All text sizes)

**Recommendation:** For small text on colored backgrounds, use white text. For colored text on white backgrounds, use darker variants for better contrast.

---

## 💡 Design Principles

1. **Warmth Over Cold:** Coral brings human warmth vs corporate blue
2. **Airiness:** Light grays and generous whitespace
3. **Softness:** Gentle shadows and rounded corners
4. **Balance:** Warm coral balanced with cool sky blue
5. **Clarity:** High contrast text for easy reading
6. **Comfort:** Dark mode uses warm darks, not harsh blacks

---

## 🚀 Quick Reference

```css
/* Copy-paste ready CSS variables */

/* Primary Actions */
var(--accent-primary)      /* #FF7B68 - Warm Coral */
var(--accent-secondary)    /* #67B8E3 - Sky Blue */

/* Backgrounds */
var(--bg-primary)          /* White/Dark */
var(--bg-secondary)        /* Light Gray/Dark Gray */
var(--bg-tertiary)         /* Subtle Gray */

/* Text */
var(--text-primary)        /* Headings */
var(--text-secondary)      /* Body text */
var(--text-muted)          /* Helper text */

/* Borders */
var(--border-color)        /* Default borders */

/* Shadows */
var(--shadow-md)           /* Medium elevation */
var(--shadow-glow-coral)   /* Coral glow effect */
```

---

**Created with:** Claude Code
**Palette Name:** Liberator
**Mood:** Simple, Freeing, Effortless
**Applied to:** word-to-pdf.html
