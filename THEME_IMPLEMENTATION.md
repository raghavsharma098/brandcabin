# Theme Toggle Implementation

This document explains how the dark/light theme toggle system works in the website.

## Overview

The website now includes a comprehensive theme toggle system that allows users to switch between light and dark themes. The selected theme is persisted across sessions using localStorage.

## Components

### 1. Theme Context (`src/contexts/ThemeContext.tsx`)

- **ThemeProvider**: Wraps the entire application and provides theme state
- **useTheme**: Hook to access theme state and toggle function
- **State Management**: Manages `isDarkTheme` boolean and provides `toggleTheme` function
- **Persistence**: Saves theme preference to localStorage
- **Hydration Safety**: Prevents hydration mismatches by not rendering until mounted

### 2. Header Component (`src/components/layout/header.tsx`)

- **Theme Toggle Button**: Sun/Moon icon button in the top-right navigation
- **Responsive Design**: Different button sizes for desktop, tablet, and mobile
- **Accessibility**: Proper ARIA labels for screen readers
- **Icon States**: Sun icon for dark theme, Moon icon for light theme

### 3. Tailwind Configuration (`tailwind.config.ts`)

- **Dark Mode**: Enabled with `darkMode: 'class'`
- **CSS Classes**: Uses `.dark` class on `html` element to trigger dark theme

### 4. CSS Variables (`src/app/globals.css`)

- **CSS Custom Properties**: Defines `--background` and `--foreground` for both themes
- **Smooth Transitions**: 0.3s ease transitions for theme changes
- **Scrollbar Styling**: Custom scrollbar colors for both themes

## How It Works

1. **Initial Load**: Theme context checks localStorage for saved preference
2. **Theme Toggle**: Clicking the toggle button:
   - Switches theme state
   - Adds/removes `dark` class from `document.documentElement`
   - Saves preference to localStorage
3. **CSS Application**: Tailwind's dark mode classes automatically apply based on the `dark` class
4. **Persistence**: Theme choice is remembered across browser sessions

## Theme Colors

### Light Theme (Default)
- Background: White (`#ffffff`)
- Text: Dark gray (`#0f172a`)
- Accents: Blue and purple gradients
- Borders: Light gray (`#e2e8f0`)

### Dark Theme
- Background: Dark gray (`#0f172a`)
- Text: Light gray (`#f8fafc`)
- Accents: Blue and purple gradients (adjusted for dark backgrounds)
- Borders: Dark gray (`#1e293b`)

## Usage

### In Components

```tsx
import { useTheme } from '@/contexts/ThemeContext'

function MyComponent() {
  const { isDarkTheme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  )
}
```

### CSS Classes

```css
/* Light theme (default) */
.my-element {
  background: white;
  color: #0f172a;
}

/* Dark theme */
.dark .my-element {
  background: #0f172a;
  color: #f8fafc;
}
```

## Responsive Design

- **Desktop**: Theme toggle button in top-right navigation
- **Tablet**: Smaller theme toggle button in medium screen navigation
- **Mobile**: Full-width theme toggle button in mobile menu with text labels

## Accessibility Features

- **ARIA Labels**: Dynamic labels that change based on current theme
- **Keyboard Navigation**: Button is focusable and supports Enter/Space activation
- **Screen Reader Support**: Clear indication of current theme and toggle action
- **High Contrast**: Maintains proper contrast ratios in both themes

## Browser Support

- **Modern Browsers**: Full support for CSS custom properties and Tailwind dark mode
- **Fallbacks**: Graceful degradation for older browsers
- **localStorage**: Theme preference persistence across sessions

## Future Enhancements

- **System Theme Detection**: Automatically match user's system preference
- **Theme Transitions**: Smooth animations between theme states
- **Custom Theme Colors**: Allow users to customize accent colors
- **Theme Export/Import**: Share theme preferences across devices 