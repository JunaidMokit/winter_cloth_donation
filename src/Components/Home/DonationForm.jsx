import React from 'react'
import { toast ,ToastContainer} from 'react-toastify';

function DonationForm() {

    const handleDonation=e=>{
        e.preventDefault();
        toast("You are Successfully Donated")

    }
  
  return (
    <div className="bg-gray-50 py-10 px-4">
        < ToastContainer position='top-center' theme="colored" toastStyle={{ borderRadius: "12px", background: "green", color: "#fff", fontSize: "16px", padding: "16px 20px", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
 />
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Others Stay Warm</h1>
    <p className="text-gray-600 text-lg">
      Winter can be harsh for those without proper clothing. By donating jackets, blankets, and sweaters, you can make a real difference in someone's life. Your small act of kindness can bring warmth, comfort, and hope to those in need during the coldest months.
    </p>
  </div>

  <div className="flex items-center justify-center">
    <form onSubmit={handleDonation} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">
        Donate Winter Clothing
      </h2>

      <div>
        <label className="block mb-1 font-medium">Quantity of Items</label>
        <input
          type="text"
          name="quantity"
          required
          placeholder="e.g., 2 jackets, 3 blankets"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Item Type</label>
        <select
          name="itemType"
          className="w-full border rounded-md p-2"
        >
          <option value="">Select an item</option>
          <option value="blanket">Blanket</option>
          <option value="jacket">Jacket</option>
          <option value="sweater">Sweater</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Pickup Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Additional Notes</label>
        <textarea
          name="notes"
          rows="3"
          placeholder="Any specific instruction?"
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit Donation
      </button>
    </form>
  </div>
</div>

  )
}

export default DonationForm
