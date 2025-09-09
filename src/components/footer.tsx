import Link from 'next/link'
import { Globe } from 'lucide-react'

export function Footer() {
  const supportLinks = [
    'Help Center',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighborhood concern',
  ]
  const hostingLinks = [
    'Airbnb your home',
    'AirCover for Hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
  ]
  const airbnbLinks = ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards']

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hosting</h3>
            <ul className="space-y-3">
              {hostingLinks.map(link => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Airbnb</h3>
            <ul className="space-y-3">
              {airbnbLinks.map(link => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p>&copy; {new Date().getFullYear()} Airbnb, Inc.</p>
                <Link href="#" className="hover:underline">Terms</Link>
                <Link href="#" className="hover:underline">Sitemap</Link>
                <Link href="#" className="hover:underline">Privacy</Link>
                <Link href="#" className="hover:underline">Your Privacy Choices</Link>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <button className="flex items-center gap-1 hover:underline">
                    <Globe className="h-4 w-4" />
                    <span>English (US)</span>
                </button>
                <button className="hover:underline">
                    <span className="font-bold">$</span> USD
                </button>
            </div>
          </div>
      </div>
    </footer>
  )
}
