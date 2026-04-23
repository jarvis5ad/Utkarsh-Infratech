import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { workOrderDocuments, workOrderPdfUrl } from '@/data/portfolioExtended';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5 },
};

function PdfPreviewFrame({ src, title }) {
  return (
    <iframe
      title={title}
      src={`${src}#view=FitH&toolbar=0`}
      className="h-full min-h-[280px] sm:min-h-[320px] w-full border-0 bg-gray-100"
      loading="lazy"
    />
  );
}

export default function WorkOrdersSection({ className, id = 'work-orders' }) {
  return (
    <section id={id} className={cn('scroll-mt-28', className)} aria-labelledby="work-orders-heading">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
        <div className="p-6 sm:p-8 lg:p-10">
          <motion.div {...fadeUp} className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 mb-4">
              <FileText className="w-3.5 h-3.5" aria-hidden />
              Documents
            </div>
            <h2 id="work-orders-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Work Orders / <span className="text-orange-500">Project Documents</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {workOrderDocuments.map((doc, i) => {
              const fileName = doc.fileName;
              const fileUrl = workOrderPdfUrl(fileName);
              const heading = fileName;
              return (
                <motion.article
                  key={doc.id}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.06 * i }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/80 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <div className="border-b border-gray-200 bg-white px-4 py-3 sm:px-5 sm:py-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange-600 break-all">
                      {fileName}
                    </p>
                    <h3 className="mt-2 flex items-center gap-2 text-base sm:text-lg font-bold text-gray-900 break-all">
                      <FileText className="h-5 w-5 shrink-0 text-orange-500" aria-hidden />
                      {heading}
                    </h3>
                  </div>

                  <div className="relative flex-1 overflow-hidden bg-gray-200">
                    <PdfPreviewFrame src={fileUrl} title={`${heading} preview`} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 border-t border-gray-200 bg-white p-4 sm:p-5">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-orange-300 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      View PDF
                    </a>
                    <a
                      href={fileUrl}
                      download={fileName}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      <Download className="h-4 w-4" aria-hidden />
                      Download PDF
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
