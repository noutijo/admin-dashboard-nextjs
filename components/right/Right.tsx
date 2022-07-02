import Image from "next/image";
import { updateItemType } from "../../types/types";
import { analyticItemType } from "../../types/types";
import AnalyticItem from "./AnalyticItem"; 
import UpdateItem from "./UpdateItem";

const analyticsData: analyticItemType[] = [
  {
    title: "ONLINE ORDERS",
    status: "success",
    iconName: "bi-cart-fill",
    price: 3282,
    percent: +32,
    time: "21 hours",
    bgicon: "bg-colorPrimary",
  },
  
  {
    title: "OFFLINE ORDERS",
    status: "danger",
    iconName: "bi-bag-fill",
    price: 1000,
    percent: -12,
    time: "23 hours",
    bgicon: "bg-colorDanger",
  },
  {
    title: "NEW CUSTOMERS",
    status: "success",
    iconName: "bi-person-fill",
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
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "received his order of Iphone 14 Pro Max",
    time: "3 minutes",
  },
  {
    name: "Edouard Betsem",
    src: "https://media-exp1.licdn.com/dms/image/C4D03AQGQs2GcMMnhug/profile-displayphoto-shrink_200_200/0/1639051210992?e=1661990400&v=beta&t=GqpfiB_anMpbCHUTlRrMmDY2IfCAqZKJFostITDhU6c",
    message: "received his order of nooutidev T-shirt",
    time: "4 minutes",
  },
];

const Right = () => {
  return (
    <>
      <div className="sm:mt-2 md:mt-6 sm:w-[94%] sm:m-[0_auto_4rem]">
        <div className="sm:fixed md:relative sm:top-0 sm:left-0 flex justify-center sm:text-right items-center sm:gap-8 md:gap-8 sm:p-[0_0.8rem] md:p-[inherit] sm:h-[4.6rem] md:h-[inherit] sm:bg-colorWhite dark:sm:bg-colorWhite_DM md:bg-colorTransparent dark:md:bg-colorTransparent sm:w-full sm:m-0 sm:z-[2] sm:dark:shadow-colorWhite_DM sm:hover:shadow-none">
          <button className="sm:block md:hidde cursor-pointer" id="menu-btn">
            <i className="bi-list text-2xl flex items-center justify-center"></i>
          </button>
          <div className="bg-colorLight dark:bg-colorLight_DM flex justify-between items-center h-6 w-16 cursor-pointer rounded-md">
            <i className="bi bi-brightness-high-fill text-sm w-1/2 h-full flex items-center justify-center"></i>
            <i className="bi bi-moon-fill text-sm w-1/2 h-full flex items-center justify-center activeToggle"></i>
          </div>
          <div className="flex  gap-8 text-right">
            <div className="info md:block sm:hidden">
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

          <div className="bg-colorTransparent mt-8 hover:bg-colorPrimary hover:text-colorWhite p-3 rounded-3xl text-colorPrimary border-2 border-dashed border-colorPrimary transition duration-300 ease-out flex items-center justify-center">
            <div className="flex items-center justify-center w-full h-full gap-3 cursor-pointer">
              <i className="bi-plus textxl font-bold"></i>
              <h3 className="font-bold">Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
