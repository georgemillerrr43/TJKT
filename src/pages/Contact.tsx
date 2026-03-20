import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', program: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="orange-bloom -right-[20vw] -top-[20vh]" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="tag-orange mb-6 inline-block">Hubungi Kami</span>
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-gray-800 mb-6">
              Mari <span className="gradient-text">Terhubung</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Punya pertanyaan? Kami ingin mendengar dari Anda. Kirimkan pesan dan kami akan merespons secepat mungkin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="glass-card p-8 mb-8">
                  <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-6">
                    Informasi Kontak
                  </h2>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'hello@portfoliokejuruan.edu' },
                      { icon: <Phone className="w-5 h-5" />, label: 'Telepon', value: '+62 812 3456 7890' },
                      { icon: <MapPin className="w-5 h-5" />, label: 'Alamat', value: 'Jl. Pendidikan No. 123, Jakarta, Indonesia' },
                      { icon: <Clock className="w-5 h-5" />, label: 'Jam Kerja', value: 'Sen - Jum: 08.00 - 17.00' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">{item.label}</p>
                          <p className="text-gray-800 font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">Ikuti kami di media sosial</p>
                    <div className="flex gap-3">
                      {[
                        { icon: <Instagram className="w-5 h-5" />, href: '#' },
                        { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                        { icon: <Twitter className="w-5 h-5" />, href: '#' },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="glass-card p-8">
                  <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-6">
                    Fakta Singkat
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '< 24j', label: 'Waktu Respons' },
                      { value: '150+', label: 'Siswa Terbantu' },
                      { value: '98%', label: 'Kepuasan' },
                      { value: '12', label: 'Program' },
                    ].map((stat, index) => (
                      <div key={index}>
                        <p className="font-poppins font-bold text-2xl text-orange-500">{stat.value}</p>
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="glass-card p-8 lg:p-10">
                  <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-2">
                    Kirim Pesan
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 24 jam.
                  </p>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-gray-600">
                        Terima kasih telah menghubungi kami. Kami akan segera merespons.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Alamat Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="email@anda.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Nomor Telepon
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="+62 812 3456 7890"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Program yang Diminati
                          </label>
                          <select
                            value={formData.program}
                            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Pilih program</option>
                            <option value="design">Desain dan Media</option>
                            <option value="engineering">Teknik Komputer</option>
                            <option value="business">Bisnis Digital</option>
                            <option value="other">Lainnya / Pertanyaan Umum</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Pesan *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                          placeholder="Ceritakan tentang pertanyaan Anda..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="glass-button w-full sm:w-auto group"
                      >
                        Kirim Pesan
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="glass-card overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <p className="text-gray-600">Peta Interaktif</p>
                <p className="text-gray-400 text-sm">Jl. Pendidikan No. 123, Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}