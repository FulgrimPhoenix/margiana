import { Header } from "@components/index";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header mode={1} />
      <Outlet />
    </>
  );
};

export default Layout;
