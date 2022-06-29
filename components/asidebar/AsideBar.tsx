import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AsideBarItem from "./AsideBarItem";
import { menuItemType } from "../../types/menuTypes";

let data: menuItemType[] = [
  {
    title: `Dashboard`,
    iconName: `grid_view`,
  },
  {
    title: `Customers`,
    iconName: `person_outline`,
  },
  {
    title: `Orders`,
    iconName: `receipt_long`,
  },
  {
    title: `Analytics`,
    iconName: `insights`,
  },
  {
    title: `Messages`,
    iconName: `mail_outline`,
    messageAccount: 23,
  },
  {
    title: `Products`,
    iconName: `inventory`,
  },
  {
    title: `Reports`,
    iconName: `report_gmailerrorred`,
  },
  {
    title: `Settings`,
    iconName: `settings`,
  },
  {
    title: `Add Product`,
    iconName: `add`,
  },
  {
    title: `Logout`,
    iconName: `logout`,
  },
];

const AsideBar: NextPage = () => {
  return (
    <>
      <aside className="h-screen">
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="logo" width={45} height={30} />
            <h2 className="hidden lg:block ">
              noouti<span className="danger">dev</span>
            </h2>
          </div>
          <div className="hidden" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>

        <div className="flex flex-col h-[88vh] relative top-12">
          {data.map((item: menuItemType) => (
            <AsideBarItem
              key={item.title}
              title={item.title}
              iconName={item.iconName}
              messageAccount={item.messageAccount}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default AsideBar;
