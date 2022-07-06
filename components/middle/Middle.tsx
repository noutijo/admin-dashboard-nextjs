import { cardsData, ordersData } from "@data/data";
import CardItem from "./CardItem";
import OrderItem from "./OrderItem";

export default function Main() {
  return (
    <>
      <main className="overflow-x-scroll sm:p-[0_1rem]  md:p-[10px] md:mt-6">
        <h1>Dashboard</h1>

        <div className="inline-block bg-colorLight dark:bg-colorLight_DM rounded-lg mt-4 p-[0.5rem_1.6rem]">
          <label className="pr-1" htmlFor="date">
            Choose date:{" "}
          </label>
          <input
            type="date"
            defaultValue="2022-01-01"
            className="bg-colorTransparent dark:invert outline-none"
          />
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-6 gap-0">
          {cardsData.map((item, index) => (
            <CardItem
              key={index}
              bgcolor={item.bgcolor}
              iconName={item.iconName}
              title={item.title}
              price={item.price}
              time={item.time}
              percent={item.percent}
            />
          ))}
        </div>

        <div className="mt-8 overflow-auto w-full">
          <h2 className="mb-3">Recent Orders</h2>
          <table className="bg-colorWhite dark:bg-colorWhite_DM w-full border-separate table-auto rounded-3xl p-[1.5rem] text-center shadow-md shadow-colorInfoLight dark:shadow-colorBackground_DM hover:ring-1 dark:hover:ring-colorLight ring-slate-300 hover:shadow-none">
            <thead>
              <tr>
                <th className="truncate px-3">Product Name</th>
                <th className="truncate px-3">Product Number</th>
                <th className="truncate px-3">Payment</th>
                <th className="truncate px-3">Status</th>
                <th className="truncate px-3"></th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((item, index) => (
                <OrderItem
                  key={index}
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
}
