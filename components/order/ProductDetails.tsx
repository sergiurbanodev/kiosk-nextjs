import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { PlusIcon, MinusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

type ProductDetailsProps = {
  product: OrderItem;
};

const MAX_ITEMS = 5;
const MIN_ITEMS = 1;
export default function ProductDetails({ product }: ProductDetailsProps) {
  const { increaseQuantity, decreaseQuantity, removeFromOrder } = useStore();
  const disableDecreaseButton = useMemo(
    () => product.quantity === MIN_ITEMS,
    [product]
  );
  const disableIncreaseButton = useMemo(
    () => product.quantity === MAX_ITEMS,
    [product]
  );
  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{product.name} </p>

          <button type="button" onClick={() => removeFromOrder(product.id)}>
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {formatCurrency(product.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            type="button"
            onClick={() => decreaseQuantity(product.id)}
            disabled={disableDecreaseButton}
            className="disabled:opacity-20"
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-black ">{product.quantity}</p>

          <button
            type="button"
            onClick={() => increaseQuantity(product.id)}
            disabled={disableIncreaseButton}
            className="disabled:opacity-20"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {formatCurrency(product.subtotal)}
          <span className="font-normal"></span>
        </p>
      </div>
    </div>
  );
}
