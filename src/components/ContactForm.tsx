"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { getLocationData, formatLocationForEmail, type LocationData } from "@/utils/locationUtils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

      try {
        // Capture location data (IP-based only, no permission required)
        let locationData: LocationData = {};
        let locationString = "";
        
        try {
          // Get location data (IP-based geolocation only)
          locationData = await getLocationData();
          locationString = formatLocationForEmail(locationData);
          console.log("Location data captured:", locationData);
        } catch (locationError) {
          console.error("Error capturing location:", locationError);
          // Continue with form submission even if location fails
          locationString = "Konum bilgisi alınamadı.";
        }

      // EmailJS configuration
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        to_email: "burakyaba@hotmail.com", // Your designated email
        reply_to: formData.email, // Reply to the person who filled the form
        // Alternative variables that EmailJS might recognize
        to_name: "WebCraft Team",
        user_email: "burakyaba@hotmail.com",
        recipient_email: "burakyaba@hotmail.com",
        // Location information (IP-based only)
        location_info: locationString,
        location_ip: locationData.ip || "Bilinmiyor",
        location_country: locationData.country || "Bilinmiyor",
        location_city: locationData.city || "Bilinmiyor",
        location_region: locationData.region || "Bilinmiyor",
        location_timezone: locationData.timezone || "Bilinmiyor",
        location_isp: locationData.isp || "Bilinmiyor",
        location_country_code: locationData.countryCode || "Bilinmiyor",
      };

      // Debug logging
      console.log("EmailJS Config:", {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 8) + "...", // Only show first 8 chars for security
      });

      console.log("Template Parameters:", templateParams);

      // Send email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-gray-50 p-8 lg:p-12 rounded-lg ${className}`}
    >
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş
                yapacağız.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ad Soyad *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors"
            placeholder="Adınız ve soyadınız"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-posta *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors"
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
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors"
          placeholder="+90 (5XX) XXX XX XX"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Şirket
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors"
          placeholder="Şirket adınız"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hizmet Türü
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:border-red-600 focus:outline-none transition-colors"
        >
          <option value="">Hizmet seçiniz</option>
          <option value="web-tasarim">Web Tasarım</option>
          <option value="seo-hizmeti">SEO Hizmeti</option>
          <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
          <option value="dijital-pazarlama">Dijital Pazarlama</option>
          <option value="e-ticaret">E-Ticaret Sitesi</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Proje Detayları *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-red-600 focus:outline-none transition-colors resize-none"
          placeholder="Web tasarım projeniz, SEO ihtiyaçlarınız veya dijital pazarlama hedefleriniz hakkında detayları paylaşın..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-8 rounded-full font-medium text-lg transition-colors duration-300 flex items-center justify-center ${
          isSubmitting
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-red-600"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Gönderiliyor...
          </>
        ) : (
          <>
            <span>Ücretsiz Teklif Al</span>
            <div className="w-2 h-2 bg-white rounded-full ml-4"></div>
          </>
        )}
      </button>
    </form>
  );
}
