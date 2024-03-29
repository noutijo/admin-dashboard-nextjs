import Image from "next/image";
import AsideBarItem from "./AsideBarItem";
import { useDrawer } from "@hooks/AppMenuProvider";
import { menuItemsData } from "@data/data";

export default function AsideBar() {
  const drawer = useDrawer();

  //handle displaying drawer
  const handleDisplayMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state;
    });
  };

  return (
    <>
      <aside
        className={`h-screen sm:fixed md:relative sm:left-[-100%] md:left-[0%] sm:top-0 sm:bg-colorWhite/70 sm:backdrop-blur-md dark:sm:bg-colorWhite_DM/80 md:bg-colorTransparent dark:md:bg-colorTransparent sm:w-[18rem] md:w-[auto] sm:z-[3] sm:dark:shadow-colorWhite_DM sm:hover:shadow-none sm:px-6 md:p-[inherit] sm:overflow-y-auto md:overflow-hidden md:block md:landscape:block transition-all duration-300 ease-out pb-[100px] sm:ring-style md:ring-0 ${ 
          drawer.isopen ? "sm:left-[0%]" : ""
        }`}>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={45}
              height={27}
              priority
            />
            <h2 className="text-2xl sm:block md:hidden lg:block ">
              nooutidev
            </h2>
          </div>
          <div className="sm:block md:hidden" onClick={handleDisplayMenu}>
            <i className="bi bi-x text-3xl"></i>
          </div>
        </div>

        <div className="flex flex-col relative top-12">
          {menuItemsData.map((item, index) => (
            <AsideBarItem
              key={index}
              title={item.title}
              iconName={item.iconName}
              url={item.url}
              messageAccount={item.messageAccount}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
