import { cardItemType } from "../../types/types";

const CardItem = ({
  strokeDasharray,
  strokeDashoffset,
  bgcolor,
  iconName,
  title,
  price,
  time,
  percent
}: cardItemType) => {
  return (
    <>
      <div className="bg-colorWhite dark:bg-colorWhite_DM rounded-3xl mt-4 transition-all duration-300 ease shadow-colorWhite dark:shadow-colorWhite_DM hover:shadow-none p-7 overflow-auto">
        <i
          className={`${iconName} flex justify-center items-center p-2 h-12 w-12 rounded-full text-colorWhite text-2xl ${bgcolor}`}></i>
        <div className="flex items-center justify-between">
          <div className="left">
            <h3 className="text-sm m-[1rem_0_0.6rem]">{title}</h3>
            <h2 className="font-bold">${price}</h2>
          </div>
          <div className="relative w-[80px] h-[80px] rounded-full">
            <svg className="w-[80px] h-[80px]">
              <circle
                className="stroke-colorPrimary translate-x-1 translate-y-1"
                fill="none"
                strokeWidth={5}
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                cx="40"
                cy="40"
                r="30"></circle>
            </svg>
            <div className=" translate-x-1 translate-y-1 absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <p>{percent}%</p>
            </div>
          </div>
        </div>
        <small className="text-muted block mt-5">Last {time} Hours</small>
      </div>
    </>
  );
};

export default CardItem;
