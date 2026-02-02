'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-40 pb-20 px-4 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Empowering Student Talent Worldwide</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-center mb-6 leading-tight text-balance">
            Connect Student Talent with <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Opportunities</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 text-center mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            TalentLoop bridges college student clubs with schools looking for hands-on workshops and companies seeking affordable, innovative projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full group"
            >
              Start as a Student
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 rounded-full border-2 hover:bg-gray-50 bg-transparent"
            >
              For Schools & Companies
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-200">
            <div className={`text-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600 text-sm md:text-base">Student Clubs</p>
            </div>
            <div className={`text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2K+</div>
              <p className="text-gray-600 text-sm md:text-base">Workshops Delivered</p>
            </div>
            <div className={`text-center transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₹10Cr+</div>
              <p className="text-gray-600 text-sm md:text-base">Funds Distributed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
