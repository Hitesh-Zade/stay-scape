'use client'

import { Home, TreePine, Waves, Mountain, Building2, Tent, Castle, Palmtree } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { id: 'all', name: 'All', icon: Home },
  { id: 'beachfront', name: 'Beachfront', icon: Waves },
  { id: 'cabins', name: 'Cabins', icon: TreePine },
  { id: 'mountain', name: 'Mountain', icon: Mountain },
  { id: 'city', name: 'City', icon: Building2 },
  { id: 'camping', name: 'Camping', icon: Tent },
  { id: 'castle', name: 'Castles', icon: Castle },
  { id: 'tropical', name: 'Tropical', icon: Palmtree },
]

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="flex items-center space-x-6 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex flex-col items-center space-y-2 min-w-fit group transition-all duration-300 ${
              activeCategory === category.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'text-gray-900'
                  : 'text-gray-600 group-hover:text-gray-900'
              }`}
            >
              {category.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
