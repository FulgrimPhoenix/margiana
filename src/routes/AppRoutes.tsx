import { AdminProfile, Contacts, Layout, Store } from "@/pages/index";
import { Route, Routes } from "react-router-dom";
// import { Layout, TaskPage, ToDo, ToDoQuery } from "../pages";

export const AppRoutes = () => {
  {
    /* <Route index element />
          <Route path="/shop" element={<Store productList={productList} />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/contacts" element={<Contancts />} />
          <Route
            path="/product"
            element={<ProductPage productData={constants.productListEx[0]} />}
          />
        </Route> */
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
          </>
        }
      >
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
};
