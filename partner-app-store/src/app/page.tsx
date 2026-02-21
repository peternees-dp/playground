'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Zap, Shield, Search, Bot, Heart, Headphones, Grid3X3 } from 'lucide-react'
import AppCard, { FeaturedAppCard } from '@/components/AppCard'
import { apps, categories, getFeaturedApps, getNewApps, getAIApps } from '@/data/apps'

export default function Home() {
  const featuredApps = getFeaturedApps()
  const newApps = getNewApps()
  const aiApps = getAIApps()
  const [searchQuery, setSearchQuery] = useState('')
  
  const suggestions = ['DialpadGPT', 'CRM integrations', 'Helpdesk', 'Healthcare']

  return (
    <div>
      {/* Hero Section with Gradient Mesh */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Integration{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect Dialpad with your favorite tools. Discover AI-powered integrations that transform your communication workflow.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center rounded-2xl border-2 border-gray-200 bg-white shadow-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/20 transition-all">
              <Search className="w-5 h-5 ml-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 bg-transparent outline-none text-lg text-gray-900 placeholder-gray-400"
              />
              <Link href="/apps" className="m-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Search
              </Link>
            </div>

            {/* Smart Suggestions */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {suggestions.map((suggestion, i) => (
                <Link
                  key={i}
                  href={`/apps?q=${encodeURIComponent(suggestion)}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 shadow-md transition-all hover:scale-105"
                >
                  <Sparkles className="w-3 h-3 inline mr-1.5 text-yellow-500" />
                  {suggestion}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-500 mt-1">Partner Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-500 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-gray-500 mt-1">Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-500 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Featured Apps</h2>
              <p className="text-gray-500 mt-2">Hand-picked apps loved by our community</p>
            </div>
            <Link
              href="/apps?featured=true"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Agentic AI Spotlight */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 mb-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-6 h-6 text-purple-300" />
                  <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">Powered by DialpadGPT</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Agentic AI Integrations</h2>
                <p className="text-purple-100/80 max-w-xl">Transform every conversation with AI-powered coaching, real-time insights, and automated workflows.</p>
              </div>
              <Link 
                href="/apps?category=Agentic+AI"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold transition-all border border-white/20"
              >
                Explore AI Apps <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-gray-500 mt-2">Find the right apps for your needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(c => c.id !== 'all').map((category) => {
              const iconMap: Record<string, React.ReactNode> = {
                'Sparkles': <Sparkles className="w-6 h-6" />,
                'Users': <Users className="w-6 h-6" />,
                'Headphones': <Headphones className="w-6 h-6" />,
                'Zap': <Zap className="w-6 h-6" />,
                'Heart': <Heart className="w-6 h-6" />,
                'Grid3X3': <Grid3X3 className="w-6 h-6" />,
              }
              return (
                <Link
                  key={category.id}
                  href={`/apps?category=${encodeURIComponent(category.id)}`}
                  className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {iconMap[category.icon] || <Grid3X3 className="w-6 h-6" />}
                  </div>
                  <span className="font-medium text-gray-900 text-sm text-center">{category.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">New Releases</h2>
              <p className="text-gray-500 mt-2">Fresh apps just added to our ecosystem</p>
            </div>
            <Link
              href="/apps?new=true"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold">Why Build on Our Platform?</h2>
            <p className="text-gray-400 mt-2">Join hundreds of partners growing their business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Massive Reach</h3>
              <p className="text-gray-400 mt-2 text-sm">Access our growing user base of 50,000+ active customers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Easy Integration</h3>
              <p className="text-gray-400 mt-2 text-sm">Our APIs and SDKs make building integrations a breeze</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Marketing Support</h3>
              <p className="text-gray-400 mt-2 text-sm">Get featured in our marketplace and promotional campaigns</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Trusted Platform</h3>
              <p className="text-gray-400 mt-2 text-sm">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/partners"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
            >
              Start Building Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-primary-100 mt-4 max-w-2xl mx-auto">
              Browse our collection of partner apps and find the perfect tools to supercharge your workflow.
            </p>
            <Link
              href="/apps"
              className="mt-8 inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Explore All Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
