import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PATH } from "shared/constants/path";
import { Loading } from "ui/Loading";

const HomePage = React.lazy(() => import("./pages/Home"));
const EditPage = React.lazy(() => import("./pages/Edit"));

const App = () => {
  return (
    <Routes>
      <Route
        path={PATH.HOME}
        element={
          <React.Suspense fallback={<Loading />}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route
        path={PATH.EDIT_PAGE}
        element={
          <React.Suspense fallback={<Loading />}>
            <EditPage />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Navigate replace to={PATH.HOME} />} />
    </Routes>
  );
};

export default App;
