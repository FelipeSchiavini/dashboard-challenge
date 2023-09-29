import { ErrorBoundary } from "./components/error-bondary/error-bondary.component"
import { Home } from "./pages/home/home.page"

export const App = () => {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  )
}



