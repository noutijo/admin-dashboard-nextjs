import { orderType } from "../../types/types";

const OrderItem = ({
  productName,
  productNumber,
  paymentStatus,
  shipping,
}: orderType) => {
  return (
    <>
      <tr>
        <td className="h-[2.8rem] border-solid border-b-colorLight dark:border-b-colorLight_DM borber-b-[1px] text-colorDarkVariant sm:hidden lg:block">
          {productName}
        </td>
        <td className="h-[2.8rem] border-solid border-b-colorLight dark:border-colorLight_DM borber-b-[1px] text-colorDarkVariant">
          {productNumber}
        </td>
        <td className="h-[2.8rem] border-solid border-colorLight dark:border-colorLight_DM borber-b-[1px] text-colorDarkVariant">
          {paymentStatus}
        </td>
        <td
          className={`h-[2.8rem] border-solid border-colorLight dark:border-colorLight_DM borber-b-[1px] ${
            shipping === "Declined"
              ? "danger"
              : shipping === "Pending"
              ? "warning"
              : "primary"
          }`}>
          {shipping}
        </td>
        <td className="h-[2.8rem] border-solid border-colorLight dark:border-colorLight_DM borber-b-[1px] primary sm:hidden lg:block">
          Datails
        </td>
      </tr>
    </>
  );
};

export default OrderItem;