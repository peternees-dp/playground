import Link from 'next/link'
import { Store, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">AppStore</span>
            </Link>
            <p className="text-sm text-gray-400">
              Discover and integrate powerful apps from our partner ecosystem.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Apps */}
          <div>
            <h3 className="text-white font-semibold mb-4">Apps</h3>
            <ul className="space-y-2">
              <li><Link href="/apps" className="hover:text-white transition-colors">Browse All</Link></li>
              <li><Link href="/apps?featured=true" className="hover:text-white transition-colors">Featured</Link></li>
              <li><Link href="/apps?new=true" className="hover:text-white transition-colors">New Releases</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-white font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li><Link href="/partners" className="hover:text-white transition-colors">Become a Partner</Link></li>
              <li><Link href="/submit" className="hover:text-white transition-colors">Submit an App</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/partners/guidelines" className="hover:text-white transition-colors">Guidelines</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Partner App Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
