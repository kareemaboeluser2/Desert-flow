import { ServiceItem, ReviewItem, FaqItem, ServiceArea } from '../types';

export const BUSINESS_INFO = {
  name: 'DesertFlow Plumbing',
  tagline: 'Phoenix Plumbing Done Right. Straightforward Diagnostics, Zero Upselling.',
  phone: '(602) 555-0183',
  phoneClean: '6025550183',
  email: 'service@desertflowplumbing.com',
  address: '3240 E Camelback Rd, Suite 180',
  cityStateZip: 'Phoenix, AZ 85018',
  rocNumber: '[INSERT ROC LICENSE NUMBER]',
  ownerName: 'Jason Miller',
  ownerTitle: 'Founder & Master Plumber',
  hoursRegular: 'Monday – Saturday: 7:00 AM – 6:00 PM',
  hoursEmergency: '24/7 Emergency Response Available Valley-Wide',
};

export const VALUE_PROPS = [
  {
    title: 'Owner-Operated Standards',
    description: 'Every job supervised with master plumber accountability. No commissioned salesmen.',
  },
  {
    title: 'Transparent Upfront Pricing',
    description: 'Complete written diagnostic pricing before any wrench turns. No surprise add-ons.',
  },
  {
    title: 'Phoenix Hard Water Specialists',
    description: 'Engineering-grade solutions designed specifically for high mineral Valley water.',
  },
  {
    title: 'Rapid Valley Dispatch',
    description: 'Fully stocked service vans stationed across Phoenix, Scottsdale, Tempe, and Mesa.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'water-heaters',
    title: 'Water Heater Repair & Replacement',
    shortDesc: 'Rapid restoration of hot water with specialized sediment flushing and high-efficiency tankless upgrades.',
    problemSolved: 'Phoenix hard water causes rapid calcium buildup in tanks, leading to rumbling noises, premature element burnout, and sudden cold showers.',
    bullets: [
      'Gas & electric tank diagnostic and element replacement',
      'Tankless continuous hot water installations',
      'Annual mineral flush & sacrificial anode replacement',
      'Expansion tank installation & thermal relief testing'
    ],
    icon: 'Flame',
    tag: 'High Demand'
  },
  {
    id: 'leak-detection',
    title: 'Electronic Leak Detection & Slab Repair',
    shortDesc: 'Non-destructive acoustic and thermal scanning to pinpoint hidden subterranean leaks without tearing up floors.',
    problemSolved: 'Shifting desert soils and hard water stress copper lines under concrete slabs, leading to warm spots on floors, unexplained high water bills, and foundation risks.',
    bullets: [
      'Ultrasonic listening and infrared thermography',
      'Direct slab pinpointing to minimize concrete removal',
      'Overhead PEX reroutes to permanently bypass failing pipes',
      'Insurance documentation and water meter pressure verification'
    ],
    icon: 'Activity',
    tag: 'Urgent Diagnostic'
  },
  {
    id: 'drain-cleaning',
    title: 'Precision Drain Cleaning & Camera Inspection',
    shortDesc: 'High-definition video sewer line scoping and heavy-duty hydro-jetting to remove mineral scale and stubborn blockages.',
    problemSolved: 'Standard plunging fails when mineral encrustation, kitchen grease, or invasive desert tree roots choke the main lateral sewer line.',
    bullets: [
      'Full color HD sewer camera video inspections with footage review',
      'Hydro-jetting to scrub pipe walls clean to bare metal',
      'Main sewer line root eradication and snaking',
      'Bathroom and kitchen line mechanical snaking'
    ],
    icon: 'Waves'
  },
  {
    id: 'repiping-fixtures',
    title: 'Whole-Home Repiping & Pressure Regulation',
    shortDesc: 'Durable PEX and copper water supply line replacements that restore safe water pressure and eliminate pinhole leaks.',
    problemSolved: 'Aging polybutylene or corroded copper lines develop recurrent pinhole leaks and dangerous pressure surges from municipal supply lines.',
    bullets: [
      'Complete home repiping with corrosion-resistant PEX-A',
      'Pressure Reducing Valve (PRV) testing and installation',
      'Whole-home water filtration and water softener loops',
      'Commercial-grade shutoff valve retrofits at all fixtures'
    ],
    icon: 'Wrench'
  }
];

