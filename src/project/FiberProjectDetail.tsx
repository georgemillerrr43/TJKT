import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Layers, Activity, CheckCircle2, 
  Clock, Users, ChevronRight, Target, Lightbulb, Eye,
  Zap, Settings, FileText
} from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function FiberProjectDetail() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="w-full px-6 lg:px-12 pt-24 pb-6 bg-[#fafafa]">
        <div className="flex items-center gap-2 text-sm text-gray-500 reveal">
          <button onClick={() => navigate('/')} className="hover:text-orange-500 transition-colors">Home</button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => navigate('/projects')} className="hover:text-orange-500 transition-colors">Projects</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Fiber Optic Splicing</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2 reveal">
              <button 
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Projects
              </button>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full">TJKT</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-widest rounded-full">Hardware</span>
                <span className="tag-orange">2024</span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Fiber Optic <span className="text-indigo-600">Splicing</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />1 bulan</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />6 siswa</span>
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" />OTDR Testing</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Praktik penyambungan kabel fiber optik dan pengujian menggunakan OTDR (Optical Time Domain Reflectometer). 
                Proyek ini mencakup teknik fusion splicing, mechanical splicing, dan analisis loss menggunakan 
                peralatan standar industri.
              </p>
              
              <div className="flex gap-4">
                <button className="glass-button group bg-indigo-600 hover:bg-indigo-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Laporan
                </button>
                <button className="glass-button-secondary">
                  Lihat Video Praktik
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="bg-white rounded-[22px] overflow-hidden p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-50 rounded-xl p-6 text-center">
                      <Layers className="w-12 h-12 text-indigo-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">50+</div>
                      <div className="text-sm text-gray-500">Splicing Selesai</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 text-center">
                      <Activity className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">0.02dB</div>
                      <div className="text-sm text-gray-500">Avg Insertion Loss</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <Zap className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">99.9%</div>
                      <div className="text-sm text-gray-500">Success Rate</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 text-center">
                      <Settings className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">3</div>
                      <div className="text-sm text-gray-500">Jenis Splicing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Teknik <span className="text-indigo-600">Splicing</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Metode penyambungan fiber optik yang dipelajari</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: 'Fusion Splicing', 
                desc: 'Penyambungan menggunakan electric arc untuk menyatukan dua fiber dengan loss minimal (< 0.1dB)' 
              },
              { 
                icon: <Settings className="w-8 h-8" />, 
                title: 'Mechanical Splicing', 
                desc: 'Menggunakan alignment fixture dan index matching gel untuk splicing cepat tanpa listrik' 
              },
              { 
                icon: <Layers className="w-8 h-8" />, 
                title: 'Connectorization', 
                desc: 'Pemasangan konektor SC, LC, dan FC dengan teknik polishing yang presisi' 
              },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-8 text-center reveal stagger-${i + 1}`}>
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12">
          <div 
            onClick={() => navigate('/projects/cisco-project')}
            className="glass-card p-8 cursor-pointer hover:scale-[1.02] transition-all reveal"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl p-8 flex items-center justify-center">
                <Layers className="w-24 h-24 text-blue-600" />
              </div>
              <div className="md:w-2/3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">Networking</span>
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2 mt-2">Perancangan Jaringan Cisco</h3>
                <p className="text-gray-600 mb-4">Implementasi routing statis dan dinamis (OSPF) pada infrastruktur jaringan skala menengah...</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />3 bulan</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />4 siswa</span>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-gray-400 hidden md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}