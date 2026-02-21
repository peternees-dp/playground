import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'
import AppDetailClient from '@/components/AppDetailClient'

interface AppDetailPageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return apps.map((app) => ({
    id: app.slug,
  }))
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const app = apps.find(a => a.slug === params.id) || getAppById(params.id)

  if (!app) {
    notFound()
  }

  return <AppDetailClient app={app} />
}
