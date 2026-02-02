'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      info: 'support@talentloop.io',
      description: 'We respond within 24 hours',
    },
    {
      icon: MessageSquare,
      title: 'Chat Support',
      info: 'Available 9 AM - 6 PM IST',
      description: 'Live chat on the platform',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 (730) 123-4567',
      description: 'Monday to Friday, 10 AM - 5 PM',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      info: 'Indore, India',
      description: 'Open to visitors by appointment',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="p-6 border-2 border-gray-200 hover:border-primary/50 text-center hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{method.info}</p>
                  <p className="text-gray-600 text-xs">{method.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Send us a Message</h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary bg-white"
                >
                  <option value="general">General Inquiry</option>
                  <option value="student">Student/Club Inquiry</option>
                  <option value="school">School Inquiry</option>
                  <option value="company">Company/Project Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="bug">Report a Bug</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </Button>
              </div>

              {submitted && (
                <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-sm animate-fade-in-up">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What are TalentLoop\'s business hours?',
                a: 'Our support team is available Monday-Friday, 10 AM - 6 PM IST. Live chat is available 9 AM - 6 PM IST.',
              },
              {
                q: 'How quickly will I hear back from you?',
                a: 'We aim to respond to all inquiries within 24 hours. Urgent matters are prioritized.',
              },
              {
                q: 'Can I schedule a demo or call?',
                a: 'Yes! Send us your inquiry mentioning preferred dates/times and we\'ll schedule a call with our team.',
              },
              {
                q: 'Are there partnership opportunities?',
                a: 'Absolutely! We\'re always looking for strategic partners. Select "Partnership Opportunity" in the form.',
              },
              {
                q: 'How do I report a security issue?',
                a: 'Please email security@talentloop.io with full details. We take security very seriously.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Banner */}
      <section className="py-12 px-4 bg-primary/5 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground text-lg">Average Response Time</h3>
              <p className="text-gray-600">We typically respond within 4 business hours</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 whitespace-nowrap">
            Start a Chat Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
