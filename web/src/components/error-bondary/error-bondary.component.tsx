import { Component, ErrorInfo, ReactNode } from "react";
import { Placeholder } from "../placeholder/placeholder.component";
import { Background } from "../background/background.component";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Background>
          <div className="h-screen w-screen flex">
            <Placeholder
              title="Something went wrong"
              description="Unable to connect. Ensure you have a stable internet connection and try again."
            />
          </div>
        </Background>
      );
    }

    return this.props.children;
  }
}
