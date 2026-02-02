'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready to Transform Education & Talent?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Join thousands of students, schools, and companies building the future of learning.
          </p>
        </div>

        {/* Three CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/95 backdrop-blur p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.5S6.5 26.753 12 26.753s10-4.5 10-10.253c0-5.747-4.5-10.247-10-10.247z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">For Students</h3>
            <p className="text-gray-600 mb-6">Earn money, gain experience, and build your portfolio with real projects.</p>
            <Button className="w-full group/btn bg-primary hover:bg-primary/90 text-white">
              Join as Club
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m0 0H9m5.5 0V7.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">For Schools</h3>
            <p className="text-gray-600 mb-6">Access premium STEM workshops delivered by college experts.</p>
            <Button className="w-full group/btn bg-primary hover:bg-primary/90 text-white">
              Browse Workshops
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">For Companies</h3>
            <p className="text-gray-600 mb-6">Post projects and get quality work from motivated student teams.</p>
            <Button className="w-full group/btn bg-primary hover:bg-primary/90 text-white">
              Post a Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Stay Updated</h3>
          <p className="text-white/80 text-center mb-6">Be the first to hear about new features and opportunities.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button
              type="submit"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6"
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>

          {submitted && (
            <p className="text-white text-center mt-4 animate-in fade-in duration-300">
              ✓ Thanks for subscribing! Check your email soon.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
