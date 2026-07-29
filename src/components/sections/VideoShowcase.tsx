"use client";

export default function VideoShowcase() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/showcase.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro + Texto premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-serif font-bold drop-shadow-lg mb-2">
          MÁS QUE UN CORTE
        </h2>
        <p className="text-brand-red text-xl md:text-3xl font-serif italic drop-shadow-lg">
          un ritual
        </p>
      </div>
    </div>
  );
}
