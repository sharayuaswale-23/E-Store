import Link from "next/link";

export default async function FeaturedProducts() {
  const response = await fetch("https://fakestoreapi.in/api/products?limit=5");
  const data = await response.json();
  console.log(data.products);
  return (
    <section className=" text-black p-4 my-4">
      <h1 className="text-3xl text-center">Featured Products</h1>
       <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-3 my-6 mx-2">
              {
                data.products?.map((prod, index)=>(
                 <div key={index} className="bg-white p-4 shadow-md border border-gray-200 rounded-md">
                 <Link href={"/store/product_details/" + prod.id}>
                    <img className="w-full h-40" src={prod.image} alt={prod.title} />
                    </Link>
                    <p className="w-full text-xl mb-2">{prod.brand.toUpperCase()}</p>
                    <p>${prod.price}</p>
                    <button className="bg-pink-500 text-white px-2 py-2 rounded-md mt-4">Buy Now</button>
                    </div>
                ))
              }
            </div>
    </section>
  );
}