import React, { Suspense } from "react";
import { HashRouter, Route } from "react-router-dom";
import Loader from "./loader";

// Containers
const DefaultLayout = React.lazy(() => import("../layout"));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
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
