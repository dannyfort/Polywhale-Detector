# Polywhale Detector - Getting Started Guide

## Project Overview

Polywhale Detector is a comprehensive whale trading pattern detection system for Polymarket. It combines real-time monitoring, AI analysis, and continuous learning to provide traders with actionable insights.

## Project Structure

```
Polywhale-Detector/
├── product/                    # Product planning (Design OS)
│   ├── product-overview.md     # Product vision and features
│   ├── product-roadmap.md      # Development sections
│   ├── data-model/             # Core entities and relationships
│   ├── design-system/          # Colors and typography
│   ├── shell/                  # Application shell spec
│   └── sections/               # Feature sections
│       ├── core-detection/     # Whale detection engine
│       ├── pattern-analysis/   # Pattern recognition
│       ├── ai-analysis/        # LLM-powered analysis
│       └── dashboard/          # User interface
│
├── app/                        # Next.js application
│   ├── api/                    # API routes
│   ├── components/             # React components
│   ├── hooks/                  # Custom hooks
│   └── page.js                 # Main page
│
├── lib/                        # Utility libraries
│   ├── whale-detector.js       # Detection logic
│   ├── pattern-analyzer.js     # Pattern recognition
│   ├── acontext-client.js      # Learning integration
│   ├── llm-agent.js            # AI analysis
│   └── web-search.js           # Market context
│
├── public/                     # Static assets
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── .env.example                # Environment template
```

## Development Sections

### 1. Core Detection Engine
Real-time whale identification and monitoring.
- **Status**: Specification complete
- **Files**: `product/sections/core-detection/`
- **Key Types**: Trade, Whale, WhaleAlert, DetectionMetrics

### 2. Pattern Analysis
Machine learning-based pattern recognition.
- **Status**: Specification complete
- **Files**: `product/sections/pattern-analysis/`
- **Key Types**: Pattern, PatternMatch, PatternInsight

### 3. AI Analysis & Recommendations
LLM-powered analysis with web search integration.
- **Status**: Specification complete
- **Files**: `product/sections/ai-analysis/`
- **Key Types**: Analysis, Recommendation, AnalysisOutcome

### 4. User Dashboard
Real-time monitoring interface.
- **Status**: Specification complete
- **Files**: `product/sections/dashboard/`
- **Key Types**: DashboardState, Alert, WhaleProfile

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Fill in required API keys:
- `NEXT_PUBLIC_POLYMARKET_API_URL` - Polymarket CLOB API
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role
- `ACONTEXT_API_KEY` - Acontext learning API
- `OPENAI_API_KEY` - OpenAI API key
- `BRAVE_SEARCH_API_KEY` - Brave Search API key

### 3. Database Setup

```bash
npm run db:migrate
```

### 4. Start Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Key Concepts

### Whale Detection
Identifies trades exceeding $10,000 USD threshold and classifies trader behavior.

### Pattern Recognition
Extracts recurring trading patterns and calculates success rates using historical data.

### AI Analysis
Uses LLM to analyze whale behavior, generate recommendations, and provide market context.

### Acontext Learning
Continuously learns from trade outcomes to improve future analysis accuracy.

## API Endpoints

### Detection
- `POST /api/detect` - Real-time whale detection
- `GET /api/whales` - Get tracked whales
- `GET /api/trades` - Get recent trades

### Analysis
- `POST /api/analyze` - Analyze whale activity
- `GET /api/patterns` - Get learned patterns
- `GET /api/recommendations` - Get recommendations

### Learning
- `POST /api/trade-outcome` - Record trade results
- `GET /api/metrics` - Get performance metrics
- `GET /api/insights` - Get learned insights

## Development Workflow

### 1. Planning Phase (Design OS)
- Define product vision and roadmap
- Create data model and design system
- Specify each section with requirements

### 2. Implementation Phase
- Build API endpoints for each section
- Create React components for UI
- Integrate Acontext learning

### 3. Testing Phase
- Unit tests for core logic
- Integration tests for APIs
- E2E tests for user flows

### 4. Deployment Phase
- Build production bundle
- Deploy to hosting platform
- Monitor performance and metrics

## Next Steps

1. **Review Product Specs**: Check `product/` directory for detailed specifications
2. **Set Up Environment**: Configure `.env.local` with API keys
3. **Start Development**: Run `npm run dev` to begin building
4. **Implement Sections**: Follow the roadmap to build each section
5. **Test & Deploy**: Run tests and deploy to production

## Documentation

- [Product Overview](./product/product-overview.md)
- [Product Roadmap](./product/product-roadmap.md)
- [Data Model](./product/data-model/data-model.md)
- [Acontext Setup](./ACONTEXT_SETUP.md)
- [API Documentation](./API.md) (coming soon)

## Support

For questions or issues:
1. Check the documentation
2. Review the product specifications
3. Check existing issues
4. Create a new issue with details

## License

MIT
