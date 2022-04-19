import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";

import { HomePage } from "./pages/HomePage";

export const App = () => {
  const [username, setUsername] = useState("");

  return (
    <Context.Provider value={[username, setUsername]}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};
