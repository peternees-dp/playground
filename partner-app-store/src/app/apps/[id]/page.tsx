import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Star, Download, ExternalLink, Shield, Check } from 'lucide-react'
import { getAppById, apps } from '@/data/apps'

interface AppDetailPageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }))
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Apps
          </Link>

          <div className="flex flex-col md:flex-row gap-6">
            {/* App Icon */}
            <div className="text-6xl">{app.icon}</div>

            {/* App Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{app.name}</h1>
                  <p className="text-gray-500 mt-1">by {app.developer}</p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium inline-flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Install
                  </button>
                  <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-gray-900">{app.rating}</span>
                  <span className="text-gray-500">({app.reviews} reviews)</span>
                </div>
                <div className="text-gray-500">{app.installs} installs</div>
                <div className="font-semibold text-primary-600">{app.price}</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About this app</h2>
              <p className="text-gray-600 leading-relaxed">{app.description}</p>
            </div>

            {/* Screenshots */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {app.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-400"
                  >
                    Screenshot {index + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Great app! Really helped streamline our workflow. The integration was seamless and support is excellent.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="text-gray-900 capitalize">{app.category.replace('-', ' ')}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Developer</dt>
                  <dd className="text-gray-900">{app.developer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Version</dt>
                  <dd className="text-gray-900">2.4.1</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Updated</dt>
                  <dd className="text-gray-900">Jan 15, 2024</dd>
                </div>
              </dl>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Security & Privacy</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-600" />
                  Verified developer
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-600" />
                  Data encryption
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-600" />
                  GDPR compliant
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-green-600" />
                  SOC 2 certified
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-primary-600 hover:text-primary-700 text-sm">
                  Documentation
                </a>
                <a href="#" className="block text-primary-600 hover:text-primary-700 text-sm">
                  Contact Support
                </a>
                <a href="#" className="block text-primary-600 hover:text-primary-700 text-sm">
                  Report an Issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
