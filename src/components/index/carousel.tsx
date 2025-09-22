import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // Datos de ejemplo para los proyectos
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React.js", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React.js", "TypeScript", "Socket.io", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Dashboard analítico para redes sociales con métricas en tiempo real y reportes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "Node.js", "Redis", "Chart.js"]
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Sistema de gestión de aprendizaje con cursos, evaluaciones y seguimiento de progreso.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
      technologies: ["React.js", "Python", "Django", "MySQL"]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Aplicación del clima con pronósticos detallados, mapas interactivos y alertas.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["Next.js", "API REST", "Tailwind", "Vercel"]
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      description: "Rastreador de portafolio de criptomonedas con análisis de mercado y alertas de precios.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      technologies: ["React.js", "Web3", "Node.js", "MongoDB"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
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
    // Reanudar auto-play después de 5 segundos
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
    // Reanudar auto-play después de 5 segundos
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getTechColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
      'React.js': 'bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.4)]',
      'Node.js': 'bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]',
      'MongoDB': 'bg-violet-600 shadow-[0_0_8px_rgba(139,92,246,0.4)]',
      'Express': 'bg-purple-700 shadow-[0_0_8px_rgba(126,34,206,0.4)]',
      'TypeScript': 'bg-indigo-700 shadow-[0_0_8px_rgba(67,56,202,0.4)]',
      'Socket.io': 'bg-violet-700 shadow-[0_0_8px_rgba(109,40,217,0.4)]',
      'PostgreSQL': 'bg-purple-800 shadow-[0_0_8px_rgba(107,33,168,0.4)]',
      'Vue.js': 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]',
      'Redis': 'bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]',
      'Chart.js': 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]',
      'Python': 'bg-indigo-800 shadow-[0_0_8px_rgba(55,48,163,0.4)]',
      'Django': 'bg-violet-800 shadow-[0_0_8px_rgba(91,33,182,0.4)]',
      'MySQL': 'bg-purple-900 shadow-[0_0_8px_rgba(88,28,135,0.4)]',
      'Next.js': 'bg-indigo-900 shadow-[0_0_8px_rgba(49,46,129,0.4)]',
      'API REST': 'bg-violet-900 shadow-[0_0_8px_rgba(76,29,149,0.4)]',
      'Tailwind': 'bg-purple-400 shadow-[0_0_8px_rgba(196,181,253,0.4)]',
      'Vercel': 'bg-indigo-950 shadow-[0_0_8px_rgba(30,27,75,0.4)]',
      'Web3': 'bg-violet-950 shadow-[0_0_8px_rgba(46,16,101,0.4)]'
    };
    return colors[tech] || 'bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.4)]';
  };



  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-transparent">
      <div className="relative">
        {/* Botón Previous */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-indigo-600 rounded-full p-3 hover:bg-indigo-700 shadow-[0_0_6px_#4338ca] hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-300"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Contenedor del carousel */}
        <div className="overflow-hidden mx-16">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {/* Crear array extendido para mostrar siempre 3 elementos completos */}
            {Array.from({ length: projects.length + 2 }, (_, index) => {
              const projectIndex = index % projects.length;
              const project = projects[projectIndex];
              return (
                <div
                  key={`project-${project.id}-${index}`}
                  className="flex-shrink-0 w-1/3 group relative"
                >
                  {/* Contenedor de la tarjeta */}
                  <div className="relative overflow-hidden rounded-xl bg-black/10 backdrop-blur-[80px] shadow-[0_0_2px_#8e44ad]   h-96 cursor-pointer transform hover:scale-105 transition-all duration-300">
                    {/* Imagen */}
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    </div>

                    {/* Contenido visible por defecto */}
                    <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-xl font-bold text-white mb-3 truncate [text-shadow:0_0_10px_rgba(147,51,234,0.3)]">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs text-white rounded-full font-medium ${getTechColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Overlay que aparece en hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-violet-900/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-6 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-4 text-center [text-shadow:0_0_15px_rgba(147,51,234,0.5)]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 text-center mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs text-white rounded-full font-medium ${getTechColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="bg-white text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-purple-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botón Next */}
        <button
          onClick={goToNext}
          className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-indigo-600 rounded-full p-3 hover:bg-indigo-700 shadow-[0_0_6px_#4338ca] hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-300"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicadores - Todos los proyectos */}
      <div className="flex justify-center mt-8 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.8)] scale-125' 
                : 'bg-gray-500 hover:bg-purple-400 hover:shadow-[0_0_10px_rgba(147,51,234,0.4)]'
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>

      {/* Control de auto-play 
      <div className="text-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${
            isAutoPlaying 
              ? 'text-purple-400 hover:text-purple-300 hover:shadow-[0_0_10px_rgba(147,51,234,0.3)]' 
              : 'text-gray-400 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'
          }`}
        >
          {isAutoPlaying ? 'Pausar' : 'Reproducir'} auto-play
        </button>
      </div>
      */}
    </div>
  );
};

export default ProjectCarousel;