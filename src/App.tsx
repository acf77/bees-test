import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListScreen } from "./pages/ListScreen";

import { GlobalContext } from "./context";

export const App = () => {
  return (
    <GlobalContext>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListScreen />} />
        </Routes>
      </Router>
    </GlobalContext>
  );
};
