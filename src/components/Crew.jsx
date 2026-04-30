import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Crew = () => {
  const crewMembers = [
    { name: "Aritraa Chakraborty", role: "Lead Engineer" },
    { name: "Joy Mukherjee", role: "Lead Engineer" },
    { name: "Ankit Kabiratna", role: "Frontend Developer" },
    { name: "Mainak Saha", role: "Frontend Developer" },
    { name: "Abir Banik", role: "Lead Technical Associate" }
  ];

  return (
    <motion.div 
      key="crew"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-10"
    >
      <h2 className="text-4xl font-bold mb-12 border-l-4 border-cyan-500 pl-4 uppercase font-sans">The Crew</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {crewMembers.map((member, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10, scale: 1.05 }} 
            className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/50 cursor-pointer transition-colors shadow-lg group"
            onClick={() => alert(`Redirecting to ${member.name}'s Portfolio...`)}
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
              <Users className="text-cyan-500 group-hover:text-slate-950" size={24} />
            </div>
            <h3 className="font-bold text-lg leading-tight mb-2 font-sans">{member.name}</h3>
            <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Crew;

