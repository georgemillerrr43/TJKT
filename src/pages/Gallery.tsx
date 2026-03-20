import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery_01.jpg',
    title: 'Kolaborasi Workshop',
    description: 'Siswa bekerja sama dalam proyek kelompok',
    date: 'Maret 2024',
    location: 'Lab Desain',
    category: 'Workshop',
  },
  {
    id: 2,
    src: '/images/gallery_02.jpg',
    title: 'Presentasi Desain',
    description: 'Menampilkan karya kreatif di depan kelas',
    date: 'Februari 2024',
    location: 'Ruang Presentasi',
    category: 'Presentasi',
  },
  {
    id: 3,
    src: '/images/gallery_03.jpg',
    title: 'Workshop 3D Printing',
    description: 'Belajar pembuatan prototipe dengan printer 3D',
    date: 'Januari 2024',
    location: 'Ruang Maker',
    category: 'Workshop',
  },
  {
    id: 4,
    src: '/images/gallery_04.jpg',
    title: 'Sesi Lab Komputer',
    description: 'Pelatihan software desain',
    date: 'Maret 2024',
    location: 'Lab Komputer',
    category: 'Kelas',
  },
  {
    id: 5,
    src: '/images/gallery_05.jpg',
    title: 'Upacara Kelulusan',
    description: 'Merayakan pencapaian lulusan kami',
    date: 'Desember 2023',
    location: 'Aula Utama',
    category: 'Acara',
  },
  {
    id: 6,
    src: '/images/gallery_06.jpg',
    title: 'Produksi Media',
    description: 'Di balik layar produksi video',
    date: 'Februari 2024',
    location: 'Studio',
    category: 'Workshop',
  },
  {
    id: 7,
    src: '/images/gallery_07.jpg',
    title: 'Team Building',
    description: 'Kegiatan membangun tim di luar ruangan',
    date: 'Januari 2024',
    location: 'Halaman Kampus',
    category: 'Acara',
  },
  {
    id: 8,
    src: '/images/gallery_08.jpg',
    title: 'Workshop Logam',
    description: 'Belajar pengelasan dan keterampilan logam',
    date: 'Maret 2024',
    location: 'Bengkel',
    category: 'Workshop',
  },
  {
    id: 9,
    src: '/images/gallery_09.jpg',
    title: 'Sesi Pemrograman',
    description: 'Kelas pemrograman sedang berlangsung',
    date: 'Februari 2024',
    location: 'Lab Komputer',
    category: 'Kelas',
  },
  {
    id: 10,
    src: '/images/gallery_10.jpg',
    title: 'Perayaan Proyek',
    description: 'Merayakan penyelesaian proyek yang sukses',
    date: 'Maret 2024',
    location: 'Pusat Inovasi',
    category: 'Acara',
  },
  {
    id: 11,
    src: '/images/hero_student_collab.jpg',
    title: 'Kelompok Belajar',
    description: 'Siswa berkolaborasi dalam tugas',
    date: 'Januari 2024',
    location: 'Perpustakaan',
    category: 'Kelas',
  },
  {
    id: 12,
    src: '/images/program_design_detail.jpg',
    title: 'Studio Desain',
    description: 'Pekerjaan kreatif di studio desain',
    date: 'Maret 2024',
    location: 'Studio Desain',
    category: 'Workshop',
  },
];

const categories = ['Semua', 'Workshop', 'Kelas', 'Acara', 'Presentasi'];

export default function Gallery() {
  useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredImages = selectedCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="orange-bloom -right-[20vw] -top-[20vh]" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <span className="tag-orange mb-6 inline-block">
              Momen
            </span>
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-gray-800 mb-6">
              Galeri <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Menangkap momen pembelajaran, kreativitas, dan pencapaian sepanjang perjalanan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl reveal stagger-${(index % 4) + 1}`}
                onClick={() => openLightbox(index)}
              >
                <div className={`aspect-square ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover img-editorial group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                  <p className="text-white/70 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] px-20">
            <img
              src={filteredImages[currentImage].src}
              alt={filteredImages[currentImage].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            
            {/* Info */}
            <div className="mt-6 text-center text-white">
              <h3 className="font-poppins font-semibold text-xl mb-2">
                {filteredImages[currentImage].title}
              </h3>
              <p className="text-white/70 mb-3">
                {filteredImages[currentImage].description}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-white/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {filteredImages[currentImage].date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {filteredImages[currentImage].location}
                </span>
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {currentImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}