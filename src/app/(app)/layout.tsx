

import type { ReactNode } from 'react'
import { BottomNav } from '@/components/app/bottom-nav'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      
      <main className="min-h-dvh pb-24">{children}</main>

      <BottomNav />
    </>
  )
}
