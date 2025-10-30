"use client";

import { useState } from "react";

export default function RegistrationPage() {
  const [activeTab, setActiveTab] = useState("employee");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-50 p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl">
        <div className="md:w-1/3 bg-blue-600 text-white flex flex-col items-center justify-center p-8">

          <h3 className="text-2xl font-semibold mb-2">Welcome</h3>
          <p className="text-center mb-4 text-blue-100">
            You are 30 seconds away from earning your own money!
          </p>
          <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 transition">
            Login
          </button>
        </div>

        
        <div className="md:w-2/3 p-8">
          <div className="flex justify-center mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("employee")}
              className={`py-2 px-6 font-semibold ${
                activeTab === "employee"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              Employee
            </button>
          </div>

          {activeTab === "employee" ? (
            <div>
              <h3 className="text-xl font-semibold text-center text-blue-600 mb-6">
                Complete your Registration as an Employee
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Password *"
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  className="input-field"
                />
                <div className="col-span-2">
                  <label className="mr-4">
                    <input type="radio" name="gender" defaultChecked /> Male
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="gender" /> Female
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="input-field"
                />
                <select className="input-field">
                <input
                  type="text"
                  placeholder="Enter Your Answer *"
                  className="input-field"
                />
                </select>
                <button className="col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Register
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-center text-blue-600 mb-6">
                Apply as a Hirer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Phone *"
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Password *"
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Enter Your Answer *"
                  className="input-field"
                />
                <button className="col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


const inputFieldClass = `
border border-gray-300 rounded-lg p-2 w-full 
focus:outline-none focus:ring-2 focus:ring-blue-400 
placeholder-gray-400 text-sm
`;

