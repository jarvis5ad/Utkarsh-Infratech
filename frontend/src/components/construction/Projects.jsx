import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/** Featured grid photos sourced from company work (see public/featured-projects/). */
const FP = '/featured-projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Infrastructure'];

  const projects = [
    {
      title: 'Luxury Villa Complex',
      category: 'Residential',
      image: `${FP}/luxury-villa-complex.jpeg`,
      location: 'Gomti Nagar, Lucknow',
      imageAlt: 'Premium residential building exterior with finished façade and porch, under final fit-out',
    },
    {
      title: 'Tech Park Tower',
      category: 'Commercial',
      image: `${FP}/tech-park-tower.jpeg`,
      location: 'Hazratganj, Lucknow',
      imageAlt: 'Multi-storey institutional or commercial tower with modern vertical façade and exterior works',
    },
    {
      title: 'Highway Overpass',
      category: 'Infrastructure',
      image: `${FP}/highway-overpass.jpeg`,
      location: 'Lucknow-Kanpur Highway',
      imageAlt: 'Highway-adjacent civil works with concrete drainage or service trench beside paved carriageway',
    },
    {
      title: 'Modern Apartments',
      category: 'Residential',
      image: `${FP}/modern-apartments.jpeg`,
      location: 'Aliganj, Lucknow',
      imageAlt: 'Tall residential or institutional block with paved courtyard and perimeter wall',
    },
    {
      title: 'Shopping Mall',
      category: 'Commercial',
      image: `${FP}/shopping-mall.jpeg`,
      location: 'Indira Nagar, Lucknow',
      imageAlt: 'Large-format commercial slab with formwork, rebar and props during structural construction',
    },
    {
      title: 'Premium Bungalows',
      category: 'Residential',
      image: `${FP}/premium-bungalows.jpeg`,
      location: 'Faizabad Road, Lucknow',
      imageAlt: 'Low-rise residential shell with brick and concrete walls on a rural or estate plot',
    },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
            <div className="w-12 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our completed projects that showcase our commitment to quality and excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block w-fit px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.location}</p>

                  <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
