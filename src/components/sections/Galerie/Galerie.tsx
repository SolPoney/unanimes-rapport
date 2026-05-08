import { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'

// Liste des photos disponibles dans src/assets/images/galerie
// et dans Déplacements faits marquants
const photos = [
  { src: "images/Déplacements faits marquants/Douarnenez.jpg", legende: "Festival de Douarnenez" },
  { src: "images/Déplacements faits marquants/Goya.jpeg", legende: "Gala GOYA — Mougins" },
  { src: "images/Déplacements faits marquants/Brest.jpg", legende: "Rencontre Phare d'Ouest — Brest" },
  { src: "images/Déplacements faits marquants/Quimper.jpeg", legende: "Répétition Teatr Piba — Quimper" },
  { src: "images/Déplacements faits marquants/PhotoCedricCRT-1024x735.jpg", legende: "Déplacement 2025" },
  { src: "images/Déplacements faits marquants/cnh_0.jpg", legende: "Conférence Nationale du Handicap" },
  { src: "images/Déplacements faits marquants/1733774251313.jpeg", legende: "Événement 2025" },
  { src: "images/Déplacements faits marquants/1733774251420.jpeg", legende: "Événement 2025" },
  { src: "images/Déplacements faits marquants/1733774251614.jpeg", legende: "Événement 2025" },
  { src: "images/Déplacements faits marquants/1733774252201.jpeg", legende: "Événement 2025" },
  { src: "images/Déplacements faits marquants/1733774252825.jpeg", legende: "Événement 2025" },
  { src: "images/Déplacements faits marquants/1733774252841.jpeg", legende: "Événement 2025" },
]

export function Galerie() {
  const [photoActive, setPhotoActive] = useState<number | null>(null)

  return (
    <section
      id="galerie"
      aria-labelledby="galerie-titre"
      className="section-py bg-[#0a2540]"
    >
      <div className="container-rapport">
        <SectionTitle
          id="galerie-titre"
          titre="2025 en images"
          sousTitre="Moments forts, rencontres et actions sur le terrain."
          accent="lime"
          className="mb-12"
        />

        {/* Grille web — interactive */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 galerie-carousel"
          role="list"
          aria-label="Galerie photos 2025"
        >
          {photos.map((photo, index) => (
            <button
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-[#c8e600]"
              onClick={() => setPhotoActive(index)}
              aria-label={`Agrandir : ${photo.legende}`}
            >
              <img
                src={`/src/assets/${photo.src}`}
                alt={photo.legende}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.parentElement!.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-2">
                <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                  {photo.legende}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Grille impression — statique */}
        <div className="hidden galerie-print grid-cols-3 gap-4">
          {photos.slice(0, 9).map((photo, index) => (
            <figure key={index}>
              <img
                src={`/src/assets/${photo.src}`}
                alt={photo.legende}
                className="w-full aspect-square object-cover rounded"
              />
              <figcaption className="text-xs text-[#6b7280] mt-1 text-center">
                {photo.legende}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {photoActive !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[400] flex items-center justify-center p-4 print:hidden"
          onClick={() => setPhotoActive(null)}
          role="dialog"
          aria-label={`Photo agrandie : ${photos[photoActive]?.legende}`}
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-black hover:text-[#c8e600] focus:outline-none focus:ring-2 focus:ring-[#c8e600]"
            onClick={() => setPhotoActive(null)}
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white text-3xl font-black hover:text-[#c8e600] focus:outline-none focus:ring-2 focus:ring-[#c8e600] p-2"
            onClick={(e) => {
              e.stopPropagation()
              setPhotoActive((prev) =>
                prev !== null ? (prev - 1 + photos.length) % photos.length : 0
              )
            }}
            aria-label="Photo précédente"
          >
            ‹
          </button>

          <img
            src={`/src/assets/${photos[photoActive].src}`}
            alt={photos[photoActive].legende}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 text-white text-3xl font-black hover:text-[#c8e600] focus:outline-none focus:ring-2 focus:ring-[#c8e600] p-2"
            onClick={(e) => {
              e.stopPropagation()
              setPhotoActive((prev) =>
                prev !== null ? (prev + 1) % photos.length : 0
              )
            }}
            aria-label="Photo suivante"
          >
            ›
          </button>

          <p className="absolute bottom-4 text-white text-sm font-semibold">
            {photos[photoActive].legende} — {photoActive + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  )
}