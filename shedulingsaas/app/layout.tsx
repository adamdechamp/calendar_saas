import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Starfield from 'react-starfield';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Schedule App',
  description: 'Where you, your family, friends, coworkers or anyone you want, can stay on schedule',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}

          <div className="App">
            <Starfield
              starCount={1000}
              starColor={[255 , 255, 255]}
              speedFactor={0.05}
              backgroundColor="black"
            />
          </div>
        </body>
      </html>
    </ClerkProvider>
    
  )
}