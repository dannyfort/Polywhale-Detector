// Dashboard Types

export interface DashboardState {
  recentTrades: Trade[];
  activeAlerts: Alert[];
  topWhales: WhaleProfile[];
  activePatterns: PatternSummary[];
  metrics: DashboardMetrics;
  lastUpdate: number;
}

export interface Trade {
  id: string;
  whaleId: string;
  amount: number;
  side: 'BUY' | 'SELL';
  outcome: string;
  timestamp: number;
  confidence: number;
}

export interface Alert {
  id: string;
  type: 'WHALE_DETECTED' | 'PATTERN_MATCH' | 'UNUSUAL_ACTIVITY';
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
}

export interface WhaleProfile {
  id: string;
  name: string;
  volume: number;
  winRate: number;
  tradeCount: number;
  riskScore: number;
  lastSeen: number;
}

export interface PatternSummary {
  id: string;
  name: string;
  type: string;
  frequency: number;
  successRate: number;
  confidence: number;
}

export interface DashboardMetrics {
  totalWhalesTracked: number;
  alertsToday: number;
  patternsActive: number;
  recommendationAccuracy: number;
  systemUptime: number;
}

export interface FilterOptions {
  whaleId?: string;
  patternId?: string;
  eventId?: string;
  timeRange?: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';
  severity?: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface DashboardPreferences {
  theme: 'LIGHT' | 'DARK' | 'AUTO';
  refreshInterval: number;
  alertSound: boolean;
  notifications: boolean;
  defaultFilters: FilterOptions;
}
