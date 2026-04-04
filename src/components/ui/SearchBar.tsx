'use client'

import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar() {
  const [activeField, setActiveField] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Location */}
        <div
          className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
            activeField === 'location' ? 'bg-gray-50 shadow-md' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField('location')}
        >
          <label className="block text-xs font-bold text-gray-900 mb-1">
            Where
          </label>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Check-in */}
        <div
          className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
            activeField === 'checkin' ? 'bg-gray-50 shadow-md' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField('checkin')}
        >
          <label className="block text-xs font-bold text-gray-900 mb-1">
            Check in
          </label>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Add dates"
              className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Check-out */}
        <div
          className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
            activeField === 'checkout' ? 'bg-gray-50 shadow-md' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField('checkout')}
        >
          <label className="block text-xs font-bold text-gray-900 mb-1">
            Check out
          </label>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Add dates"
              className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Guests + Search Button */}
        <div className="flex items-center space-x-2">
          <div
            className={`flex-1 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
              activeField === 'guests' ? 'bg-gray-50 shadow-md' : 'hover:bg-gray-50'
            }`}
            onClick={() => setActiveField('guests')}
          >
            <label className="block text-xs font-bold text-gray-900 mb-1">
              Who
            </label>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Add guests"
                className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
              />
            </div>
          </div>

          <button className="bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
