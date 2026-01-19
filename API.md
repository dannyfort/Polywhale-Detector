# Polywhale Detector - API Documentation

## Overview

Polywhale Detector provides a comprehensive REST API for whale detection, pattern analysis, AI recommendations, and learning system integration.

## Base URL

```
http://localhost:3000/api
```

## Authentication

All endpoints require authentication via API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

## Detection Endpoints

### Real-time Whale Detection

**POST** `/detect`

Detect whale activity in real-time.

**Request:**
```json
{
  "eventId": "event_123",
  "trades": [
    {
      "amount": 25000,
      "side": "BUY",
      "price": 0.65,
      "outcome": "YES",
      "timestamp": 1705689600000
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "whales": [
    {
      "id": "whale_001",
      "confidence": 0.82,
      "riskScore": 0.65,
      "patterns": ["bullish_accumulation"]
    }
  ],
  "alerts": [
    {
      "id": "alert_001",
      "type": "WHALE_DETECTED",
      "severity": "HIGH",
      "message": "Large whale trade detected"
    }
  ]
}
```

### Get Tracked Whales

**GET** `/whales`

Retrieve list of tracked whales.

**Query Parameters:**
- `limit` (optional): Number of results (default: 50)
- `offset` (optional): Pagination offset (default: 0)
- `sortBy` (optional): Sort field (volume, winRate, lastSeen)

**Response:**
```json
{
  "success": true,
  "whales": [
    {
      "id": "whale_001",
      "totalVolume": 250000,
      "tradeCount": 12,
      "averageSize": 20833,
      "winRate": 0.72,
      "lastSeen": 1705689600000,
      "riskScore": 0.65
    }
  ],
  "total": 47,
  "limit": 50,
  "offset": 0
}
```

### Get Recent Trades

**GET** `/trades`

Retrieve recent whale trades.

**Query Parameters:**
- `whaleId` (optional): Filter by whale ID
- `eventId` (optional): Filter by event ID
- `limit` (optional): Number of results (default: 50)
- `offset` (optional): Pagination offset (default: 0)

**Response:**
```json
{
  "success": true,
  "trades": [
    {
      "id": "trade_001",
      "whaleId": "whale_001",
      "amount": 25000,
      "side": "BUY",
      "outcome": "YES",
      "timestamp": 1705689600000,
      "confidence": 0.82
    }
  ],
  "total": 156,
  "limit": 50,
  "offset": 0
}
```

## Analysis Endpoints

### Analyze Whale Activity

**POST** `/analyze`

Generate AI analysis and recommendations for whale activity.

**Request:**
```json
{
  "tradeId": "trade_001",
  "whaleId": "whale_001",
  "includeContext": true
}
```

**Response:**
```json
{
  "success": true,
  "analysis": {
    "id": "analysis_001",
    "recommendation": "BUY",
    "confidence": 0.82,
    "reasoning": "Whale with 72% win rate accumulating YES positions...",
    "context": {
      "marketSentiment": "BULLISH",
      "recentNews": ["Positive regulatory developments"],
      "historicalPattern": "Bullish Accumulation (75% success rate)"
    }
  },
  "recommendations": [
    {
      "id": "rec_001",
      "type": "POSITION",
      "title": "Follow Whale Accumulation",
      "priority": "HIGH",
      "confidence": 0.82
    }
  ]
}
```

### Get Learned Patterns

**GET** `/patterns`

Retrieve learned trading patterns.

**Query Parameters:**
- `type` (optional): Pattern type (ACCUMULATION, DISTRIBUTION, TIMING, VOLUME)
- `minSuccessRate` (optional): Minimum success rate (0-1)
- `limit` (optional): Number of results (default: 50)

**Response:**
```json
{
  "success": true,
  "patterns": [
    {
      "id": "pattern_001",
      "name": "Bullish Accumulation",
      "type": "ACCUMULATION",
      "frequency": 12,
      "successRate": 0.75,
      "confidence": 0.82,
      "lastOccurrence": 1705689600000
    }
  ],
  "total": 8,
  "limit": 50
}
```

