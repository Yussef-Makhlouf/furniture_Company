import { Truck, Home, Building, Box, Globe, ShieldCheck } from 'lucide-react'

const services = [
  {
    name: 'النقل السكني',
    description: 'خدمات نقل منزلية خبيرة مصممة لتلبية احتياجاتك.',
    icon: Home,
  },
  {
    name: 'النقل التجاري',
    description: 'حلول فعالة لنقل المكاتب والأعمال التجارية.',
    icon: Building,
  },
  {
    name: 'خدمات التعبئة',
    description: 'تعبئة احترافية لضمان سلامة ممتلكاتك.',
    icon: Box,
  },
  {
    name: 'النقل لمسافات طويلة',
    description: 'خدمات نقل موثوقة عبر الولايات.',
    icon: Truck,
  },
  {
    name: 'النقل الدولي',
    description: 'خدمات نقل دولية سلسة.',
    icon: Globe,
  },
  {
    name: 'حلول التخزين',
    description: 'خيارات تخزين آمنة للاحتياجات قصيرة وطويلة المدى.',
    icon: ShieldCheck,
  },
]

const ServiceCards = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">خدماتنا</h2>
          <p className="mt-4 text-xl text-gray-500">حلول نقل شاملة مصممة لتلبية احتياجاتك.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-md">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.name}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards

