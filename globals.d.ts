declare module '*.css';

interface TradingViewWidget {
  setSymbol(symbol: string, callback?: () => void): void;
  remove(): void;
}

interface TradingViewConstructor {
  new (config: Record<string, unknown>): TradingViewWidget;
  widget: TradingViewConstructor;
}

declare const TradingView: {
  widget: new (config: Record<string, unknown>) => TradingViewWidget;
};
