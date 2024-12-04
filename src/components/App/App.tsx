import { Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { adminData } from "../../models/Admin";
import { AdminProfile } from "../AdminProfile/AdminProfile";
import { Page } from "../Page/Page";
import { useState } from "react";
import { IAdminProfileData } from "../../types";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { ProductPage } from "../Product/ProductPage";
import { constants } from "../../utils/constants";
import { Contancts } from "../Contacts/Contacts";

function App() {
  const [currentUser, setCurrentUser] = useState<IAdminProfileData>(adminData);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/contacts" element={<Contancts />} />
          <Route path="/product" element={<ProductPage productData={constants.productListEx[0]} />}/>
        </Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
