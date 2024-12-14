'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div id="contact" className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              تواصل معنا
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  اتصل بنا
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div className="mt-1 flex">
                    <dt className="sr-only">رقم الهاتف</dt>
                    <Phone className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <dd className="mr-3">+966 123 456 789</dd>
                  </div>
                  <div className="mt-1 flex">
                    <dt className="sr-only">البريد الإلكتروني</dt>
                    <Mail className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <dd className="mr-3">info@modernmovers.sa</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  زورونا
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div className="mt-1 flex">
                    <dt className="sr-only">العنوان</dt>
                    <MapPin className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <dd className="mr-3">
                      123 شارع النقل<br />
                      الرياض، 12345<br />
                      المملكة العربية السعودية
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              اطلب عرض سعر
            </h2>
            <div className="mt-8 lg:mt-0 lg:col-span-2">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    الاسم
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    رقم الهاتف
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    الرسالة
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                      placeholder="أخبرنا عن احتياجات النقل الخاصة بك..."
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    إرسال الطلب
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

