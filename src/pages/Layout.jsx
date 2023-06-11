import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Line } from "../components/Line";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Line />
      <Outlet />
      <Line />
      <Footer />
    </>
  );
};

export default Layout;
