import Image from "next/image";
import { updateItemType } from "@/types/types";

const UpdateItem = ({ name, src, message, time }: updateItemType) => {
  return (
    <>
      <div className="grid grid-cols-[2.6rem_auto] gap-4 mb-4">
        <div className="w-[2.8rem] h-[2.8rem] round-full overflow-hidden">
          <Image className="rounded-full" src={src} alt={name} width={400} height={400}/>
        </div>
        <div className="message">
          <p>
            <b>{name}</b> {message}.
          </p>
          <small className="text-muted">{time} Ago</small>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
