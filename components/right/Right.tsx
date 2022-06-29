import Image from "next/image";
import { updateItemType } from "../../types/types";
import { analyticItemType } from "../../types/types";
import AnalyticItem from "./AnalyticItem";
import UpdateItem from "./updateItem";

const analyticsData: analyticItemType[] = [
  {
    title: "ONLINE ORDERS",
    status: "success",
    iconName: "shopping_cart",
    price: 3282,
    percent: +32,
    time: "21 hours",
    bgicon: "bg-colorPrimary",
  },
  {
    title: "OFFLINE ORDERS",
    status: "danger",
    iconName: "local_mall",
    price: 1000,
    percent: -12,
    time: "23 hours",
    bgicon: "bg-colorDanger",
  },
  {
    title: "NEW CUSTOMERS",
    status: "success",
    iconName: "person",
    price: 998,
    percent: +25,
    time: "3 hours",
    bgicon: "bg-colorSuccess",
  },
];

const data: updateItemType[] = [
  {
    name: "Nkemtakeh Cels",
    src: "https://cdn6.f-cdn.com/ppic/141780185/logo/41022312/ekYZm/profile_logo_.jpg",
    message: "received his order of MacBook Pro 2021",
    time: "2 minutes",
  },
  {
    name: "Pricilia Ken",
    src: "https://images.pexels.com/photos/3760918/pexels-photo-3760918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "received his order of Iphone 14 Pro Max",
    time: "3 minutes",
  },
  {
    name: "Kenfack Léa",
    src: "https://images.pexels.com/photos/7193070/pexels-photo-7193070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "received his order of nooutidev T-shirt",
    time: "4 minutes",
  },
];

const Right = () => {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-center gap-8">
          <button className="lg:hidden" id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="bg-colorLight dark:bg-colorLight_DM flex justify-between items-center h-6 w-16 cursor-pointer rounded-md">
            <span className="material-icons-sharp text-xl w-1/2 h-full flex items-center justify-center activeToggle">
              light_mode
            </span>
            <span className="material-icons-sharp text-xl w-1/2 h-full flex items-center justify-center">
              dark_mode
            </span>
          </div>
          <div className="flex  gap-8 text-right">
            <div className="info">
              <p>
                Hey, <b>Oreol Noumodong</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <Image
                src="https://pbs.twimg.com/profile_images/1514681845304242184/FtI21TMl_400x400.jpg"
                alt="Noumodong picture"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="mb-[0.8rem]">Recents Upddates</h2>

          <div className="bg-colorWhite dark:bg-colorWhite_DM p-7 rounded-3xl transition-all duration-300 ease-linear shadow-colorWhite dark:shadow-colorWhite_DM">
            {data.map((item: updateItemType) => (
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

          <div className="item bg-colorTransparent hover:bg-colorPrimary hover:text-colorWhite p-3 rounded-3xl text-colorPrimary border-2 border-dashed flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-full gap-3 cursor-pointer">
              <span className="material-icons-sharp">add</span>
              <h3 className="font-bold">Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
