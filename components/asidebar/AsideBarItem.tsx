import Link from "next/link";
import { menuItemType } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AsideBarItem({
  title,
  iconName,
  url,
  messageAccount,
}: menuItemType) {
  const [isSelected, SetIsSelected]=useState<string>("a");
  const router = useRouter();

  useEffect(() => {
    //get current path and add to store as selected menu item
    SetIsSelected(router.pathname.slice(1).toString());
  }, [router.pathname]);

  const makeMenuItemSelected = () => {
    SetIsSelected(url.slice(1));
  };

  return (
    <>
      <Link href={url}>
        <div
          onClick={makeMenuItemSelected}
          className={`flex ml-2 gap-4 items-center hover:text-colorPrimary relative md:h-[3.7rem] hover:ml-4 transition-all ease-out duration-300 sm:h-[3.4rem] md:w-[auto] sm:w-[100%] last:mt-8 ${
            url.slice(1) === isSelected
              ? "activeMenu"
              : "text-colorInfoDark"
          }`}>
          <i className={`bi text-xl ${iconName}`}></i>
          <h3 className="font-medium md:hidden lg:block">{title}</h3>
          <span
            className={`text-sm transition-all ml-3 md:absolute lg:relative md:p-[2px_4px] sm:relative sm:p-[2px_10px] lg:right-[inherit] md:mt-[-1.4rem] md:text-[11px] lg:text-[inherit] lg:mt-[inherit] rounded-lg duration-300 ease-out bg-colorDanger text-colorWhite lg:p-[2px_10px] ${
              title === "Messages" ? "" : "hidden"
            }`}>
            {messageAccount + "+"}
          </span>
        </div>
      </Link>
    </>
  );
}
