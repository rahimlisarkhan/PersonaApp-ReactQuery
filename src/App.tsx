import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATH } from "shared/constants/path";

const HomePage = React.lazy(() => import("./pages/Home"));
const EditPage = React.lazy(() => import("./pages/Edit"));

const App = () => {
  return (
    <Routes>
      <Route
        path={PATH.HOME}
        element={
          <React.Suspense fallback={<h1>Loading....</h1>}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route
        path={PATH.EDIT_PAGE}
        element={
          <React.Suspense fallback={<h1>Loading....</h1>}>
            <EditPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default App;
