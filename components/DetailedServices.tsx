import Image from 'next/image'

const services = [
  {
    title: 'النقل السكني',
    description: 'نقدم خدمات نقل منزلية شاملة ومخصصة لتلبية احتياجاتك الفريدة. من الشقق الصغيرة إلى المنازل الكبيرة، نضمن نقل ممتلكاتك بعناية وكفاءة إلى منزلك الجديد.',
    image: '/residential-moving.jpg',
  },
  {
    title: 'النقل التجاري',
    description: 'نتخصص في نقل المكاتب والشركات بأقل قدر من التعطيل لأعمالك. نقوم بتخطيط وتنفيذ عملية النقل بدقة لضمان انتقال سلس وسريع لشركتك.',
    image: '/commercial-moving.jpg',
  },
  {
    title: 'خدمات التعبئة',
    description: 'فريقنا المحترف يقوم بتعبئة ممتلكاتك باستخدام مواد عالية الجودة لضمان حمايتها أثناء النقل. نقدم خدمات تعبئة كاملة أو جزئية حسب احتياجاتك.',
    image: '/packing-services.jpg',
  },
  {
    title: 'النقل لمسافات طويلة',
    description: 'سواء كنت تنتقل إلى مدينة أخرى أو عبر البلاد، لدينا الخبرة والموارد لضمان وصول أمتعتك بأمان وفي الوقت المحدد إلى وجهتك الجديدة.',
    image: '/long-distance-moving.jpg',
  },
  {
    title: 'النقل الدولي',
    description: 'نقدم خدمات نقل دولية شاملة، بما في ذلك التعامل مع الجمارك واللوجستيات المعقدة. نجعل الانتقال إلى بلد جديد تجربة سلسة وخالية من التوتر.',
    image: '/international-moving.jpg',
  },
  {
    title: 'حلول التخزين',
    description: 'نوفر مرافق تخزين آمنة ومكيفة لتلبية احتياجات التخزين قصيرة وطويلة المدى. سواء كنت بحاجة إلى تخزين أثاثك أثناء الانتقال أو لفترة أطول، نحن نضمن سلامة ممتلكاتك.',
    image: '/storage-solutions.jpg',
  },
]

const DetailedServices = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">خدماتنا المتميزة</h2>
          <p className="mt-4 text-xl text-gray-500">اكتشف مجموعتنا الشاملة من خدمات النقل المصممة لتلبية جميع احتياجاتك</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-base text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailedServices

