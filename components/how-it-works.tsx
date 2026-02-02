'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, School, Briefcase } from 'lucide-react'
import { useState } from 'react'

const userTypes = [
  {
    icon: GraduationCap,
    title: 'For Student Clubs',
    steps: [
      { number: 1, title: 'Join TalentLoop', description: 'Register your college club on our platform in minutes.' },
      { number: 2, title: 'Showcase Skills', description: 'List your expertise areas and previous projects.' },
      { number: 3, title: 'Get Bookings', description: 'Schools and companies discover and book your services.' },
      { number: 4, title: 'Earn & Learn', description: 'Complete projects, earn money, and grow your portfolio.' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: School,
    title: 'For Schools',
    steps: [
      { number: 1, title: 'Browse Workshops', description: 'Explore available STEM workshops from student clubs.' },
      { number: 2, title: 'Book Sessions', description: 'Select dates and workshops that fit your schedule.' },
      { number: 3, title: 'Run Workshops', description: 'Students deliver hands-on learning experiences.' },
      { number: 4, title: 'Earn Points', description: 'Build loyalty rewards with every booking.' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Briefcase,
    title: 'For Companies',
    steps: [
      { number: 1, title: 'Post Projects', description: 'List your project requirements and budget.' },
      { number: 2, title: 'Receive Bids', description: 'Student clubs bid to execute your project.' },
      { number: 3, title: 'Select Team', description: 'Choose the best-suited team for your needs.' },
      { number: 4, title: 'Get Results', description: 'Receive quality work at 20% below market rate.' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            How TalentLoop Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Simple, transparent, and designed for everyone's success.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          {userTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 font-semibold text-lg ${
                  activeTab === index
                    ? `bg-primary text-white shadow-lg shadow-primary/30`
                    : 'bg-white text-foreground border-2 border-gray-200 hover:border-primary'
                }`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="hidden sm:inline">{type.title}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {userTypes[activeTab].steps.map((step, index) => (
              <div
                key={index}
                className={`flex gap-6 transition-all duration-500 ${
                  activeTab === activeTab ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${userTypes[activeTab].color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration Card */}
          <Card className="p-12 bg-gradient-to-br from-gray-100 to-white border-0 shadow-lg">
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-4">
                  {userTypes[activeTab].steps.length}
                </div>
                <p className="text-lg text-gray-600 font-semibold">Simple Steps to Success</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
