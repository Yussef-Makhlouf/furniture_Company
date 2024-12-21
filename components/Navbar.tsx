'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/03.avif" 
                alt="Logo" 
                width={150} 
                height={60} 
                className="object-contain"
                priority
              />
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">الرئيسية</Link>
                <Link href="#services" className="text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">خدماتنا</Link>
                <Link href="#about" className="text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">من نحن</Link>
                <Link href="#gallery" className="text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">معرض الصور</Link>
                <Link href="tel:0565265233" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors px-4 py-2 rounded-full text-sm font-medium">اتصل بنا</Link>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <span className="sr-only">افتح القائمة الرئيسية</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link href="/" className="block text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-base font-medium">الرئيسية</Link>
            <Link href="#services" className="block text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-base font-medium">خدماتنا</Link>
            <Link href="#about" className="block text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-base font-medium">من نحن</Link>
            <Link href="#gallery" className="block text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 text-base font-medium">معرض الصور</Link>
            <Link href="tel:0565265233" className="block bg-blue-600 text-white hover:bg-blue-700 transition-colors px-4 py-2 rounded-full text-base font-medium text-center mx-3">اتصل بنا</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


