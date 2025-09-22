import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // Datos de ejemplo con imágenes de páginas web reales
  const projects: Project[] = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "Replica completa de Netflix con streaming de video, perfiles de usuario y sistema de recomendaciones.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      category: "Streaming Platform"
    },
    {
      id: 2,
      title: "Spotify Dashboard",
      description: "Dashboard interactivo para análisis musical con visualizaciones de datos y playlists personalizadas.",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Spotify API", "Chart.js"],
      category: "Music Analytics"
    },
    {
      id: 3,
      title: "E-Banking App",
      description: "Aplicación bancaria moderna con transferencias, análisis de gastos y gestión de tarjetas.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
      category: "Fintech"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Red social completa con posts, stories, mensajería en tiempo real y sistema de notificaciones.",
      image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Socket.io", "Redis", "AWS"],
      category: "Social Network"
    },
    {
      id: 5,
      title: "AI SaaS Platform",
      description: "Plataforma SaaS con inteligencia artificial para automatización de procesos empresariales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      category: "AI/ML"
    },
    {
      id: 6,
      title: "Crypto Exchange",
      description: "Exchange de criptomonedas con trading en tiempo real, wallets y análisis de mercado.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop",
      technologies: ["React", "Web3", "Solidity", "GraphQL"],
      category: "Blockchain"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, projects.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getTechColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
      'React': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white',
      'Node.js': 'bg-gradient-to-r from-green-400 to-emerald-500 text-white',
      'MongoDB': 'bg-gradient-to-r from-green-500 to-green-600 text-white',
      'Firebase': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
      'Next.js': 'bg-gradient-to-r from-gray-800 to-gray-900 text-white',
      'TypeScript': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
      'Spotify API': 'bg-gradient-to-r from-green-500 to-green-400 text-white',
      'Chart.js': 'bg-gradient-to-r from-pink-400 to-red-500 text-white',
      'React Native': 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white',
      'PostgreSQL': 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
      'Stripe': 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white',
      'Vue.js': 'bg-gradient-to-r from-emerald-400 to-green-500 text-white',
      'Socket.io': 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white',
      'Redis': 'bg-gradient-to-r from-red-500 to-pink-500 text-white',
      'AWS': 'bg-gradient-to-r from-orange-400 to-yellow-500 text-white',
      'Python': 'bg-gradient-to-r from-blue-500 to-yellow-400 text-white',
      'TensorFlow': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
      'FastAPI': 'bg-gradient-to-r from-teal-400 to-green-500 text-white',
      'Docker': 'bg-gradient-to-r from-blue-400 to-blue-600 text-white',
      'Web3': 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
      'Solidity': 'bg-gradient-to-r from-gray-600 to-gray-800 text-white',
      'GraphQL': 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
    };
    return colors[tech] || 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="relative">
        {/* Botones de navegación con glassmorphism */}
        <button
          onClick={goToPrevious}
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg" />
        </button>

        {/* Contenedor principal del carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {Array.from({ length: projects.length + 2 }, (_, index) => {
              const projectIndex = index % projects.length;
              const project = projects[projectIndex];
              return (
                <div
                  key={`project-${project.id}-${index}`}
                  className="flex-shrink-0 w-1/3 group relative"
                >
                  {/* Card principal */}
<div className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-violet-500/10 border border-purple-400/30 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">                    {/* Imagen con overlay gradient */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

                      {/* Badge de categoría */}
                      <div className="absolute top-4 left-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-white/90">{project.category}</span>
                      </div>
                    </div>

                    {/* Contenido visible por defecto */}
                    <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${getTechColor(tech)} shadow-lg`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-slate-00 to-slate-700 text-white">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Overlay completo que aparece en hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-slate-200 mb-6 leading-relaxed text-center max-w-sm">
                          {project.description}
                        </p>

                        {/* Tecnologías completas */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${getTechColor(tech)} shadow-lg transform hover:scale-105 transition-transform`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Botones de acción */}
                        <div className="flex gap-4 justify-center">
                          <button className="group/btn backdrop-blur-sm bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                          </button>
                          <button className="group/btn backdrop-blur-sm bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
        </button>
      </div>

      {/* Indicadores modernos */}
      <div className="flex justify-center mt-10 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className={`transition-all duration-300 rounded-full ${index === currentIndex
                ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                : 'w-3 h-3 bg-slate-600 hover:bg-slate-500 hover:scale-125'
              }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>

      {/* Control de reproducción elegante 
      <div className="text-center mt-8">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`backdrop-blur-sm bg-white/5 border border-white/10 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
            isAutoPlaying 
              ? 'text-purple-400 hover:bg-purple-500/10 border-purple-500/20' 
              : 'text-slate-400 hover:bg-slate-500/10 border-slate-500/20'
          }`}
        >
          {isAutoPlaying ? '⏸️ Pausar reproducción' : '▶️ Continuar reproducción'}
        </button>
      </div>
      */}
    </div>
  );
};

export default ProjectCarousel;