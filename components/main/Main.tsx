import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cardItemType } from "../../types/types";
import CardItem from "./CardItem";

const data: cardItemType[] = [
  {
    strokeDasharray: 200,
    strokeDashoffset: -30,
    bgcolor: "bg-colorPrimary",
    iconName: "analytics",
    title: "Total Sales",
    price: 25.21,
    percent: 81,
    time: 24,
  },
  {
    strokeDasharray: 80,
    strokeDashoffset: 20,
    bgcolor: "bg-colorDanger",
    iconName: "bar_chart",
    title: "Total Expenses",
    price: 23.95,
    percent: 62,
    time: 24,
  },
  {
    strokeDasharray: 110,
    strokeDashoffset: 35,
    bgcolor: "bg-colorSuccess",
    iconName: "stacked_line_chart",
    title: "Total Incomes",
    price: 10.84,
    percent: 44,
    time: 24,
  },
];

const Main: NextPage = () => {
  const [_document, set_document] = useState<Document | null>(null);

  useEffect(() => {
    set_document(document);
  }, []);

  const addDark = (): void => {
    _document?.documentElement.classList.add("dark");
  };
  //enable darkmode by default
  addDark();

  return (
    <>
      <main className="overflow-x-scroll p-[10px] mt-6">
        <h1>Dashboard</h1>

        <div className="inline-block bg-colorLight dark:bg-colorLight_DM rounded-sm mt-4 p-[0.5rem_1.6rem]">
          <input
            className="bg-colorTransparent text-colorDark dark:text-colorDark_DM"
            type="date"
          />
        </div>

        <div className="grid grid-cols-3 gap-6 ">
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
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <a href="#">Show All</a>
        </div>
      </main>
    </>
  );
};

export default Main;
