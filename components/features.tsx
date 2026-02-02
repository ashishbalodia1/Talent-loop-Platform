'use client'

import { Card } from '@/components/ui/card'
import {
  BookOpen,
  Briefcase,
  Users,
  TrendingUp,
  Zap,
  Globe,
  Award,
  Shield,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'School Workshops',
    description: 'Students run paid hands-on STEM workshops in schools, providing real-world learning experiences.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Industry Projects',
    description: 'Companies post projects that college clubs bid on, getting affordable innovation and students earning real money.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Student Empowerment',
    description: 'College clubs earn direct funding, gaining practical experience and building their portfolios.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Loyalty Rewards',
    description: 'Every transaction builds points—repeat bookings unlock discounts and exclusive perks.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'AI-powered matching connects the right student teams with opportunities perfectly suited to their skills.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'An English-based platform supporting students worldwide, scaling from India to the globe.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Professional mentors oversee projects ensuring world-class delivery and student learning.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Transparent, secure transaction system with clear fund distribution to all stakeholders.',
    color: 'from-teal-500 to-green-500',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why TalentLoop? Here's What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            A complete ecosystem that funds student talent while delivering value to schools and companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="p-6 border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
