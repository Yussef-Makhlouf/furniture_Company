'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "ما هي الخدمات التي تقدمونها؟",
    answer: "نقدم مجموعة شاملة من خدمات النقل بما في ذلك النقل السكني، والنقل التجاري، وخدمات التعبئة والتفريغ، وحلول التخزين، والنقل لمسافات طويلة."
  },
  {
    question: "كيف تحسبون تكلفة النقل؟",
    answer: "يتم حساب تكلفة النقل بناءً على عوامل مثل المسافة، وحجم الأغراض، ومتطلبات المناولة الخاصة، والخدمات الإضافية المطلوبة. نقدم عروض أسعار مجانية وبدون التزام بعد تقييم احتياجاتك الخاصة."
  },
  {
    question: "هل الناقلون لديكم مؤمنون ومرخصون؟",
    answer: "نعم، جميع الناقلين لدينا مؤمنون ومرخصون بالكامل. كما نقدم خيارات تأمين إضافية للنقل لراحة بالك."
  },
  {
    question: "قبل كم من الوقت يجب أن أحجز خدماتكم؟",
    answer: "نوصي بالحجز قبل 4-6 أسابيع على الأقل، خاصة خلال مواسم النقل المزدحمة (أشهر الصيف ونهاية الشهر). ومع ذلك، فإننا نستوعب أيضًا عمليات النقل في اللحظة الأخيرة عندما يكون ذلك ممكنًا."
  },
  {
    question: "هل توفرون مواد التعبئة؟",
    answer: "نعم، نوفر مجموعة كاملة من مواد التعبئة بما في ذلك الصناديق، والفقاعات البلاستيكية، وورق التغليف، والشريط اللاصق. يمكننا إما بيعها لك أو تضمينها كجزء من خيار التعبئة الكاملة لدينا."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            لم تجد الإجابة التي تبحث عنها؟ تواصل مع فريق دعم العملاء لدينا.
          </p>
        </div>
        <div className="mt-12">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-right w-full flex justify-between items-start text-gray-400"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ

