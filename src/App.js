import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/error/Error";
import Home from "./pages/home/Index";
import CodeArea from "./pages/codearea/Index";
import { GlobalStyle } from "./style/global";
import ModalProvider from "./context/ModelContext";
import CodeAreaProvider from "./context/CodeAreaContext";

function App() {
  return (
    <CodeAreaProvider>
      <ModalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codearea/:folderId/:codeareaId" element={<CodeArea />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </CodeAreaProvider>
  );
}

export default App;
