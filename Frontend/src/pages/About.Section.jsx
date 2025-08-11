
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Award, Users, Clock, CheckCircle, Mail, Phone, MapPin, ChevronDown, ChevronUp, Building, Truck, Star } from "lucide-react";

const serviceCities = [
  // Rajasthan
  "Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali",
  "Bharatpur", "Ganganagar", "Churu", "Jhunjhunu", "Tonk", "Bundi", "Sawai Madhopur", "Hanumangarh",
  // Delhi
  "New Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi", "Central Delhi",
  // Haryana
  "Gurugram", "Faridabad", "Panipat", "Hisar", "Karnal", "Rohtak", "Ambala", "Yamunanagar",
  "Sirsa", "Jind", "Sonipat", "Palwal", "Rewari", "Kurukshetra",
  // Maharashtra
  "Mumbai", "Pune", "Nashik", "Aurangabad", "Nagpur", "Thane", "Solapur", "Kolhapur", "Sangli",
  "Satara", "Ahmednagar", "Akola", "Latur", "Dhule", "Jalgaon",
  // Punjab
  "Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali", "Bathinda", "Hoshiarpur",
  "Moga", "Pathankot", "Barnala", "Fazilka", "Kapurthala", "Malerkotla"
];

const displayedCities = serviceCities.slice(0, 23);
const hiddenCities = serviceCities.slice(23);

const StatCard = ({ icon: Icon, title, subtitle, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 text-center group"
  >
    <div className={`bg-${color}-100 p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`h-8 w-8 text-${color}-600`} />
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{subtitle}</p>
  </motion.div>
);

const ContactItem = ({ icon: Icon, title, description, bgColor, iconColor }) => (
  <div className="flex items-start gap-4 text-slate-700">
    <div className={`${bgColor} p-2 rounded-lg`}>
      <Icon className={`h-5 w-5 ${iconColor}`} />
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);

const CityCard = ({ city, index, isVisible = true }) => (
  <motion.div 
    key={city}
    initial={{ opacity: 0, y: 10 }} 
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ delay: index * 0.03, duration: 0.3 }} 
    className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 px-4 py-3 rounded-xl text-sm border border-blue-200 text-slate-700 shadow-sm transition-all duration-300 hover:shadow-md text-center font-medium hover:scale-105"
  >
    {city}
  </motion.div>
);

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [showAllCities, setShowAllCities] = useState(false);

  const toggleCities = () => {
    setShowAllCities(!showAllCities);
  };

  const companyStats = [
    { icon: Award, title: "18+ Years", subtitle: "Industry Experience", color: "blue", delay: 0.1 },
    { icon: Users, title: "1000+", subtitle: "Satisfied Clients", color: "green", delay: 0.2 },
    { icon: Truck, title: "Fast Delivery", subtitle: "Pan India Network", color: "purple", delay: 0.3 },
    { icon: CheckCircle, title: "ISO 9001", subtitle: "Quality Certified", color: "indigo", delay: 0.4 }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      description: "CHOUDHRY DHRAM KANTA, GOVINDGARH ROAD, RAMGARH, ALWAR (RAJ.)",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Contact",
      description: "+91 870 827 5179",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "info@sawariyatraders.in",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 via-blue-50 to-white min-h-screen relative overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-200 opacity-15 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-indigo-300 opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-slate-400 opacity-10 blur-3xl"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 rounded-full" 
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="text-4xl md:text-6xl font-bold text-center mb-6 text-slate-800 tracking-tight"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SAWARIYA TRADERS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-xl text-slate-600 max-w-3xl text-center leading-relaxed"
          >
            Your trusted partner for premium steel products across North and West India
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20" ref={ref}>
          {/* Enhanced Image Side */}
          <motion.div 
            style={{ y, opacity }} 
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white/80 backdrop-blur-sm">
              <img
                src="https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752729921036"
                alt="Sawariya Traders Steel Products"
                className="w-full h-[500px] object-cover object-center"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Enhanced Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-200"
            >
              <div className="bg-blue-100 p-3 rounded-xl">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Quality Assured</h4>
                <p className="text-slate-600 text-sm">ISO 9001:2015 Certified</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="absolute -top-8 right-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-200"
            >
              <div className="bg-green-100 p-3 rounded-xl">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">18+ Years</h4>
                <p className="text-slate-600 text-sm">Industry Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center gap-3">
                <Building className="h-8 w-8 text-blue-600" />
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-800">SAWARIYA TRADERS</span> is a leading steel supplier based in Rajasthan, serving clients across Rajasthan, Delhi, Haryana, Maharashtra, and Punjab. With over 18 years of experience in the steel industry, we have built a reputation for reliability, quality, and exceptional customer service.
                </p>
                <p>
                  Our comprehensive product range includes TMT bars, MS pipes, steel sheets, angles, channels, and structural steel—all sourced from top manufacturers and delivered with a commitment to excellence. We take pride in being the trusted choice for builders, contractors, and industries across North and West India.
                </p>
                <p>
                  We are ISO 9001:2015 certified, ensuring that every order meets the highest quality standards. Whether your project is large-scale industrial or small residential, we guarantee timely delivery, competitive pricing, and personalized service tailored to your specific needs.
                </p>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 space-y-6">
              <h3 className="font-bold text-xl text-slate-800 mb-4">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <ContactItem
                    key={index}
                    icon={contact.icon}
                    title={contact.title}
                    description={contact.description}
                    bgColor={contact.bgColor}
                    iconColor={contact.iconColor}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Company Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companyStats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              subtitle={stat.subtitle}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Enhanced Service Areas with Expandable Cities */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200"
        >
          <h3 className="font-bold text-3xl mb-8 text-slate-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            Our Service Network
          </h3>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            We proudly serve clients across multiple states with our extensive distribution network, ensuring timely delivery and quality service wherever you are.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {displayedCities.map((city, index) => (
              <CityCard key={city} city={city} index={index} />
            ))}
            
            {showAllCities && hiddenCities.map((city, index) => (
              <CityCard key={`hidden-${city}`} city={city} index={index} />
            ))}
            
            <motion.button 
              onClick={toggleCities}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl text-center flex items-center justify-center gap-2 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllCities ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Cities <ChevronDown className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
////////////////////

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Shield, Award, Users, Clock, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

// const serviceCities = [
//   // Rajasthan
//   "Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali",
//   // Delhi
//   "Delhi",
//   // Haryana
//   "Gurugram", "Faridabad", "Panipat", "Hisar", "Karnal", "Rohtak", "Ambala", "Yamunanagar",
// ];

// export default function AboutSection() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen relative overflow-hidden">
//       {/* Decorative Background */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
//         <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
//       </div>
//       <div className="container mx-auto px-4 md:px-8 relative z-10">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-12">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-20 h-1 bg-blue-600 mb-6" />
//           <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-900 tracking-tight">
//             About <span className="text-blue-600">SAWARIYA TRADERS</span>
//           </motion.h1>
//           <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-blue-700 max-w-2xl text-center">
//             Rajasthan's trusted partner for premium steel products since 1998
//           </motion.p>
//         </div>
//         {/* Main Card */}
//         <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
//           {/* Image Side */}
//           <motion.div style={{ y, opacity }} className="relative">
//             <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white/60 backdrop-blur-lg">
//               <img
//                 src="https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752729921036"
//                 alt="Sawariya Traders Facility"
//                 className="w-full h-96 object-cover object-center"
//                 loading="lazy"
//               />
//             </div>
//             {/* Floating Badge */}
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="absolute -bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-blue-100">
//               <Shield className="h-10 w-10 text-blue-600" />
//               <div>
//                 <h4 className="font-bold text-blue-800">Trusted Quality</h4>
//                 <p className="text-sm text-blue-600">Since 1998</p>
//               </div>
//             </motion.div>
//           </motion.div>
//           {/* Text Side */}
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//             <h2 className="text-2xl font-bold mb-6 text-blue-800">Who We Are</h2>
//             <div className="space-y-6 text-lg text-blue-700">
//               <p>
//                 <span className="font-semibold text-blue-900">SAWARIYA TRADERS</span> is a leading steel supplier based in Rajasthan, serving clients across Rajasthan, Delhi, Haryana, and beyond. With over 25 years of experience, we have built a reputation for reliability, quality, and customer satisfaction.
//               </p>
//               <p>
//                 Our product range includes TMT bars, MS pipes, steel sheets, angles, channels, and more—sourced from top manufacturers and delivered with a commitment to excellence. We are proud to be the trusted choice for builders, contractors, and industries in the region.
//               </p>
//               <p>
//                 We are ISO 9001:2015 certified, and our team ensures every order meets the highest standards. Whether your project is large or small, we guarantee timely delivery, competitive pricing, and personalized service.
//               </p>
//             </div>
//             {/* Address & Contact */}
//             <div className="mt-8 bg-blue-50 rounded-xl p-4 border border-blue-100 flex flex-col gap-2">
//               <div className="flex items-center gap-2 text-blue-800"><MapPin className="h-5 w-5" /> CHOUDHRY DHRAM KANTA, GOVINDGARH ROAD, RAMGARH, ALWAR (RAJ.)</div>
//               <div className="flex items-center gap-2 text-blue-800"><Phone className="h-5 w-5" /> +91 870 827 5179</div>
//               <div className="flex items-center gap-2 text-blue-800"><Mail className="h-5 w-5" /> info@sawariyatraders.in</div>
//             </div>
//           </motion.div>
//         </div>
//         {/* Achievements */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-20">
//           <div className="bg-white p-6 rounded-lg shadow-xl text-center border-t-4 border-blue-600">
//             <Award className="h-8 w-8 mx-auto text-blue-600 mb-2" />
//             <h3 className="text-xl font-bold text-blue-800">25+ Years</h3>
//             <p className="text-blue-600">Industry Experience</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-xl text-center border-t-4 border-blue-600">
//             <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
//             <h3 className="text-xl font-bold text-blue-800">1000+</h3>
//             <p className="text-blue-600">Happy Clients</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-xl text-center border-t-4 border-blue-600">
//             <Clock className="h-8 w-8 mx-auto text-blue-600 mb-2" />
//             <h3 className="text-xl font-bold text-blue-800">Fast Delivery</h3>
//             <p className="text-blue-600">Across North India</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-xl text-center border-t-4 border-blue-600">
//             <CheckCircle className="h-8 w-8 mx-auto text-blue-600 mb-2" />
//             <h3 className="text-xl font-bold text-blue-800">ISO 9001</h3>
//             <p className="text-blue-600">Quality Certified</p>
//           </div>
//         </div>
//         {/* Cities Served */}
//         <div className="mt-8">
//           <h3 className="font-bold text-xl mb-4 text-blue-800 flex items-center gap-2"><Shield className="h-5 w-5" /> We Serve</h3>
//           <div className="flex flex-wrap gap-2">
//             {serviceCities.map((city, index) => (
//               <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03, duration: 0.3 }} className="bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full text-sm border border-blue-200 text-blue-700 shadow-sm transition-colors">
//                 {city}
//               </motion.div>
//             ))}
//             <span className="bg-blue-100 px-3 py-1 rounded-full text-sm border border-blue-200 text-blue-700 shadow-sm">...and more</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
//  }
