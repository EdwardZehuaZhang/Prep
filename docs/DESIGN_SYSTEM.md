# Design System Documentation
**ID2322 Exam Prep Application**

---

## Table of Contents
1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Border Radius](#border-radius)
6. [Components](#components)
7. [Icons](#icons)
8. [Interactive States](#interactive-states)
9. [Animations & Transitions](#animations--transitions)
10. [Responsive Design](#responsive-design)

---

## Overview

This design system defines the visual language and component patterns used in the Exam Prep application. The design emphasizes clarity, accessibility, and a modern, friendly aesthetic with rounded corners, clear feedback states, and consistent spacing.

### Design Principles
- **Clarity First**: Clear visual hierarchy and readable typography
- **Friendly & Modern**: Generous use of rounded corners and soft shadows
- **Feedback-Driven**: Immediate visual feedback for user actions
- **Accessibility**: High contrast ratios and clear state indicators
- **Consistency**: Unified spacing, colors, and interaction patterns

---

## Color Palette

### Primary Colors
```css
/* Neutral Grays */
--gray-50: #f9fafb;   /* Background */
--gray-100: #f3f4f6;  /* Card borders */
--gray-200: #e5e7eb;  /* Input borders, dividers */
--gray-300: #d1d5db;  /* Disabled states */
--gray-400: #9ca3af;  /* Placeholders */
--gray-500: #6b7280;  /* Labels, secondary text */
--gray-600: #4b5563;  /* Icons */
--gray-700: #374151;  /* Secondary buttons */
--gray-800: #1f2937;  /* Hover states */
--gray-900: #111827;  /* Primary text, buttons */

/* Black & White */
--black: #000000;     /* Primary actions, selected states */
--white: #ffffff;     /* Card backgrounds, text on dark */
```

### Semantic Colors
```css
/* Success (Green) */
--green-50: #f0fdf4;   /* Correct answer background */
--green-200: #bbf7d0;  /* Correct answer border */
--green-500: #22c55e;  /* Success indicators */
--green-600: #16a34a;  /* Success button primary */
--green-700: #15803d;  /* Success button hover */
--green-800: #166534;  /* Success text */
--green-900: #14532d;  /* Strong success text */

/* Error (Red) */
--red-50: #fef2f2;     /* Wrong answer background */
--red-200: #fecaca;    /* Wrong answer border */
--red-500: #ef4444;    /* Error indicators */
--red-600: #dc2626;    /* Error icons */
--red-700: #b91c1c;    /* Error text */
--red-800: #991b1b;    /* Strong error text */
--red-900: #7f1d1d;    /* Darkest error text */

/* Warning (Amber) */
--amber-50: #fffbeb;   /* Hint background */
--amber-100: #fef3c7;  /* Hint border */
--amber-600: #d97706;  /* Hint text */
--amber-700: #b45309;  /* Hint text hover */
--amber-900: #78350f;  /* Strong hint text */

/* Accent (Yellow) */
--yellow-400: #facc15; /* Icon gradient start */
--yellow-500: #eab308; /* Icon gradient end */

/* Info (Blue) */
--blue-50: #eff6ff;    /* Custom answer background */
--blue-200: #bfdbfe;   /* Custom answer border */
--blue-300: #93c5fd;   /* Edit mode border */
--blue-500: #3b82f6;   /* Edit mode focus */
--blue-600: #2563eb;   /* Custom answer text */

/* Emerald (Completion) */
--emerald-600: #059669; /* Complete gradient start */
--emerald-700: #047857; /* Complete gradient hover */
```

### Gradient Combinations
```css
/* Primary Icon Gradient */
background: linear-gradient(to bottom right, #facc15, #eab308);

/* Success Gradient */
background: linear-gradient(to right, #16a34a, #059669);
background: linear-gradient(to right, #15803d, #047857); /* hover */

/* Progress Bar Gradient */
background: linear-gradient(to right, #000000, #374151);
```

---

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Font Sizes
```css
/* Headings */
--text-2xl: 1.5rem;   /* 24px - Page title */
--text-xl: 1.25rem;   /* 20px - Section headings */
--text-lg: 1.125rem;  /* 18px - Input text */

/* Body */
--text-base: 1rem;    /* 16px - Button text, options */
--text-sm: 0.875rem;  /* 14px - Labels, helper text */
--text-xs: 0.75rem;   /* 12px - Labels, badges */
```

### Font Weights
```css
--font-bold: 700;      /* Headings, questions, scores */
--font-semibold: 600;  /* Labels, buttons, selected options */
--font-medium: 500;    /* Input text, regular options */
```

### Line Heights
```css
--leading-relaxed: 1.625; /* Questions, hint text */
--leading-normal: 1.5;    /* Default body text */
```

### Text Styles by Context

#### Page Title
```css
font-size: 1.25rem;
font-weight: 700;
color: #111827;
```

#### Section Headers
```css
font-size: 0.75rem;
font-weight: 600;
color: #6b7280;
text-transform: uppercase;
letter-spacing: 0.025em;
```

#### Questions
```css
font-size: 1.5rem; /* sm: 1.25rem on mobile */
font-weight: 700;
color: #111827;
line-height: 1.625;
```

#### Button Text
```css
font-size: 1rem;
font-weight: 600;
```

#### Input Text
```css
font-size: 1.125rem;
font-weight: 500;
color: #111827;
```

---

## Spacing & Layout

### Spacing Scale
```css
/* Tailwind default spacing scale used throughout */
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
```

### Container Widths
```css
--max-w-2xl: 42rem;    /* 672px - Main content container */
```

### Padding Standards
```css
/* Cards */
padding: 1.5rem;       /* Mobile (24px) */
padding: 2rem;         /* Desktop (32px) */

/* Buttons */
padding: 1rem 1.5rem;  /* Standard (16px 24px) */
padding: 1.25rem 1rem; /* Large (20px 16px) */

/* Input Fields */
padding: 1.25rem;      /* All sides (20px) */

/* Multiple Choice Options */
padding: 1.25rem;      /* All sides (20px) */
```

### Gaps
```css
/* Flex/Grid gaps */
gap: 0.75rem;  /* 12px - Between buttons */
gap: 0.5rem;   /* 8px - Between small elements */
gap: 1.5rem;   /* 24px - Between major sections */
```

---

## Border Radius

### Radius Scale
```css
/* Components use consistent rounded corners */
--rounded-lg: 0.5rem;      /* 8px - Small elements, badges */
--rounded-xl: 0.75rem;     /* 12px - Buttons, small cards */
--rounded-2xl: 1rem;       /* 16px - Input fields, options, medium cards */
--rounded-full: 9999px;    /* Pills, badges, radio indicators */
--rounded-custom: 2rem;    /* 32px - Main cards */
```

### Usage by Component
- **Main Cards**: `2rem` (rounded-[2rem])
- **Buttons**: `1rem` (rounded-2xl)
- **Input Fields**: `1rem` (rounded-2xl)
- **Multiple Choice Options**: `1rem` (rounded-2xl)
- **Badges/Pills**: `9999px` (rounded-full)
- **Feedback Boxes**: `1rem` (rounded-2xl)
- **Topic Badges**: `9999px` (rounded-full)
- **Icons Container**: `1rem` (rounded-2xl)

---

## Components

### 1. Card Container
```jsx
<div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6 sm:p-8">
  {/* Content */}
</div>
```
**Properties:**
- Background: White
- Border: 4px solid gray-100
- Border Radius: 2rem (32px)
- Padding: 1.5rem mobile, 2rem desktop

---

### 2. Primary Button
```jsx
<button className="bg-black text-white py-4 px-6 rounded-2xl font-semibold text-base hover:bg-gray-800 active:scale-[0.98] transition-all">
  Button Text
</button>
```
**Properties:**
- Background: Black
- Text: White, font-semibold, 1rem
- Padding: 1rem vertical, 1.5rem horizontal
- Border Radius: 1rem
- Hover: Gray-800 background
- Active: Scale 0.98

**Variants:**

**Secondary Button:**
```jsx
<button className="border-2 border-gray-200 text-gray-700 bg-white py-4 px-5 rounded-2xl font-semibold text-base hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition-all">
  Secondary
</button>
```

**Success Button (Complete):**
```jsx
<button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold text-base hover:from-green-700 hover:to-emerald-700 active:scale-[0.98] transition-all">
  Complete
</button>
```

**Disabled Button:**
```jsx
<button className="bg-gray-300 text-white py-4 px-6 rounded-2xl font-semibold text-base cursor-not-allowed">
  Disabled
</button>
```

---

### 3. Input Field
```jsx
<input
  type="text"
  className="w-full p-5 border-2 border-gray-200 bg-white rounded-2xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 font-medium text-lg transition-all placeholder:text-gray-400"
  placeholder="Type your answer here..."
/>
```
**Properties:**
- Background: White
- Border: 2px solid gray-200
- Border Radius: 1rem
- Padding: 1.25rem all sides
- Font: Medium weight, 1.125rem
- Focus: 2px black ring, black border
- Disabled: Gray-100 background

---

### 4. Multiple Choice Option
```jsx
<button className="w-full p-5 border-2 border-gray-200 bg-white text-gray-900 rounded-2xl text-left font-medium text-base hover:border-gray-300 hover:bg-gray-50 cursor-pointer transition-all">
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300" />
    <span className="flex-1">Option text</span>
  </div>
</button>
```

**States:**

**Selected (Not Submitted):**
```css
border-color: black;
background-color: gray-50;
radio-indicator: black with white dot;
```

**Correct Answer:**
```css
border-color: green-500;
background-color: green-50;
text-color: green-900;
icon: CheckCircle (green-600);
```

**Wrong Answer:**
```css
border-color: red-500;
background-color: red-50;
text-color: red-900;
icon: XCircle (red-600);
```

---

### 5. Dropdown
```jsx
<div className="relative">
  <button className="w-full p-5 pr-12 border-2 border-gray-200 bg-white rounded-2xl focus:ring-2 focus:ring-black focus:border-black text-gray-900 font-semibold text-base hover:border-gray-300">
    Selected Option
  </button>
  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
</div>
```

**Dropdown Menu:**
```jsx
<div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden max-h-80 overflow-y-auto scrollbar-hide">
  <button className="w-full px-5 py-4 text-left font-semibold bg-white text-gray-900 hover:bg-gray-50">
    Option
  </button>
  {/* Selected option */}
  <button className="w-full px-5 py-4 text-left font-semibold bg-gray-900 text-white">
    <span>Selected</span>
    <Check size={18} />
  </button>
</div>
```

---

### 6. Feedback Box

**Success:**
```jsx
<div className="p-5 rounded-2xl border-2 bg-green-50 border-green-200">
  <div className="flex items-center gap-3">
    <CheckCircle className="text-green-600" size={24} />
    <span className="font-bold text-base text-green-800">Correct! 🎉</span>
  </div>
</div>
```

**Error:**
```jsx
<div className="p-5 rounded-2xl border-2 bg-red-50 border-red-200">
  <div className="flex items-center gap-3">
    <XCircle className="text-red-600" size={24} />
    <div>
      <span className="font-bold text-base text-red-800 block mb-2">Not quite right</span>
      <div className="text-gray-800">
        <p className="font-semibold text-sm mb-2">Correct answer:</p>
        <p className="text-sm font-semibold bg-white px-3 py-2 rounded-lg">Answer</p>
      </div>
    </div>
  </div>
</div>
```

**Skipped:**
```jsx
<div className="p-5 rounded-2xl border-2 bg-gray-50 border-gray-300">
  <div className="flex items-center gap-3">
    <SkipForward className="text-gray-500" size={24} />
    <span className="font-bold text-base text-gray-700">Question Skipped</span>
  </div>
</div>
```

---

### 7. Hint Box
```jsx
<div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
  <div className="flex gap-2">
    <span className="text-amber-600 text-base font-medium">💡</span>
    <p className="text-sm font-medium text-gray-700 leading-relaxed">
      <strong className="text-amber-900 font-semibold">Hint:</strong> {hintText}
    </p>
  </div>
</div>
```

---

### 8. Badge/Pill

**Topic Badge:**
```jsx
<span className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
  Topic Name
</span>
```

**Status Badge:**
```jsx
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-200 text-green-800">
  Question 5
</span>
```

---

### 9. Progress Bar
```jsx
<div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
  <div 
    className="bg-gradient-to-r from-black to-gray-700 h-3 rounded-full transition-all duration-500 ease-out"
    style={{ width: '65%' }}
  />
</div>
```
**Properties:**
- Background: Gray-100
- Fill: Black to gray-700 gradient
- Height: 0.75rem (12px)
- Border Radius: Full (9999px)
- Transition: 500ms ease-out

---

### 10. Icon Button
```jsx
<button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
  <RotateCcw size={20} className="text-gray-600" />
</button>
```

---

### 11. Logo/Icon Container
```jsx
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl">
  <BookOpen className="text-white" size={24} />
</div>
```

---

### 12. Question Number Grid Item
```jsx
<button className="py-2 px-3 hover:bg-gray-100 transition-all text-left rounded-lg w-full">
  <div className="flex items-center gap-1.5">
    <span className="text-sm font-bold text-gray-900">Q1</span>
    <CheckCircle className="text-green-600" size={20} />
  </div>
</button>
```

**Expanded State (Correct):**
```css
background-color: green-200;
hover:background-color: green-300;
```

**Expanded State (Wrong):**
```css
background-color: red-200;
hover:background-color: red-300;
```

**Expanded State (Skipped):**
```css
background-color: gray-200;
hover:background-color: gray-300;
```

---

## Icons

### Icon Library
- **Primary**: Lucide React
- **Social**: React Icons (FontAwesome)

### Icon Sizes
```css
--icon-sm: 16px;   /* Small buttons, inline icons */
--icon-md: 20px;   /* Default buttons, options */
--icon-lg: 24px;   /* Feedback, headers */
--icon-xl: 28px;   /* Social media links */
```

### Icons Used
| Icon | Component | Size | Color |
|------|-----------|------|-------|
| BookOpen | Logo | 24px | White |
| CheckCircle | Correct answer | 20-24px | green-600 |
| XCircle | Wrong answer | 20-24px | red-600 |
| ArrowRight | Next button | 20px | White |
| RotateCcw | Reset button | 20px | gray-600 |
| ChevronDown | Dropdown | 20px | gray-400 |
| Check | Selected dropdown item | 18px | White |
| SkipForward | Skipped question | 20-24px | gray-500 |
| Trash2 | Delete question | 16px | red-700 |
| FaGithub | GitHub link | 28px | gray-600 |
| FaLinkedin | LinkedIn link | 28px | gray-600 |
| FaGlobe | Website link | 28px | gray-600 |

---

## Interactive States

### Hover States
```css
/* Buttons */
background-color: gray-800; /* Primary button */
background-color: gray-50;  /* Secondary button */
border-color: gray-300;     /* Input/Option borders */

/* Icon Buttons */
background-color: gray-100;

/* Social Links */
color: gray-900;
```

### Active States
```css
/* Buttons */
transform: scale(0.98);
transition: all;

/* Disabled */
cursor: not-allowed;
transform: scale(1); /* No scale on click */
```

### Focus States
```css
/* Input Fields */
outline: none;
ring: 2px black;
border-color: black;

/* Dropdowns */
outline: none;
ring: 2px black;
border-color: black;
```

### Disabled States
```css
/* Buttons */
background-color: gray-300;
color: white;
cursor: not-allowed;

/* Inputs */
background-color: gray-100;
cursor: not-allowed;
```

---

## Animations & Transitions

### Standard Transition
```css
transition: all;
/* Uses Tailwind's default duration (~150ms) */
```

### Specific Transitions
```css
/* Button Scale */
transition: all;
active:scale-[0.98];

/* Progress Bar */
transition: all 500ms ease-out;

/* Dropdown Chevron */
transition: transform;
rotate-180; /* when open */

/* General Colors */
transition: colors;
```

### Scroll Behavior
```css
scroll-behavior: smooth; /* When jumping to questions */
```

---

## Responsive Design

### Breakpoints
```css
/* Tailwind defaults */
sm: 640px;   /* Small devices */
xs: 382px;   /* Custom extra small (defined in config) */
```

### Responsive Patterns

#### Sticky Header (Desktop Only)
```jsx
<div className="sm:sticky sm:top-6 sm:z-10">
  {/* Header content */}
</div>
```

#### Padding Adjustments
```jsx
<div className="p-6 sm:p-8">
  {/* More padding on desktop */}
</div>
```

#### Font Size Adjustments
```jsx
<h2 className="text-xl sm:text-2xl">
  {/* Larger text on desktop */}
</h2>
```

#### Topic Badge Truncation
```jsx
{/* Mobile: Show only "Week X" */}
<span className="sm:hidden">{topic.match(/Week \d+/)?.[0]}</span>

{/* Desktop: Show full topic */}
<span className="hidden sm:block">{topic}</span>
```

#### Container Spacing
```jsx
<div className="py-6 px-4 sm:px-6">
  {/* Responsive outer padding */}
</div>
```

---

## Best Practices

### 1. Consistency
- Always use the defined color palette
- Maintain consistent spacing using the spacing scale
- Use standard border radius values across components

### 2. Accessibility
- Ensure sufficient color contrast (WCAG AA minimum)
- Provide clear focus states for keyboard navigation
- Use semantic HTML elements
- Include appropriate ARIA labels where needed

### 3. Performance
- Use utility-first CSS (Tailwind) for minimal bundle size
- Implement `scrollbar-hide` for custom scrollbars
- Use hardware-accelerated transforms for animations

### 4. State Management
- Provide clear visual feedback for all interactive states
- Use localStorage for persistence
- Maintain consistent state indicator patterns

### 5. User Experience
- Auto-focus inputs when appropriate
- Support keyboard navigation (Enter key)
- Provide immediate visual feedback
- Use smooth transitions for state changes

---

## File Structure

```
src/
├── components/
│   └── ExamPrepApp.tsx    # Main component
├── data/                   # Question data
├── types/                  # TypeScript types
├── utils/                  # Helper functions
└── index.css              # Global styles & Tailwind

tailwind.config.js         # Tailwind configuration
```

---

## Future Considerations

### Potential Enhancements
1. **Dark Mode**: Implement a dark color scheme variant
2. **Theme Customization**: Allow users to customize accent colors
3. **Animation Library**: Consider adding more sophisticated animations
4. **Component Library**: Extract components into reusable library
5. **Design Tokens**: Convert to CSS custom properties for easier theming

### Accessibility Improvements
1. Implement full keyboard navigation
2. Add ARIA live regions for dynamic content
3. Ensure screen reader compatibility
4. Test with accessibility tools

---

*Last Updated: November 26, 2025*
*Version: 1.0*
