import MusicPlayer from './components/musicplayer/MusicPlayer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App League of Legends',
  description: 'By Ysacc Roncal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <MusicPlayer/>
    </html>
  )
}
