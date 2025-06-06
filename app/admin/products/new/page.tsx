import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductsPage() {
  return (
    <>
      <Heading>Create New Product</Heading>

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
