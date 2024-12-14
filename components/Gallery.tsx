import Image from 'next/image'

const images = [
  { src: '/moving-1-arabic.jpg', alt: 'عمال ينقلون أريكة' },
  { src: '/moving-2-arabic.jpg', alt: 'صناديق نقل معبأة' },
  { src: '/moving-3-arabic.jpg', alt: 'شاحنة نقل يتم تحميلها' },
  { src: '/moving-4-arabic.jpg', alt: 'عائلة في منزلها الجديد' },
  { src: '/moving-5-arabic.jpg', alt: 'نقل مكتب' },
  { src: '/moving-6-arabic.jpg', alt: 'تعبئة دقيقة للأغراض الهشة' },
]

const Gallery = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">عملنا في الصور</h2>
          <p className="mt-4 text-xl text-gray-500">شاهد كيف نجعل يوم الانتقال سهلاً لعملائنا.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className="w-full bg-gray-200 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

