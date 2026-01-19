# Core Detection Engine - Section Specification

## Overview

Real-time whale identification and monitoring system that detects large trades on Polymarket and classifies them as whale activity.

## Objectives

1. Monitor Polymarket order book and trade stream
2. Identify trades exceeding whale threshold ($10k+)
3. Classify whale behavior (accumulation, distribution, etc.)
4. Store trade data for pattern analysis
5. Generate real-time alerts

## Key Features

### Trade Detection
- Real-time Polymarket API polling
- Trade size classification
- Outcome tracking
- Historical trade database

### Whale Classification
- Trader identification
- Volume aggregation
- Behavior pattern tagging
- Risk scoring

### Alerts & Notifications
- Real-time whale detection alerts
- Unusual activity warnings
- Pattern match notifications
- Configurable thresholds

## Data Inputs

- Polymarket CLOB API (trades, orders, events)
- Historical trade database
- Whale threshold configuration

## Data Outputs

- Trade records (stored in Supabase)
- Whale profiles (updated in real-time)
- Alert events (published to subscribers)
- Metrics (detection rate, false positives)

## Technical Requirements

- Polling interval: 1-5 seconds
- Whale threshold: $10,000 USD
- Data retention: 90 days minimum
- Uptime: 99.5%

## Success Criteria

- Detect 95%+ of whale trades
- False positive rate < 5%
- Alert latency < 10 seconds
- System uptime > 99.5%
