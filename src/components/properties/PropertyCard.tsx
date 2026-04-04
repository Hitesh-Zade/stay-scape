'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star } from 'lucide-react'
import { Property } from "@/types";
import { useState } from 'react'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(property)
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="space-y-3">
        {/* Image Container */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:scale-110 transition-transform duration-200 z-10"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'
              }`}
            />
          </button>

          {/* Image Navigation Dots */}
          {property.images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImageIndex(index)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-white w-6'
                      : 'bg-white/60 w-1.5 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="space-y-1">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary-600 transition-colors duration-200">
                {property.location.city}, {property.location.state}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                {property.title}
              </p>
            </div>
            {property.rating && (
              <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
                <Star className="w-4 h-4 fill-current text-gray-900" />
                <span className="text-sm font-medium text-gray-900">
                  {property.rating}
                </span>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500">
            {property.guests} guests · {property.bedrooms} bedroom{property.bedrooms > 1 ? 's' : ''} · {property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}
          </p>

          <div className="pt-1">
            <p className="text-gray-900">
              <span className="font-bold">${property.price}</span>
              <span className="text-sm font-normal text-gray-600"> / night</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
