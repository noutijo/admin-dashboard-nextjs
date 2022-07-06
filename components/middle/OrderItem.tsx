import { orderType } from "@/types/types";

export default function OrderItem({
  productName,
  productNumber,
  paymentStatus,
  shipping,
}: orderType) {
  return (
    <>
      <tr>
        <td className="px-2 h-[2.8rem] border-solid border-b-colorLight dark:border-b-colorLight_DM borber-b-[1px] text-colorDarkVariant lg:block">
          {productName}
        </td>
        <td className="px-2  h-[2.8rem] border-solid border-b-colorLight dark:border-colorLight_DM borber-b-[1px] text-colorDarkVariant">
          {productNumber}
        </td>
        <td className="px-2  h-[2.8rem] border-solid border-colorLight dark:border-colorLight_DM borber-b-[1px] text-colorDarkVariant">
          {paymentStatus}
        </td>
        <td className={`px-2 h-[2.8rem] border-solid border-colorLight dark:border-colorLight_DM borber-b-[1px] ${
            shipping === "Declined"
              ? "danger"
              : shipping === "Pending"
              ? "warning"
              : "primary"
          }`}>
          {shipping}
        </td>
        <td className="px-2  h-[2.8rem] border-solid border-colorLight dark:border-colorLight_DM borber-b-[1px] primary lg:block">
          Datails
        </td>
      </tr>
    </>
  );
}
