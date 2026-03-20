import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Globe, Code2, Palette, Zap, Clock,
  Users, ChevronRight, Github, ExternalLink, Layers, Monitor,
  Smartphone, Rocket
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

export default function WebProjectDetail() {
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
          <span className="text-gray-800 font-medium">Website Portfolio TJKT</span>
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
                <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-widest rounded-full">Web Dev</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">React</span>
                <span className="tag-orange">2024</span>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                Website Portfolio <span className="text-cyan-600">TJKT</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />1 bulan</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />2 siswa</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" />100/100 Lighthouse</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Membangun landing page interaktif menggunakan React dan Tailwind CSS. 
                Website ini menampilkan profil jurusan TJKT, daftar proyek siswa, 
                dan informasi keahlian dengan desain modern dan responsif.
              </p>
              
              <div className="flex gap-4">
                <button className="glass-button group bg-cyan-600 hover:bg-cyan-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </button>
                <button className="glass-button-secondary">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                <div className="bg-white rounded-[22px] overflow-hidden">
                  <div className="bg-slate-900 p-4 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-lg px-3 py-1 text-xs text-gray-400 text-center">
                      tjkt.sch.id
                    </div>
                  </div>
                  <div className="p-8 grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-20 bg-orange-100 rounded-lg mt-4" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-32 bg-cyan-100 rounded-lg" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-16 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Technology <span className="text-cyan-600">Stack</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', icon: '⚛️', desc: 'Frontend Framework' },
              { name: 'Tailwind', icon: '🎨', desc: 'CSS Framework' },
              { name: 'Vite', icon: '⚡', desc: 'Build Tool' },
              { name: 'Vercel', icon: '▲', desc: 'Deployment' },
            ].map((tech, i) => (
              <div key={i} className={`glass-card p-6 text-center reveal stagger-${i + 1}`}>
                <div className="text-4xl mb-2">{tech.icon}</div>
                <h3 className="font-bold text-gray-800">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#fafafa]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-6">Modern <span className="text-cyan-600">Features</span></h2>
              <div className="space-y-6">
                {[
                  { icon: <Monitor className="w-6 h-6" />, title: 'Responsive Design', desc: 'Optimal di desktop, tablet, dan mobile' },
                  { icon: <Zap className="w-6 h-6" />, title: 'Fast Performance', desc: 'Lighthouse score 100/100' },
                  { icon: <Palette className="w-6 h-6" />, title: 'Modern UI', desc: 'Tailwind CSS dengan animasi smooth' },
                  { icon: <Rocket className="w-6 h-6" />, title: 'SEO Optimized', desc: 'Meta tags dan struktur semantic HTML' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal stagger-1">
              <div className="glass-card p-8 bg-slate-900 text-white">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Code2 className="w-5 h-5" />
                  <span>App.jsx</span>
                </div>
                <pre className="text-sm text-cyan-300 overflow-x-auto">
                  <code>{`import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div 
            onClick={() => navigate('/projects/iot-project')}
            className="glass-card p-8 cursor-pointer hover:scale-[1.02] transition-all reveal"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl p-8 flex items-center justify-center">
                <Layers className="w-24 h-24 text-green-600" />
              </div>
              <div className="md:w-2/3">
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold uppercase tracking-widest rounded-full">IoT</span>
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2 mt-2">Smart Home System</h3>
                <p className="text-gray-600 mb-4">Monitoring suhu dan kontrol lampu otomatis berbasis ESP32 dan protokol MQTT...</p>
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