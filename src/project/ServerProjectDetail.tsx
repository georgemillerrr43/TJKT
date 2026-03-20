import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Server, Database, Mail, Globe,
  Clock, Users, ChevronRight, Terminal, Shield, CheckCircle2,
  Lock, FileText, Settings
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

export default function ServerProjectDetail() {
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
          <span className="text-gray-800 font-medium">Linux Server Management</span>
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
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full">Linux</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full">Server</span>
                <span className="tag-orange">2023</span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Linux Server <span className="text-slate-600">Management</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />3 bulan</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />4 siswa</span>
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" />Ubuntu 22.04 LTS</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Konfigurasi Web Server (Apache/Nginx), Database (MySQL), dan Mail Server (Postfix/Dovecot) 
                pada distribusi Ubuntu Server. Proyek ini mencakup hardening, backup automation, 
                dan monitoring menggunakan tools standar industri.
              </p>
              
              <div className="flex gap-4">
                <button className="glass-button group bg-slate-700 hover:bg-slate-800">
                  <Terminal className="w-4 h-4 mr-2" />
                  Lihat Konfigurasi
                </button>
                <button className="glass-button-secondary">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Laporan
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-600 to-gray-800 p-1">
                <div className="bg-slate-900 rounded-[22px] overflow-hidden p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs">root@tjkt-server:~</span>
                  </div>
                  <div className="space-y-2 text-green-400">
                    <p>$ sudo systemctl status apache2</p>
                    <p className="text-white">● apache2.service - The Apache HTTP Server</p>
                    <p className="text-white ml-4">Loaded: loaded (/etc/init.d/apache2)</p>
                    <p className="text-white ml-4">Active: <span className="text-green-400">active (running)</span></p>
                    <p className="animate-pulse mt-4">$ _</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Stack */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Server <span className="text-slate-600">Stack</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: 'Web Server', tech: 'Apache + Nginx', desc: 'Reverse proxy setup dengan load balancing' },
              { icon: <Database className="w-8 h-8" />, title: 'Database', tech: 'MySQL 8.0', desc: 'Master-slave replication dan backup otomatis' },
              { icon: <Mail className="w-8 h-8" />, title: 'Mail Server', tech: 'Postfix + Dovecot', desc: 'SMTP, IMAP, dan anti-spam dengan SpamAssassin' },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-8 reveal stagger-${i + 1}`}>
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-800 mb-1">{item.title}</h3>
                <div className="text-orange-500 font-semibold text-sm mb-3">{item.tech}</div>
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
            onClick={() => navigate('/projects/fiber-project')}
            className="glass-card p-8 cursor-pointer hover:scale-[1.02] transition-all reveal"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
                <Globe className="w-24 h-24 text-indigo-600" />
              </div>
              <div className="md:w-2/3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full">TJKT</span>
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2 mt-2">Fiber Optic Splicing</h3>
                <p className="text-gray-600 mb-4">Praktik penyambungan kabel fiber optik dan pengujian menggunakan OTDR...</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />1 bulan</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />6 siswa</span>
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