### Get Recommendations

**GET** `/recommendations`

Retrieve active recommendations.

**Query Parameters:**
- `priority` (optional): Filter by priority (LOW, MEDIUM, HIGH)
- `type` (optional): Filter by type (POSITION, TIMING, RISK, OPPORTUNITY)
- `limit` (optional): Number of results (default: 50)

**Response:**
```json
{
  "success": true,
  "recommendations": [
    {
      "id": "rec_001",
      "analysisId": "analysis_001",
      "type": "POSITION",
      "title": "Follow Whale Accumulation",
      "description": "Consider accumulating YES positions...",
      "priority": "HIGH",
      "confidence": 0.82,
      "actionItems": [
        "Monitor whale_001 position size",
        "Set entry at current price levels"
      ]
    }
  ],
  "total": 12,
  "limit": 50
}
```

## Learning Endpoints

### Record Trade Outcome

**POST** `/trade-outcome`

Record the outcome of a trade recommendation.

**Request:**
```json
{
  "analysisId": "analysis_001",
  "eventId": "event_123",
  "recommendation": "BUY",
  "actualOutcome": "CORRECT",
  "pnl": 2500,
  "feedback": "Analysis was accurate"
}
```

**Response:**
```json
{
  "success": true,
  "outcome": {
    "id": "outcome_001",
    "analysisId": "analysis_001",
    "actualOutcome": "CORRECT",
    "pnl": 2500,
    "timestamp": 1705776000000,
    "learnings": "Pattern effectiveness confirmed"
  }
}
```

### Get Performance Metrics

**GET** `/metrics`

Retrieve system performance metrics.

**Query Parameters:**
- `timeRange` (optional): Time range (HOUR, DAY, WEEK, MONTH)

**Response:**
```json
{
  "success": true,
  "metrics": {
    "totalWhalesTracked": 47,
    "alertsToday": 23,
    "patternsActive": 8,
    "recommendationAccuracy": 0.68,
    "systemUptime": 0.995,
    "averageAnalysisLatency": 2.5,
    "totalAnalyses": 1247,
    "successfulOutcomes": 847
  }
}
```

### Get Learned Insights

**GET** `/insights`

Retrieve insights from the learning system.

**Query Parameters:**
- `type` (optional): Insight type (EFFECTIVENESS, TREND, RISK, OPPORTUNITY)
- `limit` (optional): Number of results (default: 50)

**Response:**
```json
{
  "success": true,
  "insights": [
    {
      "id": "insight_001",
      "patternId": "pattern_001",
      "type": "EFFECTIVENESS",
      "title": "Bullish Accumulation Success",
      "description": "Pattern shows 75% success rate with increasing confidence",
      "metrics": {
        "successRate": 0.75,
        "frequency": 12,
        "avgConfidence": 0.82
      },
      "timestamp": 1705689600000
    }
  ],
  "total": 24,
  "limit": 50
}
```

## Dashboard Endpoints

### Get Dashboard State

**GET** `/dashboard`

Retrieve complete dashboard state.

**Response:**
```json
{
  "success": true,
  "dashboard": {
    "recentTrades": [...],
    "activeAlerts": [...],
    "topWhales": [...],
    "activePatterns": [...],
    "metrics": {
      "totalWhalesTracked": 47,
      "alertsToday": 23,
      "patternsActive": 8,
      "recommendationAccuracy": 0.68,
      "systemUptime": 0.995
    },
    "lastUpdate": 1705689600000
  }
}
```

### Get Alerts

**GET** `/alerts`

Retrieve active alerts.

**Query Parameters:**
- `severity` (optional): Filter by severity (LOW, MEDIUM, HIGH)
- `read` (optional): Filter by read status (true/false)
- `limit` (optional): Number of results (default: 50)

