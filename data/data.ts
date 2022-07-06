import { analyticItemType, menuItemType, updateItemType, cardItemType, orderType } from "@/types/types";

//menu items
export const menuItemsData: menuItemType[] = [
    {
        title: `Dashboard`,
        url: "/",
        iconName: `bi-grid-1x2-fill`,
    },
    {
        title: `Customers`,
        url: "/customers",
        iconName: `bi-person`,
    },
    {
        title: `Orders`,
        url: "/orders",
        iconName: `bi-receipt-cutoff`,
    },
    {
        title: `Analytics`,
        url: "/analytics",
        iconName: `bi-activity`,
    },
    {
        title: `Messages`,
        url: "/messages",
        iconName: `bi-envelope`,
        messageAccount: 23,
    },
    {
        title: `Products`,
        url: "/products",
        iconName: `bi-clipboard-data`,
    },
    {
        title: `Reports`,
        url: "/reports",
        iconName: `bi-exclamation-octagon`,
    },
    {
        title: `Settings`,
        url: "/settings",
        iconName: `bi-gear-wide`,
    },
    {
        title: `Add Product`,
        url: "/add_product",
        iconName: `bi-plus-lg`,
    },
    {
        title: `Logout`,
        url: "/logout",
        iconName: `bi-box-arrow-right`,
    },
];

//default updates datas
export const updatesData: updateItemType[] = [
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

//default analytics datas
export const analyticsData: analyticItemType[] = [
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

//default products
export const ordersData: orderType[] = [
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

//card items 
export const cardsData: cardItemType[] = [
    {
        bgcolor: "bg-colorPrimary",
        iconName: "bi-clipboard-data-fill",
        title: "Total Sales",
        price: 2521,
        percent: 90,
        time: 2,
    },
    {
        bgcolor: "bg-colorDanger",
        iconName: "bi-bar-chart-fill",
        title: "Total Expenses",
        price: 295,
        percent: 34,
        time: 24,
    },
    {
        bgcolor: "bg-colorSuccess",
        iconName: "bi-graph-up",
        title: "Total Incomes",
        price: 1084,
        percent: 71,
        time: 11,
    },
];
