import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { adminData } from "../../models/Admin";
import { AdminProfile } from "../AdminProfile/AdminProfile";
import { Page } from "../Page/Page";

function App() {
  console.log(adminData);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header mode={1} />
            <Page />
          </>
        }
      >
        <Route index element />
        <Route path="/shop" element />
        <Route
          path="/profile"
          element={<AdminProfile adminData={adminData} />}
        />
        <Route path="/contacts" element />
      </Route>
    </Routes>
  );
}

export default App;
