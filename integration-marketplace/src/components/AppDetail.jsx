import React, { useState } from 'react'
import { ChevronRight, Star, Brain, Download, BookOpen, Shield, CheckCircle2, Check, MessageSquare } from 'lucide-react'
import AppLogo from './AppLogo'

export default function AppDetail({ app, navigateToMarketplace, darkMode }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Breadcrumbs */}
      <div className={`border-b ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <button onClick={navigateToMarketplace} className={`hover:underline ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Marketplace
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{app.category}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>{app.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Card */}
            <div className={`rounded-2xl border p-6 mb-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <AppLogo logo={app.logo} name={app.name} size="lg" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.name}</h1>
                    {app.aiPowered && (
                      <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex items-center gap-1 dark:bg-purple-900/30 dark:text-purple-400">
                        <Brain className="w-3 h-3" /> AI-Powered
                      </span>
                    )}
                    {app.isNew && (
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full dark:bg-green-900/30 dark:text-green-400">
                        New
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    By {app.developer} • {app.category}
                  </p>
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.rating}</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>({app.reviews} reviews)</span>
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{app.installs} installs</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                    <span className={`text-sm font-medium ${app.pricing === 'free' ? 'text-green-600' : 'text-indigo-600'}`}>
                      {app.pricing === 'free' ? 'Free' : 'Paid'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-500/25">
                      <Download className="w-4 h-4" />
                      Install
                    </button>
                    <button className={`px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                      <BookOpen className="w-4 h-4" />
                      View Setup Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className={`rounded-2xl border overflow-hidden ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              <div className={`flex border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                {['overview', 'features', 'screenshots'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium capitalize transition-colors relative ${
                      activeTab === tab
                        ? 'text-indigo-600'
                        : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <p className={`whitespace-pre-line leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {app.longDescription || app.shortDescription}
                    </p>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {app.features.map((feature, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 dark:bg-green-900/30">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'screenshots' && (
                  <div className="grid gap-4">
                    {app.screenshots && app.screenshots.length > 0 ? (
                      app.screenshots.map((screenshot, i) => (
                        <img
                          key={i}
                          src={screenshot}
                          alt={`${app.name} screenshot ${i + 1}`}
                          className="rounded-xl w-full object-cover shadow-lg"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      ))
                    ) : (
                      <p className={`text-center py-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        No screenshots available
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6">
            {/* Info Card */}
            <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Information</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Category</dt>
                  <dd className={darkMode ? 'text-white' : 'text-gray-900'}>{app.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Developer</dt>
                  <dd className={darkMode ? 'text-white' : 'text-gray-900'}>{app.developer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Type</dt>
                  <dd className={darkMode ? 'text-white' : 'text-gray-900'}>{app.developerType === 'native' ? 'Native Integration' : 'Partner App'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Last Updated</dt>
                  <dd className={darkMode ? 'text-white' : 'text-gray-900'}>{app.lastUpdated}</dd>
                </div>
              </dl>
            </div>

            {/* Security Card */}
            <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Shield className="w-5 h-5 text-green-600" />
                Security & Compliance
              </h3>
              <div className="space-y-3">
                {['SOC 2 Type II Compliant', 'GDPR Ready', 'Enterprise SSO', 'Data Encryption'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Support</h3>
              <div className="space-y-3">
                <a href={app.documentationUrl || '#'} className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </a>
                <a href={app.supportUrl || '#'} className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  <MessageSquare className="w-4 h-4" />
                  Get Help
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
