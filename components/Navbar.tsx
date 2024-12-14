'use client'

import { useState } from 'react'
import { Truck, Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Truck className="h-8 w-8" />
            </Link>
            <div className="hidden md:block">
              <div className="mr-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">الرئيسية</Link>
                <Link href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">خدماتنا</Link>
                <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">من نحن</Link>
                <Link href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">معرض الصور</Link>
                <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-500">اتصل بنا</Link>
              </div>
            </div>
          </div>
          <div className="-ml-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-emerald-600 focus:ring-white"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">الرئيسية</Link>
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">خدماتنا</Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">من نحن</Link>
            <Link href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">معرض الصور</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-500">اتصل بنا</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

