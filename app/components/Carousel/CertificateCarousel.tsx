"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { certificates } from "@/app/db/certificates";

export default function CertificateCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 relative z-[9999]">
      <h2 className="text-3xl font-bold text-center mb-8">My Certificates</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-[9999]"
      >
        {certificates.map((cert) => (
          <SwiperSlide key={cert.id} className="relative z-[9999]">
            <div className="bg-gray-300 rounded-2xl shadow-lg p-4 flex flex-col items-center justify-between relative z-[9999] h-[380px]">
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={220}
                className="rounded-lg object-cover"
              />
              <div className="flex flex-col items-center mt-4 flex-grow">
                <h3 className="text-lg font-semibold text-center text-black">{cert.title}</h3>
                <span className="text-xs text-gray-500 italic mt-1">
                  {cert.provider}
                </span>
                <p className="text-sm text-gray-600 text-center mt-2 line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
