import { useEffect, useState } from 'react';
import { Search, Filter, MapPin, Mail, Linkedin, Instagram, Award, Star, Palette} from 'lucide-react';

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

const members = [
  {
    id: 1,
    name: 'Rizky Perdana',
    role: 'IT Advanced',
    program: 'Engineering Tech',
    image: 'images/joji.jpeg',
    location: 'Jakarta',
    bio: 'Just do it.',
    skills: ['UI/UX', 'Development', 'Jaringan'],
    projects: 50,
    achievements: 10,
    social: { linkedin: '#', instagram: '#' },
    featured: true,
    icon: <Palette className="w-5 h-5" />,
  },
    {
    id: 2,
    name: 'Zahra Adeliana',
    role: 'Musikal Artist',
    program: 'Musik & Seni',
    image: 'images/adel.jpeg',
    location: 'Karawang',
    bio: 'Low life princess.',
    skills: ['Musik', 'Vokal', 'Jaringan'],
    projects: 7,
    achievements: 2,
    social: { linkedin: '#', instagram: '#' },
    featured: true,
    icon: <Palette className="w-5 h-5" />,
  },
   {
    id: 3,
    name: ' Afif Naufal ',
    role: 'Grafis Artist',
    program: 'Grafis & Seni',
    image: 'images/afif.jpeg',
    location: 'Yogyakarta',
    bio: 'Need to know.',
    skills: ['Musik', 'Fotografi', 'Jaringan'],
    projects: 4,
    achievements: 2,
    social: { linkedin: '#', instagram: '#' },
    featured: true,
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: 4,
    name: 'Rendi  Ardiansyah',
    role: 'Grafis Designer',
    program: 'Grafis & Seni',
    image: 'images/rendi.jpeg',
    location: 'Bandung',
    bio: 'Rumah gak harus bangunan, bisa uang.',
    skills: ['Design', 'Web Development', 'Olahraga'],
    projects: 8,
    achievements: 4,
    social: { linkedin: '#', instagram: '#' },
    featured: true,
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: 5,
    name: ' M. Rikzan Faiz',
    role: 'Grafis Designer',
    program: 'Grafis & Seni',
    image: 'images/faiz.jpeg',
    location: 'Karawang',
    bio: 'Waktu singkat, Cerita harus hebat.',
    skills: ['Musik', 'Fotografi', 'Jaringan'],
    projects: 17,
    achievements: 5,
    social: { linkedin: '#', instagram: '#' },
    featured: true,
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: 6,
    name: 'Pasha Fauzi',
    role: 'Altet',
    program: 'Sport & Kesehatan',
    image: 'images/pasha.jpeg',
    location: 'Karawang',
    bio: 'Start with intention',
    skills: ['Olahraga', 'Fotografi', 'Design'],
    projects: 6,
    achievements: 2,
    social: { linkedin: '#', instagram: '#' },
    featured: true,
    icon: <Palette className="w-5 h-5" />,
  },
];

const programs = ['All Programs', 'Design & Media', 'Engineering Tech', 'Business & Digital'];

export default function Members() {
  useScrollReveal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('All Programs');

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = selectedProgram === 'All Programs' || member.program === selectedProgram;
    return matchesSearch && matchesProgram;
  });

  const featuredMembers = members.filter(m => m.featured);
  const regularMembers = filteredMembers.filter(m => !m.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="orange-bloom -right-[20vw] -top-[20vh]" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <span className="tag-orange mb-6 inline-block">Siswa kami</span>
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-gray-800 mb-6">
              Temui siswa <span className="gradient-text">berbakat kami</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Jelajahi profil siswa kami yang luar biasa, dari desainer kreatif hingga pengembang inovatif. Temukan perjalanan mereka, proyek menonjol, dan dampak yang mereka buat di dunia nyata.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-12 reveal">
            <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-2">Daftar Siswa</h2>
            <p className="text-gray-600">Jelajahi profil siswa kami yang luar biasa</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`glass-card overflow-hidden reveal stagger-${index + 1}`}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-64 sm:h-auto relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover img-editorial"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                        {member.icon}
                        {member.program}
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-3/5 p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-poppins font-bold text-xl text-gray-800">{member.name}</h3>
                        <p className="text-orange-500">{member.role}</p>
                      </div>
                      <div className="flex gap-2">
                        <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={member.social.instagram} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors">
                          <Instagram className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      {member.location}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-600">{member.projects} Projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-600">{member.achievements} Awards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Members */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 reveal">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-2">All Members</h2>
              <p className="text-gray-600">{filteredMembers.length} members found</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 w-full sm:w-64"
                />
              </div>

              {/* Program Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 w-full sm:w-48 appearance-none cursor-pointer"
                >
                  {programs.map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`glass-card p-6 group hover:scale-[1.03] transition-all duration-500 reveal stagger-${(index % 4) + 1}`}
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover img-editorial mx-auto ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all"
                  />
                  <div className="absolute bottom-0 right-1/3 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                </div>

                <div className="text-center mb-4">
                  <h4 className="font-poppins font-semibold text-lg text-gray-800 group-hover:text-orange-500 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-orange-500 text-sm">{member.role}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.skills.slice(0, 2).map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-2">
                  <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.instagram} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@email.com`} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
