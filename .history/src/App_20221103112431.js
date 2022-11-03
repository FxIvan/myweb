import { Routes, Route, HashRouter} from "react-router-dom";
import { Header } from "./component/header/header";
import { IndexPage } from "./component/index-page";

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<IndexPage/>} />
    </Routes>
    </HashRouter>
  );
}

export default App;
