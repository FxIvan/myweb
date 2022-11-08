import { Routes, Route, HashRouter, BrowserRouter} from "react-router-dom";
import { Header } from "./component/header/header";
import { IndexPage } from "./component/index-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<IndexPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
