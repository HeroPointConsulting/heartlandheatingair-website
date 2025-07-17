// Careers Data for Heartland Heating + Air
// This file contains all career information for dynamic loading

export const careersData = {
  benefits: [
    {
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family',
      icon: 'fas fa-heart',
    },
    {
      title: 'Retirement Plan',
      description: '401(k) with company matching contributions to secure your future',
      icon: 'fas fa-piggy-bank',
    },
    {
      title: 'Paid Time Off',
      description: 'Generous vacation, sick leave, and holiday pay for work-life balance',
      icon: 'fas fa-calendar-alt',
    },
    {
      title: 'Professional Development',
      description: 'NATE certification training and continuing education opportunities',
      icon: 'fas fa-graduation-cap',
    },
    {
      title: 'Team Environment',
      description: 'Supportive, collaborative workplace with experienced HVAC professionals',
      icon: 'fas fa-users',
    },
    {
      title: 'Competitive Pay',
      description: 'Above-market compensation with performance bonuses and incentives',
      icon: 'fas fa-dollar-sign',
    },
  ],
  jobOpenings: [
    {
      id: 1,
      title: 'HVAC Service Technician',
      type: 'Full-time',
      department: 'Service',
      description: 'Join our team as an HVAC Service Technician and provide exceptional heating and cooling services to our valued customers.',
      requirements: [
        'EPA certification required',
        '2+ years of HVAC service experience',
        'Valid driver\'s license with clean record',
        'Strong troubleshooting skills',
        'Excellent customer service abilities',
        'Ability to work independently',
      ],
      responsibilities: [
        'Diagnose and repair HVAC systems',
        'Perform preventive maintenance',
        'Install new equipment and components',
        'Provide excellent customer service',
        'Complete service reports and documentation',
        'Maintain company vehicle and tools',
      ],
      salary: '$45,000 - $65,000',
      location: 'Indianapolis Metro Area',
    },
    {
      id: 2,
      title: 'HVAC Installer',
      type: 'Full-time',
      department: 'Installation',
      description: 'We are seeking experienced HVAC Installers to join our installation team and deliver quality heating and cooling systems.',
      requirements: [
        '3+ years of HVAC installation experience',
        'Knowledge of residential and light commercial systems',
        'Ability to read blueprints and schematics',
        'Strong mechanical aptitude',
        'Team player with positive attitude',
        'Valid driver\'s license',
      ],
      responsibilities: [
        'Install new HVAC systems and equipment',
        'Perform ductwork installation and modifications',
        'Ensure proper system operation and efficiency',
        'Maintain clean and organized work areas',
        'Follow safety protocols and procedures',
        'Assist with equipment delivery and setup',
      ],
      salary: '$50,000 - $70,000',
      location: 'Indianapolis Metro Area',
    },
    {
      id: 3,
      title: 'Customer Service Representative',
      type: 'Full-time',
      department: 'Administrative',
      description: 'Join our customer service team and be the first point of contact for our valued customers seeking HVAC services.',
      requirements: [
        '2+ years of customer service experience',
        'Excellent communication skills',
        'Proficiency with computer systems',
        'Ability to handle multiple tasks',
        'HVAC industry knowledge preferred',
        'High school diploma or equivalent',
      ],
      responsibilities: [
        'Answer customer calls and inquiries',
        'Schedule service appointments',
        'Process service requests and orders',
        'Provide product and service information',
        'Handle customer complaints professionally',
        'Maintain customer records and files',
      ],
      salary: '$35,000 - $45,000',
      location: 'Indianapolis Office',
    },
    {
      id: 4,
      title: 'Commercial HVAC Technician',
      type: 'Full-time',
      department: 'Commercial',
      description: 'Specialized role for experienced technicians to handle commercial and industrial HVAC systems.',
      requirements: [
        '5+ years of commercial HVAC experience',
        'Universal EPA certification',
        'Experience with large commercial systems',
        'Knowledge of building automation systems',
        'Strong problem-solving skills',
        'Ability to work on-call rotation',
      ],
      responsibilities: [
        'Service and maintain commercial HVAC systems',
        'Troubleshoot complex system issues',
        'Perform preventive maintenance programs',
        'Work with building automation systems',
        'Coordinate with facility managers',
        'Provide technical support and training',
      ],
      salary: '$60,000 - $80,000',
      location: 'Central Indiana',
    },
    {
      id: 5,
      title: 'HVAC Sales Representative',
      type: 'Full-time',
      department: 'Sales',
      description: 'Join our sales team and help customers find the perfect HVAC solutions for their homes and businesses.',
      requirements: [
        '2+ years of sales experience',
        'HVAC industry knowledge preferred',
        'Strong presentation and communication skills',
        'Self-motivated and goal-oriented',
        'Valid driver\'s license',
        'High school diploma or equivalent',
      ],
      responsibilities: [
        'Generate new sales leads',
        'Conduct in-home consultations',
        'Present HVAC solutions and proposals',
        'Build and maintain customer relationships',
        'Meet and exceed sales targets',
        'Stay current with industry trends',
      ],
      salary: '$40,000 - $60,000 + Commission',
      location: 'Indianapolis Metro Area',
    },
  ],
  applicationProcess: [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our online application form with your resume and cover letter.',
      color: 'bg-heartland-red',
    },
    {
      step: 2,
      title: 'Phone Screening',
      description: 'Brief phone conversation to discuss your background and interest in the position.',
      color: 'bg-heartland-blue',
    },
    {
      step: 3,
      title: 'In-Person Interview',
      description: 'Meet with our team to discuss your experience and tour our facility.',
      color: 'bg-heartland-red',
    },
    {
      step: 4,
      title: 'Job Offer',
      description: 'If selected, we\'ll extend an offer and welcome you to the Heartland Heating + Air family.',
      color: 'bg-heartland-blue',
    },
  ],
};

// Utility functions
export function getJobBySlug(slug) {
  return careersData.jobOpenings.find(job => slugify(job.title) === slug);
}

export function getAllJobs() {
  return careersData.jobOpenings;
}

export function getJobSlugs() {
  return careersData.jobOpenings.map(job => slugify(job.title));
}

// Utility to generate slug from a job title
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
} 