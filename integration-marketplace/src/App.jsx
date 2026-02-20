import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Marketplace from './components/Marketplace'
import AppDetail from './components/AppDetail'
import AdminDashboard from './components/AdminDashboard'
import AdminEditForm from './components/AdminEditForm'
import { INITIAL_MOCK_DATA, CATEGORIES, loadFromStorage, saveToStorage } from './data/mockData'
import { Grid3X3, Users, Headphones, Brain, Zap, Heart } from 'lucide-react'

const ICON_MAP = { Grid3X3, Users, Headphones, Brain, Zap, Heart }

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [view, setView] = useState('marketplace')
  const [selectedApp, setSelectedApp] = useState(null)
  const [integrations, setIntegrations] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [pricingFilter, setPricingFilter] = useState('all')
  const [developerFilter, setDeveloperFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [editingApp, setEditingApp] = useState(null)

  // Load data on mount
  useEffect(() => {
    setIntegrations(loadFromStorage())
  }, [])

  // Save data when integrations change
  useEffect(() => {
    if (integrations.length > 0) {
      saveToStorage(integrations)
    }
  }, [integrations])

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Filter integrations
  const filteredIntegrations = integrations.filter(app => {
    if (app.status !== 'published' && view !== 'admin') return false
    if (searchQuery && !app.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedCategory !== 'all' && app.category !== selectedCategory) return false
    if (pricingFilter !== 'all' && app.pricing !== pricingFilter) return false
    if (developerFilter !== 'all' && app.developerType !== developerFilter) return false
    return true
  })

  // Category counts with icons
  const categoriesWithCounts = CATEGORIES.map(cat => ({
    ...cat,
    icon: cat.icon,
    count: cat.id === 'all' 
      ? integrations.filter(a => a.status === 'published').length
      : integrations.filter(a => a.category === cat.id && a.status === 'published').length
  }))

  // Navigation
  const navigateToDetail = (app) => {
    setSelectedApp(app)
    setView('detail')
    window.scrollTo(0, 0)
  }

  const navigateToMarketplace = () => {
    setView('marketplace')
    setSelectedApp(null)
  }

  const navigateToAdmin = () => {
    setView('admin')
    setSelectedApp(null)
  }

  const navigateToEdit = (app = null) => {
    setEditingApp(app)
    setView('admin-edit')
  }

  // Admin actions
  const handleSaveApp = (appData) => {
    if (editingApp) {
      setIntegrations(prev => prev.map(a => a.id === editingApp.id ? { ...a, ...appData } : a))
    } else {
      const newApp = {
        ...appData,
        id: appData.slug || Date.now().toString(),
        rating: 0,
        reviews: 0,
        installs: '0',
        lastUpdated: new Date().toISOString().split('T')[0]
      }
      setIntegrations(prev => [...prev, newApp])
    }
    setView('admin')
    setEditingApp(null)
  }

  const handleDeleteApp = (appId) => {
    if (confirm('Are you sure you want to delete this integration?')) {
      setIntegrations(prev => prev.filter(a => a.id !== appId))
    }
  }

  const handleToggleStatus = (appId) => {
    setIntegrations(prev => prev.map(a => {
      if (a.id === appId) {
        const newStatus = a.status === 'published' ? 'draft' : 'published'
        return { ...a, status: newStatus }
      }
      return a
    }))
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      {/* Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        view={view}
        navigateToMarketplace={navigateToMarketplace}
        navigateToAdmin={navigateToAdmin}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <main>
        {view === 'marketplace' && (
          <Marketplace
            integrations={filteredIntegrations}
            categories={categoriesWithCounts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            pricingFilter={pricingFilter}
            setPricingFilter={setPricingFilter}
            developerFilter={developerFilter}
            setDeveloperFilter={setDeveloperFilter}
            viewMode={viewMode}
            setViewMode={setViewMode}
            navigateToDetail={navigateToDetail}
            darkMode={darkMode}
          />
        )}

        {view === 'detail' && selectedApp && (
          <AppDetail
            app={selectedApp}
            navigateToMarketplace={navigateToMarketplace}
            darkMode={darkMode}
          />
        )}

        {view === 'admin' && (
          <AdminDashboard
            integrations={integrations}
            navigateToEdit={navigateToEdit}
            handleDeleteApp={handleDeleteApp}
            handleToggleStatus={handleToggleStatus}
            darkMode={darkMode}
          />
        )}

        {view === 'admin-edit' && (
          <AdminEditForm
            app={editingApp}
            onSave={handleSaveApp}
            onCancel={() => { setView('admin'); setEditingApp(null) }}
            darkMode={darkMode}
          />
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t py-12 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md"></div>
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dialpad Marketplace</span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2024 Dialpad. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Privacy</a>
              <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Terms</a>
              <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
