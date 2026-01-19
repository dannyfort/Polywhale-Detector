# Application Shell Specification

## Overview

The application shell provides persistent navigation and layout for all sections of Polywhale Detector.

## Layout Structure

```
┌─────────────────────────────────────┐
│         Header / Logo               │
├──────────┬──────────────────────────┤
│          │                          │
│   Sidebar│      Main Content        │
│   Nav    │                          │
│          │                          │
├──────────┴──────────────────────────┤
│         Footer / Status             │
└─────────────────────────────────────┘
```

## Navigation Items

### Main Navigation
- **Dashboard**: Real-time whale activity overview
- **Whales**: Whale tracking and history
- **Patterns**: Learned patterns and insights
- **Analysis**: Historical analyses and outcomes
- **Settings**: Configuration and preferences

### User Menu
- Profile
- Preferences
- Documentation
- Logout

## Design Tokens

- **Color Scheme**: Emerald primary, Stone neutral
- **Typography**: Inter for headings/body, IBM Plex Mono for data
- **Spacing**: 8px base unit
- **Breakpoints**: Mobile-first responsive design

## Responsive Behavior

- **Mobile (< 640px)**: Collapsed sidebar, hamburger menu
- **Tablet (640px - 1024px)**: Sidebar visible, optimized spacing
- **Desktop (> 1024px)**: Full sidebar, expanded content

## Dark Mode

All components support light and dark modes with appropriate contrast ratios.

## Real-time Updates

- Live trade notifications
- Pattern match alerts
- Analysis updates
- Status indicators
