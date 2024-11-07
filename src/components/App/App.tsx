import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { adminData } from "../../models/Admin";

function App() {
  console.log(adminData);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header mode={1} />
          </>
        }
      >
        <Route index element />
        <Route path="/shop" element />
        <Route path="/profile" element />
        <Route path="/contacts" element />
      </Route>
    </Routes>
  );
}

export default App;
