'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm mt-6">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-3xl font-playfair font-semibold text-gray-800 hover:text-gray-900 transition-colors"
          >
            SA.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#contact" 
              className="text-xl font-playfair text-gray-800 hover:text-black hover:font-medium hover:border-b-4 hover:border-gray-500 transition-all duration-300 pb-1"
            >
              Contact
            </a>
            <a 
              href="#projects" 
              className="text-xl font-playfair text-gray-800 hover:text-black hover:font-medium hover:border-b-4 hover:border-gray-500 transition-all duration-300 pb-1"
            >
              Projects
            </a>
            <a 
              href="#resources" 
              className="text-xl font-playfair text-gray-800 hover:text-black hover:font-medium hover:border-b-4 hover:border-gray-500 transition-all duration-300 pb-1"
            >
              Resources
            </a>
            <a 
              href="#education" 
              className="text-xl font-playfair text-gray-800 hover:text-black hover:font-medium hover:border-b-4 hover:border-gray-500 transition-all duration-300 pb-1"
            >
              Education
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#education" className="text-lg font-playfair text-gray-800">Education</a>
              <a href="#resources" className="text-lg font-playfair text-gray-800">Resources</a>
              <a href="#projects" className="text-lg font-playfair text-gray-800">Projects</a>
              <a href="#contact" className="text-lg font-playfair text-gray-800">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}