'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, BarChart3, Users2, Zap } from 'lucide-react'

const reasons = [
  {
    icon: BarChart3,
    title: 'Market Opportunity',
    points: [
      'Global EdTech market: $187B+ by 2025',
      'University-industry collaboration: $8.5B → $22.4B by 2033',
      'Corporate training market: $805B by 2035',
      'India education market: $313B by 2030',
    ],
  },
  {
    icon: Users2,
    title: 'Win-Win-Win Model',
    points: [
      'Students: Earn money + practical experience',
      'Schools: Quality STEM education at scale',
      'Companies: Affordable innovation pipeline',
      'Clubs: Sustainable funding mechanism',
    ],
  },
  {
    icon: Zap,
    title: 'Revenue Streams',
    points: [
      'Workshop commissions: ₹10L+ annually from 1000 sessions',
      'Project commissions: 12.5% on ₹40k average projects',
      'Loyalty subscription plans for high-volume customers',
      'Premium features and analytics for partners',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'First-Mover Advantage',
    points: [
      'Pilot partnerships with IIT Indore & IET DAVV',
      'Unique student-club marketplace positioning',
      'Community loyalty network already building',
      'Entry barrier through exclusive club partnerships',
    ],
  },
]

export function WhyTalentLoop() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Now? Why TalentLoop?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            The market is ready, the timing is perfect, and we have the team to execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="p-8 border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
                </div>

                <ul className="space-y-4">
                  {reason.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t-2 border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">52K+</div>
            <p className="text-gray-600">Colleges in India</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000s</div>
            <p className="text-gray-600">Student Clubs Ready</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Unlimited</div>
            <p className="text-gray-600">School Demand</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">13% CAGR</div>
            <p className="text-gray-600">Market Growth Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
