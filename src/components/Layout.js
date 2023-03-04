import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (
    <section className="flex gap-4 overflow-hidden max-w-screen">
      <Sidebar />
      <>{children}</>
    </section>
  );
};

export default Layout;
