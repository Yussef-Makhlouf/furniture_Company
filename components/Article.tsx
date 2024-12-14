import Image from 'next/image'

const Article = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              النقل بسهولة: نهجنا
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              في شركة النقل الحديثة، نفهم أن الانتقال يمكن أن يكون مرهقًا. لهذا السبب طورنا نهجًا شاملاً لجعل عملية النقل سلسة وخالية من القلق قدر الإمكان. فريقنا من المحترفين ذوي الخبرة مكرس لتقديم خدمة من الدرجة الأولى من البداية إلى النهاية.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mr-3 text-base text-gray-500">خطط نقل مخصصة</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mr-3 text-base text-gray-500">ناقلون مدربون ومحترفون</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mr-3 text-base text-gray-500">معدات ومركبات حديثة</p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-16 sm:aspect-h-9">
              <Image
                src="/moving-team-arabic.jpg"
                alt="فريق النقل المحترف لدينا"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article

