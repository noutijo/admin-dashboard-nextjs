export type menuItemType = {
    title: string,
    iconName: string,
    messageAccount?: number | undefined
}

export type cardItemType = {
    strokeDasharray: number,
    strokeDashoffset?: number,
    bgcolor: string,
    iconName: string,
    title: string,
    price: number,
    percent: number,
    time: number
}

export type orderType = {
    productName: string,
    productNumber: string,
    paymentStatus: string,
    shipping: string,
}

export type updateItemType = {
    name: string,
    src: string,
    message: string,
    time: string,
}

export type analyticItemType = {
    title: string,
    status: string,
    iconName: string,
    bgicon: string,
    price: number,
    percent: number,
    time: string
}