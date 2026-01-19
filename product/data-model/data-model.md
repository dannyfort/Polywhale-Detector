# Polywhale Detector - Data Model

## Core Entities

### Trade
Represents a single market transaction on Polymarket.

**Fields**:
- `id`: Unique trade identifier
- `eventId`: Associated Polymarket event
- `timestamp`: Trade execution time
- `amount`: Trade size in USD
- `side`: BUY or SELL
- `price`: Execution price
- `outcome`: Market outcome traded
- `trader`: Trader identifier (anonymized)

### Whale
Identified large trader with pattern history.

**Fields**:
- `id`: Unique whale identifier
- `totalVolume`: Cumulative trading volume
- `tradeCount`: Number of trades
- `averageSize`: Average trade size
- `winRate`: Historical success rate
- `lastSeen`: Most recent trade timestamp
- `patterns`: Associated pattern IDs

### Pattern
Recurring whale trading behavior.

**Fields**:
- `id`: Unique pattern identifier
- `name`: Pattern description (e.g., "bullish accumulation")
- `type`: Pattern category
- `frequency`: How often pattern occurs
- `successRate`: Historical success rate
- `lastOccurrence`: Most recent match
- `characteristics`: Pattern defining features

### Analysis
AI-generated analysis of whale activity.

**Fields**:
- `id`: Unique analysis identifier
- `tradeId`: Associated trade
- `whaleId`: Associated whale
- `timestamp`: Analysis creation time
- `recommendation`: BUY/SELL/HOLD
- `confidence`: 0-1 confidence score
- `reasoning`: Analysis explanation
- `context`: Market context data
- `outcome`: Actual market result (when available)

### TradeOutcome
Recording of analysis accuracy and trade results.

**Fields**:
- `id`: Unique outcome identifier
- `analysisId`: Associated analysis
- `eventId`: Associated event
- `recommendation`: Original recommendation
- `actualOutcome`: What actually happened
- `pnl`: Profit/loss if followed
- `timestamp`: Outcome recording time
- `learnings`: Extracted insights

## Relationships

```
Whale ──→ Trade (1:N)
Whale ──→ Pattern (1:N)
Trade ──→ Analysis (1:1)
Analysis ──→ TradeOutcome (1:1)
Pattern ──→ TradeOutcome (1:N)
```

## Storage

- **Real-time**: Redis for live trade stream
- **Persistent**: Supabase PostgreSQL for all entities
- **Learning**: Acontext for pattern storage and retrieval
