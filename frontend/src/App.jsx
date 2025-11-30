import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsApp from "./Components/ContactsApp";
import HomePage from "./Components/HomePage";
import RegisterPage from "./Components/RegisterPage";
import PageNotFound from "./Components/PageNotFound";
import PrivatePage from "./Components/PrivatePage";
import NotAuthorized from "./Components/NotAuthorized";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="/private" element={<PrivatePage />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
