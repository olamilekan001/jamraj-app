import { Outlet } from "react-router-dom";
import Header from "../Weblayout/Header";
import Footer from "../Weblayout/Footer";
import TopNav from "./TopNav";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
