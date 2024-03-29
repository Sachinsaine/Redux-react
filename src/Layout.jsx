import { Header } from "./pages/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./pages/Footer";

export const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
