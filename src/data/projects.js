import fundeaseImg from '../assets/images/fundease.png'
import waventureImg from '../assets/images/waventure.png'
import tatakImg from '../assets/images/tatak.png'
import bangImg from '../assets/images/bang.png'
import suroyImg from '../assets/images/suroy.png'
import snapifyImg from '../assets/images/snapify.png'
import ebpcImg from '../assets/images/ebpc.png'
import cwsiImg from '../assets/images/cwsi.png'

export const projects = [
  {
    id: 1,
    title: 'FundEase',
    description: 'A finance management web application for handling loan applications, tracking user contributions, and managing financial transactions efficiently.',
    tags: ['Vue.js', 'Express.js', 'MySQL', 'Tailwind'],
    image: fundeaseImg,
    githubUrl: 'https://github.com/jungil13/fundease',
    liveUrl: null,
    icon: 'banknote' // finance
  },
  {
    id: 2,
    title: 'Waventure',
    description: 'An island-hopping booking system that allows users to reserve boats, select destinations, and manage travel bookings in a streamlined interface.',
    tags: ['Vue.js', 'Express.js', 'MySQL', 'Maps'],
    image: waventureImg,
    githubUrl: 'https://github.com/jungil13/waventure',
    liveUrl: null,
    icon: 'ship' // travel
  },
  {
    id: 3,
    title: 'Tatak Decalidad',
    description: 'An e-commerce platform for a local clothing brand, featuring product listings, cart functionality, and a smooth online shopping experience.',
    tags: ['Vue.js', 'Express.js', 'MySQL', 'Tailwind'],
    image: tatakImg,
    githubUrl: 'https://github.com/jungil13/tatakdecalidad',
    liveUrl: null,
    icon: 'shopping-bag' // ecommerce
  },
  {
    id: 4,
    title: 'E-Clearance',
    description: 'A barangay management system used to generate and manage official documents such as business, sanitary, and barangay clearances.',
    tags: ['Vue.js', 'Express.js', 'MySQL'],
    image: bangImg,
    githubUrl: 'https://github.com/jungil13/e-clearance',
    liveUrl: null,
    icon: 'file-text' // documents
  },
  {
    id: 5,
    title: 'Suroy Ta',
    description: 'A tourism web platform that helps users explore popular destinations in Cebu, view locations on maps, and share travel experiences through posts.',
    tags: ['Vue.js', 'Express.js', 'MySQL', 'CRUD'],
    image: suroyImg,
    githubUrl: 'https://github.com/jungil13/SuroyTa-Capstone',
    liveUrl: null,
    icon: 'map' // tourism
  },
  {
    id: 6,
    title: 'Snapify',
    description: 'A photobooth web application with real-time camera capture, filters, countdown timers, and downloadable photo strip outputs.',
    tags: ['Vue.js', 'Express.js', 'MySQL', 'Tailwind'],
    image: snapifyImg,
    githubUrl: 'https://github.com/jungil13/snapifyv2', 
    liveUrl: 'https://snapifyv2.vercel.app/',
    icon: 'camera' // photobooth
  },
  {
    id: 7,
    title: 'Electric Bill Payment',
    description: 'A modern Vue.js application for calculating and tracking apartment electricity bills, with configurable rates and local storage-based billing history.',
    tags: ['Vue.js', 'Tailwind', 'PWA'],
    image: ebpcImg,
    githubUrl: 'https://github.com/jungil13/EBPC',
    liveUrl: 'https://ebpc.vercel.app/',
    icon: 'zap' // electricity
  },
  {
    id: 8,
    title: 'Cordova Water System',
    description: 'A water service management platform focused on delivering clean, safe, and affordable water to households, with an emphasis on sustainability and monitoring.',
    tags: ['Vue.js', 'Tailwind', 'PWA'],
    image: cwsiImg,
    githubUrl: 'https://github.com/jungil13/cordovasystem',
    liveUrl: 'https://cwsi-c4fi.vercel.app/',
    icon: 'droplet' // water
  },
]