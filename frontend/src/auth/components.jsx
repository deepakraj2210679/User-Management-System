// src/components/Form.jsx
import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-gray-200 p-8 rounded-xl shadow-lg w-[350px]">
        <h1 className="text-2xl font-bold mb-6 text-black">HTML Form</h1>

        <div className="mb-4">
          <label className="block text-black mb-1">First Name :</label>
          <input type="text" className="w-full px-3 py-2 rounded bg-gray-400 focus:outline-none" />
        </div>

        <div className="mb-4">
          <label className="block text-black mb-1">Last Name :</label>
          <input type="text" className="w-full px-3 py-2 rounded bg-gray-400 focus:outline-none" />
        </div>

        <div className="mb-4">
          <label className="block text-black mb-1">Date of Birth :</label>
          <input type="date" className="w-full px-3 py-2 rounded bg-gray-400 focus:outline-none" />
        </div>

        <div className="mb-4">
          <label className="block text-black mb-1">Email id :</label>
          <input type="email" className="w-full px-3 py-2 rounded bg-gray-400 focus:outline-none" />
        </div>

        <div className="mb-6">
          <label className="block text-black mb-1">Mobile Number :</label>
          <input type="tel" className="w-full px-3 py-2 rounded bg-gray-400 focus:outline-none" />
        </div>

        <div className="flex justify-between">
          <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">SUBMIT</button>
          <button type="reset" className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500">RESET</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
