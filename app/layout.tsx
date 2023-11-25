import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'dataXchange platform',
  description: 'Revolutionizing the way buyers and sellers interact with secure, real-time data exchange and analytics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row bg-white">
          <div className="flex flex-row gap-4 p-12 grow">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}