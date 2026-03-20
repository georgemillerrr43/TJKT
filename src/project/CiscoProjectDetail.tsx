import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Network, Server, Shield, Terminal,
  ChevronRight, Clock, Users, Target, CheckCircle2, Download,
  Monitor, Router, Globe, Activity
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

export default function CiscoProjectDetail() {
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
          <span className="text-gray-800 font-medium">Perancangan Jaringan Cisco</span>
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
                <span className="tag-orange">Networking</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">Cisco</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold uppercase tracking-widest rounded-full">2024</span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Perancangan Jaringan <span className="gradient-text">Cisco</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />3 bulan</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />4 siswa</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" />Advanced Level</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Implementasi routing statis dan dinamis (OSPF) pada infrastruktur jaringan skala menengah. 
                Proyek ini mencakup konfigurasi VLAN, inter-VLAN routing, dan implementasi Access Control Lists (ACL) 
                untuk keamanan jaringan.
              </p>
              
              <div className="flex gap-4">
                <button className="glass-button group">
                  <Download className="w-4 h-4 mr-2" />
                  Download Dokumentasi
                </button>
                <button className="glass-button-secondary">
                  Lihat Topologi
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1">
                <div className="bg-white rounded-[22px] overflow-hidden p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900 rounded-xl p-4 text-green-400 font-mono text-xs">
                      <div className="flex items-center gap-2 mb-2 text-gray-400">
                        <Terminal className="w-4 h-4" />
                        <span>Router-1</span>
                      </div>
                      <p>enable</p>
                      <p>configure terminal</p>
                      <p>router ospf 1</p>
                      <p>network 192.168.1.0</p>
                      <p className="animate-pulse">_</p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-orange-50 rounded-xl p-4">
                        <Network className="w-8 h-8 text-orange-500 mb-2" />
                        <div className="font-bold text-gray-800">5 Router</div>
                        <div className="text-sm text-gray-500">Cisco 2901 Series</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <Server className="w-8 h-8 text-blue-500 mb-2" />
                        <div className="font-bold text-gray-800">3 VLAN</div>
                        <div className="text-sm text-gray-500">HR, IT, Finance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Capaian <span className="gradient-text">Pembelajaran</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kompetensi yang dikembangkan melalui proyek ini</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Router className="w-8 h-8" />, title: 'Routing Protocol', desc: 'Konfigurasi OSPF dan routing statis antar subnet' },
              { icon: <Shield className="w-8 h-8" />, title: 'Network Security', desc: 'Implementasi ACL dan port security' },
              { icon: <Monitor className="w-8 h-8" />, title: 'VLAN Management', desc: 'Segmentasi jaringan dan inter-VLAN routing' },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-8 text-center reveal stagger-${i + 1}`}>
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Topology */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Topologi <span className="gradient-text">Jaringan</span></h2>
          </div>
          
          <div className="glass-card p-8 reveal">
            <div className="bg-slate-900 rounded-2xl p-8 overflow-x-auto">
              <svg viewBox="0 0 800 400" className="w-full min-w-[600px]">
                {/* Internet Cloud */}
                <ellipse cx="400" cy="50" rx="60" ry="30" fill="#3b82f6" opacity="0.2" />
                <text x="400" y="55" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">INTERNET</text>
                
                {/* Edge Router */}
                <rect x="360" y="100" width="80" height="40" rx="5" fill="#f97316" />
                <text x="400" y="125" textAnchor="middle" fill="white" fontSize="10">Edge-Router</text>
                
                {/* Core Switches */}
                <rect x="200" y="180" width="80" height="40" rx="5" fill="#3b82f6" />
                <text x="240" y="205" textAnchor="middle" fill="white" fontSize="10">Core-SW-1</text>
                
                <rect x="520" y="180" width="80" height="40" rx="5" fill="#3b82f6" />
                <text x="560" y="205" textAnchor="middle" fill="white" fontSize="10">Core-SW-2</text>
                
                {/* Distribution Switches */}
                <rect x="100" y="280" width="80" height="40" rx="5" fill="#10b981" />
                <text x="140" y="305" textAnchor="middle" fill="white" fontSize="9">Dist-HR</text>
                
                <rect x="240" y="280" width="80" height="40" rx="5" fill="#10b981" />
                <text x="280" y="305" textAnchor="middle" fill="white" fontSize="9">Dist-IT</text>
                
                <rect x="480" y="280" width="80" height="40" rx="5" fill="#10b981" />
                <text x="520" y="305" textAnchor="middle" fill="white" fontSize="9">Dist-Finance</text>
                
                {/* Connections */}
                <line x1="400" y1="80" x2="400" y2="100" stroke="#60a5fa" strokeWidth="2" />
                <line x1="400" y1="140" x2="240" y2="180" stroke="#60a5fa" strokeWidth="2" />
                <line x1="400" y1="140" x2="560" y2="180" stroke="#60a5fa" strokeWidth="2" />
                <line x1="200" y1="220" x2="140" y2="280" stroke="#10b981" strokeWidth="2" />
                <line x1="280" y1="220" x2="280" y2="280" stroke="#10b981" strokeWidth="2" />
                <line x1="560" y1="220" x2="520" y2="280" stroke="#10b981" strokeWidth="2" />
                
                {/* VLAN Labels */}
                <text x="140" y="350" textAnchor="middle" fill="#6b7280" fontSize="10">VLAN 10</text>
                <text x="280" y="350" textAnchor="middle" fill="#6b7280" fontSize="10">VLAN 20</text>
                <text x="520" y="350" textAnchor="middle" fill="#6b7280" fontSize="10">VLAN 30</text>
              </svg>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="w-4 h-4 bg-orange-500 rounded mx-auto mb-2" />
                <span className="text-sm text-gray-600">Router</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2" />
                <span className="text-sm text-gray-600">Core Switch</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded mx-auto mb-2" />
                <span className="text-sm text-gray-600">Distribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Details */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-6">Konfigurasi <span className="gradient-text">OSPF</span></h2>
              <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto">
                <div className="flex items-center gap-2 mb-4 text-gray-400 border-b border-gray-700 pb-2">
                  <Terminal className="w-4 h-4" />
                  <span>Router-1 Configuration</span>
                </div>
                <pre className="leading-relaxed">
{`Router> enable
Router# configure terminal
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0
Router(config-router)# passive-interface Gig0/0
Router(config-router)# end
Router# copy running-config startup-config`}
                </pre>
              </div>
            </div>
            
            <div className="reveal stagger-1">
              <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-6">VLAN <span className="gradient-text">Configuration</span></h2>
              <div className="space-y-4">
                {[
                  { vlan: 'VLAN 10', name: 'HR Department', subnet: '192.168.10.0/24', ports: 'Gi1/0/1-12' },
                  { vlan: 'VLAN 20', name: 'IT Department', subnet: '192.168.20.0/24', ports: 'Gi1/0/13-24' },
                  { vlan: 'VLAN 30', name: 'Finance', subnet: '192.168.30.0/24', ports: 'Gi2/0/1-12' },
                ].map((vlan, i) => (
                  <div key={i} className="glass-card p-4 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-800">{vlan.vlan} - {vlan.name}</div>
                      <div className="text-sm text-gray-500">{vlan.subnet}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-orange-500">{vlan.ports}</div>
                      <div className="text-xs text-gray-400">Switch Ports</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Results */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12">
          <div className="glass-card p-12 reveal">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Hasil <span className="gradient-text">Pengujian</span></h2>
              <p className="text-gray-600">Metrik performa jaringan setelah konfigurasi</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">5ms</div>
                <div className="text-gray-500 text-sm">Latency</div>
              </div>
              <div>
                <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">1Gbps</div>
                <div className="text-gray-500 text-sm">Throughput</div>
              </div>
              <div>
                <CheckCircle2 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">99.9%</div>
                <div className="text-gray-500 text-sm">Uptime</div>
              </div>
              <div>
                <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">100%</div>
                <div className="text-gray-500 text-sm">ACL Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center mb-8 reveal">
            <h2 className="font-poppins font-bold text-2xl text-gray-800">Proyek Lainnya</h2>
          </div>
          
          <div 
            onClick={() => navigate('/projects/mikrotik-project')}
            className="glass-card p-8 cursor-pointer hover:scale-[1.02] transition-all reveal"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 flex items-center justify-center">
                <Shield className="w-24 h-24 text-orange-500" />
              </div>
              <div className="md:w-2/3">
                <span className="tag-orange mb-2 inline-block">MikroTik</span>
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2">Hotspot Gateway MikroTik</h3>
                <p className="text-gray-600 mb-4">Membangun sistem login hotspot dan manajemen bandwidth menggunakan Winbox...</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />2 bulan</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />3 siswa</span>
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