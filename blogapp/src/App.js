import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={user?<Home/>:<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/write" element={user?<Write />:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/settings" element={user?<Settings />:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
