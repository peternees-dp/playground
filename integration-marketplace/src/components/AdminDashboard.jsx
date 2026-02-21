import React, { useState } from 'react'
import { Search, Plus, Edit2, Trash2, Eye, EyeOff, Star, Bot, TrendingUp, Package, FileText } from 'lucide-react'
import AppLogo from './AppLogo'

export default function AdminDashboard({ integrations, navigateToEdit, handleDeleteApp, handleToggleStatus, darkMode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredApps = integrations.filter(app => {
    if (searchQuery && !app.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (statusFilter !== 'all' && app.status !== statusFilter) return false
    if (categoryFilter !== 'all' && app.category !== categoryFilter) return false
    return true
  })

  const categories = [...new Set(integrations.map(a => a.category))]

  const stats = {
    total: integrations.length,
    published: integrations.filter(a => a.status === 'published').length,
    draft: integrations.filter(a => a.status === 'draft').length,
    aiPowered: integrations.filter(a => a.aiPowered || a.category === 'Agentic AI').length,
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Admin Dashboard</h1>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Manage your integration listings</p>
          </div>
          <button 
            onClick={() => navigateToEdit(null)} 
            className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25"
          >
            <Plus className="w-4 h-4" />
            Add Integration
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <div className="flex items-center justify-between">
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total</p>
              <Package className={`w-5 h-5 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
            <p className={`text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.total}</p>
          </div>
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <div className="flex items-center justify-between">
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Published</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold mt-2 text-green-600">{stats.published}</p>
          </div>
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <div className="flex items-center justify-between">
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Draft</p>
              <FileText className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold mt-2 text-yellow-600">{stats.draft}</p>
          </div>
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-700/50' : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'} shadow-sm`}>
            <div className="flex items-center justify-between">
              <p className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>AI-Powered</p>
              <Bot className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold mt-2 text-purple-600">{stats.aiPowered}</p>
          </div>
        </div>

        {/* Table */}
        <div className={`rounded-2xl border overflow-hidden ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
          {/* Filters */}
          <div className={`p-4 border-b flex flex-col sm:flex-row gap-4 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className={`flex items-center flex-1 rounded-xl border px-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search integrations..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className={`flex-1 px-3 py-2.5 bg-transparent outline-none text-sm ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}`} 
              />
            </div>
            <select 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)} 
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)} 
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>App</th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Category</th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Status</th>
                  <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Rating</th>
                  <th className={`px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-gray-800' : 'divide-gray-100'}`}>
                {filteredApps.map(app => (
                  <tr key={app.id} className={`transition-colors ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <AppLogo logo={app.logo} name={app.name} size="sm" />
                        <div>
                          <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.name}</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{app.developer}</p>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{app.category}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                        app.status === 'published' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{app.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button 
                          onClick={() => handleToggleStatus(app.id)} 
                          className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
                          title={app.status === 'published' ? 'Unpublish' : 'Publish'}
                        >
                          {app.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button 
                          onClick={() => navigateToEdit(app)} 
                          className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteApp(app.id)} 
                          className="p-2 rounded-lg hover:bg-red-100 text-red-500 dark:hover:bg-red-900/30 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredApps.length === 0 && (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <p>No integrations found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
