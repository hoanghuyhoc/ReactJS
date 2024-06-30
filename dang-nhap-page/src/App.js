import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Home from "./Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="Home" element={<Home />} />
          <Route index element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
