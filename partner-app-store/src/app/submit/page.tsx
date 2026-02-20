'use client'

import { useState } from 'react'
import { Upload, CheckCircle } from 'lucide-react'

export default function SubmitAppPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 mb-6">
            Thank you for submitting your app. Our team will review it and get back to you within 5 business days.
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Submit Your App</h1>
          <p className="text-gray-500 mt-2">Fill out the form below to submit your app for review</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-1">
                  App Name *
                </label>
                <input
                  type="text"
                  id="appName"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="My Awesome App"
                />
              </div>

              <div>
                <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description *
                </label>
                <input
                  type="text"
                  id="shortDescription"
                  required
                  maxLength={100}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="A brief description of your app (max 100 characters)"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Description *
                </label>
                <textarea
                  id="description"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Describe your app in detail..."
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="productivity">Productivity</option>
                  <option value="analytics">Analytics</option>
                  <option value="communication">Communication</option>
                  <option value="marketing">Marketing</option>
                  <option value="finance">Finance</option>
                  <option value="developer-tools">Developer Tools</option>
                  <option value="security">Security</option>
                  <option value="design">Design</option>
                </select>
              </div>
            </div>
          </div>

          {/* Developer Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Developer Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="developerName" className="block text-sm font-medium text-gray-700 mb-1">
                  Developer / Company Name *
                </label>
                <input
                  type="text"
                  id="developerName"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="developer@company.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>
          </div>

          {/* App Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">App Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 mb-1">
                  Pricing Model *
                </label>
                <select
                  id="pricing"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                >
                  <option value="">Select pricing model</option>
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="paid">Paid</option>
                  <option value="subscription">Subscription</option>
                </select>
              </div>

              <div>
                <label htmlFor="appUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  App URL / Demo Link
                </label>
                <input
                  type="url"
                  id="appUrl"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="https://yourapp.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  App Icon
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-primary-300 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 1MB (512x512 recommended)</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Screenshots
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-primary-300 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">Upload 2-5 screenshots (1280x720 recommended)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-primary-600 hover:underline">Partner Terms of Service</a> and <a href="#" className="text-primary-600 hover:underline">Developer Guidelines</a>. I confirm that my app complies with all requirements and does not violate any third-party rights.
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Submit for Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
