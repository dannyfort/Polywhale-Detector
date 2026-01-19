# Acontext Integration Setup

## Overview

Polywhale Detector uses Acontext for continuous learning from whale trading patterns and analysis outcomes.

## Environment Configuration

Add to `.env.local`:

```bash
ACONTEXT_API_KEY=your_api_key_here
NEXT_PUBLIC_ACONTEXT_ENABLED=true
```

## Core Integration Points

### 1. Automatic Analysis Storage

Every whale analysis is automatically stored in Acontext:

```javascript
import { storeWhaleAnalysisSession } from '@/lib/acontext-client';

const analysis = await analyzeWhaleActivity(trade);
await storeWhaleAnalysisSession(analysis);
```

### 2. Trade Outcome Recording

Record actual outcomes to enable learning:

```javascript
import { recordTradeOutcome } from '@/lib/acontext-client';

await recordTradeOutcome({
  tradeId: trade.id,
  eventId: event.id,
  recommendation: analysis.recommendation,
  outcome: actualOutcome,
  pnl: profitLoss
});
```

### 3. Pattern Search

Find similar historical patterns before analyzing:

```javascript
import { searchWhalePatterns } from '@/lib/acontext-client';

const patterns = await searchWhalePatterns('whale bullish accumulation');
// Use patterns to inform current analysis
```

### 4. Performance Metrics

Track learning progress:

```javascript
import { getAcontextMetrics } from '@/lib/acontext-client';

const metrics = await getAcontextMetrics();
console.log(metrics.successRate, metrics.patternsLearned);
```

## Data Flow

```
Trade Detection
    ↓
Analysis Generation
    ↓
Acontext Storage (automatic)
    ↓
Trade Outcome Recording
    ↓
Pattern Learning
    ↓
Improved Future Analysis
```

## Best Practices

1. **Always Record Outcomes**: Even failed trades provide learning value
2. **Search Before Analyzing**: Use historical patterns to inform decisions
3. **Monitor Metrics**: Track success rate and pattern effectiveness
4. **Inject Context**: Use learned patterns in analysis prompts

## Troubleshooting

### Not Storing?
- Verify `ACONTEXT_API_KEY` is set correctly
- Check API key validity in Acontext dashboard
- Review server logs for `[Acontext]` messages

### No Patterns Found?
- Need minimum 10-20 analyses for patterns to emerge
- Ensure outcomes are being recorded
- Try broader search queries

### Performance Issues?
- All operations are async and non-blocking
- Check network connectivity
- Verify API rate limits

## Files Reference

- `lib/acontext-client.js` - Core client implementation
- `lib/actions/acontext-actions.js` - Server actions
- `app/api/trade-outcome/route.js` - Outcome API endpoint
- `app/components/AcontextDashboard.js` - Learning dashboard
- `app/hooks/useAcontextLearning.js` - React hook

## Documentation

- Full guide: https://docs.acontext.io
- API Reference: https://docs.acontext.io/api
