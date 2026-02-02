'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Search, MapPin, Users, Clock, Star } from 'lucide-react'
import { useState } from 'react'

const workshops = [
  {
    id: 1,
    title: 'Electric Bike Building Workshop',
    club: 'Mechanical Engineering Club - IIT Indore',
    description: 'Learn to build a functional e-bike from scratch. Hands-on session covering frame, motor, and battery assembly.',
    duration: '5 hours',
    participants: '15-20',
    price: '₹3,000',
    rating: 4.8,
    image: 'Mechanical',
    tags: ['STEM', 'Robotics', 'Engineering'],
  },
  {
    id: 2,
    title: 'Drone Assembly & Programming',
    club: 'Electronics Club - IET DAVV',
    description: 'Assemble and program quadcopter drones. Learn flight controls, sensors, and basic autonomous features.',
    duration: '6 hours',
    participants: '10-15',
    price: '₹4,000',
    rating: 4.9,
    image: 'Drone',
    tags: ['STEM', 'Electronics', 'AI'],
  },
  {
    id: 3,
    title: 'AI/ML Workshop: Image Recognition',
    club: 'AI & Data Science Club - IIT Indore',
    description: 'Build and train an image recognition model using Python and TensorFlow. Practical deep learning basics.',
    duration: '4 hours',
    participants: '20-25',
    price: '₹2,500',
    rating: 4.7,
    image: 'AI',
    tags: ['AI', 'Python', 'Machine Learning'],
  },
  {
    id: 4,
    title: 'Web Development Bootcamp',
    club: 'Web Dev Club - IET DAVV',
    description: 'Create a full-stack web application. Learn frontend (React), backend (Node.js), and database design.',
    duration: '8 hours',
    participants: '15-20',
    price: '₹3,500',
    rating: 4.6,
    image: 'WebDev',
    tags: ['Web', 'Programming', 'Backend'],
  },
  {
    id: 5,
    title: 'Robotics Challenge',
    club: 'Robotics Club - IIT Indore',
    description: 'Compete in building and programming robots. Navigation challenges, obstacle courses, and real-world problem solving.',
    duration: '7 hours',
    participants: '12-18',
    price: '₹3,800',
    rating: 4.9,
    image: 'Robotics',
    tags: ['STEM', 'Robotics', 'Programming'],
  },
  {
    id: 6,
    title: 'Biotech & Health Innovation',
    club: 'Biotech Club - AIIMS Delhi',
    description: 'Explore modern biotechnology. DNA extraction, protein analysis, and health-tech innovation projects.',
    duration: '5 hours',
    participants: '20-30',
    price: '₹2,800',
    rating: 4.8,
    image: 'Biotech',
    tags: ['Science', 'Biology', 'Healthcare'],
  },
]

export default function WorkshopsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.club.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag ? workshop.tags.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  const allTags = Array.from(new Set(workshops.flatMap((w) => w.tags)))

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            School Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-balance">
            Browse and book hands-on STEM workshops delivered by expert college student clubs.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-20 py-6 px-4 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search workshops or clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedTag === null
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 mb-8">
            Showing {filteredWorkshops.length} workshop{filteredWorkshops.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="group border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary/20">{workshop.image}</div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground flex-1">{workshop.title}</h3>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-700">{workshop.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-primary font-semibold mb-2">{workshop.club}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{workshop.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 py-3 border-t border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{workshop.participants}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {workshop.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{workshop.price}</div>
                    <Button className="bg-primary hover:bg-primary/90 text-white">Book Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No workshops found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
