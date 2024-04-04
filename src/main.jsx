import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from "./pages/Test";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/A-propos' element={<Apropos />} />
                <Route path='/Logement/:logementId' element={<Logement />} />
                <Route path='/Test' element={<Test />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
