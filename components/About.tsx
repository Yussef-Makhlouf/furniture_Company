import { CheckCircle } from 'lucide-react'

const features = [
  'أكثر من 10 سنوات من الخبرة',
  'مرخصة ومؤمنة بالكامل',
  'طاقم عمل مدرب ومحترف',
  'أسطول حديث من المركبات',
  'مواد تعبئة صديقة للبيئة',
  'خطط نقل مخصصة',
]

const About = () => {
  return (
    <div id="about" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">من نحن</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            لماذا تختار شركة النقل الحديثة
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            نحن ملتزمون بتقديم خدمات نقل استثنائية مع التركيز على الموثوقية والكفاءة ورضا العملاء.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature} className="relative">
                <dt>
                  <CheckCircle className="absolute h-6 w-6 text-blue-500" aria-hidden="true" />
                  <p className="mr-9 text-lg leading-6 font-medium text-gray-900">{feature}</p>
                </dt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

