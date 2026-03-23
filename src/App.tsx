/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  HeartPulse, 
  Star,
  ChevronRight,
  Menu,
  X,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
              Ciriaco S. Tirol Hospital
            </span>
            <span className="font-bold text-xl tracking-tight text-slate-900 sm:hidden">
              CST Hospital
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Overview</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            <a 
              href="tel:0362883041" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Emergency: (036) 288 3041
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
        >
          <a href="#overview" className="block text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Overview</a>
          <a href="#services" className="block text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#reviews" className="block text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#contact" className="block text-lg font-medium text-slate-900" onClick={() => setIsOpen(false)}>Contact</a>
          <a 
            href="tel:0362883041" 
            className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Emergency Call
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted Healthcare in Boracay
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Compassionate Care in the <span className="text-blue-600">Heart of Boracay</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Ciriaco S. Tirol Hospital is dedicated to providing high-quality medical services to the local community and tourists alike. From emergency care to specialized treatments, we are here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                Find Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:0362883041" 
                className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (036) 288 3041
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/doc${i}/100/100`} 
                      alt="Doctor" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current opacity-50" />
                  <span className="ml-2 font-bold text-slate-900">4.3 Rating</span>
                </div>
                <p className="text-slate-500">Trusted by thousands of patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-200/50">
              <img 
                src="https://picsum.photos/seed/hospital-boracay/800/1000" 
                alt="Hospital Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="text-green-600 w-5 h-5" />
                </div>
                <span className="font-bold text-slate-900">24/7 Emergency</span>
              </div>
              <p className="text-xs text-slate-500">Our emergency department is always open to serve you in times of need.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Emergency Care",
      desc: "Rapid response and treatment for acute medical conditions and accidents.",
      icon: <HeartPulse className="w-6 h-6" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "General Medicine",
      desc: "Comprehensive diagnosis and treatment for various health conditions.",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Patient Care",
      desc: "Dedicated nursing and support staff ensuring comfort during recovery.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Medical Services</h2>
          <p className="text-slate-600">We offer a wide range of healthcare services designed to meet the unique needs of the Boracay community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Reynalyn Varela",
      text: "I had a medication allergy, and at first we were scared... But all the staff, nurses and ER doctors were so kind, fast moving of patients.",
      date: "4 months ago"
    },
    {
      name: "Karol Mark Lachica",
      text: "I have seen the transformation of this Hospital from its humble beginnings... striving our best to serve the people of Boracay and the tourists.",
      date: "2 years ago"
    },
    {
      name: "Wally Francisco",
      text: "My son had an accident where he slipped and subsequently dislocated his elbow... Right away, the nurses worked on my son.",
      date: "9 months ago"
    }
  ];

  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
            <p className="text-slate-600">Real feedback from the people we serve in Boracay.</p>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <Star className="w-5 h-5 text-amber-500 fill-current" />
            <span className="font-bold text-blue-700">4.3 / 5.0</span>
            <span className="text-blue-400 text-sm">on Google Maps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-amber-500 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-400">XW6H+83M, Tirol Road, Malay, Aklan<br />Boracay Island, Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-slate-400">(036) 288 3041</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Operating Hours</h4>
                  <p className="text-slate-400">Emergency Services: 24/7 Available</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-sm text-slate-400 mb-4">Are you a business owner? Claim this business on Google Maps to manage your profile.</p>
              <button className="text-blue-400 font-bold text-sm flex items-center gap-2 hover:underline">
                Claim this business <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-4 h-[400px] shadow-2xl overflow-hidden">
            {/* Placeholder for Map */}
            <div className="w-full h-full bg-slate-100 rounded-[1.5rem] flex flex-col items-center justify-center text-slate-400 p-8 text-center">
              <MapPin className="w-12 h-12 mb-4 opacity-20" />
              <p className="font-medium text-slate-600 mb-2">Tirol Road, Boracay</p>
              <p className="text-sm">Interactive map would be displayed here.</p>
              <a 
                href="https://www.google.com/maps/search/Ciriaco+S.+Tirol+Hospital+-+BORACAY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="text-blue-600 w-5 h-5" />
            <span className="font-bold text-slate-900">Ciriaco S. Tirol Hospital</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CST Hospital Boracay. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <section id="overview" className="py-24 border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 relative group">
                  <img 
                    src="https://picsum.photos/seed/boracay-hospital-2/1200/800" 
                    alt="Hospital Facility" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  A Legacy of Care and Continuous Transformation
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  From our humble beginnings, Ciriaco S. Tirol Hospital has grown alongside the Boracay community. We have seen significant transformations over the years, always striving to improve our facilities and medical expertise.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Our mission is simple: to provide reliable, efficient, and compassionate healthcare services to every patient who walks through our doors, whether they are a lifelong resident or a first-time visitor to our beautiful island.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="text-2xl font-bold text-blue-700 mb-1">24/7</div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-wider">Emergency Response</div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
                    <div className="text-2xl font-bold text-teal-700 mb-1">4.3★</div>
                    <div className="text-xs font-bold text-teal-500 uppercase tracking-wider">Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
