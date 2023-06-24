import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./components/common/GlobalStyle";
import { RecoilRoot } from "recoil";
import Main from "./pages/Main";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
