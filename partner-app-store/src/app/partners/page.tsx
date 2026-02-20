import Link from 'next/link'
import { ArrowRight, Code, Rocket, DollarSign, Users, CheckCircle, Zap, Globe } from 'lucide-react'

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Build on Our Platform, Grow Your Business
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Join our partner ecosystem and reach thousands of potential customers. We provide the tools, support, and visibility you need to succeed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
              >
                Submit Your App
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/docs"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Partner With Us?</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We&apos;re committed to helping our partners succeed with comprehensive support and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Massive Audience</h3>
              <p className="text-gray-500 mt-2">
                Access our growing user base of 50,000+ active customers looking for solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Revenue Share</h3>
              <p className="text-gray-500 mt-2">
                Keep 80% of your revenue with our transparent and partner-friendly pricing model.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Marketing Support</h3>
              <p className="text-gray-500 mt-2">
                Get featured in our marketplace, newsletters, and promotional campaigns.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Developer Tools</h3>
              <p className="text-gray-500 mt-2">
                Comprehensive APIs, SDKs, and documentation to build powerful integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-500 mt-4">Get your app listed in just a few steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Build Your Integration</h3>
              <p className="text-gray-500">
                Use our APIs and SDKs to build a seamless integration with our platform.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Submit for Review</h3>
              <p className="text-gray-500">
                Submit your app for review. Our team will test and provide feedback within 5 business days.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Go Live & Grow</h3>
              <p className="text-gray-500">
                Once approved, your app goes live and you start reaching thousands of potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Requirements</h2>
              <p className="text-gray-500 mb-8">
                We maintain high standards to ensure the best experience for our users. Here&apos;s what we look for in partner apps:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Quality & Reliability</span>
                    <p className="text-gray-500 text-sm">Apps must be stable, well-tested, and provide a great user experience.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Security & Privacy</span>
                    <p className="text-gray-500 text-sm">Follow security best practices and comply with data protection regulations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Documentation</span>
                    <p className="text-gray-500 text-sm">Provide clear documentation and support resources for users.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Active Maintenance</span>
                    <p className="text-gray-500 text-sm">Commit to maintaining and updating your app regularly.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Partner Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  <span>Priority API access and support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <span>Global marketplace exposure</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5" />
                  <span>Competitive revenue share (80/20)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Code className="h-5 w-5" />
                  <span>Dedicated developer resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="h-5 w-5" />
                  <span>Early access to new features</span>
                </li>
              </ul>
              <Link
                href="/submit"
                className="mt-8 inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join our growing ecosystem of partners and start reaching thousands of potential customers today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/submit"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
            >
              Submit Your App
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/docs"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
