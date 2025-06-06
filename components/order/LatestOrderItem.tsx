import { OrderWithProducts } from "@/src/types";

type LatestOrderItemProps = {
  order: OrderWithProducts;
};

export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
      <p className="text-2xl font-bold text-slate-600">Client: {order.name}</p>

      <ul
        className="divide-y divide-gray-300 border-t border-gray-300 text-sm font-medium text-gray-500"
        role="list"
      >
        {order.orderProducts.map((product) => (
          <li key={product.id} className="flex py-6 text-lg">
            <span className="font-bold">({product.quantity})</span>
            <p>{product.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
