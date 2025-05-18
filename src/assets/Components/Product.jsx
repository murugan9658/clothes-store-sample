import React from 'react'

const Product = () => {
  return (
    <section>
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>Product's</h1>
            <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10 '>
                {/* Product Images */}

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 1.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Regular Fit Checkered Spread Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 2.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >MMen Regular Fit Printed Spread Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 3.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Comfort Fit Fit Striped Spread Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>
                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 4.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Slim Fit Solid Cut Away Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 5.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Slim Fit Checkered Button Down Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>
                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 6.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Tailored Fit Solid Cut Away Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 7.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Regular Fit Solid Cut Away Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

             <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 8.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Regular Fit Printed Spread Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

             <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4 '>
                    {/* Product 1 */}
                    <img src='images/mens 9.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Regular Fit Striped Spread Collar Casual Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

            
                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-5 '>
                    {/* Product 1 */}
                    <img src='images/t mens 1.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Graphic Print Round Neck Polyester Multicolor T-Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-5 '>
                    {/* Product 1 */}
                    <img src='images/t mens 2.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Oversized Men Printed, Typography Round Neck Pure Cotton Green T-Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>

                <div className='max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-5 '>
                    {/* Product 1 */}
                    <img src='images/t mens 3.jpg' alt="Product" className='w-full h-auto mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ' style={{ height: "300px", width: "300px" }}  />
                    <h3 className='text-blue-500' >Men Graphic Print Round Neck Polyester Multicolor T-Shirt</h3>
                    <h2 className='text-black font-bold text-xl'> Price: &#8377;350 <span className='line-through'>650/-</span></h2>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> Get It</button>

                </div>




                
            </div>
        </div>
    </section>
  )
}

export default Product