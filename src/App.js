import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Chat, ProtectedRoute } from "./pages/index-pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          >
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer autoClose={4000} hideProgressBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
