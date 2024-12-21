import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          <div className="w-full lg:w-1/2 text-center lg:text-right space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">النقل الحديث</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                بسهولة تامة
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mx-auto lg:mx-0">
              استمتع بتجربة نقل خالية من التوتر مع خدماتنا المهنية والموثوقة. نحن نتعامل مع كل شيء من التعبئة إلى النقل، مما يضمن وصول ممتلكاتك بأمان إلى وجهتك الجديدة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="tel:0565265233" 
                className="group relative px-8 py-4 bg-white rounded-full text-blue-900 font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                احصل على عرض سعر مجاني
                <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse group-hover:animate-none"></span>
              </Link>
              
              <Link 
                href="#services" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 rounded-full text-white font-bold hover:bg-blue-500 transition-all duration-300"
              >
                خدماتنا
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/02.avif"
                alt="خدمة النقل الحديثة"
                fill
                className="object-cover bg-white"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}

export default Hero
