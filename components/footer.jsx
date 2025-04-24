import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                EchoTalent
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Premier talent management and creative services agency representing exceptional artists, performers, and
              creatives.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/talent" className="text-gray-400 hover:text-white transition-colors">
                  Talent
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/talent-management" className="text-gray-400 hover:text-white transition-colors">
                  Talent Management
                </Link>
              </li>
              <li>
                <Link href="/services/production" className="text-gray-400 hover:text-white transition-colors">
                  Production Services
                </Link>
              </li>
              <li>
                <Link href="/services/pr-marketing" className="text-gray-400 hover:text-white transition-colors">
                  PR & Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/casting" className="text-gray-400 hover:text-white transition-colors">
                  Casting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} EchoTalent. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">Designed with passion by EchoTalent Creative Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
