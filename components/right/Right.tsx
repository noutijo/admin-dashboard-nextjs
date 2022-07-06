import Image from "next/image";
import { useEffect, useState } from "react";
import { updateItemType } from "../../types/types";
import { analyticItemType } from "@/types/types";
import AnalyticItem from "./AnalyticItem";
import UpdateItem from "./UpdateItem";
import { useDrawer } from "hooks/AppMenuProvider";
import { analyticsData, updatesData } from "@data/data";

type propsType = {
  theme: string;
};

export default function Right() {
  const drawer = useDrawer();

  const [currentTheme, setCurrentTheme] = useState<string>("");
 //console.log(props.theme);
 
  useEffect(() => {
    if (localStorage.theme && localStorage.theme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, []); 

  //toggle theme
  const setTheme = (theme: string) => {
    document.documentElement.classList.add(`${theme}`);
    document.documentElement.classList.remove(
      `${theme === "dark" ? "light" : "dark"}`
    );

    setCurrentTheme(`${theme}`);
    localStorage.theme = `${theme}`;
  };

  const handleDisplayMenu = () => {
    //dispatch(setMenuStatus(""));
    drawer.setMenuStatus((state) => {
      return !state;
    });
  };

  return (
    <>
      <div className="sm:mt-2 md:mt-6 sm:w-[94%] sm:m-[0_auto_4rem]">
        <div className="sm:fixed md:relative sm:top-0 sm:left-0 flex justify-end sm:text-right items-center sm:gap-4 md:gap-8 sm:p-[0_0.8rem] md:p-[inherit] sm:h-[4.6rem] md:h-[inherit] sm:bg-colorWhite dark:sm:bg-colorWhite_DM md:bg-colorTransparent dark:md:bg-colorTransparent sm:w-full sm:m-0 sm:z-[2] sm:dark:shadow-colorWhite_DM sm:hover:shadow-none">
          <div className="md:hidden cursor-pointer h-full flex-1">
            <button className="sm:block h-full" onClick={handleDisplayMenu}>
              <i className="bi-list text-2xl flex items-center"></i>
            </button>
          </div>

          <div className="bg-colorLight dark:bg-colorLight_DM flex justify-between items-center h-6 w-16 cursor-pointer rounded-md">
            <i
              className={`bi bi-brightness-high-fill text-sm w-1/2 h-full flex items-center justify-center ${
                currentTheme === "light" ? "activeToggle" : ""
              }`}
              onClick={() => {
                setTheme("light");
              }}></i>
            <i
              className={`bi bi-moon-fill text-sm w-1/2 h-full flex items-center justify-center ${
                currentTheme === "dark" ? "activeToggle" : ""
              }`}
              onClick={() => {
                setTheme("dark");
              }}></i>
          </div>
          <div className="flex  gap-8 text-right">
            <div className="md:block sm:hidden">
              <p>
                Hey, <b>Oreol Noumodong</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <Image
                src="https://image-uviadeo.journaldunet.com/image/140/1739995192/323460.jpg"
                alt="Noumodong picture"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="mb-[0.8rem]">Recents Upddates</h2>

          <div className="bg-colorWhite dark:bg-colorWhite_DM p-7 rounded-3xl shadow-md shadow-colorInfoLight dark:shadow-colorBackground_DM hover:ring-1 dark:hover:ring-colorLight  ring-slate-300 hover:shadow-none">
            {updatesData.map((item: updateItemType) => (
              <UpdateItem
                key={item.name}
                name={item.name}
                src={item.src}
                message={item.message}
                time={item.time}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-[0.8rem]">Sales Analytics</h2>

          {analyticsData.map((item: analyticItemType) => (
            <AnalyticItem
              key={item.title}
              title={item.title}
              status={item.status}
              iconName={item.iconName}
              price={item.price}
              percent={item.percent}
              time={item.time}
              bgicon={item.bgicon}
            />
          ))}

          <div className="bg-colorTransparent mt-8 hover:bg-colorPrimary hover:text-colorWhite p-3 rounded-3xl text-colorPrimary border-2 border-dashed border-colorPrimary flex items-center justify-center shadow-md shadow-colorInfoLight dark:shadow-colorBackground_DM dark:hover:ring-colorLight hover:shadow-none">
            <div className="flex items-center justify-center w-full h-full gap-3 cursor-pointer">
              <i className="bi-plus-lg text-xl font-bold"></i>
              <h3 className="font-bold">Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
