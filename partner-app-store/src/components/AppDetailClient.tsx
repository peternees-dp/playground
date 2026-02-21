'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Star, Download, BookOpen, Shield, Check, Bot, Zap, ExternalLink, MessageSquare } from 'lucide-react'
import { App } from '@/data/apps'

interface AppDetailClientProps {
  app: App
}

function AppLogo({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
      <img 
        src={logo} 
        alt={name} 
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          target.parentElement!.innerHTML = `<span class="text-2xl font-bold text-gray-400">${name.charAt(0)}</span>`
        }}
      />
    </div>
  )
}

export default function AppDetailClient({ app }: AppDetailClientProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const isAgenticAI = app.category === 'Agentic AI'
  const hasDialpadEverywhere = app.features?.some(f => f.toLowerCase().includes('dialpad everywhere'))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-indigo-600">Marketplace</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/apps?category=${encodeURIComponent(app.category)}`} className="text-gray-500 hover:text-indigo-600">{app.category}</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">{app.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Card */}
            <div className={`rounded-2xl border p-6 mb-6 shadow-sm ${
              isAgenticAI 
                ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'
                : 'bg-white border-gray-200'
            }`}>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <AppLogo logo={app.logo} name={app.name} />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 className="text-2xl font-bold text-gray-900">{app.name}</h1>
                    {isAgenticAI && (
                      <span className="px-2.5 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
                        <Bot className="w-3 h-3" /> DialpadGPT
                      </span>
                    )}
                    {app.aiPowered && !isAgenticAI && (
                      <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <Bot className="w-3 h-3" /> AI-Powered
                      </span>
                    )}
                    {app.isNew && (
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">New</span>
                    )}
                    {app.developerType === 'native' && (
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Native Integration</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">By {app.developer} • {app.category}</p>
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-gray-900">{app.rating}</span>
                      <span className="text-sm text-gray-400">({app.reviews?.toLocaleString()} reviews)</span>
                    </div>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{app.installs} installs</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className={`text-sm font-semibold ${app.pricing === 'free' ? 'text-green-600' : 'text-indigo-600'}`}>
                      {app.pricing === 'free' ? 'Free' : 'Paid'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className={`px-6 py-3 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg ${
                      isAgenticAI 
                        ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/25' 
                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/25'
                    }`}>
                      <Download className="w-4 h-4" />
                      Install Now
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Setup Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dialpad Everywhere Banner */}
            {hasDialpadEverywhere && (
              <div className="rounded-2xl p-5 mb-6 flex items-center gap-4 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Dialpad Everywhere</h3>
                  <p className="text-sm text-gray-600">Access live transcription and AI coaching directly within {app.name}</p>
                </div>
                <a href="#" className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  Learn more <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-200">
                {['overview', 'features', 'screenshots'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium capitalize transition-colors relative ${
                      activeTab === tab
                        ? 'text-indigo-600'
                        : 'text-gray-500 hover:text-gray-900'
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
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{app.description}</p>
                )}

                {activeTab === 'features' && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
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
                          onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                        />
                      ))
                    ) : (
                      <p className="text-center py-8 text-gray-400">No screenshots available</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6">
            {/* Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="text-gray-900">{app.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Developer</dt>
                  <dd className="text-gray-900">{app.developer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Type</dt>
                  <dd className="text-gray-900">{app.developerType === 'native' ? 'Native Integration' : 'Partner App'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Last Updated</dt>
                  <dd className="text-gray-900">{app.lastUpdated}</dd>
                </div>
              </dl>
            </div>

            {/* Security Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Security & Compliance
              </h3>
              <div className="space-y-3">
                {['SOC 2 Type II Compliant', 'GDPR Ready', 'Enterprise SSO', 'Data Encryption'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
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
