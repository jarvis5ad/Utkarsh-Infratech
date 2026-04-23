import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ongoingProjects } from '@/data/portfolioExtended';
import ProjectShowcaseCarousel from '@/components/portfolio/ProjectShowcaseCarousel';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5 },
};

export default function OngoingProjectsSection({ className, id = 'ongoing-projects' }) {
  return (
    <section id={id} className={cn('scroll-mt-28', className)} aria-labelledby="ongoing-projects-heading">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <motion.div {...fadeUp} className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-orange-500" />
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">On site</span>
          <div className="w-12 h-0.5 bg-orange-500" />
        </motion.div>
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          id="ongoing-projects-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
        >
          Ongoing <span className="text-orange-500">Projects</span>
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Live sites where we are delivering civil, structural, and infrastructure scope with the same rigor we bring to
          every engagement.
        </motion.p>
      </div>

      <div className="space-y-16 sm:space-y-20">
        {ongoingProjects.map((project, listIndex) => (
          <motion.article
            key={project.id}
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.05 * listIndex }}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 mb-3">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden />
                    In progress
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{project.name}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0" aria-hidden />
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>

              <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>{project.summary}</p>
                <p>{project.estateScope}</p>
                {project.scopeBullets?.length ? (
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Key scope includes:</p>
                    <ul className="list-none space-y-2 pl-0">
                      {project.scopeBullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {project.qualityNote ? <p>{project.qualityNote}</p> : null}
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-900 mb-3">Site progress gallery</p>
                <ProjectShowcaseCarousel images={project.images} projectName={project.name} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
