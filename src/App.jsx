import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ItemsPage from "./pages/ItemsPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPage from "./pages/PrivacyPage";
import SignupPage from "./pages/SignupPage";
import AddItemPage from "./pages/AddItemPage";
import ErrorPage from "./pages/ErrorPage";
import BoardsPage from "./pages/BoardsPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/product/:id" element={<ItemDetailPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/boards" element={<BoardsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
