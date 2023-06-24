import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./components/common/GlobalStyle";
import { RecoilRoot } from "recoil";
import Main from "./pages/Main";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    // 로컬 스토리지에 토큰이 있는지 확인하여 리다이렉트 처리
    if (token && (window.location.pathname === "/signin" || window.location.pathname === "/signup")) {
      window.location.href = "/main";
    } else if (!token && window.location.pathname === "/main") {
      window.location.href = "/signin";
    }
  });
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
