import { analyticItemType } from "@/types/types";

export default function AnalyticItem({
  title,
  status,
  iconName,
  price,
  percent,
  time,
  bgicon,
}: analyticItemType) {
  return (
    <>
      <div className="flex items-center gap-4 mb-[0.7rem] bg-colorWhite dark:bg-colorWhite_DM p-6 rounded-3xl shadow-md shadow-colorInfoLight dark:shadow-colorBackground_DM hover:ring-1 dark:hover:ring-colorLight  ring-slate-300 hover:shadow-none transition-all duration-300 ease-out">
        <div
          className={`p-[0.6rem] text-colorWhite rounded-full flex items-center ${bgicon}`}>
          <i
            className={`bi text-xl flex items-center justify-center ${iconName}`}></i>
        </div>
        <div className="flex justify-between items-start m-0 w-full">
          <div className="info">
            <h3>{title}</h3>
            <small className="text-muted">Last {time}</small>
          </div>
          <div className={`${status}`}>{percent}%</div>
          <h3 className="animate-flashlight rounded-md px-2">${price}</h3>
        </div>
      </div>
    </>
  );
}
