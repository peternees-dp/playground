import Link from 'next/link'
import { Star } from 'lucide-react'
import { App } from '@/data/apps'

interface AppCardProps {
  app: App
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/apps/${app.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-200 h-full">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{app.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 truncate">{app.name}</h3>
              {app.new && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                  New
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{app.developer}</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mt-4 line-clamp-2">{app.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{app.rating}</span>
            <span className="text-sm text-gray-400">({app.reviews})</span>
          </div>
          <span className="text-sm font-medium text-primary-600">{app.price}</span>
        </div>
      </div>
    </Link>
  )
}
