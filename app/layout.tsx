'use client'

import './globals.css'
import type { Metadata } from 'next'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export const metadata: Metadata = {
  title: 'Facebook Video Downloader',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
      <body>{children}</body>

      </QueryClientProvider>
    </html>
  )
}