import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Zap, Shield } from 'lucide-react'
import AppCard from '@/components/AppCard'
import CategoryCard from '@/components/CategoryCard'
import { apps, categories, getFeaturedApps, getNewApps } from '@/data/apps'

export default function Home() {
  const featuredApps = getFeaturedApps()
  const newApps = getNewApps()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover Apps That Power Your Business
            </h1>
            <p className="mt-6 text-xl text-primary-100">
              Explore our ecosystem of partner applications. Find the perfect tools to integrate, automate, and scale your operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/apps"
                className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center gap-2"
              >
                Browse Apps
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/partners"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-500 mt-1">Partner Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-500 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-gray-500 mt-1">Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-500 mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Featured Apps</h2>
              <p className="text-gray-500 mt-2">Hand-picked apps loved by our community</p>
            </div>
            <Link
              href="/apps?featured=true"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-gray-500 mt-2">Find the right apps for your needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">New Releases</h2>
              <p className="text-gray-500 mt-2">Fresh apps just added to our ecosystem</p>
            </div>
            <Link
              href="/apps?new=true"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold">Why Build on Our Platform?</h2>
            <p className="text-gray-400 mt-2">Join hundreds of partners growing their business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Massive Reach</h3>
              <p className="text-gray-400 mt-2 text-sm">Access our growing user base of 50,000+ active customers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Easy Integration</h3>
              <p className="text-gray-400 mt-2 text-sm">Our APIs and SDKs make building integrations a breeze</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Marketing Support</h3>
              <p className="text-gray-400 mt-2 text-sm">Get featured in our marketplace and promotional campaigns</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Trusted Platform</h3>
              <p className="text-gray-400 mt-2 text-sm">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/partners"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
            >
              Start Building Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-primary-100 mt-4 max-w-2xl mx-auto">
              Browse our collection of partner apps and find the perfect tools to supercharge your workflow.
            </p>
            <Link
              href="/apps"
              className="mt-8 inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Explore All Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
