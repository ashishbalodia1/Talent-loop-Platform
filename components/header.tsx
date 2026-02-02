'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TL</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">TalentLoop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/workshops" className="text-foreground hover:text-primary transition-colors">
              Workshops
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              <Link href="/#how-it-works" className="text-foreground hover:text-primary transition-colors px-2 py-2">
                How It Works
              </Link>
              <Link href="/#features" className="text-foreground hover:text-primary transition-colors px-2 py-2">
                Features
              </Link>
              <Link href="/workshops" className="text-foreground hover:text-primary transition-colors px-2 py-2">
                Workshops
              </Link>
              <Link href="/projects" className="text-foreground hover:text-primary transition-colors px-2 py-2">
                Projects
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <Button variant="outline" className="w-full bg-transparent">
                  Sign In
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
