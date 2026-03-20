import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Lightbulb, 
  Code, 
  Briefcase, 
  Clock, 
  Users, 
  ArrowLeft,
  ChevronRight,
  Star,
  Target,
} from 'lucide-react';

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
    longDescription: 'Program Desain & Media kami adalah perjalanan komprehensif ke dunia komunikasi visual. Selama dua tahun, kamu akan mengembangkan keahlian dalam desain grafis, desain antarmuka pengguna (UI/UX), grafis gerak, dan ilustrasi digital.',
    image: '/images/program_design_detail.jpg',
    icon: <Lightbulb className="w-8 h-8" />,
    duration: '2 Tahun',
    students: 45,
    level: 'Pemula ke Mahir',
    color: 'from-purple-500/5 to-white',
    iconColor: 'from-purple-500 to-pink-500',
    stats: [
      { label: 'Keterserapan Kerja', value: '95%', icon: <Target className="w-5 h-5" /> },
      { label: 'Mitra Industri', value: '40+', icon: <Briefcase className="w-5 h-5" /> },
      { label: 'Proyek Siswa', value: '120+', icon: <Star className="w-5 h-5" /> },
    ],
    curriculum: [
      { semester: 'Semester 1', title: 'Dasar Kreatif', courses: ['Dasar Desain Visual', 'Tipografi', 'Teori Warna', 'Software Desain'] },
      { semester: 'Semester 2', title: 'Desain Digital', courses: ['Dasar UI/UX', 'Desain Web', 'Desain Aplikasi Mobile', 'Prototyping'] },
      { semester: 'Semester 3', title: 'Media & Gerak', courses: ['Motion Graphics', 'Editing Video', 'Dasar Animasi', 'Desain 3D'] },
      { semester: 'Semester 4', title: 'Profesional', courses: ['Strategi Brand', 'Pengembangan Portofolio', 'Proyek Klien', 'Magang Industri'] },
    ],
  },
  {
    id: 'engineering',
    title: 'Teknik Teknologi',
    subtitle: 'Hardware, Software & Inovasi',
    longDescription: 'Program Teknik Teknologi (TJKT) mempersiapkanmu untuk masa depan teknologi informasi. Dengan fokus pada aplikasi praktis, kamu akan mempelajari pemrograman, pengembangan IoT, jaringan komputer, dan cloud computing.',
    image: '/images/program_engineering_detail.jpg',
    icon: <Code className="w-8 h-8" />,
    duration: '2.5 Tahun',
    students: 62,
    level: 'Menengah ke Mahir',
    color: 'from-blue-500/5 to-white',
    iconColor: 'from-blue-500 to-cyan-500',
    stats: [
      { label: 'Keterserapan Kerja', value: '92%', icon: <Target className="w-5 h-5" /> },
      { label: 'Mitra Teknologi', value: '35+', icon: <Briefcase className="w-5 h-5" /> },
      { label: 'Proyek Selesai', value: '200+', icon: <Star className="w-5 h-5" /> },
    ],
    curriculum: [
      { semester: 'Semester 1', title: 'Dasar Pemrograman', courses: ['Dasar Python', 'Struktur Data', 'Algoritma', 'Version Control (Git)'] },
      { semester: 'Semester 2', title: 'Web & Mobile', courses: ['Frontend Dev', 'Backend APIs', 'React Native', 'Desain Database'] },
      { semester: 'Semester 3', title: 'Hardware & IoT', courses: ['Sistem Tertanam', 'Arduino & Sensor', 'Protokol IoT', 'Prototipe Perangkat Keras'] },
      { semester: 'Semester 4', title: 'Sistem Lanjut', courses: ['Arsitektur Cloud', 'DevOps', 'Desain Sistem', 'Dasar Keamanan Siber'] },
      { semester: 'Semester 5', title: 'Spesialisasi', courses: ['Integrasi AI/ML', 'Proyek Akhir', 'Magang Industri', 'Persiapan Karir'] },
    ],
  },
  {
    id: 'business',
    title: 'Bisnis & Digital',
    subtitle: 'Pemasaran, Analitik & Operasional',
    longDescription: 'Transformasikan pemahamanmu tentang bisnis modern dengan pendekatan digital-first. Kurikulum komprehensif ini mencakup pemasaran digital, manajemen e-commerce, analisis data, dan strategi bisnis.',
    image: '/images/program_business_detail.jpg',
    icon: <Briefcase className="w-8 h-8" />,
    duration: '2 Tahun',
    students: 43,
    level: 'Pemula ke Menengah',
    color: 'from-green-500/5 to-white',
    iconColor: 'from-green-500 to-emerald-500',
    stats: [
      { label: 'Keterserapan Kerja', value: '88%', icon: <Target className="w-5 h-5" /> },
      { label: 'Mitra Korporat', value: '50+', icon: <Briefcase className="w-5 h-5" /> },
      { label: 'Kampanye Dibuat', value: '150+', icon: <Star className="w-5 h-5" /> },
    ],
    curriculum: [
      { semester: 'Semester 1', title: 'Dasar Bisnis', courses: ['Prinsip Pemasaran', 'Ekonomi Bisnis', 'Skill Komunikasi', 'Tools Digital'] },
      { semester: 'Semester 2', title: 'Pemasaran Digital', courses: ['Strategi Media Sosial', 'Content Marketing', 'SEO/SEM', 'Email Marketing'] },
      { semester: 'Semester 3', title: 'Analitik & Ops', courses: ['Analisis Data', 'Visualisasi', 'E-commerce', 'Manajemen Operasional'] },
      { semester: 'Semester 4', title: 'Strategi Berlanjut', courses: ['Strategi Bisnis', 'Manajemen Proyek', 'Proyek Konsultasi', 'Magang Industri'] },
    ],
  },
];

