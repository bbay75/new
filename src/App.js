import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

export default function App() {
  const user = false;
  return (
    <>
      <Switch>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/register" element={user ? <Home /> : <Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={user ? <Home /> : <Login />} />
        </Routes>
        <Routes>
          <Route path="/write" element={user ? <Write /> : <Register />} />
        </Routes>
        <Routes>
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
        </Routes>
        <Routes>
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Switch>
    </>
  );
}
