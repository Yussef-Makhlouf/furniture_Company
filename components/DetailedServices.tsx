import { Truck, Home, Building2, Package, Globe, Lock } from 'lucide-react'

const services = [
  {
    title: 'النقل السكني',
    description: 'نقدم خدمات نقل منزلية شاملة ومخصصة لتلبية احتياجاتك الفريدة. من الشقق الصغيرة إلى المنازل الكبيرة، نضمن نقل ممتلكاتك بعناية وكفاءة إلى منزلك الجديد.',
    icon: Home,
    color: 'text-blue-500'
  },
  {
    title: 'النقل التجاري',
    description: 'نتخصص في نقل المكاتب والشركات بأقل قدر من التعطيل لأعمالك. نقوم بتخطيط وتنفيذ عملية النقل بدقة لضمان انتقال سلس وسريع لشركتك.',
    icon: Building2,
    color: 'text-blue-500'
  },
  {
    title: 'خدمات التعبئة',
    description: 'فريقنا المحترف يقوم بتعبئة ممتلكاتك باستخدام مواد عالية الجودة لضمان حمايتها أثناء النقل. نقدم خدمات تعبئة كاملة أو جزئية حسب احتياجاتك.',
    icon: Package,
    color: 'text-purple-500'
  },
  {
    title: 'النقل لمسافات طويلة',
    description: 'سواء كنت تنتقل إلى مدينة أخرى أو عبر البلاد، لدينا الخبرة والموارد لضمان وصول أمتعتك بأمان وفي الوقت المحدد إلى وجهتك الجديدة.',
    icon: Truck,
    color: 'text-orange-500'
  },
  {
    title: 'النقل الدولي',
    description: 'نقدم خدمات نقل دولية شاملة، بما في ذلك التعامل مع الجمارك واللوجستيات المعقدة. نجعل الانتقال إلى بلد جديد تجربة سلسة وخالية من التوتر.',
    icon: Globe,
    color: 'text-indigo-500'
  },
  {
    title: 'حلول التخزين',
    description: 'نوفر مرافق تخزين آمنة ومكيفة لتلبية احتياجات التخزين قصيرة وطويلة المدى. سواء كنت بحاجة إلى تخزين أثاثك أثناء الانتقال أو لفترة أطول.',
    icon: Lock,
    color: 'text-red-500'
  },
]

const DetailedServices = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">اكتشف مجموعتنا الشاملة من خدمات النقل المصممة لتلبية جميع احتياجاتك</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${service.color} mb-6`}>
                  <div className="w-16 h-16 rounded-full bg-current/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">

         
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DetailedServices
