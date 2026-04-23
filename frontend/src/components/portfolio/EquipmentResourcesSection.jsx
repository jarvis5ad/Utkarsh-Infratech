import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowBigUpDash,
  Box,
  Building2,
  Droplets,
  Hammer,
  HardHat,
  Layers,
  LayoutGrid,
  MoveVertical,
  Truck,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { equipmentItems } from '@/data/portfolioExtended';

const iconMap = {
  truck: Truck,
  mixer: Box,
  shuttering: LayoutGrid,
  'plate-vibrator': MoveVertical,
  'needle-vibrator': Activity,
  building: Building2,
  scaffold: Layers,
  hilti: Hammer,
  lift: ArrowBigUpDash,
  tractor: Truck,
  tanker: Droplets,
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45 },
};

export default function EquipmentResourcesSection({ className, id = 'equipment-resources' }) {
  return (
    <section id={id} className={cn('scroll-mt-28', className)} aria-labelledby="equipment-resources-heading">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 shadow-sm overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
        <div className="p-6 sm:p-8 lg:p-10">
          <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 mb-4">
                <HardHat className="w-3.5 h-3.5" aria-hidden />
                Capability
              </div>
              <h2 id="equipment-resources-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Equipment <span className="text-orange-500">&amp; Resources</span>
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
                Modern plant and shuttering resources on standby—supporting faster cycle times, safer execution, and
                dependable quality across civil and structural packages.
              </p>
            </div>
            <div className="shrink-0 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-orange-500" aria-hidden />
                Field-ready inventory
              </p>
              <p className="mt-1 text-gray-600">Maintained for commercial &amp; industrial workloads.</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {equipmentItems.map((item, i) => {
              const Icon = iconMap[item.icon] || Wrench;
              return (
                <motion.div
                  key={item.id}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.35) }}
                  whileHover={{ y: -3 }}
                  className="group relative rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-orange-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-200/60 transition group-hover:bg-orange-500 group-hover:text-white group-hover:ring-orange-400/40">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 leading-snug">{item.name}</h3>
                      <p className="mt-2 text-sm font-medium text-orange-600 tabular-nums">{item.quantity}</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-200/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
