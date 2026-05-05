'use client';

import { Mail, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const studentInfo = {
    name: 'Tionusa Catur Pamungkas',
    studentId: '2341720093',
    email: '2341720093@student.polinema.ac.id',
    bio: 'Passionate software developer interested in building impactful web & mobile applications.',
    profileImage: '/profile.jpg', // Add your image to public folder
  };

  const techInterests = [
    'Next.js',
    'Flutter',
  ];

  const projects = [
    {
      title: 'Student Profile Portfolio',
      description: 'A modern portfolio website with Next.js, Docker, and CI/CD integration',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Docker'],
      link: 'https://github.com/TNCP06/my-profile',
    },
    {
      title: 'Sistem Monitoring Akses Palang Tol dan Analisis Lalu Lintas Berbasis IoT, Cloud Computing, Big Data, dan Framework Next.js.',
      description: 'Proyek ini merupakan prototype sistem gerbang tol otomatis pintar yang mengintegrasikan teknologi IoT, Cloud Computing, Big Data, dan Next.js untuk memonitor akses kendaraan serta menganalisis lalu lintas secara real-time. Sistem dirancang untuk mendigitalisasi pencatatan akses kendaraan dan memantau status palang pintu secara langsung melalui dashboard terpusat.',
      technologies: ['Next.js', 'IoT', 'Cloud Computing', 'Big Data', 'Tailwind CSS'],
      link: 'https://github.com/sirfara12/SISTEM-MONITORING-PALANG-TOL-',
    },
    {
      title: 'Sistem Informasi Prestasi Mahasiswa dengan DSS ROC',
      description: 'Sistem Informasi Prestasi Mahasiswa adalah aplikasi berbasis web yang dikembangkan untuk membantu mengelola dan menganalisis prestasi mahasiswa di lingkungan akademik Politeknik Negeri Malang. Sistem ini dilengkapi dengan Decision Support System (DSS) menggunakan metode PROMETHEE (Preference Ranking Organization Method for Enrichment Evaluation) yang memungkinkan pengambilan keputusan berdasarkan multi-kriteria untuk menentukan mahasiswa berprestasi.',
      technologies: ['Laravel', 'MySQL', 'Javascript', 'Bootstrap'],
      link: 'https://github.com/TMTMPST/Prestasi-Mahasiswa-S4',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/TNCP06',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/tncp/',
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${studentInfo.email}`,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-white">Student Profile</h1>
            <div className="flex gap-4">
              <a href="#projects" className="text-slate-300 hover:text-white transition">
                Projects
              </a>
              <a href="#interests" className="text-slate-300 hover:text-white transition">
                Interests
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                  {studentInfo.name}
                </h2>
                <p className="text-xl text-slate-300 mb-2">
                  Student ID: <span className="font-semibold text-blue-400">{studentInfo.studentId}</span>
                </p>
                <p className="text-lg text-slate-400">{studentInfo.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-blue-600 text-white p-3 rounded-lg transition transform hover:scale-110 duration-200"
                      aria-label={link.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-400 text-sm">Current Level</p>
                  <p className="text-2xl font-bold text-white mt-1">Student</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-400 text-sm">Focus Area</p>
                  <p className="text-2xl font-bold text-white mt-1">Web Dev</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl border border-slate-600 aspect-square overflow-hidden">
                  <img 
                    src={studentInfo.profileImage} 
                    alt={studentInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Interests Section */}
      <section id="interests" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Tech Stack & Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techInterests.map((interest, index) => (
              <div
                key={index}
                className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-lg p-6 transition duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 group-hover:bg-blue-500">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{interest}</h4>
                    <p className="text-slate-400 text-sm mt-2">Explore and master this technology</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-48 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">📁</div>
                    <p className="text-sm opacity-90">Project Preview</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-xl text-slate-300 mb-8">
            Interested in collaborating or have questions? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${studentInfo.email}`}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href="https://github.com/TNCP06"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition transform hover:scale-105 border border-slate-600 inline-flex items-center justify-center gap-2"
            >
              <FaGithub size={20} /> Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>
            © 2026 {studentInfo.name}. Built with{' '}
            <span className="text-red-500">❤️</span> using Next.js & Docker
          </p>
          <p className="text-sm mt-2">
            GitHub Repository:{' '}
            <a
              href="https://github.com/TNCP06/student-profile"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              student-profile
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}