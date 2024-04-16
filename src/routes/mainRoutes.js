import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import SettingPage from "../pages/SettingPage";
import ContactPage from "../pages/ContactPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../ProtectedRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route  element={<ProtectedRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;