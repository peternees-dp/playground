'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Store } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Store className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">AppStore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/apps" className="text-gray-600 hover:text-primary-600 transition-colors">
              Browse Apps
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-primary-600 transition-colors">
              Categories
            </Link>
            <Link href="/partners" className="text-gray-600 hover:text-primary-600 transition-colors">
              For Partners
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-primary-600 transition-colors">
              Documentation
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/submit"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Submit App
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            <Link href="/apps" className="block text-gray-600 hover:text-primary-600">
              Browse Apps
            </Link>
            <Link href="/categories" className="block text-gray-600 hover:text-primary-600">
              Categories
            </Link>
            <Link href="/partners" className="block text-gray-600 hover:text-primary-600">
              For Partners
            </Link>
            <Link href="/docs" className="block text-gray-600 hover:text-primary-600">
              Documentation
            </Link>
            <Link
              href="/submit"
              className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium"
            >
              Submit App
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
