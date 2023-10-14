import { Route, Routes } from "react-router";
import Login from "./Login";
import Play from "./Play";

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
