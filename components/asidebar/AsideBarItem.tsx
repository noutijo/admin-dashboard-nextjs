import { menuItemType } from "../../types/types";

const AsideBarItem = ({ title, iconName, messageAccount }: menuItemType) => {
  return (
    <>
      <a
        className={`flex ml-8 gap-4 items-center hover:text-colorPrimary relative h-[3.7rem] hover:ml-4 transition-all ease-out duration-300 ${
          title === "Logout" ? "mt-8 activeMenu" : "text-colorInfoDark"
        }`}
        href="#">
        <span className="material-icons-sharp">{iconName}</span>
        <h3 className="font-medium md:hidden lg:block">{title}</h3>
        <span
          className={`text-sm transition-all ml-3 rounded-lg duration-300 ease-out bg-colorDanger text-colorWhite p-[2px_10px] ${
            title === "Messages" ? "" : "hidden"
          }`}>
          {messageAccount + "+"}
        </span>
      </a>
    </>
  );
};

export default AsideBarItem;
