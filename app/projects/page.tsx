'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Search, Briefcase, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Image Recognition Model',
    company: 'TechStartup India',
    description: 'Build and train a CNN model for product categorization. Needs Python, TensorFlow, and deployment.',
    budget: '₹40,000',
    duration: '6 weeks',
    skills: ['Python', 'AI/ML', 'TensorFlow'],
    bids: 12,
    status: 'Active',
  },
  {
    id: 2,
    title: 'E-Commerce Platform Frontend',
    company: 'RetailTech Solutions',
    description: 'Develop React-based e-commerce dashboard. Shopping cart, filters, payments integration needed.',
    budget: '₹50,000',
    duration: '8 weeks',
    skills: ['React', 'JavaScript', 'UI/UX'],
    bids: 8,
    status: 'Active',
  },
  {
    id: 3,
    title: 'Mobile App - Fitness Tracker',
    company: 'HealthFlow',
    description: 'Create iOS/Android app with real-time health tracking, notifications, and cloud sync.',
    budget: '₹60,000',
    duration: '10 weeks',
    skills: ['React Native', 'Node.js', 'MongoDB'],
    bids: 15,
    status: 'Active',
  },
  {
    id: 4,
    title: 'Robotics Automation System',
    company: 'Manufacturing Corp',
    description: 'Program autonomous robot for warehouse automation. ROS framework, sensor integration, path planning.',
    budget: '₹75,000',
    duration: '12 weeks',
    skills: ['Robotics', 'C++', 'ROS'],
    bids: 5,
    status: 'Active',
  },
  {
    id: 5,
    title: 'Data Analytics Dashboard',
    company: 'Business Intelligence Inc',
    description: 'Build interactive dashboard with real-time data visualization using D3.js and databases.',
    budget: '₹35,000',
    duration: '4 weeks',
    skills: ['JavaScript', 'D3.js', 'SQL'],
    bids: 18,
    status: 'Active',
  },
  {
    id: 6,
    title: 'IoT Smart Home System',
    company: 'SmartLiving Tech',
    description: 'Develop IoT platform for smart home control. Arduino, MQTT, and mobile app needed.',
    budget: '₹55,000',
    duration: '8 weeks',
    skills: ['IoT', 'Arduino', 'Mobile Dev'],
    bids: 9,
    status: 'Active',
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [budgetRange, setBudgetRange] = useState<string | null>(null)

  const allSkills = Array.from(new Set(projects.flatMap((p) => p.skills)))
  const budgetRanges = ['₹30K-₹40K', '₹40K-₹50K', '₹50K-₹70K', '₹70K+']

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSkill = selectedSkill ? project.skills.includes(selectedSkill) : true
    return matchesSearch && matchesSkill
  })

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Industry Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-balance">
            Bid on real projects from companies. Earn money, build experience, and showcase your skills.
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
                placeholder="Search projects or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            {/* Skill Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSkill(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedSkill === null
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Skills
              </button>
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedSkill === skill
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 mb-8">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">{project.company}</p>
                  </div>
                  <div className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold whitespace-nowrap">
                    {project.status}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-200 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Budget</p>
                      <p className="font-bold text-primary">{project.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="font-bold text-foreground text-sm">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Bids</p>
                      <p className="font-bold text-foreground text-sm">{project.bids}</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-xs text-gray-600 font-semibold mb-2">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 group/btn">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Place a Bid
                </Button>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