export const COMMERCIAL_SERVICE = {
  title: 'Commercial Property & Tenant Maintenance',
  headline: 'Keep Your Business Open with Reliable Plumbing Maintenance',
  description: 'Unplanned plumbing outages shut down restaurants, disrupt retail tenants, and create corporate liabilities. DesertFlow provides structured commercial service agreements and priority dispatch for property managers across Phoenix.',
  bullets: [
    'Restaurant grease trap lines and commercial kitchen drain servicing',
    'Certified backflow prevention testing, rebuilds, and annual reporting',
    'Multi-tenant public restroom valve repairs and sensor fixture installs',
    'Priority commercial dispatch agreements with itemized compliance billing'
  ]
};

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Jason personally inspected our water heater after another big franchise told us we needed a $4,500 replacement immediately. He replaced a burnt heating element, flushed 4 inches of calcium sediment, and had us running in two hours for a fraction of the cost.',
    author: 'Marcus T.',
    location: 'Arcadia, Phoenix',
    serviceType: 'Water Heater Diagnostic & Flush',
    rating: 5
  },
  {
    id: 'rev-2',
    quote: 'We had a hot spot on our hallway tile and an astronomical water bill. DesertFlow arrived on time, used acoustic listening gear to locate the slab leak within a 6-inch radius, and rerouted with PEX overhead without wrecking our floors.',
    author: 'Elena R.',
    location: 'North Scottsdale',
    serviceType: 'Electronic Slab Leak Detection',
    rating: 5
  },
  {
    id: 'rev-3',
    quote: 'As a restaurant manager in Tempe, blocked floor drains on a Friday evening are a nightmare. DesertFlow answered the phone immediately, dispatched a van with hydro-jetting equipment, and cleared the grease obstruction before dinner service.',
    author: 'David L.',
    location: 'Downtown Tempe',
    serviceType: 'Commercial Drain Hydro-Jetting',
    rating: 5
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Phoenix',
    coverage: 'Arcadia, Biltmore, North Phoenix, Ahwatukee, Desert Ridge',
    primaryFocus: 'Slab leaks, water heaters, and whole-home repiping in established neighborhoods.',
    responseTime: '30–60 min emergency'
  },
  {
    name: 'Scottsdale',
    coverage: 'Old Town, McCormick Ranch, Gainey Ranch, DC Ranch, Troon',
    primaryFocus: 'Water softening loops, tankless water heaters, and non-invasive acoustic diagnostics.',
    responseTime: '45–60 min emergency'
  },
  {
    name: 'Tempe',
    coverage: 'Downtown, ASU Corridor, Kiwanis Park, South Tempe',
    primaryFocus: 'Commercial restaurant drains, sewer video inspections, and residential plumbing repairs.',
    responseTime: '30–45 min emergency'
  },
  {
    name: 'Mesa',
    coverage: 'Downtown Mesa, Red Mountain, Dobson Ranch, Superstition Springs',
    primaryFocus: 'High-pressure water regulators, mainline snaking, and gas water heater replacements.',
    responseTime: '45–60 min emergency'
  },
  {
    name: 'Chandler & Gilbert',
    coverage: 'Ocotillo, Downtown Chandler, Heritage District, Val Vista Lakes',
    primaryFocus: 'Residential fixture rebuilds, PEX repiping, and preventative mineral flushing.',
    responseTime: '45–60 min emergency'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How quickly can a plumber arrive in an emergency?',
    answer: 'For active flooding, failed main shutoff valves, or major water heater ruptures, our dispatchers prioritize emergency calls across Phoenix, Scottsdale, Tempe, and Mesa with typical arrival windows between 30 and 60 minutes. We guide you through main shutoff procedures over the phone while our technician is in transit.'
  },
  {
    question: 'Why is Phoenix water so damaging to water heaters and plumbing fixtures?',
    answer: 'The Phoenix metropolitan area draws water from the Salt and Verde rivers and Central Arizona Project (CAP), which carries extremely high mineral hardness (typically 15–25+ grains per gallon). Under heat, calcium and magnesium precipitate out of solution, forming thick rock-like scale inside water heater tanks and restricting valves.'
  },
  {
    question: 'Do you charge a diagnostic fee?',
    answer: 'We provide clear, upfront diagnostic quotes. A technician thoroughly evaluates the plumbing issue, pinpoints the root cause, and provides a guaranteed written estimate with transparent repair options before any mechanical work begins.'
  },
  {
    question: 'How do I know if I have a subterranean slab leak?',
    answer: 'Common warning signs in Arizona homes include a spinning water meter when no fixtures are running, warm or damp spots under tile or hardwood flooring, the sound of water running behind walls, sudden unexplained spikes in your water bill, or decreased hot water pressure.'
  },
  {
    question: 'Are your technicians paid on commission?',
    answer: 'No. Unlike private-equity-backed plumbing conglomerates, DesertFlow technicians are licensed, salaried craftsmen with zero commission incentives. We never invent unnecessary repairs or pressure you into premature equipment replacement.'
  }
];
