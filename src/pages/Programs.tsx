import { useEffect } from 'react';
import { Lightbulb, Code, Briefcase, CheckCircle2, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const programs = [
  {
    id: 'design',
    title: 'Desain & Media',
    subtitle: 'Komunikasi Visual & Kreativitas Digital',
    description: 'Kuasai seni bercerita visual melalui branding, desain UI/UX, dan pembuatan multimedia. Pelajari alat dan teknik standar industri yang digunakan oleh para profesional kreatif terkemuka.',
    image: 'images/program_design_detail.jpg',
    icon: <Lightbulb className="w-8 h-8" />,
    duration: '2 Tahun',
    students: 45,
    level: 'Pemula hingga Mahir',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Desain Grafis & Branding',
      'Prinsip Desain UI/UX',
      'Motion Graphics & Animasi',
      'Fotografi & Videografi',
      'Ilustrasi Digital',
      'Pengembangan Portofolio',
    ],
    tools: ['Figma', 'Adobe Creative Suite', 'Blender', 'After Effects'],
    outcomes: [
      'Membuat portofolio desain profesional',
      'Membangun antarmuka web responsif',
      'Mengembangkan sistem identitas merek',
      'Memproduksi konten multimedia',
    ],
  },
  {
    id: 'engineering',
    title: 'Teknik Komputer',
    subtitle: 'Perangkat Keras, Perangkat Lunak & Inovasi',
    description: 'Selami dunia teknologi dengan pengalaman praktis dalam pemrograman, elektronika, dan desain sistem. Bangun proyek nyata sejak hari pertama.',
    image: 'images/program_engineering_detail.jpg',
    icon: <Code className="w-8 h-8" />,
    duration: '2.5 Tahun',
    students: 62,
    level: 'Menengah hingga Mahir',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Dasar-dasar Pemrograman',
      'IoT & Sistem Tertanam',
      'Robotika & Otomasi',
      'Pengembangan Aplikasi Mobile',
      'Cloud Computing',
      'Dasar-dasar AI & Machine Learning',
    ],
    tools: ['Python', 'Arduino', 'React Native', 'AWS', 'TensorFlow'],
    outcomes: [
      'Membangun prototipe fungsional',
      'Mengembangkan aplikasi mobile',
      'Membuat solusi IoT',
      'Menerapkan sistem berbasis cloud',
    ],
  },
  {
    id: 'business',
    title: 'Bisnis & Digital',
    subtitle: 'Pemasaran, Analitik & Operasional',
    description: 'Pelajari dasar-dasar bisnis modern dengan pendekatan digital-first. Kuasai strategi pemasaran, analisis data, dan keunggulan operasional.',
    image: 'images/program_business_detail.jpg',
    icon: <Briefcase className="w-8 h-8" />,
    duration: '2 Tahun',
    students: 43,
    level: 'Pemula hingga Menengah',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Strategi Pemasaran Digital',
      'Analisis Data & Visualisasi',
      'Manajemen E-commerce',
      'Pemasaran Media Sosial',
      'Komunikasi Bisnis',
      'Manajemen Proyek',
    ],
    tools: ['Google Analytics', 'Meta Business', 'Shopify', 'Tableau', 'HubSpot'],
    outcomes: [
      'Membuat kampanye pemasaran',
      'Menganalisis data bisnis',
      'Mengelola toko e-commerce',
      'Mengembangkan strategi bisnis',
    ],
  },
];

export default function Programs() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="orange-bloom -right-[20vw] -top-[20vh]" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <span className="tag-orange mb-6 inline-block">Program Kami</span>
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-gray-800 mb-6">
              Pilih Jalur <span className="gradient-text">Karirmu</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Tiga program komprehensif yang dirancang untuk mempersiapkanmu menghadapi masa depan. 
              Setiap jalur menawarkan pembelajaran praktis dan pengalaman dunia nyata.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div 
                key={program.id}
                className={`glass-card overflow-hidden reveal stagger-${(index % 3) + 1}`}
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  {/* Image */}
                  <div className="lg:w-1/2 h-72 lg:h-auto relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover img-editorial hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 1 ? 'l' : 'r'} from-transparent to-white/30`} />
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${program.color} text-white shadow-lg`}>
                        {program.icon}
                      </div>
                      <div>
                        <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-800">
                          {program.title}
                        </h2>
                        <p className="text-orange-500">{program.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-8">
                      {program.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{program.students} siswa</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{program.level}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-4">
                        Yang Akan Kamu Pelajari
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-4">
                        Alat & Teknologi
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {program.tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 bg-orange-100 text-orange-600 text-sm rounded-lg font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-4">
                        Hasil Pembelajaran
                      </h3>
                      <div className="space-y-2">
                        {program.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span className="text-gray-600 text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                   {/* CTA */}
                    <Link 
                      to={`/programs/${program.id}`}
                      className="glass-button group inline-flex items-center"
                    >
                      Daftar Sekarang
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <span className="tag-orange mb-4 inline-block">Bandingkan</span>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-800 mb-4">
              Perbandingan <span className="gradient-text">Program</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Temukan program yang sempurna sesuai dengan minat dan tujuan karirmu.
            </p>
          </div>

          <div className="glass-card overflow-hidden reveal">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-poppins font-semibold text-gray-800">Fitur</th>
                    {programs.map((program) => (
                      <th key={program.id} className="text-left p-6 font-poppins font-semibold text-gray-800 min-w-[200px]">
                        {program.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Durasi', values: programs.map(p => p.duration) },
                    { label: 'Jumlah Siswa', values: programs.map(p => `${p.students}+`) },
                    { label: 'Tingkat', values: programs.map(p => p.level) },
                    { label: 'Sertifikasi', values: ['Sertifikat Profesional', 'Diploma Teknis', 'Sertifikat Bisnis'] },
                    { label: 'Magang', values: ['Ya', 'Ya', 'Ya'] },
                    { label: 'Penempatan Kerja', values: ['95%', '92%', '88%'] },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0">
                      <td className="p-6 text-gray-600 font-medium">{row.label}</td>
                      {row.values.map((value, i) => (
                        <td key={i} className="p-6 text-gray-600">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}