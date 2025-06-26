import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                İletişim
              </div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Projenizi
                <br />
                <span className="text-red-600">Konuşalım</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md">
                Dijital dönüşüm yolculuğunuzda size yardımcı olmak için
                buradayız. Projeniz hakkında konuşmak için bizimle iletişime
                geçin.
              </p>
            </div>

            {/* Right Content - Contact Form */}
            <div className="lg:w-1/2">
              <form className="bg-gray-50 p-8 lg:p-12 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şirket
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Şirket adınız"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Detayları
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-8 rounded-full font-medium text-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <span>Gönder</span>
                  <div className="w-2 h-2 bg-white rounded-full ml-4"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E-posta
              </h3>
              <p className="text-gray-600 mb-2">
                <a
                  href="mailto:info@webcraft.com.tr"
                  className="hover:text-red-600 transition-colors"
                >
                  info@webcraft.com.tr
                </a>
              </p>
              <p className="text-gray-600">
                <a
                  href="mailto:hello@webcraft.com.tr"
                  className="hover:text-red-600 transition-colors"
                >
                  hello@webcraft.com.tr
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Telefon
              </h3>
              <p className="text-gray-600 mb-2">
                <a
                  href="tel:+902121234567"
                  className="hover:text-red-600 transition-colors"
                >
                  +90 (212) 123 45 67
                </a>
              </p>
              <p className="text-gray-600">
                <a
                  href="tel:+905321234567"
                  className="hover:text-red-600 transition-colors"
                >
                  +90 (532) 123 45 67
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Adres
              </h3>
              <p className="text-gray-600">
                Levent Mahallesi, Büyükdere Caddesi
                <br />
                No: 123, Kat: 5
                <br />
                Beşiktaş, İstanbul
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
