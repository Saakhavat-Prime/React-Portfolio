export const siteConfig = {
  brand: 'S-K',
  name: 'Sakhavat',
  title: 'Product Designer & Developer',
  tagline:
    'I design and build digital products that are beautiful, functional, and user-centered. Let\'s create something amazing together.',
  email: 'hello@janicequinn.com',
  cvUrl: '#',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#services' },
  { label: 'Resume', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#portfolio' },
]

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
]

export const services = [
  {
    initials: 'UI',
    title: 'UX/UI Design',
    description:
      'Crafting intuitive interfaces with user research, wireframes, and pixel-perfect visual design.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    initials: 'WD',
    title: 'Web Design',
    description:
      'Building responsive, modern websites that captivate audiences and drive conversions.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    initials: 'UR',
    title: 'UX Research',
    description:
      'Understanding user behavior through research to inform better product decisions.',
    color: 'bg-green-100 text-green-600',
  },
]

export const stats = [
  { value: '142+', label: 'Projects Completed' },
  { value: '6+', label: 'Years of Experience' },
  { value: '11+', label: 'Awards Won' },
  { value: '112+', label: 'Happy Customers' },
]

export const aboutTabs = [
  {
    id: 'about',
    label: 'About',
    content:
      'I\'m Janice Quinn, a passionate product designer with over 6 years of experience creating digital experiences that users love. I specialize in UX/UI design, web design, and user research. My approach combines creativity with data-driven insights to deliver products that not only look great but also perform exceptionally.',
  },
  {
    id: 'experience',
    label: 'Experience',
    content:
      'Senior Product Designer at DesignStudio (2021–Present) — Led design for 20+ client projects. UI/UX Designer at CreativeAgency (2019–2021) — Designed web and mobile interfaces for startups. Freelance Designer (2018–2019) — Built brand identities and marketing websites.',
  },
  {
    id: 'education',
    label: 'Education',
    content:
      'B.A. in Graphic Design — Rhode Island School of Design (2014–2018). UX Design Certification — Google (2020). Advanced Figma Workshop — Design+Research (2021).',
  },
  {
    id: 'skills',
    label: 'Skills',
    content:
      'Figma, Adobe XD, Sketch, Photoshop, Illustrator, HTML/CSS, React, Tailwind CSS, User Research, Wireframing, Prototyping, Design Systems, Accessibility.',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Finance Dashboard',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    href: '#',
    size: 'small',
  },
  {
    id: 2,
    title: 'E-Commerce App',
    category: 'Mobile App',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    href: '#',
    size: 'small',
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Branding',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    href: '#',
    size: 'small',
  },
  {
    id: 4,
    title: 'SaaS Platform',
    category: 'Product Design',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop',
    href: '#',
    size: 'large',
  },
  {
    id: 5,
    title: 'Travel Website',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a4d?w=800&h=500&fit=crop',
    href: '#',
    size: 'large',
  },
]

export const trustedBrands = [
  { name: 'PayPal', color: 'bg-blue-500' },
  { name: 'Stripe', color: 'bg-purple-500' },
  { name: 'Shopify', color: 'bg-green-500' },
  { name: 'Slack', color: 'bg-pink-500' },
  { name: 'Notion', color: 'bg-gray-800' },
]

export const testimonial = {
  quote:
    'Janice delivered exceptional work on our product redesign. Her attention to detail and user-centered approach transformed our platform. The results exceeded our expectations — user engagement increased by 40% within the first month.',
  name: 'James Wilson',
  role: 'CEO of ABC Corp',
  image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
}

export const pricingConfig = {
  basePrice: 499,
  projectTypes: [
    { id: 'product-design', label: 'Product Design', price: 200 },
    { id: 'web-development', label: 'Web Development', price: 300 },
    { id: 'mobile-app', label: 'Mobile App', price: 400 },
    { id: 'branding', label: 'Branding', price: 150 },
  ],
  pagePrice: 15,
  features: [
    { id: 'speed', label: 'Speed Optimization', price: 50 },
    { id: 'responsive', label: 'Responsive Design', price: 40 },
    { id: 'seo', label: 'SEO Optimization', price: 60 },
    { id: 'cms', label: 'Headless CMS', price: 80 },
    { id: 'analytics', label: 'Analytics Integration', price: 45 },
  ],
  included: [
    'Source files included',
    'Unlimited revisions',
    '30 days support',
    'Responsive design',
  ],
}

export const images = {
  hero:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
  about:
    'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=700&fit=crop',
}
