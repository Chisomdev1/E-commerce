import React, { useEffect, useState } from 'react';

const defaultData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
};

export default function CustomerAddressCard() {
  const [formData, setFormData] = useState(defaultData);
  const [isEditing, setIsEditing] = useState(false);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem('customerInfo');
    if (saved) {
      setFormData(JSON.parse(saved));
    } else {
      // If no saved data, enable editing to show the form
      setIsEditing(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('customerInfo', JSON.stringify(formData));
    setIsEditing(false);
    alert('Information saved!');
  };

  const handleCheckout = async () => {
    try {
      await fetch('https://formspree.io/f/mldnezze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('Checkout info sent!');
    } catch {
      alert('Failed to send checkout info');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 mt-4 inter">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-700 font-semibold">CUSTOMER ADDRESS</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-orange-500 text-sm font-medium"
          >
            Change
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-2">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-between pt-2">
            <button
              onClick={handleSave}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-500 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-800">
          <p className="font-medium">
            {formData.firstName} {formData.lastName}
          </p>
          <p className="text-gray-600 truncate">{formData.address}</p>
          <p className="text-gray-600">{formData.email}</p>
          <p className="text-gray-600">{formData.phone}</p>
        </div>
      )}

      {!isEditing && (
        <button
          onClick={handleCheckout}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
        >
          Checkout
        </button>
      )}
    </div>
  );
}
