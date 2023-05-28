import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Landing,
  Register,
  PersonalArea,
  ProtectedRoute,
} from "./pages/index-pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <PersonalArea />
              </ProtectedRoute>
            }
          >
            <Route path="/personal-area" element={<PersonalArea />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster
          position={"top-right"}
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              padding: "1rem",
              backgroundColor: "#c4a491",
              fontSize: "1rem",
              color: "#5f4435",
              // borderColor: "#5f4435",
              border: "2px solid #ffff",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
