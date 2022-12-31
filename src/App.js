import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Chat } from "./pages/index-pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <ToastContainer autoClose={4000} hideProgressBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
