import {FiSearch, FiShoppingCart} from 'react-icons/fi';
export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
    <div className="container mx-auto flex items-center justify-between">
      
        <h1 className="text-2xl font-bold text-pink-500">E-Store<span className="text-black">.</span></h1>
        
      
        <div className="relative w-full max-w-md hidden md:flex">
            <input type="text" placeholder="Search for products..." className="w-full p-2 pl-4 pr-10 border rounded-full focus:outline-none"/>
            <button className="absolute right-0 top-0 bottom-0 bg-pink-500 text-white p-2 rounded-full m-1">
                <FiSearch/>
            </button>
        </div>
        
        
        <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-4 text-gray-700">
                <a href="/" className="hover:text-pink-500">Home</a>
                <a href="/store" className="hover:text-pink-500">Store</a>
            </nav>
            <div className="relative">
                <button className="text-2xl">
                    <FiShoppingCart/>
                </button>
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </div>
        </div>
    </div>
    
   
    <div className="md:hidden mt-3 px-4">
        <div className="relative w-full">
            <input type="text" placeholder="Search for products..." className="w-full p-2 pl-4 pr-10 border rounded-full focus:outline-none"/>
            <button className="absolute right-0 top-0 bottom-0 bg-pink-500 text-white p-2 rounded-full m-1">
            <FiSearch/>
            </button>
        </div>
    </div>
</header>
  );
}