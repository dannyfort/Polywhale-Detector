// Core Detection Engine Types

export interface Trade {
  id: string;
  eventId: string;
  timestamp: number;
  amount: number;
  side: 'BUY' | 'SELL';
  price: number;
  outcome: string;
  trader: string;
  isWhale: boolean;
}

export interface Whale {
  id: string;
  totalVolume: number;
  tradeCount: number;
  averageSize: number;
  winRate: number;
  lastSeen: number;
  patterns: string[];
  riskScore: number;
}

export interface WhaleAlert {
  id: string;
  whaleId: string;
  tradeId: string;
  type: 'LARGE_TRADE' | 'UNUSUAL_ACTIVITY' | 'PATTERN_MATCH';
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  timestamp: number;
  message: string;
}

export interface DetectionMetrics {
  totalTrades: number;
  whaleTradesDetected: number;
  detectionRate: number;
  falsePositiveRate: number;
  averageAlertLatency: number;
  lastUpdate: number;
}

export interface DetectionConfig {
  whaleThreshold: number;
  pollingInterval: number;
  alertThreshold: number;
  retentionDays: number;
}
