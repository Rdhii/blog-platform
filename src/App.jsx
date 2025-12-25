// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/create/:id" element={<CreatePage/>} />
        <Route path="/:id" element={<PostPage/>} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} theme="light" />
    </BrowserRouter>
  );
}

export default App;
