import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Catch errors and update state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log the error and error info
  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    // Optionally, you can log this error to a service like Sentry, etc.
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    // If an error occurred, render a fallback UI
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
            <p className="text-gray-600">Please refresh the page or try again later.</p>
          </div>
        </div>
      );
    }

    // Otherwise, render the children components as normal
    return this.props.children; 
  }
}

export default ErrorBoundary;
