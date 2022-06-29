import Image from "next/image";
import { analyticItemType } from "../../types/types";

const AnalyticItem = ({
  title,
  status,
  iconName,
  price,
  percent,
  time,
  bgicon,
}: analyticItemType) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-[0.7rem] bg-colorWhite dark:bg-colorWhite_DM p-6 rounded-3xl shadow-colorWhite dark:shadow-colorWhite_DM hover:shadow-none transition-all duration-300 ease-out">
        <div
          className={`p-[0.6rem] text-colorWhite rounded-full flex items-center ${bgicon}`}>
          <span className="material-icons-sharp">{iconName}</span>
        </div>
        <div className="flex justify-between items-start m-0 w-full">
          <div className="info">
            <h3>{title}</h3>
            <small className="text-muted">Last {time}</small>
          </div>
          <div className={`${status}`}>{percent}%</div>
          <h3>${price}</h3>
        </div>
      </div>
    </>
  );
};

export default AnalyticItem;