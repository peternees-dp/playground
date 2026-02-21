import React from 'react'
import { Search, Grid3X3, List, Sparkles, Users, Headphones, Zap, Heart, Bot, ArrowRight } from 'lucide-react'
import { FeaturedAppCard, AppCard, AppListItem } from './AppCard'

const ICON_MAP = { Grid3X3, Users, Headphones, Sparkles, Zap, Heart }

export default function Marketplace({ 
  integrations, categories, collections, searchQuery, setSearchQuery, 
  selectedCategory, setSelectedCategory, pricingFilter, setPricingFilter, 
  developerFilter, setDeveloperFilter, viewMode, setViewMode, 
  navigateToDetail, darkMode 
}) {
  const featuredApps = integrations.filter(app => app.featured)
  const aiApps = integrations.filter(app => app.category === 'Agentic AI' || app.aiPowered)
  const suggestions = ['DialpadGPT', 'CRM integrations', 'Helpdesk', 'Healthcare']

  return (
    <>
      {/* Hero Section */}
      <section className={`relative overflow-hidden py-16 md:py-24 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Integration{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Connect Dialpad with your favorite tools. Discover AI-powered integrations that transform your communication workflow.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className={`flex items-center rounded-2xl border-2 transition-all focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/20 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-xl`}>
              <Search className={`w-5 h-5 ml-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 px-4 py-4 bg-transparent outline-none text-lg ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}`}
              />
              <button className="m-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>

            {/* Smart Suggestions */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setSearchQuery(suggestion.replace(' apps', '').replace(' tools', ''))}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'}`}
                >
                  <Sparkles className="w-3 h-3 inline mr-1.5 text-yellow-500" />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className={`sticky top-24 rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Categories</h3>
              <div className="space-y-1">
                {categories.map(cat => {
                  const IconComponent = ICON_MAP[cat.icon] || Grid3X3
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 font-medium'
                          : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <IconComponent className="w-4 h-4" />
                        {cat.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === cat.id ? 'bg-indigo-200 dark:bg-indigo-800' : darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        {cat.count}
                      </span>
                    </button>
                  )
                })}
              </div>

              <hr className={`my-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} />

              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pricing</h3>
              <div className="space-y-2">
                {['all', 'free', 'paid'].map(option => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="pricing"
                      checked={pricingFilter === option}
                      onChange={() => setPricingFilter(option)}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className={`text-sm capitalize group-hover:text-indigo-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {option === 'all' ? 'All Pricing' : option}
                    </span>
                  </label>
                ))}
              </div>

              <hr className={`my-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`} />

              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Developer</h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Developers' },
                  { value: 'native', label: 'Native (Dialpad)' },
                  { value: 'partner', label: 'Partner Apps' }
                ].map(option => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="developer"
                      checked={developerFilter === option.value}
                      onChange={() => setDeveloperFilter(option.value)}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className={`text-sm group-hover:text-indigo-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* App Grid */}
          <div className="flex-1">
            {/* Agentic AI Spotlight - Stripe-style gradient */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="mb-10">
                <div className={`relative overflow-hidden rounded-2xl p-8 ${darkMode ? 'bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-blue-900/50 border border-purple-700/30' : 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600'}`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
                  <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Bot className="w-6 h-6 text-purple-300" />
                        <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">Powered by DialpadGPT</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Agentic AI Integrations</h2>
                      <p className="text-purple-100/80 max-w-xl">Transform every conversation with AI-powered coaching, real-time insights, and automated workflows. Built on billions of minutes of business conversations.</p>
                    </div>
                    <button 
                      onClick={() => setSelectedCategory('Agentic AI')}
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold transition-all border border-white/20"
                    >
                      Explore AI Apps <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Featured Section */}
            {featuredApps.length > 0 && selectedCategory === 'all' && !searchQuery && (
              <div className="mb-10">
                <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  Featured Integrations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredApps.slice(0, 4).map(app => (
                    <FeaturedAppCard key={app.id} app={app} onClick={() => navigateToDetail(app)} darkMode={darkMode} />
                  ))}
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedCategory === 'all' ? 'All Integrations' : selectedCategory}
                <span className={`ml-2 text-sm font-normal ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  ({integrations.length} apps)
                </span>
              </h2>
              <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* App Cards */}
            {integrations.length === 0 ? (
              <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Search className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-xl font-medium mb-2">No integrations found</p>
                <p className="text-sm">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
                {integrations.map(app => (
                  viewMode === 'grid' 
                    ? <AppCard key={app.id} app={app} onClick={() => navigateToDetail(app)} darkMode={darkMode} />
                    : <AppListItem key={app.id} app={app} onClick={() => navigateToDetail(app)} darkMode={darkMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
