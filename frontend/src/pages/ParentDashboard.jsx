import React from 'react';
import { motion } from 'framer-motion';

const ParentDashboard = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  return (
    <motion.div 
      className="container mx-auto p-4 md:p-8 min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
    >
      <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-4xl text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-indigo-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Parent Dashboard
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Welcome, Parent! Here you can view your child's progress, assessment results, and career roadmap insights.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-shadow">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3">Student's Progress</h2>
            <p className="text-gray-400">Track assessment completions and roadmap milestones.</p>
            {/* Placeholder for link/button */}
            <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              View Progress Details
            </button>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-shadow">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3">Resources for Parents</h2>
            <p className="text-gray-400">Find helpful articles and guides to support your child's career journey.</p>
            {/* Placeholder for link/button */}
            <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Explore Resources
            </button>
          </div>
        </div>
        {/* More dashboard widgets can be added here */}
      </div>
    </motion.div>
  );
};

export default ParentDashboard;
