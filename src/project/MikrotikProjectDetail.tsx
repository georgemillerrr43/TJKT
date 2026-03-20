import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Shield, Wifi, Users, Clock, ChevronRight,
  Target, CheckCircle2, Download, Lock, Gauge, UserCircle, FileText
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

export default function MikrotikProjectDetail() {
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
          <span className="text-gray-800 font-medium">Hotspot Gateway MikroTik</span>
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
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest rounded-full">MikroTik</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">Security</span>
                <span className="tag-orange">2024</span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Hotspot Gateway <span className="text-red-600">MikroTik</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />2 bulan</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />3 siswa</span>
                <span className="flex items-center gap-1"><Wifi className="w-4 h-4" />Enterprise</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Membangun sistem login hotspot dan manajemen bandwidth menggunakan Winbox. 
                Sistem ini mencakup voucher generation, user profiling, bandwidth limitation, 
                dan monitoring real-time untuk penggunaan jaringan yang optimal.
              </p>
              
              <div className="flex gap-4">
                <button className="glass-button group bg-red-600 hover:bg-red-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Konfigurasi
                </button>
                <button className="glass-button-secondary">
                  Lihat Video Tutorial
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-600 to-orange-600 p-1">
                <div className="bg-white rounded-[22px] overflow-hidden p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-xl p-6 text-center">
                      <Wifi className="w-12 h-12 text-red-500 mx-auto mb-2" />
                      <div className="font-bold text-2xl text-gray-800">500+</div>
                      <div className="text-sm text-gray-500">User Aktif</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 text-center">
                      <Gauge className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                      <div className="font-bold text-2xl text-gray-800">100Mbps</div>
                      <div className="text-sm text-gray-500">Total Bandwidth</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <Lock className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <div className="font-bold text-2xl text-gray-800">WPA2</div>
                      <div className="text-sm text-gray-500">Enterprise</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <UserCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <div className="font-bold text-2xl text-gray-800">3 Level</div>
                      <div className="text-sm text-gray-500">User Profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Fitur <span className="text-red-600">Sistem</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <UserCircle className="w-8 h-8" />, title: 'User Management', desc: 'Sistem voucher dengan QR code dan username/password' },
              { icon: <Gauge className="w-8 h-8" />, title: 'Bandwidth Control', desc: 'Queue tree untuk manajemen bandwidth per user profile' },
              { icon: <Lock className="w-8 h-8" />, title: 'Security', desc: 'Firewall filter dan port knocking untuk proteksi' },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-8 text-center reveal stagger-${i + 1}`}>
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Script */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-6">Konfigurasi <span className="text-red-600">Hotspot</span></h2>
              <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto">
                <pre className="leading-relaxed">
{`/ip hotspot profile
add name=hsprof1 hotspot-address=192.168.88.1 \
   dns-name=hotspot.tjkt.local \
   smtp-server=0.0.0.0 \
   login-by=http-chap,trial \
   trial-uptime-limit=5m \
   trial-uptime-reset=1d

/ip hotspot
add name=hotspot1 interface=bridge1 profile=hsprof1 \
   addresses-per-mac=2 idle-timeout=5m \
   keepalive-timeout=15m

/ip hotspot user profile
add name=Free shared-users=1 \
   rate-limit=1M/1M \
   idle-timeout=5m
add name=Premium shared-users=1 \
   rate-limit=5M/5M \
   idle-timeout=15m`}
                </pre>
              </div>
            </div>
            
            <div className="reveal stagger-1">
              <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-6">User <span className="text-red-600">Profiles</span></h2>
              <div className="space-y-4">
                {[
                  { name: 'Free', speed: '1 Mbps', limit: '100MB/hari', price: 'Gratis', color: 'bg-green-100 text-green-600' },
                  { name: 'Student', speed: '3 Mbps', limit: 'Unlimited', price: 'Rp 25k', color: 'bg-blue-100 text-blue-600' },
                  { name: 'Premium', speed: '10 Mbps', limit: 'Unlimited', price: 'Rp 50k', color: 'bg-orange-100 text-orange-600' },
                ].map((profile, i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${profile.color}`}>{profile.name}</span>
                          <span className="font-bold text-gray-800">{profile.speed}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{profile.limit}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-800">{profile.price}</div>
                        <div className="text-xs text-gray-400">/bulan</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div 
            onClick={() => navigate('/projects/web-project')}
            className="glass-card p-8 cursor-pointer hover:scale-[1.02] transition-all reveal"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-2xl p-8 flex items-center justify-center">
                <FileText className="w-24 h-24 text-cyan-600" />
              </div>
              <div className="md:w-2/3">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-widest rounded-full">Web Dev</span>
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2 mt-2">Website Portfolio TJKT</h3>
                <p className="text-gray-600 mb-4">Membangun landing page interaktif menggunakan React dan Tailwind CSS...</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />1 bulan</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />2 siswa</span>
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