import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ListaConferencias from "./pages/ListaConferencias";
import DetalleConferencia from "./pages/DetalleConferencia";
import Sobre from "./pages/Sobre";
import ListaCiclos from "./pages/ListaCiclos";
import CicloConferencia from "./pages/CicloConferencia";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/ciclos" element={<ListaCiclos />} />
                <Route path="/ciclos/:id" element={<CicloConferencia />} />
                <Route path="/conferencias" element={<ListaConferencias />} />
                <Route path="/conferencias/:id" element={<DetalleConferencia />} />
                <Route path="/profile/:slug" element={<Profile />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<Navigate to="/inicio" />} />
            </Routes>
        </Router>
    );
}

export default App;
