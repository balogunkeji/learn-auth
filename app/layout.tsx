'use client'

import AuthLayout from '@/component/Nav/page'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
    children: React.ReactNode,
  session: any,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <AuthLayout>
              <div>{children}</div>
           </AuthLayout>
      </body>
    </html>
  )
}

