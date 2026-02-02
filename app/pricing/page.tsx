'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'For Student Clubs',
    description: 'Get started with zero upfront cost',
    price: 'Free',
    period: 'Always',
    features: [
      'Create club profile',
      'List workshops & projects',
      'Receive bookings',
      'Basic analytics',
      'Email support',
      'Community access',
      '100% of service fees retained*',
    ],
    cta: 'Register Club',
    highlighted: false,
  },
  {
    name: 'Professional Club',
    description: 'For active clubs doing 10+ projects/year',
    price: '₹5,000',
    period: 'per month',
    features: [
      'Everything in Free +',
      'Priority booking queue',
      'Advanced analytics',
      'Team member management',
      'Custom branding',
      'Priority support',
      'Exclusive project opportunities',
      'Loyalty rewards program',
    ],
    cta: 'Upgrade Now',
    highlighted: true,
  },
  {
    name: 'For Schools',
    description: 'Book quality STEM workshops',
    price: 'Per Workshop',
    period: '₹2,500 - ₹5,000',
    features: [
      'Browse all workshops',
      'Book & cancel anytime',
      'Quality assurance',
      'Expert instructors',
      'Hands-on learning',
      'Certificate of completion',
      'Loyalty points earn 10% back',
      '24/7 support',
    ],
    cta: 'Browse Workshops',
    highlighted: false,
  },
  {
    name: 'For Companies',
    description: 'Post projects and hire student teams',
    price: 'Commission Based',
    period: '12.5% project value',
    features: [
      'Unlimited project postings',
      'Multiple bid options',
      'Quality vetted teams',
      'Project management tools',
      'Payment protection',
      'Escrow account',
      'Team performance reviews',
      'Dedicated account manager',
    ],
    cta: 'Post Project',
    highlighted: false,
  },
]

const revenueModel = [
  {
    title: 'Workshop Model',
    example: 'School pays ₹3,000',
    breakdown: [
      { item: 'Student Club Commission', amount: '₹1,500 - 2,000' },
      { item: 'TalentLoop Service Fee', amount: '₹1,000 - 1,500' },
    ],
    total: '100% revenue distributed',
  },
  {
    title: 'Project Model',
    example: 'Company posts ₹40,000 project',
    breakdown: [
      { item: 'Student Team Earning', amount: '₹25,000' },
      { item: 'Professional Mentor', amount: '₹10,000' },
      { item: 'TalentLoop Commission', amount: '₹5,000 (12.5%)' },
    ],
    total: 'Clear value distribution',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Everyone makes money. Everyone wins. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-2 border-primary shadow-xl md:col-span-2 lg:col-span-1 transform hover:scale-105'
                    : 'border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg'
                }`}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full font-semibold h-12 mb-8 ${
                      plan.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-white'
                        : 'border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {index === 1 && (
                    <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200">
                      *Professional club members get early access to premium projects and 2x loyalty rewards
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            All plans include basic features. Additional features available on request.
          </p>
        </div>
      </section>

      {/* Revenue Model Breakdown */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              How We Split Revenue
            </h2>
            <p className="text-xl text-gray-600 text-balance">
              Complete transparency. Everyone earns fairly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {revenueModel.map((model, idx) => (
              <Card key={idx} className="border-2 border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{model.title}</h3>
                <p className="text-primary font-semibold mb-6 text-lg">{model.example}</p>

                <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                  {model.breakdown.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2">
                      <span className="text-gray-700 font-medium">{item.item}</span>
                      <span className="text-primary font-bold">{item.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-primary">Result: </span>
                    {model.total}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Do student clubs have to pay to join?
              </h4>
              <p className="text-gray-600">
                No! Joining TalentLoop is completely free. You only earn from the projects and workshops you complete.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                How does payment work?
              </h4>
              <p className="text-gray-600">
                Payments are made through secure escrow. Once a workshop/project is completed, funds are released to the club within 48 hours.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Can I cancel a booking?
              </h4>
              <p className="text-gray-600">
                Schools can cancel up to 7 days before the workshop with full refund. Cancellations within 7 days are subject to our policy.
              </p>
            </div>

            <div className="pb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                How do loyalty points work?
              </h4>
              <p className="text-gray-600">
                Every booking earns points. After 5 workshops or 3 projects, you unlock discounts and exclusive perks through our loyalty program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
