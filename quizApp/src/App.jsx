import { Route, Routes } from "react-router";
import Login from "./page/Login";
import Play from "./page/Play";

function App() {
  return (
    <Routes>
      <Route element={<Login></Login>} path="/"></Route>
      <Route element={<Play></Play>} path="/play"></Route>
      <Route element={<Login></Login>} path="/login"></Route>
    </Routes>
  );
}

export default App;
