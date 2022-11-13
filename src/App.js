import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./pages/error/Error";
import Home from "./pages/home/Home";
import Playground from "./pages/playground/Playground";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
