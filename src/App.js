import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import { Suspense } from "react";
import GuardPage from "./pages/GuardPage";

import "./i18n";
import AuthRoutes from "../src/routes/AuthRoutes";
import MainRoutes from "../src/routes/mainRoutes";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Suspense fallback="...loading">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GuardPage />} />
            <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="main/*" element={<MainRoutes />} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}