**Response:**
```json
{
  "success": true,
  "alerts": [
    {
      "id": "alert_001",
      "type": "WHALE_DETECTED",
      "severity": "HIGH",
      "title": "Large Whale Trade Detected",
      "message": "Whale_001 placed $25,000 BUY order",
      "timestamp": 1705689600000,
      "read": false
    }
  ],
  "total": 23,
  "unread": 5
}
```

### Mark Alert as Read

**PUT** `/alerts/:alertId`

Mark an alert as read.

**Request:**
```json
{
  "read": true
}
```

**Response:**
```json
{
  "success": true,
  "alert": {
    "id": "alert_001",
    "read": true
  }
}
```

## Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  }
}
```

### Common Error Codes

- `UNAUTHORIZED` - Missing or invalid API key
- `NOT_FOUND` - Resource not found
- `INVALID_REQUEST` - Invalid request parameters
- `RATE_LIMITED` - Rate limit exceeded
- `INTERNAL_ERROR` - Server error

## Rate Limiting

- **Free Tier**: 100 requests/minute
- **Pro Tier**: 1000 requests/minute
- **Enterprise**: Custom limits

Rate limit information is included in response headers:
- `X-RateLimit-Limit` - Request limit
- `X-RateLimit-Remaining` - Remaining requests
- `X-RateLimit-Reset` - Reset timestamp

## Webhooks

### Trade Alert Webhook

Receive real-time notifications when whales are detected.

**Configuration:**
```json
{
  "url": "https://your-domain.com/webhooks/trade-alert",
  "events": ["whale_detected", "pattern_match", "unusual_activity"]
}
```

**Payload:**
```json
{
  "event": "whale_detected",
  "data": {
    "tradeId": "trade_001",
    "whaleId": "whale_001",
    "amount": 25000,
    "confidence": 0.82,
    "timestamp": 1705689600000
  }
}
```

## WebSocket Connection

Connect to real-time updates via WebSocket:

```javascript
const ws = new WebSocket('wss://api.polywhale.com/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Real-time update:', data);
};
```

### WebSocket Events

- `trade_detected` - New whale trade detected
- `pattern_match` - Pattern match found
- `alert_generated` - New alert generated
- `analysis_complete` - Analysis completed
- `metrics_updated` - Metrics updated

## SDK

### JavaScript/TypeScript

```bash
npm install @polywhale/sdk
```

```javascript
import { PolywhaleClient } from '@polywhale/sdk';

const client = new PolywhaleClient({
  apiKey: 'your_api_key',
  baseUrl: 'https://api.polywhale.com'
});

// Detect whales
const whales = await client.detect({
  eventId: 'event_123',
  trades: [...]
});

// Get patterns
const patterns = await client.getPatterns({
  minSuccessRate: 0.7
});

// Record outcome
await client.recordOutcome({
  analysisId: 'analysis_001',
  actualOutcome: 'CORRECT',
  pnl: 2500
});
```

## Examples

### Example 1: Detect and Analyze

```bash
# Detect whales
curl -X POST http://localhost:3000/api/detect \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "eventId": "event_123",
    "trades": [...]
  }'

# Analyze detected whale
curl -X POST http://localhost:3000/api/analyze \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "tradeId": "trade_001",
    "whaleId": "whale_001"
  }'
```

### Example 2: Get Metrics

```bash
curl -X GET http://localhost:3000/api/metrics \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Example 3: Record Outcome

```bash
curl -X POST http://localhost:3000/api/trade-outcome \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "analysisId": "analysis_001",
    "eventId": "event_123",
    "recommendation": "BUY",
    "actualOutcome": "CORRECT",
    "pnl": 2500
  }'
```

## Changelog

### v1.0.0 (January 19, 2026)
- Initial API release
- Detection endpoints
- Analysis endpoints
- Learning endpoints
- Dashboard endpoints

---

**Last Updated**: January 19, 2026
**Version**: 1.0.0
