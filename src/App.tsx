import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import PatchNotes from "./pages/PatchNotes/PatchNotes";
import ChartsPage from "./pages/ChartsPage/ChartsPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import AccountPageWishlisted from "./pages/AccountPage/AccountPageWishlisted";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/patches" element={<PatchNotes />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="/account/owned" element={<AccountPage />} />
        <Route path="/account/wishlist" element={<AccountPageWishlisted />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
