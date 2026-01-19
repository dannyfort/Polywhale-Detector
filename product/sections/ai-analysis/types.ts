// AI Analysis & Recommendations Types

export interface Analysis {
  id: string;
  tradeId: string;
  whaleId: string;
  timestamp: number;
  recommendation: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  reasoning: string;
  context: AnalysisContext;
  outcome?: AnalysisOutcome;
}

export interface AnalysisContext {
  marketSentiment: string;
  recentNews: string[];
  historicalPattern: string;
  whaleHistory: string;
  riskFactors: string[];
}

export interface AnalysisOutcome {
  actualOutcome: 'CORRECT' | 'INCORRECT' | 'PARTIAL';
  pnl: number;
  timestamp: number;
  feedback?: string;
}

export interface Recommendation {
  id: string;
  analysisId: string;
  type: 'POSITION' | 'TIMING' | 'RISK' | 'OPPORTUNITY';
  title: string;
  description: string;
  actionItems: string[];
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  confidence: number;
}

export interface WebSearchContext {
  query: string;
  results: SearchResult[];
  timestamp: number;
}

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  relevance: number;
}

export interface AnalysisMetrics {
  totalAnalyses: number;
  recommendationAccuracy: number;
  averageConfidence: number;
  userSatisfaction: number;
  lastUpdate: number;
}
