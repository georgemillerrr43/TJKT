import { useEffect, useState } from 'react';
import { ArrowRight, Search, Github, Network, Shield, Globe, Cpu, Laptop, Layers } from 'lucide-react';
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

const projects = [
  {
    id: 'cisco-project',
    title: 'Perancangan Jaringan Cisco',
    description: 'Implementasi routing statis dan dinamis (OSPF) pada infrastruktur jaringan skala menengah.',
    image: 'images/project_cisco.jpg',
    tags: ['Networking', 'Cisco'],
    year: '2024',
    icon: <Network className="w-6 h-6 transition-colors duration-300" />
  },
  {
    id: 'mikrotik-project',
    title: 'Hotspot Gateway MikroTik',
    description: 'Membangun sistem login hotspot dan manajemen bandwidth menggunakan Winbox.',
    image: 'images/project_mikrotik.jpg',
    tags: ['MikroTik', 'Security'],
    year: '2024',
    icon: <Shield className="w-6 h-6 transition-colors duration-300" />
  },
  {
    id: 'web-project',
    title: 'Website Portfolio TJKT',
    description: 'Membangun landing page interaktif menggunakan React dan Tailwind CSS.',
    image: 'images/project_web.jpg',
    tags: ['Web Dev', 'React'],
    year: '2024',
    icon: <Globe className="w-6 h-6 transition-colors duration-300" />
  },
  {
    id: 'iot-project',
    title: 'Smart Home System',
    description: 'Monitoring suhu dan kontrol lampu otomatis berbasis ESP32 dan protokol MQTT.',
    image: 'images/project_iot.jpg',
    tags: ['IoT', 'Arduino'],
    year: '2023',
    icon: <Cpu className="w-6 h-6 transition-colors duration-300" />
  },
  {
    id: 'server-project',
    title: 'Linux Server Management',
    description: 'Konfigurasi Web Server, Database, dan Mail Server pada distribusi Ubuntu Server.',
    image: 'images/project_server.jpg',
    tags: ['Linux', 'Server'],
    year: '2023',
    icon: <Laptop className="w-6 h-6 transition-colors duration-300" />
  },
  {
    id: 'fiber-project',
    title: 'Fiber Optic Splicing',
    description: 'Praktik penyambungan kabel fiber optik dan pengujian menggunakan OTDR.',
    image: 'images/project_fo.jpg',
    tags: ['TJKT', 'Hardware'],
    year: '2024',
    icon: <Layers className="w-6 h-6 transition-colors duration-300" />
  }
];

export default function Projects() {
  useScrollReveal();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-[#fafafa]">
        <div className="orange-bloom -right-[20vw] -top-[20vh]" />
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <span className="tag-orange mb-6 inline-block uppercase tracking-widest text-xs font-bold bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full">
              Karya Siswa TJKT
            </span>
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-gray-800 mb-6">
              Daftar Proyek <span className="gradient-text">Teknis</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Dokumentasi nyata hasil praktik laboratorium kejuruan dalam bidang Jaringan, Telekomunikasi, dan Web.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="py-12">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 reveal">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Cari proyek teknis..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* LIST PROYEK */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group reveal bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Icon & Year */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {project.icon}
                  </div>
                  <span className="text-gray-400 font-bold text-sm tracking-tighter">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-8 line-clamp-2 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link - DIUBAH: pakai /projects/{id} */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center font-bold text-gray-900 group-hover:text-orange-600 transition-all"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  {project.id === 'web-project' && (
                    <a href="#" className="text-gray-400 hover:text-gray-900">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">Tidak ada proyek yang cocok.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}