import React from 'react'
import { Star, Brain, Sparkles } from 'lucide-react'
import AppLogo from './AppLogo'

export function FeaturedAppCard({ app, onClick, darkMode }) {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
      }`}
    >
      <div className="absolute top-4 right-4">
        <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Featured
        </span>
      </div>
      <div className="flex items-start gap-4">
        <AppLogo logo={app.logo} name={app.name} size="lg" />
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.name}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{app.developer}</p>
          <p className={`mt-2 text-sm line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{app.shortDescription}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.rating}</span>
              <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>({app.reviews})</span>
            </div>
            {app.aiPowered && (
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex items-center gap-1 dark:bg-purple-900/30 dark:text-purple-400">
                <Brain className="w-3 h-3" /> AI-Powered
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppCard({ app, onClick, darkMode }) {
  return (
    <div
      onClick={onClick}
      className={`group rounded-2xl border p-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        darkMode ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <AppLogo logo={app.logo} name={app.name} size="md" />
        <div className="flex gap-1.5">
          {app.isNew && (
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full dark:bg-green-900/30 dark:text-green-400">New</span>
          )}
          {app.aiPowered && (
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full dark:bg-purple-900/30 dark:text-purple-400">
              <Brain className="w-3 h-3 inline" />
            </span>
          )}
        </div>
      </div>
      <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.name}</h3>
      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{app.category} • {app.developer}</p>
      <p className={`text-sm line-clamp-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{app.shortDescription}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.rating}</span>
          <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>({app.reviews})</span>
        </div>
        <span className={`text-sm font-medium ${app.pricing === 'free' ? 'text-green-600' : 'text-indigo-600'}`}>
          {app.pricing === 'free' ? 'Free' : 'Paid'}
        </span>
      </div>
    </div>
  )
}

export function AppListItem({ app, onClick, darkMode }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition-all hover:shadow-lg ${
        darkMode ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      <AppLogo logo={app.logo} name={app.name} size="md" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.name}</h3>
          {app.isNew && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">New</span>}
          {app.aiPowered && <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"><Brain className="w-3 h-3 inline" /></span>}
        </div>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{app.category} • {app.developer}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.rating}</span>
        </div>
        <span className={`text-sm font-medium ${app.pricing === 'free' ? 'text-green-600' : 'text-indigo-600'}`}>
          {app.pricing === 'free' ? 'Free' : 'Paid'}
        </span>
      </div>
    </div>
  )
}
