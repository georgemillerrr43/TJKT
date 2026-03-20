import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Cpu, Thermometer, Lightbulb, Wifi,
  Clock, Users, ChevronRight, Layers, Zap, Shield, Code,
  Activity, Smartphone
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

export default function IotProjectDetail() {
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
          <span className="text-gray-800 font-medium">Smart Home System</span>
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
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold uppercase tracking-widest rounded-full">IoT</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full">Arduino</span>
                <span className="tag-orange">2023</span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Smart Home <span className="text-green-600">System</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />2 bulan</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />3 siswa</span>
                <span className="flex items-center gap-1"><Wifi className="w-4 h-4" />MQTT/HTTP</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Monitoring suhu dan kontrol lampu otomatis berbasis ESP32 dan protokol MQTT. 
                Sistem ini mencakup sensor DHT22, relay control, dan dashboard monitoring real-time 
                yang dapat diakses via mobile app.
              </p>
              
              <div className="flex gap-4">
                <button className="glass-button group bg-green-600 hover:bg-green-700">
                  <Activity className="w-4 h-4 mr-2" />
                  Live Dashboard
                </button>
                <button className="glass-button-secondary">
                  <Code className="w-4 h-4 mr-2" />
                  Arduino Code
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-1">
                <div className="bg-white rounded-[22px] overflow-hidden p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <Thermometer className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">24°C</div>
                      <div className="text-sm text-gray-500">Suhu Ruangan</div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-6 text-center">
                      <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">ON</div>
                      <div className="text-sm text-gray-500">Lampu Utama</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <Wifi className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">-45dBm</div>
                      <div className="text-sm text-gray-500">Signal WiFi</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 text-center">
                      <Zap className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                      <div className="font-bold text-3xl text-gray-800">12W</div>
                      <div className="text-sm text-gray-500">Power Usage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Komponen <span className="text-green-600">Hardware</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'ESP32', desc: 'Main Controller', icon: <Cpu className="w-8 h-8" /> },
              { name: 'DHT22', desc: 'Temp & Humidity', icon: <Thermometer className="w-8 h-8" /> },
              { name: 'Relay Module', desc: '4 Channel 5V', icon: <Zap className="w-8 h-8" /> },
              { name: 'LED Strip', desc: 'WS2812B RGB', icon: <Lightbulb className="w-8 h-8" /> },
            ].map((item, i) => (
              <div key={i} className={`glass-card p-6 text-center reveal stagger-${i + 1}`}>
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12">
          <div 
            onClick={() => navigate('/projects/server-project')}
            className="glass-card p-8 cursor-pointer hover:scale-[1.02] transition-all reveal"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-slate-100 to-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <Layers className="w-24 h-24 text-slate-600" />
              </div>
              <div className="md:w-2/3">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full">Linux</span>
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2 mt-2">Linux Server Management</h3>
                <p className="text-gray-600 mb-4">Konfigurasi Web Server, Database, dan Mail Server pada distribusi Ubuntu Server...</p>
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