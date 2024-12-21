import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">الخدمات</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">نقل المنازل</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">نقل الشركات</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">خدمات التعبئة</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">حلول التخزين</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">الدعم</h3>
            <ul className="space-y-3">
              <li><Link href="#faq" className="text-gray-300 hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">الأسعار</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">الجدول الزمني</Link></li>
              <li><Link href="tel:0565265233" className="text-gray-300 hover:text-white transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">الشركة</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link href="#article" className="text-gray-300 hover:text-white transition-colors">المدونة</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">الشراكات</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">تواصل معنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 شركة النقل الحديثة. جميع الحقوق محفوظة.</p>
          <Link 
            href="https://fashne.net" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-colors mt-4 md:mt-0"
          >
            تصميم وتطوير بواسطة الفشني للتسويق الرقمي
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
