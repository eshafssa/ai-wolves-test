import IconSection from "../../components/iconsSection/IconSection";
const Layout = ({ children }) => {
  return (
    <main className="flex mx-10 my-8 sm:shadow-2xl bg-white rounded-3xl ">
      <div className="sm:w-2/5 w-full">{children}</div>
      <div className="w-4/5 sm:flex hidden   ">
        <IconSection />
      </div>
    </main>
  );
};

export default Layout;
