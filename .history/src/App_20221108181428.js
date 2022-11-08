import { Routes, Router, HashRouter} from "react-router-dom";
import { Header } from "./component/header/header";
import { IndexPage } from "./component/index-page";

function App() {
  return (

    <Router>
        <Route path="/" element={<IndexPage/>} />
    </Router>

  );
}

export default App;
