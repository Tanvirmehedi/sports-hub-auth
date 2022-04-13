import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AllSports from "./components/AllSports/AllSports";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route
          path="/allsports"
          element={
            <RequireAuth>
              <AllSports />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
