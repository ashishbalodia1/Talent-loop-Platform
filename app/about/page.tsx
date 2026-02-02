'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Target, Users, Lightbulb, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We empower student talent and bridge the gap between education and industry.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building lasting relationships and a thriving ecosystem for all stakeholders.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Creating novel solutions to real problems in education and talent development.',
  },
  {
    icon: Heart,
    title: 'Impact-Focused',
    description: 'Measuring success by the lives we change and the opportunities we create.',
  },
]

const team = [
  {
    name: 'Founder & CEO',
    role: 'Vision & Strategy',
    description: 'Leading TalentLoop with 5+ years in EdTech and startup experience.',
  },
  {
    name: 'Tech Lead',
    role: 'Platform Development',
    description: 'Building scalable tech infrastructure. Full-stack developer with AI expertise.',
  },
  {
    name: 'Operations Manager',
    role: 'Growth & Partnerships',
    description: 'Managing college partnerships and expansion. 3+ years in education sector.',
  },
  {
    name: 'Design Lead',
    role: 'UX/UI & Branding',
    description: 'Creating intuitive experiences. Award-winning designer with EdTech background.',
  },
]

const milestones = [
  { year: 'Q1 2025', title: 'Public Launch', description: 'Official launch of TalentLoop platform' },
  { year: 'Q2 2025', title: '500+ Clubs', description: 'Onboard 500 student clubs across India' },
  { year: 'Q3 2025', title: '₹5 Crore', description: 'Reach ₹5 crore in total transactions' },
  { year: 'Q4 2025', title: 'International', description: 'Expand to 3 new countries' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            About TalentLoop
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Building the bridge between brilliant students and real-world opportunities.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We believe brilliant student talent is being wasted. College students with incredible skills in robotics, AI, and engineering lack platforms to apply their knowledge and earn fairly.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Schools want hands-on STEM education. Companies need affordable innovation. Students need experience and money. TalentLoop creates the ecosystem where everyone wins.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8">
                Join the Movement
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-sm text-gray-700">Student Clubs Ready</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">2000+</div>
                <p className="text-sm text-gray-700">Workshops Delivered</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">₹10Cr+</div>
                <p className="text-sm text-gray-700">Distributed to Students</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
                <p className="text-sm text-gray-700">School Students Impacted</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="p-6 border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">The Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="p-8 border-2 border-gray-200 hover:border-primary/50 transition-all text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">We're hiring!</span> Join our mission to transform education.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">2025 Roadmap</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <Card className="p-6 border-2 border-primary/30 bg-white">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold text-sm text-center">{milestone.year}</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </Card>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-8">Our Story</h2>

          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              TalentLoop was born from a simple observation: colleges like IIT Indore and IET DAVV have incredible student clubs—robotics clubs building e-bikes, AI clubs developing cutting-edge models, web development teams creating real applications. Yet these students struggle to find real-world applications for their skills, ways to earn money, and paths to practical experience.
            </p>

            <p>
              Simultaneously, schools desperately need hands-on STEM education beyond textbooks, and companies seek fresh, motivated talent for innovation projects. The gap between supply and demand was massive, yet no platform existed to bridge it.
            </p>

            <p>
              In 2024, our founding team—engineers and educators—decided to build that bridge. We started with pilot workshops at schools in Indore. Results? Students loved it. Schools saw real learning. Clubs earned their first money. The model worked.
            </p>

            <p>
              Today, TalentLoop is expanding nationally, empowering hundreds of student clubs while connecting thousands of schools and companies to talent they never knew existed. We're not just building a business; we're changing how education meets opportunity.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
