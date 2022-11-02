import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./component/header/header";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Header/>} />
    </Routes>
  );
}

export default App;
