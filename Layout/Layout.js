import React from "react";
import Footer from "./Footer/Footer1";
import NavMenu from "./Header/NavBar";

export default function Layout({ children }) {

  return (
    <div className="content">
      <NavMenu/>
      {children}
      <Footer />
    </div>
  );
}

