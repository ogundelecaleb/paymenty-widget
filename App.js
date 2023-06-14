import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import WidgetHome from "./widgetHome";
import CardDetails from "./scene/cardDetails";
import Otp from "./scene/otp";
import Success from "./success";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FailedTransaction from "./failedTransaction";
import ThreeDAuth from "./3dAuth";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<WidgetHome />}>
              <Route index element={<CardDetails />} />
              <Route path="/index/cardDetails" element={<CardDetails />} />
              <Route path="/index/otp" element={<Otp />} />
            </Route>{" "}
            <Route path="/success" element={<Success />} />
            <Route path="/3dauth" element={<ThreeDAuth />} />
            <Route path="/failed" element={<FailedTransaction />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
