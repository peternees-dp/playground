import React, { useState } from 'react'
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react'

export default function AdminEditForm({ app, onSave, onCancel, darkMode }) {
  const [formData, setFormData] = useState({
    name: app?.name || '',
    slug: app?.slug || '',
    logo: app?.logo || '',
    category: app?.category || 'Agentic AI',
    developer: app?.developer || 'Dialpad',
    developerType: app?.developerType || 'native',
    shortDescription: app?.shortDescription || '',
    longDescription: app?.longDescription || '',
    features: app?.features || [''],
    screenshots: app?.screenshots || [''],
    pricing: app?.pricing || 'free',
    featured: app?.featured || false,
    isNew: app?.isNew || false,
    aiPowered: app?.aiPowered || false,
    status: app?.status || 'draft',
    supportUrl: app?.supportUrl || '',
    documentationUrl: app?.documentationUrl || ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    handleChange('features', newFeatures)
  }

  const addFeature = () => {
    handleChange('features', [...formData.features, ''])
  }

  const removeFeature = (index) => {
    handleChange('features', formData.features.filter((_, i) => i !== index))
  }

  const handleScreenshotChange = (index, value) => {
    const newScreenshots = [...formData.screenshots]
    newScreenshots[index] = value
    handleChange('screenshots', newScreenshots)
  }

  const addScreenshot = () => {
    handleChange('screenshots', [...formData.screenshots, ''])
  }

  const removeScreenshot = (index) => {
    handleChange('screenshots', formData.screenshots.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const cleanedData = {
      ...formData,
      features: formData.features.filter(f => f.trim() !== ''),
      screenshots: formData.screenshots.filter(s => s.trim() !== '')
    }
    onSave(cleanedData)
  }

  const inputClass = `w-full px-4 py-2.5 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
    darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
  }`

  const labelClass = `block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={onCancel}
            className={`p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {app ? 'Edit Integration' : 'Add New Integration'}
            </h1>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {app ? 'Update the integration details below' : 'Fill in the details to create a new integration'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>App Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass} placeholder="e.g., Salesforce" />
              </div>
              <div>
                <label className={labelClass}>Slug *</label>
                <input type="text" required value={formData.slug} onChange={(e) => handleChange('slug', e.target.value)} className={inputClass} placeholder="e.g., salesforce" />
              </div>
              <div>
                <label className={labelClass}>Logo URL</label>
                <input type="url" value={formData.logo} onChange={(e) => handleChange('logo', e.target.value)} className={inputClass} placeholder="https://..." />
              </div>
              <div>
                <label className={labelClass}>Category *</label>
                <select value={formData.category} onChange={(e) => handleChange('category', e.target.value)} className={inputClass}>
                  <option value="Agentic AI">Agentic AI</option>
                  <option value="CRM">CRM</option>
                  <option value="Helpdesk">Helpdesk</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Developer</label>
                <input type="text" value={formData.developer} onChange={(e) => handleChange('developer', e.target.value)} className={inputClass} placeholder="e.g., Dialpad" />
              </div>
              <div>
                <label className={labelClass}>Developer Type</label>
                <select value={formData.developerType} onChange={(e) => handleChange('developerType', e.target.value)} className={inputClass}>
                  <option value="native">Native (Dialpad)</option>
                  <option value="partner">Partner</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className={labelClass}>Short Description *</label>
              <input type="text" required value={formData.shortDescription} onChange={(e) => handleChange('shortDescription', e.target.value)} className={inputClass} placeholder="Brief description (max 150 chars)" maxLength={150} />
            </div>
            <div className="mt-4">
              <label className={labelClass}>Long Description</label>
              <textarea rows={5} value={formData.longDescription} onChange={(e) => handleChange('longDescription', e.target.value)} className={inputClass} placeholder="Detailed description with markdown support..." />
            </div>
          </div>

          {/* Features */}
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Features</h2>
            <div className="space-y-3">
              {formData.features.map((feature, i) => (
                <div key={i} className="flex gap-2">
                  <input type="text" value={feature} onChange={(e) => handleFeatureChange(i, e.target.value)} placeholder={`Feature ${i + 1}`} className={inputClass} />
                  {formData.features.length > 1 && (
                    <button type="button" onClick={() => removeFeature(i)} className="p-2.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" onClick={addFeature} className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
              <Plus className="w-4 h-4" /> Add Feature
            </button>
          </div>

          {/* Screenshots */}
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Screenshots</h2>
            <div className="space-y-3">
              {formData.screenshots.map((screenshot, i) => (
                <div key={i} className="flex gap-2">
                  <input type="url" value={screenshot} onChange={(e) => handleScreenshotChange(i, e.target.value)} placeholder={`Screenshot URL ${i + 1}`} className={inputClass} />
                  {formData.screenshots.length > 1 && (
                    <button type="button" onClick={() => removeScreenshot(i)} className="p-2.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" onClick={addScreenshot} className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
              <Plus className="w-4 h-4" /> Add Screenshot
            </button>
          </div>

          {/* Settings */}
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Pricing</label>
                <select value={formData.pricing} onChange={(e) => handleChange('pricing', e.target.value)} className={inputClass}>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Status</label>
                <select value={formData.status} onChange={(e) => handleChange('status', e.target.value)} className={inputClass}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Support URL</label>
                <input type="url" value={formData.supportUrl} onChange={(e) => handleChange('supportUrl', e.target.value)} className={inputClass} placeholder="https://..." />
              </div>
              <div>
                <label className={labelClass}>Documentation URL</label>
                <input type="url" value={formData.documentationUrl} onChange={(e) => handleChange('documentationUrl', e.target.value)} className={inputClass} placeholder="https://..." />
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.featured} onChange={(e) => handleChange('featured', e.target.checked)} className="w-4 h-4 text-indigo-600 rounded" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Featured</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.isNew} onChange={(e) => handleChange('isNew', e.target.checked)} className="w-4 h-4 text-indigo-600 rounded" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mark as New</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.aiPowered} onChange={(e) => handleChange('aiPowered', e.target.checked)} className="w-4 h-4 text-indigo-600 rounded" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI-Powered</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button type="button" onClick={onCancel} className={`px-6 py-2.5 rounded-xl font-semibold transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
              Cancel
            </button>
            <button type="submit" className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-500/25">
              <Save className="w-4 h-4" />
              {app ? 'Save Changes' : 'Create Integration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
