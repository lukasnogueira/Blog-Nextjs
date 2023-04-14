import { ReactNode } from "react"
import { BlogProvider } from "./contexts/Blog"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Blog</h1>
        <BlogProvider>
          {children}
        </BlogProvider>
      </body>
    </html>
  )
}