// Pattern Analysis Types

export interface Pattern {
  id: string;
  name: string;
  type: 'ACCUMULATION' | 'DISTRIBUTION' | 'TIMING' | 'VOLUME' | 'VOLATILITY';
  frequency: number;
  successRate: number;
  lastOccurrence: number;
  characteristics: PatternCharacteristic[];
  confidence: number;
}

export interface PatternCharacteristic {
  key: string;
  value: string | number;
  weight: number;
}

export interface PatternMatch {
  id: string;
  patternId: string;
  tradeId: string;
  timestamp: number;
  similarity: number;
  confidence: number;
  predictedOutcome: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
}

export interface PatternInsight {
  id: string;
  patternId: string;
  type: 'EFFECTIVENESS' | 'TREND' | 'RISK' | 'OPPORTUNITY';
  title: string;
  description: string;
  metrics: Record<string, number>;
  timestamp: number;
}

export interface PatternMetrics {
  totalPatterns: number;
  activePatterns: number;
  averageSuccessRate: number;
  patternsLearned: number;
  lastUpdate: number;
}
