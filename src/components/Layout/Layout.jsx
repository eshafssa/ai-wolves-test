import React from "react";
import IconSection from "../../components/iconsSection/IconSection";
const Layout = ({ children }) => {
  return (
    <main className="flex mx-10 my-8 shadow-2xl bg-white rounded-3xl ">
      <div className="w-2/5">{children}</div>
      <div className="w-4/5 flex">
        <IconSection />
      </div>
    </main>
  );
};

export default Layout;
