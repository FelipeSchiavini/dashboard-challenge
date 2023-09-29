import React from "react";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "./error-bondary.component";

interface ProblemProps {
  shouldThrowError?: boolean;
}
const ProblemChild: React.FC<ProblemProps> = ({ shouldThrowError }) => {
  if (shouldThrowError) {
    throw new Error("This error was made on purpose.");
  }
  return <div>Error</div>;
};

describe("ErrorBoundary", () => {
  it("should render ErrorBondary component with message", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ProblemChild shouldThrowError={true} />
      </ErrorBoundary>
    );

    expect(getByText("Something went wrong")).toBeInTheDocument();
  });
});
