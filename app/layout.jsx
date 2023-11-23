"use client"
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/store/store'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title : "Card App by nextjs | Study reactjs, nextjs",
//   description : "This Is home page of card App."
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/users">Users</Link></li>
          </ul>
        </div>
        <Provider store={store}>
          {children}
        </Provider>


        <div className="footer">
          <div className="copyrightsection">
            <Link href="https://www.fiverr.com/mh_farok?up_rollout=true" target='_blank'>Copyright © 2023 . Develop By Faruk</Link>
          </div>
        </div>
      </body>
    </html>
  )
}
