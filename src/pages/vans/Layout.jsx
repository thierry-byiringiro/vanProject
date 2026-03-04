import { Outlet } from "react-router-dom";
import NavBar from "../../component/Navbar";
import Footer from "../../component/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
