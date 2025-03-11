import Link from "next/link";

export default function ProductBox(product) {
  return (
    <div className="bg-white h-full flex flex-col justify-between p-4 shadow-md border border-gray-200 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
   <div>
   <Link href={"/store/product_details/" + product.product.id}>
    <img className="w-full h-40" src={product.product.image} alt={"product-"+product.product.id} />
    </Link>
    <p className="font-bold">{product.product.title}</p>
    <p>${product.product.price}</p>
   </div>
    <div>
    <button className="bg-pink-500 text-white px-2 py-2 rounded-md mt-4">Buy Now</button>
    </div>
    </div>
  );
}

