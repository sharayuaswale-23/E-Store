import { getProducts } from "@/library";
export default async function ProductDetails({params}) {
    const product = await getProducts(params.product_id);
    console.log("product",product);
    return (
        <div className="col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 mx-2 mt-6">
                <div>
                    <img src={product.image} alt={product.name} className="w-full"/>
                </div>
                <div>
                    <p className="text-lg text-gray-500 line-clamp-7">{product.description}</p>
                    <div className="my-4">
                    <p className="text-lg font-bold mb-1 text-gray-800">Price: ${product.price}</p>
                    {
                        product.discount && <p className="text-lg mb-1 font-bold text-red-600">Discount: {product.discount}%</p>
                    }
                    <ul>
                        <li className="mb-1"><strong>Brand: </strong>{product.brand}</li>
                        <li className="mb-1"><strong>Model: </strong>{product.model}</li>
                        <li className="mb-1"><strong>Color: </strong>{product.color}</li>
                        <li className="mb-1"><strong>Category: </strong>{product.category}</li>
                    </ul>
                    </div>
                    <button className="bg-blue-500 mt-2 text-white px-4 py-2 rounded-md">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}