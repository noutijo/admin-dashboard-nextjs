import Image from "next/image";
import AsideBarItem from "./AsideBarItem";
import { menuItemType } from "@/types/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuStatus, setMenuStatus } from "@app/store/slices/menuSlice";

export default function AsideBar() {
  const { isopen } = useSelector(getMenuStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme && localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.add("light");
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
    }
  });

  const handleDisplayMenu = () => {
    dispatch(setMenuStatus(""));
  };

  return (
    <>
      <aside
        className={`h-screen sm:fixed md:relative sm:left-0 sm:top-0 sm:bg-colorWhite/70 sm:backdrop-blur-md dark:sm:bg-colorWhite_DM/80 md:bg-colorTransparent dark:md:bg-colorTransparent sm:w-[18rem] md:w-[auto] sm:z-[3] sm:dark:shadow-colorWhite_DM  animate-showmenu sm:hover:shadow-none sm:p-6 md:p-[inherit] sm:overflow-y-auto md:overflow-hidden md:block sm:landscape:hidden md:landscape:block sm:${
          isopen ? "block" : "hidden"
        }`}>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center justify-center gap-3">
            <Image src="/assets/logo.png" alt="logo" width={45} height={27} />
            <h2 className="text-2xl sm:block md:hidden lg:block ">
              noouti<span className="danger">dev</span>
            </h2>
          </div>
          <div className="sm:block md:hidden" onClick={handleDisplayMenu}>
            <i className="bi bi-x text-3xl"></i>
          </div>
        </div>

        <div className="flex flex-col h-[88vh] relative top-12">
          {data.map((item: menuItemType, index: number) => (
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

let data: menuItemType[] = [
  {
    title: `Dashboard`,
    url: "/",
    iconName: `bi-grid-1x2-fill`,
  },
  {
    title: `Customers`,
    url: "/customers",
    iconName: `bi-person`,
  },
  {
    title: `Orders`,
    url: "/orders",
    iconName: `bi-receipt-cutoff`,
  },
  {
    title: `Analytics`,
    url: "/analystics",
    iconName: `bi-activity`,
  },
  {
    title: `Messages`,
    url: "/messages",
    iconName: `bi-envelope`,
    messageAccount: 23,
  },
  {
    title: `Products`,
    url: "/products",
    iconName: `bi-clipboard-data`,
  },
  {
    title: `Reports`,
    url: "/reports",
    iconName: `bi-exclamation-octagon`,
  },
  {
    title: `Settings`,
    url: "/settings",
    iconName: `bi-gear-wide`,
  },
  {
    title: `Add Product`,
    url: "/add_product",
    iconName: `bi-plus-lg`,
  },
  {
    title: `Logout`,
    url: "/logout",
    iconName: `bi-box-arrow-right`,
  },
];
