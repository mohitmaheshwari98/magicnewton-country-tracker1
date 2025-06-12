'use client';
import React, { useState } from "react";

const countries = [
  "United States", "India", "Germany", "Brazil", "Canada",
  "Australia", "UK", "France", "Japan", "Nigeria"
];

export default function Page() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({});

  const handleSubmit = () => {
    if (!selectedCountry) return;
    setCountryData(prev => {
      const updated = { ...prev };
      updated[selectedCountry] = (updated[selectedCountry] || 0) + 1;
      return updated;
    });
  };

  const getTotal = () =>
    Object.values(countryData).reduce((sum, val) => sum + val, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 space-y-8">
      <div className="shadow-lg p-6 border rounded">
        <h1 className="text-2xl font-bold text-center mb-4">
          🌍 Where’s the MagicNewton Army From?
        </h1>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select Your Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          disabled={!selectedCountry}
          className="w-full bg-purple-600 text-white py-2 rounded disabled:opacity-50"
        >
          Submit Location 💫
        </button>
      </div>

      <div className="shadow-lg p-6 border rounded">
        <h2 className="text-xl font-semibold mb-4 text-center">📊 Global gNewt Stats</h2>
        {getTotal() === 0 ? (
          <p className="text-center text-gray-500">
            No data yet. Be the first to represent your country!
          </p>
        ) : (
          <ul className="space-y-2">
            {Object.entries(countryData).map(([country, count]) => (
              <li key={country} className="flex justify-between border-b pb-1">
                <span>{country}</span>
                <span className="text-gray-600 text-sm">
                  {((count / getTotal()) * 100).toFixed(1)}%
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
