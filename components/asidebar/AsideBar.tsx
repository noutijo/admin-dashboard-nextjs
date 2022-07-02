import type { NextPage } from "next";
import Image from "next/image";
import AsideBarItem from "./AsideBarItem";
import { menuItemType } from "../../types/types";
import { useEffect, useState } from "react";

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

const AsideBar: NextPage = () => {
    const [_document, set_document] = useState<Document | null>(null);

    useEffect(() => {
      set_document(document);
    }, []);

    const addDark = (): void => {
      _document?.documentElement.classList.add("dark");
    };
    //enable darkmode by default
    addDark();

  return (
    <>
      <aside className="h-screen sm:fixed md:relative sm:left-[-00%] sm:bg-colorWhite dark:sm:bg-colorWhite_DM md:bg-colorTransparent dark:md:bg-colorTransparent sm:w-[18rem] md:w-[auto] sm:z-[3] sm:dark:shadow-colorWhite_DM sm:hover:shadow-none sm:p-6 md:p-[inherit] sm:overflow-y-auto md:overflow-hidden animate-showmenu sm:hidden md:block">
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="logo" width={45} height={30} />
            <h2 className=" sm:block md:hidden lg:block ">
              noouti<span className="danger">dev</span>
            </h2>
          </div>
          <div className="sm:block md:hidden" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>

        <div className="flex flex-col h-[88vh] relative top-12">
          {data.map((item: menuItemType) => (
            <AsideBarItem
              key={item.title}
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
};

export default AsideBar;
