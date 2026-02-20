import Link from 'next/link'
import { 
  Briefcase, 
  BarChart3, 
  MessageSquare, 
  Megaphone, 
  DollarSign, 
  Code, 
  Shield, 
  Palette,
  LucideIcon
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  BarChart3,
  MessageSquare,
  Megaphone,
  DollarSign,
  Code,
  Shield,
  Palette,
}

interface CategoryCardProps {
  category: {
    id: string
    name: string
    icon: string
    count: number
  }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Briefcase

  return (
    <Link href={`/categories/${category.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary-200 transition-all duration-200 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl mb-4">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="font-semibold text-gray-900">{category.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{category.count} apps</p>
      </div>
    </Link>
  )
}
