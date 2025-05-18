import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100  mt-4 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Service</h2>
            <ul>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Contact Us</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Order Status</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Shipping</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Return Policy & Exchanges</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Price Adjustments</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Gift Cards</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">FAQ</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Product Recalls</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">India</h2>
            <ul>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">About Us</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">All Brands</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Careers</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Corporate Social Responsibility</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Diversity, Equity, Inclusion & Belonging</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Get Email Updates</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Nordstrom Blog</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">The Thread</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Nordy Podcast</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Stores & Services</h2>
            <ul>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Find a Store</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Free Style Help</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Alterations & Tailoring</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Virtual Events</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Spa Nordstrom</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Nordstrom Restaurants</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Nordstrom Local</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Nordstrom Card & Rewards</h2>
            <ul>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">The Nordy Club Rewards</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Pay My Bill</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Manage My Nordstrom Card</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Nordstrom, Inc.</h2>
            <ul>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Nordstrom Rack</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Investor Relations</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Press Releases</a></li>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Nordstrom Media Network</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Get our apps</h2>
             <ul>
              <li className="text-gray-700 hover:text-blue-500"><a href="#">Get our apps</a></li>
             </ul>

            <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Sign Up for Emails</h2>
                    <p className="text-gray-700 mb-2">Get updates on new arrivals and promotions.</p>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500 mb-3"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                    </button>
                  </div>
          </div>

        </div>
      </div>
    </div>
  );

}



export default Contact;