import { Outlet } from "react-router-dom";

export const Page = (): React.ReactElement => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
