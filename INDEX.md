# Polywhale Detector - Project Index

## Quick Navigation

### Getting Started
- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Setup and development guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview and status
- **[README.md](./README.md)** - Project description and features

### Product Planning (Design OS)

#### Core Documents
- **[Product Overview](./product/product-overview.md)** - Vision, problems, features
- **[Product Roadmap](./product/product-roadmap.md)** - Development sections
- **[Data Model](./product/data-model/data-model.md)** - Core entities and relationships

#### Design System
- **[Colors](./product/design-system/colors.json)** - Color palette (Emerald, Amber, Stone)
- **[Typography](./product/design-system/typography.json)** - Font families and sizes

#### Application Shell
- **[Shell Specification](./product/shell/spec.md)** - Navigation and layout

### Section Specifications

#### 1. Core Detection Engine
- **[Specification](./product/sections/core-detection/spec.md)** - Requirements and objectives
- **[Types](./product/sections/core-detection/types.ts)** - TypeScript interfaces
- **[Sample Data](./product/sections/core-detection/data.json)** - Example data

**Key Types**: Trade, Whale, WhaleAlert, DetectionMetrics

#### 2. Pattern Analysis
- **[Specification](./product/sections/pattern-analysis/spec.md)** - Requirements and objectives
- **[Types](./product/sections/pattern-analysis/types.ts)** - TypeScript interfaces
- **[Sample Data](./product/sections/pattern-analysis/data.json)** - Example data

**Key Types**: Pattern, PatternMatch, PatternInsight, PatternMetrics

#### 3. AI Analysis & Recommendations
- **[Specification](./product/sections/ai-analysis/spec.md)** - Requirements and objectives
- **[Types](./product/sections/ai-analysis/types.ts)** - TypeScript interfaces
- **[Sample Data](./product/sections/ai-analysis/data.json)** - Example data

**Key Types**: Analysis, Recommendation, AnalysisContext, AnalysisOutcome

#### 4. User Dashboard
- **[Specification](./product/sections/dashboard/spec.md)** - Requirements and objectives
- **[Types](./product/sections/dashboard/types.ts)** - TypeScript interfaces
- **[Sample Data](./product/sections/dashboard/data.json)** - Example data

**Key Types**: DashboardState, Alert, WhaleProfile, DashboardMetrics

### Integration Guides
- **[Acontext Setup](./ACONTEXT_SETUP.md)** - Learning system integration

### Configuration Files
- **[package.json](./package.json)** - Dependencies and scripts
- **[tsconfig.json](./tsconfig.json)** - TypeScript configuration
- **[next.config.js](./next.config.js)** - Next.js configuration
- **[.env.example](./.env.example)** - Environment variables template
- **[.kiro/config.json](./.kiro/config.json)** - Kiro project configuration

## Project Structure

```
Polywhale-Detector/
├── product/                           # Design OS Planning
│   ├── product-overview.md            # Product vision
│   ├── product-roadmap.md             # Development roadmap
│   ├── data-model/
│   │   └── data-model.md              # Core entities
│   ├── design-system/
│   │   ├── colors.json                # Color palette
│   │   └── typography.json            # Typography tokens
│   ├── shell/
│   │   └── spec.md                    # Shell specification
│   └── sections/
│       ├── core-detection/            # Whale detection
│       │   ├── spec.md
│       │   ├── types.ts
│       │   └── data.json
│       ├── pattern-analysis/          # Pattern recognition
│       │   ├── spec.md
│       │   ├── types.ts
│       │   └── data.json
│       ├── ai-analysis/               # LLM analysis
│       │   ├── spec.md
│       │   ├── types.ts
│       │   └── data.json
│       └── dashboard/                 # User interface
│           ├── spec.md
│           ├── types.ts
│           └── data.json
│
├── app/                               # Next.js Application
│   ├── api/                           # API routes (to be implemented)
│   ├── components/                    # React components (to be implemented)
│   ├── hooks/                         # Custom hooks (to be implemented)
│   └── page.js                        # Main page (to be implemented)
│
├── lib/                               # Business Logic (to be implemented)
│   ├── whale-detector.js
│   ├── pattern-analyzer.js
│   ├── acontext-client.js
│   ├── llm-agent.js
│   └── web-search.js
│
├── public/                            # Static Assets
├── .kiro/                             # Kiro Configuration
│   └── config.json
├── .env.example                       # Environment Template
├── .gitignore                         # Git Configuration
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript Config
├── next.config.js                     # Next.js Config
├── README.md                          # Project Overview
├── GETTING_STARTED.md                 # Setup Guide
├── ACONTEXT_SETUP.md                  # Learning Integration
├── PROJECT_SUMMARY.md                 # Project Status
└── INDEX.md                           # This File
```

## Development Workflow

### Phase 1: Setup (Week 1)
1. Install dependencies: `npm install`
2. Configure environment: `cp .env.example .env.local`
3. Set up Supabase database
4. Configure API keys

### Phase 2: Core Detection (Week 2-3)
1. Implement Polymarket API integration
2. Build whale detection logic
3. Create real-time alerts
4. Set up trade database

### Phase 3: Pattern Analysis (Week 4-5)
1. Implement pattern extraction
2. Build similarity matching
3. Create pattern insights
4. Integrate Acontext storage

### Phase 4: AI Analysis (Week 6-7)
1. Integrate LLM providers
2. Add web search context
3. Build recommendation engine
4. Implement confidence scoring

### Phase 5: Dashboard (Week 8-9)
1. Create UI components
2. Build real-time updates
3. Implement filtering
4. Add performance metrics

### Phase 6: Deployment (Week 10+)
1. Build production bundle
2. Deploy to Vercel/Docker
3. Monitor performance
4. Iterate based on metrics

## Key Concepts

### Whale Detection
Identifies large trades (>$10k) and classifies trader behavior patterns.

### Pattern Recognition
Extracts recurring trading patterns and calculates historical success rates.

### AI Analysis
Uses LLM to analyze whale behavior and generate recommendations with confidence scores.

### Acontext Learning
Continuously learns from trade outcomes to improve future analysis accuracy.

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS v4
- **Backend**: Next.js API Routes, Supabase PostgreSQL
- **Integrations**: Polymarket API, Acontext, OpenAI/Anthropic, Brave Search
- **Deployment**: Vercel or Docker

## Important Notes

1. **Design OS Structure**: This project uses Design OS for product planning. All product specifications are in the `product/` directory.

2. **TypeScript Types**: Each section has TypeScript type definitions in `types.ts` files. Use these as the source of truth for data structures.

3. **Sample Data**: Each section includes `data.json` with example data. Use this for testing and UI development.

4. **Acontext Integration**: The learning system is critical. Review `ACONTEXT_SETUP.md` before implementation.

5. **Tailwind CSS v4**: This project uses Tailwind CSS v4. Do not create `tailwind.config.js` - use built-in utilities only.

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests
npm test

# Watch tests
npm run test:watch
```

## Support Resources

- **Polymarket API**: https://docs.polymarket.com
- **Acontext Docs**: https://docs.acontext.io
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

## Next Steps

1. **Read**: Start with [GETTING_STARTED.md](./GETTING_STARTED.md)
2. **Review**: Check [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for status
3. **Plan**: Review product specifications in `product/` directory
4. **Setup**: Configure environment and install dependencies
5. **Build**: Start implementing sections following the roadmap

---

**Last Updated**: January 19, 2026
**Status**: Ready for Development
**Version**: 1.0.0
