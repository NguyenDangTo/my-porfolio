import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (
    <section className="flex gap-6">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
