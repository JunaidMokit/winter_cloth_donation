import React from 'react'

function Order() {
  return (
    <div>
        <div class="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-sm">
  <h1 class="text-2xl font-semibold mb-6 text-center">Place Your Order</h1>
  <form class="space-y-4">
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
      <input type="text" placeholder="Your Name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
      <input type="email" placeholder="Your Email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Address</label>
      <textarea placeholder="Your Address" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
    </div>
    
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Product</label>
      <input type="text" placeholder="Product Name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Quantity</label>
      <input type="number" min="1" value="1" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
      Submit Order
    </button>
  </form>
</div>

      
    </div>
  )
}

export default Order
