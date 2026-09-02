'use client'

import { Home, TreePine, Waves, Mountain, Building2, Tent, Castle, Palmtree } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All', icon: Home },
  { id: 'beachfront', name: 'Beachfront', icon: Waves },
  { id: 'cabin', name: 'Cabin', icon: TreePine },
  { id: 'Mountain', name: 'Mountain', icon: Mountain },
  { id: 'Apartment', name: 'Apartment', icon: Building2 },
  { id: 'Tent', name: 'Tent', icon: Tent },
  { id: 'castle', name: 'Castle', icon: Castle },
  { id: 'tropical', name: 'Tree House', icon: Palmtree },
]
interface ListingCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}


export default function CategoryFilter({setActiveCategory, activeCategory}: ListingCategoriesProps) {
 

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
                  ? 'bg-primary text-white shadow-lg'
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
