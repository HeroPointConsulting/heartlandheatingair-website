// Services Data for Heartland Heating + Air
// This file contains all service information for dynamic loading

export const servicesData = {
  'ac-repair': {
    id: 'ac-repair',
    title: 'AC Repair & Replacement',
    shortTitle: 'AC Repair',
    description: 'Professional AC repair and replacement in Indianapolis. Fast, reliable service for all air conditioning systems. Available 24/7 for emergencies!',
    heroTitle: 'Expert AC Repair & Replacement',
    heroSubtitle: 'Fast, reliable air conditioning service when you need it most',
    icon: 'fas fa-snowflake',
    color: '#dc2626',

    services: [
      'Emergency AC repair 24/7',
      'AC system diagnostics',
      'Refrigerant leak detection & repair',
      'Compressor replacement',
      'Evaporator coil repair',
      'Condenser unit service',
      'Thermostat installation & repair',
      'AC system replacement',
      'Ductwork inspection & repair',
      'Air filter replacement'
    ],

    benefits: [
      {
        icon: 'fas fa-clock',
        title: '24/7 Emergency Service',
        description: 'Available around the clock for urgent AC repairs'
      },
      {
        icon: 'fas fa-tools',
        title: 'Expert Technicians',
        description: 'NATE-certified professionals with years of experience'
      },
      {
        icon: 'fas fa-dollar-sign',
        title: 'Transparent Pricing',
        description: 'No hidden fees, upfront quotes before any work'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Warranty Protection',
        description: 'All repairs backed by our comprehensive warranty'
      }
    ],

    pricing: {
      diagnostic: '$89',
      repair: '$150-$500',
      replacement: '$3,500-$8,000',
      note: 'Prices vary based on system size and complexity'
    },

    areas: ['Indianapolis', 'Carmel', 'Fishers', 'Noblesville', 'Westfield', 'Zionsville', 'Greenwood', 'Avon']
  },

  'furnace-installation': {
    id: 'furnace-installation',
    title: 'Furnace Installation & Repair',
    shortTitle: 'Furnace Installation',
    description: 'Professional furnace installation and repair services. American-made equipment, expert installation, and reliable heating solutions.',
    heroTitle: 'Expert Furnace Installation & Repair',
    heroSubtitle: 'American-made heating systems installed by certified professionals',
    icon: 'fas fa-fire',
    color: '#b91c1c',

    services: [
      'New furnace installation',
      'Furnace repair & maintenance',
      'Gas furnace service',
      'Electric furnace installation',
      'Heat pump installation',
      'Ductwork design & installation',
      'Thermostat installation',
      'Emergency furnace repair',
      'Furnace replacement',
      'Heating system upgrades'
    ],

    benefits: [
      {
        icon: 'fas fa-flag-usa',
        title: 'American-Made Equipment',
        description: 'Premium brands like Carrier, Trane, and Lennox'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certified Installation',
        description: 'NATE-certified technicians ensure proper installation'
      },
      {
        icon: 'fas fa-leaf',
        title: 'Energy Efficient',
        description: 'High-efficiency systems to reduce energy costs'
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Same-Day Service',
        description: 'Quick installation and repair when you need it'
      }
    ],

    pricing: {
      diagnostic: '$89',
      repair: '$200-$800',
      installation: '$4,000-$12,000',
      note: 'Prices depend on system size and efficiency rating'
    },

    areas: ['Indianapolis', 'Carmel', 'Fishers', 'Noblesville', 'Westfield', 'Zionsville', 'Greenwood', 'Avon']
  },

  'emergency-service': {
    id: 'emergency-service',
    title: '24/7 Emergency HVAC Service',
    shortTitle: 'Emergency Service',
    description: '24/7 emergency HVAC repair and service. Available anytime, day or night, for urgent heating and cooling emergencies.',
    heroTitle: '24/7 Emergency HVAC Service',
    heroSubtitle: 'Available anytime, day or night, for urgent heating and cooling emergencies',
    icon: 'fas fa-exclamation-triangle',
    color: '#dc2626',

    services: [
      '24/7 emergency response',
      'No-heat emergencies',
      'AC failure in hot weather',
      'Frozen pipes & heating issues',
      'Gas leak detection',
      'Electrical HVAC problems',
      'Thermostat failures',
      'Blower motor issues',
      'Refrigerant emergencies',
      'System shutdowns'
    ],

    benefits: [
      {
        icon: 'fas fa-phone',
        title: 'Immediate Response',
        description: 'Fast response times, typically within 2 hours'
      },
      {
        icon: 'fas fa-user-tie',
        title: 'Expert Technicians',
        description: 'Experienced professionals available 24/7'
      },
      {
        icon: 'fas fa-truck',
        title: 'Fully Equipped',
        description: 'Service trucks stocked with common parts'
      },
      {
        icon: 'fas fa-heart',
        title: 'Peace of Mind',
        description: 'Reliable emergency service when you need it most'
      }
    ],

    pricing: {
      emergency: '$150',
      afterHours: '+$50',
      parts: 'At cost',
      note: 'Emergency service fee includes diagnostic and basic repair'
    },

    areas: ['Indianapolis', 'Carmel', 'Fishers', 'Noblesville', 'Westfield', 'Zionsville', 'Greenwood', 'Avon']
  },

  'commercial-hvac': {
    id: 'commercial-hvac',
    title: 'Commercial HVAC Services',
    shortTitle: 'Commercial HVAC',
    description: 'Complete commercial HVAC solutions for businesses, offices, and industrial facilities. Installation, maintenance, and repair services.',
    heroTitle: 'Commercial HVAC Solutions',
    heroSubtitle: 'Complete heating and cooling solutions for businesses and facilities',
    icon: 'fas fa-building',
    color: '#1e3c72',

    services: [
      'Commercial AC installation',
      'Industrial heating systems',
      'HVAC system design',
      'Preventive maintenance',
      'Energy efficiency audits',
      'Building automation',
      'Ductwork installation',
      'Roof-top unit service',
      'Chiller maintenance',
      'Air quality systems'
    ],

    benefits: [
      {
        icon: 'fas fa-chart-line',
        title: 'Energy Efficiency',
        description: 'Reduce operating costs with efficient systems'
      },
      {
        icon: 'fas fa-calendar-alt',
        title: 'Preventive Maintenance',
        description: 'Scheduled maintenance to prevent breakdowns'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Custom Solutions',
        description: 'Tailored HVAC systems for your business needs'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Business Focus',
        description: 'Minimize downtime and maximize productivity'
      }
    ],

    pricing: {
      consultation: 'Free',
      maintenance: 'Custom',
      installation: 'Custom',
      note: 'Commercial pricing varies based on system size and requirements'
    },

    areas: ['Indianapolis Metro', 'Central Indiana', 'Multi-state coverage available']
  },

  'indoor-air-quality': {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality Solutions',
    shortTitle: 'Air Quality',
    description: 'Improve your indoor air quality with professional air purification, filtration, and ventilation systems.',
    heroTitle: 'Indoor Air Quality Solutions',
    heroSubtitle: 'Breathe cleaner, healthier air with professional air quality systems',
    icon: 'fas fa-wind',
    color: '#059669',

    services: [
      'Air purification systems',
      'HEPA filtration',
      'UV germicidal lights',
      'Humidity control',
      'Ventilation systems',
      'Air quality testing',
      'Duct cleaning',
      'Allergen reduction',
      'Odor elimination',
      'Mold prevention'
    ],

    benefits: [
      {
        icon: 'fas fa-lungs',
        title: 'Healthier Air',
        description: 'Reduce allergens, pollutants, and airborne particles'
      },
      {
        icon: 'fas fa-home',
        title: 'Comfortable Environment',
        description: 'Optimal humidity and temperature control'
      },
      {
        icon: 'fas fa-shield-virus',
        title: 'Germ Protection',
        description: 'UV lights kill bacteria and viruses'
      },
      {
        icon: 'fas fa-smile',
        title: 'Better Breathing',
        description: 'Especially beneficial for allergy and asthma sufferers'
      }
    ],

    pricing: {
      consultation: 'Free',
      airPurifier: '$500-$2,500',
      ductCleaning: '$300-$800',
      note: 'Pricing varies based on home size and system requirements'
    },

    areas: ['Indianapolis', 'Carmel', 'Fishers', 'Noblesville', 'Westfield', 'Zionsville', 'Greenwood', 'Avon']
  },

  'maintenance-plans': {
    id: 'maintenance-plans',
    title: 'HVAC Maintenance Plans',
    shortTitle: 'Maintenance Plans',
    description: 'Comprehensive HVAC maintenance plans to keep your system running efficiently and prevent costly breakdowns.',
    heroTitle: 'HVAC Maintenance Plans',
    heroSubtitle: 'Keep your system running efficiently with our comprehensive maintenance plans',
    icon: 'fas fa-clipboard-check',
    color: '#7c3aed',

    services: [
      'Bi-annual system inspections',
      'Filter replacement',
      'Coil cleaning',
      'Thermostat calibration',
      'Electrical component testing',
      'Refrigerant level checks',
      'Ductwork inspection',
      'Performance optimization',
      'Priority service scheduling',
      'Discount on repairs'
    ],

    benefits: [
      {
        icon: 'fas fa-piggy-bank',
        title: 'Save Money',
        description: 'Prevent costly breakdowns and extend system life'
      },
      {
        icon: 'fas fa-star',
        title: 'Priority Service',
        description: 'Jump to the front of the line for repairs'
      },
      {
        icon: 'fas fa-percentage',
        title: 'Repair Discounts',
        description: '10% off all repairs for plan members'
      },
      {
        icon: 'fas fa-clock',
        title: 'Peace of Mind',
        description: 'Regular maintenance ensures reliable operation'
      }
    ],

    pricing: {
      basic: '$199/year',
      premium: '$299/year',
      commercial: 'Custom',
      note: 'Plans include bi-annual maintenance visits'
    },

    areas: ['Indianapolis', 'Carmel', 'Fishers', 'Noblesville', 'Westfield', 'Zionsville', 'Greenwood', 'Avon']
  }
};

// Helper function to get service by slug
export function getServiceBySlug(slug) {
  return servicesData[slug] || null;
}

// Helper function to get all services
export function getAllServices() {
  return Object.values(servicesData);
}

// Helper function to get service slugs
export function getServiceSlugs() {
  return Object.keys(servicesData);
} 