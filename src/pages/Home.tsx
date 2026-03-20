import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronRight, Users, Lightbulb, 
  Code, Briefcase, Award, Star, Zap, TrendingUp, BookOpen
} from 'lucide-react';

// Custom hook for scroll reveal

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

// Hero Section
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="section-pinned bg-gray-50 flex items-center justify-center pt-24 pb-12 min-h-screen relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />
      
      {/* Orange Bloom */}
      <div className="orange-bloom -right-[25vw] -top-[15vh]" />
      
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className={`glass-card w-full max-w-7xl mx-auto flex flex-col lg:flex-row overflow-hidden opacity-0 ${isLoaded ? 'animate-scale-in' : ''}`}>
          {/* Left Content */}
          <div className="flex-1 p-8 lg:p-14 flex flex-col justify-center">
            <div 
              className={`tag-orange mb-6 w-fit opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <Zap className="w-3 h-3 mr-2" />
              Kejuruan Unggulan
            </div>
            
            <h1 
              className={`font-poppins font-bold text-4xl lg:text-6xl text-gray-800 leading-tight mb-6 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Tunjukan karya<br />
              <span className="gradient-text">kreatif mu!</span>
            </h1>
            
            <p 
              className={`text-gray-600 text-lg mb-10 max-w-md opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
             Portfolio modern milik anak kejuruan TJKT yang menampilkan karya kreatif dan inovatif. Temukan inspirasi, jelajahi proyek, dan lihat bagaimana siswa kami mengubah ide menjadi kenyataan.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <Link to="/programs" className="glass-button group">
                Jelajahi Program
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/members" className="glass-button-secondary">
                Lihat semua siswa
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`flex gap-8 mt-10 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              {[
                { value: '50', label: 'Siswa' },
                { value: '50+', label: 'Proyek' },
                { value: '12', label: 'Penghargaan' },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="font-poppins font-bold text-2xl text-gray-800">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[48%] h-80 lg:h-auto relative">
            <img
              src="images/Tjkt1.png"
              alt="Students collaborating"
              className="w-full h-full object-cover img-editorial lg:rounded-r-[32px]"
            />
            
            {/* Floating Badges */}
            <div className="floating-badge top-6 right-6" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Class Average</p>
                  <p className="font-bold text-gray-800">A+ Grade</p>
                </div>
              </div>
            </div>
            
            <div className="floating-badge bottom-6 left-6" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Star className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Proyek kami</p>
                  <p className="font-bold text-gray-800">50+ Selesai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Programs Preview Section
function ProgramsPreview() {
  useScrollReveal();
  
  const programs = [
    {
      title: 'Design & Media',
      description: 'Branding, UI/UX, and visual storytelling.',
      image: '/images/gallery_04.jpg',
      icon: <Lightbulb className="w-6 h-6" />,
      students: 15,
    },
    {
      title: 'Engineering Tech',
      description: 'Prototyping, systems, and smart hardware.',
      image: '/images/gallery_03.jpg',
      icon: <Code className="w-6 h-6" />,
      students: 20,
    },
    {
      title: 'Business & Digital',
      description: 'Marketing, operations, and analytics.',
      image: '/images/gallery_02.jpg',
      icon: <Briefcase className="w-6 h-6" />,
      students: 35,
    },
  ];

  return (
    <section className="section-flowing bg-gray-50 py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between reveal">
          <div>
            <span className="tag-orange mb-4 inline-block">Program kami</span>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
              Jelajahi <span className="gradient-text">semua</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Temukan program kejuruan kami yang dirancang untuk mengasah keterampilan dan membangun portofolio yang kuat. Dari desain hingga teknologi, kami memiliki sesuatu untuk setiap minat.
            </p>
          </div>
          <Link to="/programs" className="text-orange-500 font-medium inline-flex items-center mt-4 lg:mt-0 group">
            Lihat semua program
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to="/programs"
              className={`glass-card card-shine group cursor-pointer reveal stagger-${index + 1}`}
            >
              {/* Image */}
              <div className="h-52 lg:h-60 overflow-hidden rounded-t-[32px]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover img-editorial group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-200 rounded-full" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{program.students} Siswa kami</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Members Section
function FeaturedMembers() {
  useScrollReveal();
  
  const members = [
    {
      name: 'Rizky Perdana',
      role: 'IT Advanced',
      image: '/images/joji.jpeg',
    },
    {
      name: 'Zahra Adeliana',
      role: 'Musikal Artist',
      image: '/images/adel.jpeg',
    },
    {
      name: 'Afif Naufal ',
      role: 'Grafis Artist',
      image: '/images/afif.jpeg',
    },
    {
      name: 'Rendi Ardiansyah',
      role: 'Grafis Designer',
      image: '/images/rendi.jpeg',
    },
  ];

  return (
    <section className="section-flowing bg-gray-50 py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center reveal">
          <span className="tag-orange mb-4 inline-block">Siswa Unggulan</span>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
            Temui siswa<span className="gradient-text"> bertalenta kami</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Individu kreatif dan inovatif yang siap membentuk masa depan teknologi.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Link
              key={index}
              to="/members"
              className={`glass-card p-6 text-center group hover:scale-[1.03] transition-all duration-500 reveal stagger-${index + 1}`}
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover img-editorial mx-auto ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all"
                />
                <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <h4 className="font-poppins font-semibold text-lg text-gray-800 group-hover:text-orange-500 transition-colors">
                {member.name}
              </h4>
              <p className="text-orange-500 text-sm">{member.role}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link to="/members" className="glass-button-secondary">
            Liat semua siswa
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Featured Projects Section
function FeaturedProjects() {
  useScrollReveal();
  
  const projects = [
    {
      title: 'EcoPack Redesign',
      description: 'Sustainable packaging concept with user research.',
      image: '/images/project_ecopack.jpg',
      tags: ['UI/UX', 'Sustainability'],
    },
    {
      title: 'Smart Campus App',
      description: 'Mobile app for campus navigation and scheduling.',
      image: '/images/gallery_01.jpg',
      tags: ['Mobile', 'Flutter'],
    },
    {
      title: 'Brand Identity System',
      description: 'Complete visual identity for local businesses.',
      image: '/images/gallery_06.jpg',
      tags: ['Branding'],
    },
  ];

  return (
    <section className="section-flowing bg-gray-50 py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between reveal">
          <div>
            <span className="tag-orange mb-4 inline-block">Proyek Terbaru</span>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
              Hasil <span className="gradient-text">Siswa kami</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Proyek nyata yang berhasil dibuat, dengan kreatifitas tinggi dan inovasi yang luar biasa. Lihat bagaimana siswa kami menerapkan keterampilan mereka untuk menciptakan solusi yang berdampak.
            </p>
          </div>
          <Link to="/projects" className="text-orange-500 font-medium inline-flex items-center mt-4 lg:mt-0 group">
            Lihat semua proyek
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className={`glass-card overflow-hidden group cursor-pointer reveal stagger-${index + 1}`}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-editorial group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-poppins font-semibold text-xl text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  useScrollReveal();
  
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '50', label: 'Siswa Aktif' },
    { icon: <BookOpen className="w-6 h-6" />, value: '12', label: 'Program' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '95%', label: 'Rasio Sukses' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Penghargaan Diperoleh' },
  ];

  return (
    <section className="section-flowing bg-gray-50 py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        <div className="glass-card p-8 lg:p-14 reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mx-auto mb-4 text-orange-500">
                  {stat.icon}
                </div>
                <p className="font-poppins font-bold text-3xl lg:text-4xl text-gray-800 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  useScrollReveal();
  
  return (
    <section className="section-flowing bg-gray-50 py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12">
        <div className="glass-card-dark p-8 lg:p-14 text-center reveal relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-[80px]" />
          
          <div className="relative z-10">
            <span className="tag-orange mb-6 inline-block">Bergabung bersama kami</span>
            <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-white mb-6">
              untuk masa depan <span className="gradient-text">yang lebih indah</span>!
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
               bersama-sama kita bisa menciptakan karya-karya yang luar biasa dan membentuk masa depan yang lebih cerah. Jangan ragu untuk menghubungi kami dan menjadi bagian dari komunitas kreatif kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="glass-button">
                Kontak kami
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/programs" className="glass-button-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
                Lihat program kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsPreview />
      <StatsSection />
      <FeaturedMembers />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