export default function DetailPrograms() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const program = programs.find(p => p.id.toLowerCase() === id?.toLowerCase());
  
  if (!program) return <div className="min-h-screen bg-white" />;

  const otherPrograms = programs.filter(p => p.id !== id);

  return (
    <div className="relative min-h-screen bg-white mt-[-80px] overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${program.color} h-[650px] pointer-events-none`} />

      <div className="relative z-10 w-full pt-[140px] pb-20">
        
        {/* Breadcrumb */}
        <div className="px-6 lg:px-12 mb-10">
          <nav className="flex items-center gap-3 text-sm reveal">
            <button onClick={() => navigate('/')} className="text-gray-400 hover:text-orange-500 transition-colors">Beranda</button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <button onClick={() => navigate('/programs')} className="text-gray-400 hover:text-orange-500 transition-colors">Program</button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase border border-orange-500/20">
              {program.title}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="px-6 lg:px-12 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <button 
                onClick={() => navigate('/programs')}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold text-gray-500 bg-white border border-gray-100 rounded-xl shadow-sm hover:text-orange-500 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Kembali
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${program.iconColor} text-white shadow-xl`}>
                  {program.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 border-l border-gray-200 pl-4 ml-2">
                  Level: {program.level}
                </span>
              </div>
              
              <h1 className="font-poppins font-bold text-5xl lg:text-7xl text-gray-900 mb-6 leading-[1.05] tracking-tight">
                {program.title}
              </h1>
              <p className="text-xl text-orange-600 font-bold mb-6 italic opacity-80">{program.subtitle}</p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                {program.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="font-bold text-gray-800">{program.duration}</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="font-bold text-gray-800">{program.students} Siswa</span>
                </div>
              </div>
              
              <button className="px-10 py-5 bg-orange-500 text-white rounded-2xl font-black text-lg hover:bg-orange-600 shadow-2xl shadow-orange-500/30 transition-all hover:-translate-y-1">
                Daftar Sekarang
              </button>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-[16px] border-white bg-white">
                <div className="aspect-square">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {program.stats.map((stat, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal">
                  <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    {stat.icon}
                  </div>
                  <div className="text-6xl font-black text-gray-900 mb-3 tracking-tighter">{stat.value}</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                </div>
              ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-24 bg-gray-50/50 px-6 lg:px-12 border-y border-gray-100">
            <div className="text-center mb-20 reveal">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Kurikulum <span className="text-orange-500">Pembelajaran</span></h2>
              <p className="text-gray-500 font-medium">Materi terstruktur untuk mempersiapkan karir di industri masa depan.</p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {program.curriculum.map((sem, index) => (
                <div key={index} className="bg-white rounded-[3rem] p-10 border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 reveal">
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="md:w-1/3">
                      <span className="inline-block px-4 py-1 bg-orange-500 text-white rounded-xl text-[10px] font-black mb-4 uppercase tracking-widest">{sem.semester}</span>
                      <h3 className="text-3xl font-black text-gray-900 leading-tight">{sem.title}</h3>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sem.courses.map((course, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-600 bg-gray-50/50 p-4 rounded-2xl border border-transparent hover:border-orange-100 transition-all font-bold text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Other Programs */}
        <section className="py-24 px-6 lg:px-12 bg-white">
             <h2 className="text-3xl font-black text-gray-900 text-center mb-16 reveal tracking-tight">Program <span className="text-orange-500">Lainnya</span></h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {otherPrograms.map((p) => (
                  <div key={p.id} onClick={() => navigate(`/programs/${p.id}`)} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:border-orange-200 cursor-pointer transition-all group reveal">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${p.iconColor} text-white shadow-lg`}>
                        {p.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 group-hover:text-orange-500 transition-colors tracking-tight">{p.title}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{p.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
        </section>
      </div>
    </div>
  );
}