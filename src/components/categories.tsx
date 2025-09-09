'use client'

import { useState } from 'react'
import {
  Home,
  Mountain,
  Waves,
  Trees,
  Castle,
  Snowflake,
  Sun,
  Building,
  Flame,
  Car,
  Wind,
  Ship,
} from 'lucide-react'

const categories = [
  { name: 'Amazing views', icon: <Mountain /> },
  { name: 'Beachfront', icon: <Waves /> },
  { name: 'Cabins', icon: <Home /> },
  { name: 'Treehouses', icon: <Trees /> },
  { name: 'Castles', icon: <Castle /> },
  { name: 'Arctic', icon: <Snowflake /> },
  { name: 'Tropical', icon: <Sun /> },
  { name: 'City', icon: <Building /> },
  { name: 'Camping', icon: <Flame /> },
  { name: 'OMG!', icon: <Car /> },
  { name: 'Amazing pools', icon: <Wind /> },
  { name: 'Farms', icon: <Ship /> },
]

export function Categories() {
    const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative">
      <div className="flex items-center space-x-6 overflow-x-auto pb-4 -mx-4 px-4">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col items-center space-y-2 flex-shrink-0 group ${activeIndex === index ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <div className={`transition-transform duration-200 ${activeIndex === index ? 'scale-110' : 'group-hover:scale-105'}`}>
              {category.icon}
            </div>
            <span className={`text-xs font-medium transition-colors ${activeIndex === index ? 'border-b-2 border-primary' : 'group-hover:border-b-2 group-hover:border-muted-foreground'}`}>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
