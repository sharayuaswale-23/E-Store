
import { getCategories} from "@/library";

export default function StoreLayout({children}) {
  return (
    <div className="grid grid-cols-5">
      <CategoryListing/>
      {children}
      
    </div>
  );
}

const CategoryListing = async () => {
  const data = await getCategories();
  return(
    <div className="py-4 px-4">
    <h1 className="text-2xl text-center">Categories</h1>
    <ul>
      {
        data?.map((category, index)=>(
          <li className="p-2 border border-gray-200 rounded-md my-2" key={"category-"+index}>{category.toUpperCase()}</li>
        ))
      }
    </ul>
  </div>
  )
  

}