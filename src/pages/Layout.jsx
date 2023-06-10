import { Header } from "../components/Header";
import { Line } from "../components/Line";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Line />
      <Outlet />
      <Line />
      <Header />
    </>
  );
};

export default Layout;
