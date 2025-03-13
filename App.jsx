import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Student from "./Pages/Student";
import StudentLogin from "./Pages/StudentLogin"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
