import { cardItemType, orderType } from "@/types/types";
import CardItem from "./CardItem";
import OrderItem from "./OrderItem";

const orders: orderType[] = [
  {
    productName: "nooutidev Shoe brand",
    productNumber: "1234",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "nooutidev t-shirt brand",
    productNumber: "1235",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "nooutidev cap brand",
    productNumber: "1236",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "nooutidev bag brand",
    productNumber: "1237",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "nooutidev phone brand",
    productNumber: "1238",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];

const data: cardItemType[] = [
  {
    strokeDasharray: 186,
    strokeDashoffset: 188.6 - (97 / 100) * 188.6,
    bgcolor: "bg-colorPrimary",
    iconName: "bi-clipboard-data-fill",
    title: "Total Sales",
    price: 2521,
    percent: 97,
    time: 2,
  },
  {
    strokeDasharray: 186,
    strokeDashoffset: 188.6 - (62 / 100) * 188.6,
    bgcolor: "bg-colorDanger",
    iconName: "bi-bar-chart-fill",
    title: "Total Expenses",
    price: 295,
    percent: 62,
    time: 24,
  },
  {
    strokeDasharray: 186,
    strokeDashoffset: 188.6 - (44 / 100) * 188.6,
    bgcolor: "bg-colorSuccess",
    iconName: "bi-graph-up",
    title: "Total Incomes",
    price: 1084,
    percent: 44,
    time: 11,
  },
];

const Main = () => {
  return (
    <>
      <main className="overflow-x-scroll sm:p-[0_1rem]  md:p-[10px] md:mt-6">
        <h1>Dashboard</h1>

        <div className="inline-block bg-colorLight dark:bg-colorLight_DM rounded-lg mt-4 p-[0.5rem_1.6rem]">
          <input
            type="date"
            defaultValue="2019-07-22"
            min="1900-01-01"
            max="2100-01-01"
            className="bg-colorTransparent"
          />
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-6 gap-0">
          {data.map((item: cardItemType) => (
            <CardItem
              key={item.title}
              strokeDasharray={item.strokeDasharray}
              strokeDashoffset={item.strokeDashoffset}
              bgcolor={item.bgcolor}
              iconName={item.iconName}
              title={item.title}
              price={item.price}
              time={item.time}
              percent={item.percent}
            />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="mb-3">Recent Orders</h2>
          <table className="bg-colorWhite dark:bg-colorWhite_DM w-full border-separate table-auto rounded-3xl p-[1.5rem] text-center shadow-md shadow-colorInfoLight dark:shadow-colorBackground_DM hover:ring-1 dark:hover:ring-colorLight  ring-slate-300 hover:shadow-none transition-all duration-300 ease">
            <thead>
              <tr>
                <th className="sm:hidden lg:block">Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th className="sm:hidden lg:block"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item: orderType) => (
                <OrderItem
                  key={item.productName}
                  productName={item.productName}
                  productNumber={item.productNumber}
                  paymentStatus={item.paymentStatus}
                  shipping={item.shipping}
                />
              ))}
            </tbody>
          </table>
          <a
            className="text-center block m-[1rem_auto] text-colorPrimary"
            href="#">
            Show All
          </a>
        </div>
      </main>
    </>
  );
};

export default Main;
