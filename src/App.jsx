import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import MyList from "./Pages/MyList";
import MyProfile from "./Pages/MyProfile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
