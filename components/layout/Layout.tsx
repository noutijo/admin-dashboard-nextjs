import AsideBar from "../../components/asidebar/AsideBar";
import Right from "../../components/right/Right";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-[14rem_auto_23rem] sm:grid-cols-[1fr] w-[96%] sm:w-[100%] md:w-[94%] md:grid-cols-[7rem_auto_23rem] gap-7 m-[0_auto] sm:mt-[8rem] md:mt-[inherit] sm:p-[0_1rem] md:p-[inherit]">
        <AsideBar />
        {children}
        <Right />
      </div>
    </>
  );
};

export default Layout;
