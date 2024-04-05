import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuardPage from "./pages/GuardPage";
import IndividualPage from "./pages/IndividualPage";
import CompanyPage from "./pages/CompanyPage";
import UploadPage from "./pages/UploadPage";
import CompanyUploadPage from "./pages/CompanyUploadPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SettingPage from "./pages/SettingPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<GuardPage />} />
          <Route path="individual" element={<IndividualPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="uploadCompany" element={<CompanyUploadPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="profile*" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
