import Link from "next/link";
import { menuItemType } from "@/types/types";

export default function AsideBarItem({
  title,
  iconName,
  url,
  messageAccount,
}: menuItemType) {
  return (
    <>
      <Link href={url}>
        <a
          className={`flex ml-2 gap-4 items-center hover:text-colorPrimary relative md:h-[3.7rem] hover:ml-4 transition-all ease-out duration-300 sm:h-[3.4rem] md:w-[auto] sm:w-[100%] last:mt-8 ${
            title === "Dashboard" ? "activeMenu" : "text-colorInfoDark"
          }`}>
          <i className={`bi text-xl ${iconName}`}></i>
          <h3 className="font-medium md:hidden lg:block">{title}</h3>
          <span
            className={`text-sm transition-all ml-3 md:absolute lg:relative md:p-[2px_4px] sm:relative sm:p-[2px_10px] lg:right-[inherit] md:mt-[-1.4rem] md:text-[11px] lg:text-[inherit] lg:mt-[inherit] rounded-lg duration-300 ease-out bg-colorDanger text-colorWhite lg:p-[2px_10px] ${
              title === "Messages" ? "" : "hidden"
            }`}>
            {messageAccount + "+"}
          </span>
        </a>
      </Link>
    </>
  );
}
