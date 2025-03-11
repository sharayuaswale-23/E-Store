import ProductBox from "@/components/ProductBox";
import { getProducts} from "@/library";

export default function StorePage() {
  return (
      <ProductListing/>

  );
}

const ProductListing = async ()=> {
  const data = await getProducts();
    return(
      <div className="col-span-4">
     <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 mx-2 mt-6">
     {
        data?.map((product)=>(
          <ProductBox key={"product-"+product.id} product={product}/>
        ))
      }
     </ul>
    </div>
    )
}