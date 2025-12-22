// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/create/:id" element={<CreatePage/>} />
        <Route path="/:id" element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
