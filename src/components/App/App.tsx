import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
          </>
        }
      >
        <Route index element />
      </Route>
    </Routes>
  );
}

export default App;
