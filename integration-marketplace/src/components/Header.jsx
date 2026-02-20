import React from 'react'
import { Phone, Moon, Sun, Menu, X, Plus } from 'lucide-react'

export default function Header({ darkMode, setDarkMode, view, navigateToMarketplace, navigateToAdmin, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${darkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3 cursor-pointer" onClick={navigateToMarketplace}>
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dialpad</span>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Marketplace</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={navigateToMarketplace} 
            className={`text-sm font-medium transition-colors ${view === 'marketplace' ? 'text-indigo-600' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Marketplace
          </button>
          <button 
            onClick={navigateToAdmin} 
            className={`text-sm font-medium transition-colors ${view.startsWith('admin') ? 'text-indigo-600' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Admin
          </button>
          <a href="#" className={`text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors">
            <Plus className="w-4 h-4" />
            Submit App
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <nav className="flex flex-col gap-2 px-4">
            <button 
              onClick={() => { navigateToMarketplace(); setMobileMenuOpen(false) }} 
              className={`px-3 py-2 rounded-lg text-left ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              Marketplace
            </button>
            <button 
              onClick={() => { navigateToAdmin(); setMobileMenuOpen(false) }} 
              className={`px-3 py-2 rounded-lg text-left ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              Admin Dashboard
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
