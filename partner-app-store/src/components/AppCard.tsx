import Link from 'next/link'
import { Star, Bot, Sparkles } from 'lucide-react'
import { App } from '@/data/apps'

interface AppCardProps {
  app: App
}

function AppLogo({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
      <img 
        src={logo} 
        alt={name} 
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          target.parentElement!.innerHTML = `<span class="text-xl font-bold text-gray-400">${name.charAt(0)}</span>`
        }}
      />
    </div>
  )
}

export default function AppCard({ app }: AppCardProps) {
  const isAgenticAI = app.category === 'Agentic AI'
  
  return (
    <Link href={`/apps/${app.slug}`}>
      <div className={`rounded-2xl border p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer ${
        isAgenticAI 
          ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300'
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}>
        <div className="flex items-start justify-between mb-4">
          <AppLogo logo={app.logo} name={app.name} />
          <div className="flex gap-1.5">
            {app.isNew && (
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">New</span>
            )}
            {isAgenticAI && (
              <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <Bot className="w-3 h-3" />
              </span>
            )}
            {app.aiPowered && !isAgenticAI && (
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                <Bot className="w-3 h-3 inline" />
              </span>
            )}
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{app.category} • {app.developerType === 'native' ? 'Native' : 'Partner'}</p>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{app.shortDescription}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{app.rating}</span>
            <span className="text-sm text-gray-400">({app.reviews.toLocaleString()})</span>
          </div>
          <span className={`text-sm font-semibold ${app.pricing === 'free' ? 'text-green-600' : 'text-indigo-600'}`}>
            {app.pricing === 'free' ? 'Free' : 'Paid'}
          </span>
        </div>
      </div>
    </Link>
  )
}

export function FeaturedAppCard({ app }: AppCardProps) {
  const isAgenticAI = app.category === 'Agentic AI'
  
  return (
    <Link href={`/apps/${app.slug}`}>
      <div className={`relative rounded-2xl border p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
        isAgenticAI 
          ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'
          : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
      }`}>
        <div className="absolute top-4 right-4 flex gap-2">
          {app.featured && (
            <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
          {isAgenticAI && (
            <span className="px-2.5 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
              <Bot className="w-3 h-3" /> DialpadGPT
            </span>
          )}
        </div>
        <div className="flex items-start gap-4">
          <AppLogo logo={app.logo} name={app.name} />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900">{app.name}</h3>
            <p className="text-sm text-gray-500">
              {app.developerType === 'native' ? 'Native Integration' : 'Partner App'} • {app.developer}
            </p>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{app.shortDescription}</p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">{app.rating}</span>
                <span className="text-sm text-gray-400">({app.reviews.toLocaleString()})</span>
              </div>
              <span className="text-sm text-gray-500">{app.installs} installs</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
