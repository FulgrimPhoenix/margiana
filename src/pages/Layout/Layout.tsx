import { Header } from "@/components/index";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header mode={1} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
