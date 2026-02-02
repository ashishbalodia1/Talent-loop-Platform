'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, TrendingUp, Award, MapPin } from 'lucide-react'

const clubs = [
  {
    id: 1,
    name: 'Mechanical Engineering Club',
    college: 'IIT Indore',
    location: 'Indore, India',
    members: 45,
    projects: 12,
    earnings: '₹8,50,000',
    specialties: ['Robotics', 'E-bikes', 'Engineering'],
    verified: true,
  },
  {
    id: 2,
    name: 'Electronics & Drone Club',
    college: 'IET DAVV',
    location: 'Indore, India',
    members: 38,
    projects: 8,
    earnings: '₹5,20,000',
    specialties: ['Drones', 'IoT', 'Embedded Systems'],
    verified: true,
  },
  {
    id: 3,
    name: 'AI & Data Science Club',
    college: 'IIT Indore',
    location: 'Indore, India',
    members: 62,
    projects: 15,
    earnings: '₹12,30,000',
    specialties: ['Machine Learning', 'Data Analysis', 'Python'],
    verified: true,
  },
  {
    id: 4,
    name: 'Web Development Club',
    college: 'IET DAVV',
    location: 'Indore, India',
    members: 55,
    projects: 18,
    earnings: '₹9,75,000',
    specialties: ['Full Stack', 'React', 'Node.js'],
    verified: true,
  },
  {
    id: 5,
    name: 'Biotechnology Club',
    college: 'AIIMS Delhi',
    location: 'Delhi, India',
    members: 28,
    projects: 5,
    earnings: '₹3,50,000',
    specialties: ['Health Tech', 'Biotech', 'Research'],
    verified: true,
  },
  {
    id: 6,
    name: 'Robotics Club',
    college: 'IIT Indore',
    location: 'Indore, India',
    members: 50,
    projects: 14,
    earnings: '₹10,20,000',
    specialties: ['ROS', 'Automation', 'Control Systems'],
    verified: true,
  },
]

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Student Clubs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-balance">
            Discover verified student clubs delivering world-class workshops and projects.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 px-4 bg-primary/5 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">Are You a Student Club?</h3>
            <p className="text-gray-600">Join TalentLoop and start earning from your skills today.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 whitespace-nowrap">
            Register Your Club
          </Button>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Clubs</h2>
            <p className="text-gray-600">Top performing student clubs on TalentLoop</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <Card key={club.id} className="border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {club.name}
                    </h3>
                    {club.verified && (
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                        ✓ Verified
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Award className="w-4 h-4" />
                    <span>{club.college}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{club.location}</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 mb-4">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{club.members}</p>
                      <p className="text-xs text-gray-600">Members</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{club.projects}</p>
                      <p className="text-xs text-gray-600">Projects</p>
                    </div>
                    <div className="text-center">
                      <Award className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-2xl font-bold text-primary">{club.earnings}</p>
                      <p className="text-xs text-gray-600">Earned</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-600 font-semibold mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {club.specialties.map((spec) => (
                        <span key={spec} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
