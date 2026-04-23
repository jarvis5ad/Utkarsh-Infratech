/**
 * Portfolio page content: ongoing projects, equipment, work orders.
 * Add your own photos under /public/ongoing-projects/{slug}/ and update `images` paths.
 * Replace work order PDFs in /public/work-orders/ while keeping filenames or update `file` paths below.
 */

const constructionGallery = (_projectKey, count = 6) => {
  const base = 'https://images.unsplash.com/photo-';
  const ids = [
    '1541888946425-d81bb19240f5?w=1200&q=80',
    '1503387762-592deb58ef4e?w=1200&q=80',
    '1581094794329-c8112a89af12?w=1200&q=80',
    '1504307651254-35680f356dfd?w=1200&q=80',
    '1541976590-713941681591?w=1200&q=80',
    '1489515217757-5fd1be406fef?w=1200&q=80',
    '1590644368357-82394392e309?w=1200&q=80',
    '1621905251189-08b45d6a269e?w=1200&q=80',
  ];
  return ids.slice(0, count).map((id, i) => ({
    src: `${base}${id}`,
    alt: `Construction site progress photograph ${i + 1}`,
  }));
};

export const ongoingProjects = [
  {
    id: 'singh-automobiles-fatehpur',
    name: 'Singh Automobiles (Fatehpur)',
    location: 'Fatehpur, Uttar Pradesh',
    summary:
      'Construction and development of a complete TATA Motors showroom and workshop infrastructure at Fatehpur. The project includes a showroom building with an approximate area of 13,800 sq. ft. and a workshop MS shed covering approximately 19,800 sq. ft.',
    estateScope:
      'Additionally, the project involves the development of an 8-acre farm area including boundary wall construction, store shed development, a farmhouse residential building, artificial lake development, internal CC roads, and site infrastructure and civil development works.',
    scopeBullets: [
      'Full boundary wall construction',
      'Store shed development',
      'Farmhouse residential building',
      'Artificial lake development',
      'Internal CC roads',
      'Site infrastructure and civil development works',
    ],
    qualityNote:
      'The project is being executed with a focus on quality construction, durability, and efficient space planning to meet both commercial and residential utility requirements.',
    images: constructionGallery('singh-automobiles', 6).map((img, i) => ({
      ...img,
      alt: `Singh Automobiles Fatehpur — ${img.alt} (${i + 1})`,
    })),
  },
  {
    id: 'alwar-ecoharvest-farm',
    name: 'Alwar Ecoharvest Farm',
    location: 'Alwar, Rajasthan',
    summary:
      'Development of a large-scale eco farm infrastructure project focused on sustainable construction and functional land utilization. The project includes residential, agricultural, and utility-based civil works designed to support modern farming operations and long-term land development.',
    estateScope:
      'Scope includes site development, boundary works, road access, utility structures, and eco-friendly infrastructure planning aligned with agricultural and residential requirements.',
    scopeBullets: null,
    qualityNote: null,
    images: [
      {
        src: '/ongoing-projects/alwar-ecoharvest/01.jpeg',
        alt: 'Alwar Ecoharvest Farm — on-site civil and infrastructure progress (1 of 3)',
      },
      {
        src: '/ongoing-projects/alwar-ecoharvest/02.jpeg',
        alt: 'Alwar Ecoharvest Farm — on-site civil and infrastructure progress (2 of 3)',
      },
      
    ],
  },
];

export const equipmentItems = [
  { id: '1', name: 'JCB Machine', quantity: 'x1', icon: 'truck' },
  { id: '2', name: 'Concrete Mixer with Lift', quantity: 'x3', icon: 'mixer' },
  { id: '3', name: 'Shuttering Material', quantity: '10,000 Sqft', icon: 'shuttering' },
  { id: '4', name: 'Plate Vibrator', quantity: 'x2', icon: 'plate-vibrator' },
  { id: '5', name: 'Needle Vibrator', quantity: 'x3 ', icon: 'needle-vibrator' },
  { id: '6', name: 'MS Column Shuttering', quantity: 'Available', icon: 'building' },
  { id: '7', name: 'Scaffolding', quantity: '3,000 Sqft', icon: 'scaffold' },
  { id: '8', name: 'Heavy Hilti Machine', quantity: 'x3 ', icon: 'hilti' },
  { id: '9', name: 'Monkey Lift Machine', quantity: 'x2', icon: 'lift' },
  { id: '10', name: 'Tractor with Trolley', quantity: 'x1', icon: 'tractor' },
  { id: '11', name: 'Water Tanker', quantity: 'x1', icon: 'tanker' },
];

export function getOngoingProjectsJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ongoing construction projects — Utkarsh Infratech',
    itemListElement: ongoingProjects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.name,
        description: `${p.summary} ${p.estateScope}`.slice(0, 2800),
      },
    })),
  };
}

/**
 * Work order PDFs: each `fileName` must match a file in `public/work-orders/` exactly.
 * After renaming files on disk, update the names here — the site does not auto-detect folder contents.
 */
export const workOrderDocuments = [
  { id: 'chakeri-1', fileName: 'Chakeri Work Order.pdf' },
  { id: 'chakeri-2', fileName: 'Chakeri Work Order 2.pdf' },
];

export function workOrderPdfUrl(fileName) {
  return `/work-orders/${encodeURIComponent(fileName)}`;
}
