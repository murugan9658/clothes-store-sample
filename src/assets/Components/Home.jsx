
import AutoSlide from "./Autoslide";


const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-100">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center juistyfy-center">
        
        {/* Left Side: Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 hover:text-blue-400 transition duration-300">
            Welcome to Our Men's Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the latest trends and timeless styles, curated just for you.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus praesentium libero excepturi quod necessitatibus facilis voluptas tempora assumenda qui molestiae!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </div>

        {/* Right Side: Image */}
         
        <div >
        <AutoSlide/>
        </div>

      </div>
    </section>
  );
};

export default Home;
