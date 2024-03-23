import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout_children" style={{ Width: '100%', important: 'true' }}>
        { children }
      </div>
      <Footer />
    </>
  );
}

export default Layout;
