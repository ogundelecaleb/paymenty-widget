import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import WidgetHome from "./widgetHome";
import CardDetails from "./scene/cardDetails";
import Otp from "./scene/otp";
import Success from "./scene/success";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WidgetHome />}>
            <Route index element={<CardDetails />} />
            <Route path="/index/cardDetails" element={<CardDetails />} />
            <Route path="/index/otp" element={<Otp />} />
            <Route path="/index/success" element={<Success />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
