import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Ignore ResizeObserver errors
    if (error.message?.includes('ResizeObserver loop')) {
      return { hasError: false };
    }
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Ignore ResizeObserver errors
    if (error.message?.includes('ResizeObserver loop')) {
      return;
    }
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-destructive mb-2">Something went wrong</h2>
          <p className="text-muted-foreground">Please refresh the page to continue.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
