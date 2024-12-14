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
              <span className="sr-only ">افتح القائمة الرئيسية</span>
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

// 'use client'

// import { useState } from 'react'
// import { Menu, X, Truck } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Truck className="h-8 w-8 text-indigo-600" />
//               <span className="mr-2 text-xl font-bold text-gray-900 px-2">شركة نقل عفش جدة </span>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:space-x-reverse">
//               <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                 الرئيسية
//               </a>
//               <a href="#services" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                 خدماتنا
//               </a>
//               <a href="#prices" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                 الأسعار
//               </a>
//               <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                 اتصل بنا
//               </a>
//             </div>
//           </div>
//           <div className="-ml-2 mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//             >
//               <span className="sr-only">افتح القائمة الرئيسية</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="sm:hidden">
//           <div className="pt-2 pb-3 space-y-1">
//             <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
//               الرئيسية
//             </a>
//             <a href="#services" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
//               خدماتنا
//             </a>
//             <a href="#prices" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
//               الأسعار
//             </a>
//             <a href="#contact" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
//               اتصل بنا
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

