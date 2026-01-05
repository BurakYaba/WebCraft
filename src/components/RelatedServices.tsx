"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getRelatedServices } from "@/data/services";

interface RelatedServicesProps {
  currentSlug: string;
  limit?: number;
}

export default function RelatedServices({
  currentSlug,
  limit = 3,
}: RelatedServicesProps) {
  const relatedServices = getRelatedServices(currentSlug, limit);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-[#181716]">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            İlgili Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Size uygun diğer hizmetlerimizi de inceleyebilirsiniz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group bg-[#1a1918] rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Detayları İncele
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

