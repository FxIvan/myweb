import { Routes, Route, HashRouter} from "react-router-dom";
import { Header } from "./component/header/header";

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<Header/>} />
    </Routes>
    </HashRouter>
  );
}

export default App;
