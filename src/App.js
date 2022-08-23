import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/Global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ArticlePage from "./Pages/ArticlePage";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import BrowsePage from "./Pages/BrowsePage";
import { browseObj1, browseObj2, browseObj3 } from "./Data/browseSectionData";

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
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/articlePage" element={<ArticlePage />} />
          <Route
            path="/browsepage/currentaffairs"
            element={<BrowsePage data={browseObj1} />}
          />
          <Route
            path="/browsepage/quran"
            element={<BrowsePage data={browseObj2} />}
          />
          <Route
            path="/browsepage/prophet"
            element={<BrowsePage data={browseObj3} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
