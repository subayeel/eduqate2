import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/Global";
import Navbar from "./Components/Navbar/Navbar";
import HeroPage from "./Components/Heropage/HeroPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  ScholarPage  from "./Components/ScholarPage/ScholarPage";


function App() {
  const theme = {
    colors: {
      primarybg: "#ECEFFF",
      secondarybg: "#FCFFDF",
      primaryColor: "#3F9DA7",
      brownBtnColor: "#835A3A",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <HeroPage />
        <ScholarPage/>
        
      </Router>
    </ThemeProvider>
  );
}
export default App;
