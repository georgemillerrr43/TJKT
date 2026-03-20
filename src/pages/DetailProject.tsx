import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Users, 
  Calendar, 
  Tag, 
  ChevronRight,
  Clock,
  Target,
  Lightbulb,
  Code2,
  Layers,
  Share2,
  Heart
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

const projects = [
  {
    id: '1',
    title: 'EcoPack Redesign',
    description: 'A sustainable packaging concept built around user research, rapid prototyping, and clear visual hierarchy. Winner of the National Design Award 2024.',
    longDescription: 'EcoPack Redesign represents a comprehensive approach to sustainable packaging design. The project began with extensive user research to understand pain points in current packaging solutions. Through iterative prototyping and testing, we developed a biodegradable packaging system that reduces material usage by 40% while maintaining structural integrity. The design incorporates modular components that adapt to various product sizes, eliminating the need for multiple packaging SKUs.',
    image: '/images/project_ecopack.jpg',
    gallery: ['/images/gallery_01.jpg', '/images/gallery_02.jpg', '/images/gallery_03.jpg'],
    tags: ['UI/UX', 'Prototype', 'Sustainability', 'Design System'],
    team: ['Alya Rahma', 'Raka Santoso', 'Maya Putri'],
    duration: '3 months',
    year: '2024',
    category: 'Design',
    link: '#',
    github: '#',
    featured: true,
    challenge: 'Create sustainable packaging that reduces environmental impact without compromising functionality or user experience.',
    solution: 'Developed a modular, biodegradable packaging system using mycelium-based materials with a honeycomb structural pattern for strength.',
    results: ['40% reduction in material usage', '100% biodegradable components', 'National Design Award 2024', 'Featured in Design Week Magazine'],
    techStack: ['Figma', 'Blender', 'KeyShot', 'Adobe Illustrator'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: '2',
    title: 'Smart Campus App',
    description: 'Mobile application for campus navigation, class scheduling, and student community features. Built with Flutter and Firebase.',
    longDescription: 'Smart Campus App revolutionizes how students interact with their university environment. The application integrates real-time navigation with indoor positioning, smart class scheduling that syncs with university systems, and a vibrant student community platform. Key features include AR navigation for finding classrooms, automated attendance tracking, and a marketplace for student services.',
    image: '/images/gallery_01.jpg',
    gallery: ['/images/gallery_04.jpg', '/images/gallery_05.jpg'],
    tags: ['Mobile', 'Flutter', 'Firebase', 'AR'],
    team: ['Dimas Pratama', 'Nia Kusuma'],
    duration: '4 months',
    year: '2024',
    category: 'Engineering',
    link: '#',
    github: '#',
    featured: true,
    challenge: 'Build an all-in-one campus solution that improves student life and campus navigation efficiency.',
    solution: 'Created a cross-platform mobile app using Flutter with Firebase backend, implementing AR navigation and real-time data synchronization.',
    results: ['10,000+ active users', '4.8★ App Store rating', '30% reduction in late arrivals', 'Winner of Campus Innovation Award'],
    techStack: ['Flutter', 'Firebase', 'ARKit', 'Google Maps API', 'Node.js'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description: 'Complete visual identity including logo, typography, and brand guidelines for local businesses and startups.',
    longDescription: 'This comprehensive brand identity project involved creating cohesive visual systems for 12 local startups. The process included market research, competitor analysis, and collaborative workshops with founders. Each identity system includes primary and secondary logos, color palettes, typography hierarchies, and application guidelines across digital and print media.',
    image: '/images/gallery_06.jpg',
    gallery: ['/images/gallery_07.jpg', '/images/gallery_08.jpg'],
    tags: ['Branding', 'Design System', 'Typography'],
    team: ['Alya Rahma'],
    duration: '2 months',
    year: '2024',
    category: 'Design',
    link: '#',
    github: null,
    featured: true,
    challenge: 'Develop distinct yet cohesive brand identities for diverse startups while maintaining scalability and consistency.',
    solution: 'Created modular design systems with flexible components that adapt to various industries while maintaining visual consistency.',
    results: ['12 brand identities delivered', '95% client satisfaction rate', 'Average 40% increase in brand recognition', 'Featured in Brand New Awards'],
    techStack: ['Adobe Illustrator', 'Figma', 'After Effects', 'FontLab'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: '4',
    title: 'FitTrack Pro',
    description: 'Fitness tracking application with workout plans, progress monitoring, and nutrition tracking features.',
    longDescription: 'FitTrack Pro is a comprehensive health and fitness companion that goes beyond basic step counting. The app features AI-powered workout recommendations based on user goals and progress, integrated nutrition tracking with barcode scanning, and social challenges to keep users motivated. The wearable integration allows real-time heart rate monitoring and sleep analysis.',
    image: '/images/project_fitness_app.jpg',
    gallery: ['/images/gallery_09.jpg'],
    tags: ['Mobile', 'React Native', 'Health', 'AI'],
    team: ['Nia Kusuma', 'Fajar Wibowo', 'Rini Susanti'],
    duration: '5 months',
    year: '2024',
    category: 'Engineering',
    link: '#',
    github: '#',
    featured: false,
    challenge: 'Create an intuitive fitness app that keeps users engaged while providing accurate health tracking.',
    solution: 'Built a React Native app with machine learning algorithms for personalized recommendations and gamification elements.',
    results: ['50,000+ downloads', '4.6★ rating', '25% user retention after 3 months', 'Best Health App 2024 finalist'],
    techStack: ['React Native', 'TensorFlow Lite', 'HealthKit', 'Node.js', 'MongoDB'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: '5',
    title: 'ShopEase E-commerce',
    description: 'Full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    longDescription: 'ShopEase is a modern e-commerce platform designed for small to medium businesses. The platform features an intuitive admin dashboard for inventory management, AI-powered product recommendations, multi-currency support, and integrated payment gateways. The progressive web app ensures fast loading times even on slow connections.',
    image: '/images/project_ecommerce.jpg',
    gallery: ['/images/gallery_10.jpg', '/images/gallery_11.jpg'],
    tags: ['Web', 'React', 'Node.js', 'E-commerce'],
    team: ['Dimas Pratama', 'Sinta Wulandari'],
    duration: '6 months',
    year: '2023',
    category: 'Engineering',
    link: '#',
    github: '#',
    featured: false,
    challenge: 'Build a scalable e-commerce platform that is easy to manage for non-technical business owners.',
    solution: 'Developed a React-based PWA with Node.js backend, featuring an intuitive drag-and-drop store builder and automated inventory management.',
    results: ['$2M+ GMV processed', '150+ active merchants', '60% faster checkout vs competitors', '99.9% uptime'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: '6',
    title: 'Smart Home Hub',
    description: 'IoT-based smart home controller with temperature monitoring, lighting control, and security features.',
    longDescription: 'Smart Home Hub is an affordable IoT solution for modern homes. The system includes a central hub that connects various sensors and devices, a mobile app for remote control, and voice assistant integration. The project focuses on energy efficiency, with smart scheduling that reduces electricity consumption by up to 30%.',
    image: '/images/project_iot.jpg',
    gallery: ['/images/gallery_12.jpg'],
    tags: ['IoT', 'Arduino', 'Embedded', 'Smart Home'],
    team: ['Fajar Wibowo', 'Agus Santoso'],
    duration: '3 months',
    year: '2023',
    category: 'Engineering',
    link: '#',
    github: '#',
    featured: false,
    challenge: 'Create an affordable smart home system that is easy to install and reduces energy consumption.',
    solution: 'Designed a modular IoT system using Arduino and ESP32 with MQTT protocol, featuring automated energy optimization algorithms.',
    results: ['30% energy savings', 'Open source release', '500+ GitHub stars', 'Featured on Hackaday'],
    techStack: ['Arduino', 'ESP32', 'MQTT', 'React Native', 'InfluxDB'],
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function ProjectDetail() {
  useScrollReveal();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <button onClick={() => navigate('/projects')} className="glass-button">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.id !== id && (p.category === project.category || p.tags.some(tag => project.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="w-full px-6 lg:px-12 pt-24 pb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 reveal">
          <button onClick={() => navigate('/')} className="hover:text-orange-500 transition-colors">Home</button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => navigate('/projects')} className="hover:text-orange-500 transition-colors">Projects</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">{project.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 reveal">
              <button 
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </button>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Layers className="w-4 h-4" />
                  {project.category}
                </span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              {/* Team */}
              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  Team Members
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                        {member.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-4">
                <button className="glass-button group">
                  View Live Demo
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
                {project.github && (
                  <button className="glass-button-secondary">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </button>
                )}
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`p-3 rounded-xl border transition-all ${liked ? 'bg-red-50 border-red-200 text-red-500' : 'bg-white border-gray-200 text-gray-500 hover:border-orange-500 hover:text-orange-500'}`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
            
            {/* Right Image Gallery */}
            <div className="lg:w-1/2 reveal stagger-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-4">
                <img 
                  src={project.gallery[activeImage] || project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Thumbnail Navigation */}
              {project.gallery.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-orange-500 ring-2 ring-orange-200' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <div className="glass-card p-8 reveal">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-800 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>
            
            {/* Solution */}
            <div className="glass-card p-8 reveal stagger-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-800 mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
            
            {/* Results */}
            <div className="glass-card p-8 reveal stagger-2">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-800 mb-4">Key Results</h3>
              <ul className="space-y-3">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12 reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">
              Technologies <span className="gradient-text">Used</span>
            </h2>
            <p className="text-gray-600">Tools and technologies that powered this project</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 reveal">
            {project.techStack.map((tech, i) => (
              <div 
                key={i}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-500 hover:shadow-md transition-all cursor-default"
              >
                <span className="font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="glass-card p-12 reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">{project.duration}</div>
                <div className="text-gray-500 text-sm">Development Time</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">{project.team.length}</div>
                <div className="text-gray-500 text-sm">Team Members</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">{project.year}</div>
                <div className="text-gray-500 text-sm">Completed</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-3xl text-gray-800 mb-1">{project.tags.length}</div>
                <div className="text-gray-500 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="w-full px-6 lg:px-12">
            <div className="text-center mb-12 reveal">
              <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">
                Related <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-600">Explore more work from our students</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <div 
                  key={relatedProject.id}
                  onClick={() => navigate(`/projects/${relatedProject.id}`)}
                  className={`glass-card overflow-hidden cursor-pointer group reveal stagger-${index + 1}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedProject.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{relatedProject.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {relatedProject.team.length} members
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="glass-card p-12 text-center reveal">
            <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">
              Want to Build Something Amazing?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our programs and start creating impactful projects like this one. 
              Work with industry mentors and build your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/programs')}
                className="glass-button group text-lg px-8 py-4"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-button-secondary text-lg px-8 py-4">
                <Share2 className="w-5 h-5 mr-2" />
                Share Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}