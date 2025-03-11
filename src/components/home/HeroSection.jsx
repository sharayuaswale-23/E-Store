import Slider from "./slider";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 px-4 py-16">

    <section className="w-full md:w-1/2 text-center md:text-left">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">One stop solution <span className="text-pink-500">E-Store</span></h2>
            <p className="mt-4 text-gray-600">Discover the latest headphones, earphones, mobiles, tablets etc.</p>
            <p className="text-gray-600">Exclusive deals just for you!</p>
            <a href="#" className="mt-6 inline-block bg-gray-200 text-pink-500 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-600 transition">Shop Now</a>
        </div>
    </section>
    
 
    <section className="w-full md:w-1/2">
        <Slider/>
    </section>
</div>
  );
}