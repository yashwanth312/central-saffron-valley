export interface Dish {
  id: string
  name: string
  description: string
  price: string
  platform: string
  service: 'Lunch' | 'Dinner' | 'All Day' | 'Lunch & Dinner'
  category: 'starters' | 'mains' | 'breads' | 'drinks' | 'desserts'
  featured?: boolean
}

export const menu: Dish[] = [
  {
    id: 'tikka-masala',
    name: 'Chicken Tikka Masala',
    description: 'Bold, spiced, unforgettable',
    price: '$15.95',
    platform: 'Platform 3',
    service: 'Lunch & Dinner',
    category: 'mains',
    featured: true,
  },
  {
    id: 'delhi-chaat',
    name: 'Delhi Chaat',
    description: 'A crispy, tangy street snack reimagined',
    price: '$8.95',
    platform: 'Platform 1',
    service: 'All Day',
    category: 'starters',
    featured: true,
  },
  {
    id: 'chicken-pakoras',
    name: 'Chicken Pakoras',
    description: 'Golden, spiced, and irresistible',
    price: '$9.95',
    platform: 'Platform 1',
    service: 'All Day',
    category: 'starters',
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    description: 'A thin, crispy crepe with spiced potato filling',
    price: '$10.95',
    platform: 'Platform 2',
    service: 'All Day',
    category: 'mains',
    featured: true,
  },
  {
    id: 'chicken-tikka-dosa',
    name: 'Chicken Tikka Dosa',
    description: 'Dosa filled with smoky tikka chicken',
    price: '$11.95',
    platform: 'Platform 2',
    service: 'Lunch & Dinner',
    category: 'mains',
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice, slow-cooked with tender chicken',
    price: '$14.95',
    platform: 'Platform 3',
    service: 'Dinner',
    category: 'mains',
    featured: true,
  },
]
