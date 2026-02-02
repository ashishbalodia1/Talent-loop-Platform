'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TL</span>
              </div>
              <span className="font-bold text-xl">TalentLoop</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering student talent and bridging education with real-world opportunities.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/workshops" className="text-white/70 hover:text-primary transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-white/70 hover:text-primary transition-colors">
                  Student Clubs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/conduct" className="text-white/70 hover:text-primary transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-white/70 hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 TalentLoop. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-white/60 hover:text-primary transition-colors text-sm">
                Status
              </button>
              <button className="text-white/60 hover:text-primary transition-colors text-sm">
                Help Center
              </button>
              <button className="text-white/60 hover:text-primary transition-colors text-sm">
                Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
