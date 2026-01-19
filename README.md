# Polywhale Detector

Advanced whale trading pattern detector for Polymarket with continuous learning via Acontext.

## Features

- **Real-time Whale Detection**: Monitor large trades and unusual market activity
- **Pattern Recognition**: Identify recurring whale trading patterns
- **Acontext Learning**: Continuous learning from trade outcomes and patterns
- **LLM Analysis**: AI-powered analysis of market movements and whale behavior
- **Web Search Integration**: Real-time context from news and market data
- **Supabase Storage**: Persistent storage of analyses and outcomes

## Quick Start

### 1. Clone & Install

```bash
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your API keys:
- Polymarket API credentials
- Supabase project details
- Acontext API key
- LLM provider keys (OpenAI/Anthropic)
- Brave Search API key

### 3. Database Setup

Run migrations to set up Supabase schema:

```bash
npm run db:migrate
```

### 4. Start Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Architecture

### Core Components

- **Whale Detector**: Real-time monitoring of large trades
- **Pattern Analyzer**: ML-based pattern recognition
- **Acontext Client**: Learning system integration
- **LLM Agent**: AI analysis and recommendations
- **Web Search**: Market context gathering

### Data Flow

```
Polymarket API
    ↓
Whale Detector
    ↓
Pattern Analyzer
    ↓
LLM Agent (with Web Search)
    ↓
Acontext Storage
    ↓
Learning & Insights
```

## Acontext Integration

All analyses are automatically stored in Acontext for continuous learning:

```javascript
// Automatic storage on analysis
await storeWhaleAnalysisSession(analysis);

// Record trade outcomes
await recordTradeOutcome(tradeId, eventId, recommendation, outcome, pnl);

// Search similar patterns
const patterns = await searchWhalePatterns('whale bullish');
```

## API Endpoints

- `POST /api/analyze` - Analyze whale activity
- `POST /api/detect` - Real-time whale detection
- `GET /api/patterns` - Get learned patterns
- `POST /api/trade-outcome` - Record trade results
- `GET /api/metrics` - Get performance metrics

## Development

### Running Tests

```bash
npm test
npm run test:watch
```

### Project Structure

```
app/
├── api/              # API routes
├── components/       # React components
├── hooks/           # Custom React hooks
└── page.js          # Main page

lib/
├── whale-detector.js
├── pattern-analyzer.js
├── acontext-client.js
├── llm-agent.js
└── web-search.js

product/
└── data-model/      # Product specifications
```

## Documentation

- [Acontext Integration Guide](./ACONTEXT_SETUP.md)
- [LLM Integration](./LLM_INTEGRATION.md)
- [API Documentation](./API.md)

## License

MIT
