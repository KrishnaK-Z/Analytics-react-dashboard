import React, { Suspense } from "react";
import { HashRouter, Route } from "react-router-dom";

// Containers
const DefaultLayout = React.lazy(() => import("../layout"));

const App = () => {
  const loading = <div className="pt-3 text-center">Loading</div>;

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Route
          path="/"
          name="Home"
          render={props => <DefaultLayout {...props} />}
        />
      </Suspense>
    </HashRouter>
  );
};

export default App;
