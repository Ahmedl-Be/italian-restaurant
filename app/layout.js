import './globals.css'
import Nav from '/components/Nav/Nav'
import Footer from '/components/Footer/Footer';
import { Providers } from "../redux/provider"
export const metadata = {
  title: 'food',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
