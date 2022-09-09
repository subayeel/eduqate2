import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";

import BrowseSection from "./Components/BrowseSection/BrowseSection";
import AddArticle from "./Components/AddArticle/AddArticle";
import Article from "./Components/ArticleComponent/Article";
import Footer from "./Components/Footer/Footer";

function App() {
  const theme = {
    colors: {
      primarybg: "#ECEFFF",
      secondarybg: "#FCFFDF",
      primaryColor: "#3F9DA7",
      brownBtnColor: "#835A3A",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route
            path="/browsepage/:category/articlePage/:id"
            element={<Article />}
          />
          <Route path="/addarticle" element={<AddArticle />} />
          <Route path="/browsepage/:category" element={<BrowseSection />} />
        </Routes>
        <Outlet />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
