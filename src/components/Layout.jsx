// Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />  
    </main>
    <Footer />
  </>
);

export default Layout;
